import React, { useCallback, useMemo, useState } from "react";
import MessageBox from "@/components/MessageBox";
import Scaffolding from "@/components/Scaffolding";
import QueryForm from "@/components/QueryForm";
import useCompletion from "@/hooks/use-completion.hook";
import DebugDocs from "@/components/DebugDocs";
import UploadPDF from "@/components/UploadPDF";
import ThemeChanger from "@/components/ThemeChanger";

const Chat: React.FC = () => {
  const { completion, sendQuery, debug } = useCompletion();

  return (
    <Scaffolding>
      <QueryForm onSubmit={sendQuery} />
      {completion && <MessageBox sender={"GPT"} message={completion} />}
      {debug && <DebugDocs docs={debug} />}
      <UploadPDF />
      <ThemeChanger />
    </Scaffolding>
  );
};

export default Chat;
