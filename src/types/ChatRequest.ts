export type ChatMessage = {
  content: string;
  type: string;
}

export type ChatHistory = ChatMessage[];

type ChatRequest = {
  history: ChatHistory[];
  question: string;
}

export default ChatRequest;
