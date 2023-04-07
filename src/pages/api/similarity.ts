// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { VectorDBQAChain } from "langchain/chains";
import { PineconeStore } from "langchain/vectorstores";
import { OpenAI } from "langchain/llms";
import { CallbackManager } from "langchain/callbacks";

const environment = process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT;
const indexName = process.env.NEXT_PUBLIC_PINECONE_INDEX;
const apiKey = process.env.NEXT_PUBLIC_PINECONE_API_KEY;
const openAiApiKey = process.env.NEXT_PUBLIC_CHAT_GPT_API_KEY;

type Data = {
  response?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let completion = '';
  const sendCompletion = async (token: string) => {
    completion += token;
    res.write(`${completion}`);
  };

  if (req.method === "GET") {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');


    const query = req.query.query as string;
    try {
      const response = await getDocs(query || "", sendCompletion);
      console.log("similarity api", response);
      res.write(response.text);
    } catch (error) {
      console.log("similarity api error", error);
      res.status(500).json({ error: "error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
  res.end();
}

async function getDocs(query: string, handleLLMNewToken: (text: string) => Promise<void>) {
  if (!environment || !indexName || !apiKey || !openAiApiKey) {
    throw new Error(
      "Pinecone environment, index, and API key must be set in environment variables"
    );
  }
  const client = new PineconeClient();
  await client.init({
    apiKey: apiKey,
    environment: environment,
  });
  const pineconeIndex = client.Index(indexName);

  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings({ openAIApiKey: openAiApiKey }),
    { pineconeIndex }
  );

  /* Search the vector DB independently with meta filters */
  const docs = await vectorStore.similaritySearch(query);
  console.log(docs);

  const model = new OpenAI({
    openAIApiKey: openAiApiKey,
    streaming: true,
    callbackManager: CallbackManager.fromHandlers({
      handleLLMNewToken,
    }),
  });
  const chain = VectorDBQAChain.fromLLM(model, vectorStore);

  const response = await chain.call({ query });
  console.log('[response]', response);
  return response;
}
