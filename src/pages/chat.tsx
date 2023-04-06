import React from "react";
import TextInput from "@/components/TextInput";
import MessageBox from "@/components/MessageBox/MessageBox";
import useChatGPT from '@/hooks/use-chat-gpt'

const Chat: React.FC = () => {
  const { sendQuery, response } = useChatGPT();
  return (
    <div>
      <MessageBox sender={"GPT"} message={response} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget
          const inputElement = form.elements.namedItem('query-field') as HTMLInputElement;
          sendQuery(inputElement.value);
        }}
      >
        <TextInput id={"query-field"} />
        <button onClick={() => sendQuery} type={"submit"}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
