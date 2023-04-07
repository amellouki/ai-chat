import React, { FunctionComponent, ReactElement } from "react";
import clsx from "clsx";

export type MessageBoxProps = {
  message: string;
  sender: string | ReactElement;
  alternate?: boolean;
};

const MessageBox: FunctionComponent<MessageBoxProps> = ({
  message,
  sender,
  alternate,
}) => {
  return (
    <div
      className={clsx(
        "flex items-start rounded-none space-x-4 w-full p-2.5 border border-gray-200 rounded-lg shadow dark:border-gray-700",
        alternate ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-900"
      )}
    >
      <div className="flex-shrink-0">
        {typeof sender === "string" ? (
          <div className="w-8 h-8 rounded-full bg-cyan-600 text-white text-center">
            <span className="align-middle">{sender}</span>
          </div>
        ) : (
          sender
        )}
      </div>
      <div className="flex-1 font-normal text-gray-700 dark:text-gray-400">
        {message}
      </div>
    </div>
  );
};

export default MessageBox;
