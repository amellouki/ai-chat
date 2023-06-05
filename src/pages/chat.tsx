import React from "react";
import MessageBox from "@/components/MessageBox";
import Scaffolding from "@/components/Scaffolding";
import QueryForm from "@/components/QueryForm";
import DebugDocs from "@/components/DebugDocs";
import UploadPDF from "@/components/UploadPDF";
import ThemeChanger from "@/components/ThemeChanger";
import ChatThread from "@/components/ChatThread";
import useChatHistory from "@/hooks/use-chat-history.hook";
import useConversation from "@/hooks/use-conversation.hook";

const Chat: React.FC = () => {
  const {history, appendMessage} = useChatHistory();
  const {completion, sendQuestion, resources} = useConversation((response) => {
    appendMessage(response, 'ai')
  });

  return (
    <Scaffolding>
      <ChatThread chatHistory={history} completion={completion}/>
      <QueryForm onSubmit={(question: string) => {
        appendMessage(question, "human");
        sendQuestion(history, question);
      }}/>
      {resources && <DebugDocs docs={resources}/>}
      <UploadPDF/>
      <ThemeChanger/>
    </Scaffolding>
  );
};

export default Chat;
