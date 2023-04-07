import React from "react";
import MessageBox from "@/components/MessageBox";
import Scaffolding from '@/components/Scaffolding'
import QueryForm from '@/components/QueryForm'
import useCompletion from '@/hooks/use-completion.hook'

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
