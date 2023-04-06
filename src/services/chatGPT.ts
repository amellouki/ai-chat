import { ChatGPTAPI, ChatMessage } from "chatgpt";
const apiKey = process.env.NEXT_PUBLIC_CHAT_GPT_API_KEY;

// a singleton class that can be used to get the chat gpt service
class ChatGPTServiceSingleton {
  private static instance: ChatGPTAPI;

  public static getInstance(): ChatGPTAPI {
    if (!apiKey) throw new Error("No API key provided");
    if (!ChatGPTServiceSingleton.instance) {
      ChatGPTServiceSingleton.instance = new ChatGPTAPI({
        apiKey: apiKey,
      });
    }
    return ChatGPTServiceSingleton.instance;
  }
}

export default ChatGPTServiceSingleton;
