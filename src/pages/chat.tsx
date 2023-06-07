import React from "react";
import Scaffolding from "@/components/Scaffolding";
import QueryForm from "@/components/QueryForm";
import DebugDocs from "@/components/DebugDocs";
import UploadPDF from "@/components/UploadPDF";
import ThemeChanger from "@/components/ThemeChanger";
import ChatThread from "@/components/ChatThread";
import useChatHistory from "@/hooks/use-chat-history.hook";
import useConversation from "@/hooks/use-conversation.hook";
import styles from "./styles.module.scss";

const Chat: React.FC = () => {
  const {history, appendMessage} = useChatHistory();
  const {completion, sendQuestion, resources} = useConversation((response) => {
    appendMessage(response, 'ai')
  });

  return (
    <Scaffolding className={styles.chat} contentWrapperClassName={styles.contentWrapper}>
      <ChatThread chatHistory={history} completion={completion}/>
      <QueryForm className={styles.queryForm} onSubmit={(question: string) => {
        appendMessage(question, "human");
        sendQuestion(history, question);
      }}/>
      {resources && <DebugDocs docs={resources}/>}
    </Scaffolding>
  );
};

export default Chat;
