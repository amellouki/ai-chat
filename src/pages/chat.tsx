import React from "react";
import MessageBox from "@/components/MessageBox/MessageBox";
import Scaffolding from '@/components/Scaffolding/Scaffolding'
import useCompletion from '@/hooks/use-completion.hook'
import QueryForm from '@/components/QueryForm/QueryForm'

const Chat: React.FC = () => {
  const {completion, sendQuery} = useCompletion();

  return (
    <Scaffolding>
      <QueryForm onSubmit={sendQuery} />
      { completion && <MessageBox sender={"GPT"} message={completion} /> }
    </Scaffolding>
  );
};

export default Chat;
