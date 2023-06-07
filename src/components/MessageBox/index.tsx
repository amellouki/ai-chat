import React, {FunctionComponent, ReactElement} from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

export type MessageBoxProps = {
  message: string;
  sender: string | ReactElement;
  bubble?: boolean;
};

const MessageBox: FunctionComponent<MessageBoxProps> = ({
  message,
  sender,
  bubble,
}) => {
  return (
    <div
      className={clsx(
        styles.messageBox,
        bubble && styles.bubble
      )}
    >
      <div className="flex-shrink-0">
        {typeof sender === "string" ? (
          <div className={styles.sender}>
            <span className="align-middle">{sender}</span>
          </div>
        ) : (
          sender
        )}
      </div>
      <div className={styles.messageText}>
        {message}
      </div>
    </div>
  );
};

export default MessageBox;
