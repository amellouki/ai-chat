import React, {FunctionComponent, useEffect} from 'react'
import MessageBox from '@/components/MessageBox'
import styles from './styles.module.scss'
import {ChatHistory} from "@/types/ChatRequest";

type ChatThreadProps = {
  completion: string
  chatHistory: ChatHistory
}

const ChatThread: FunctionComponent<ChatThreadProps> = ({chatHistory, completion}) => {

  return (
    <div className={styles.chatThread}>
      {chatHistory.map(({content, type}, key) => (
        <MessageBox key={key} sender={type} alternate={key % 2 === 0} message={content}/>
      ))}
      {completion && <MessageBox sender={"ai"} message={completion}/>}
    </div>
  )
}

export default ChatThread
