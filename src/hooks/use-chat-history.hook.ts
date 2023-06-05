import {useCallback, useState} from "react";
import {ChatHistory} from "@/types/ChatRequest";

export default function useChatHistory() {
  const [history, setHistory] = useState<ChatHistory>([]);
  const appendMessage = useCallback((message: string, type: string) => {
    setHistory((prev) => ([...prev, {content: message, type}]));
  }, [setHistory])

  return {history, appendMessage};
}
