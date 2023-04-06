import React, { useMemo } from 'react'
import ChatGPT from '@/services/chatGPT'

const useChatGPT = () => {
  const chatGPT = useMemo(() => ChatGPT.getInstance(), []);
  const [response, setResponse] = React.useState("");
  const sendQuery = (query: string) => {
    chatGPT
      .sendMessage(query, {
        onProgress: (response) => {
          setResponse(response.text);
        },
      })
      .then((response) => {
        setResponse(response.text);
      });
  };

  return { sendQuery, response };
};

export default useChatGPT;
