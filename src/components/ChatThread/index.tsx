import React, { FunctionComponent, useEffect } from 'react'
import MessageBox from '@/components/MessageBox'
import chatThreadMock from '@/mock-data/chat-thread'

type ChatThreadProps = {
  completion: string
}

async function sendMessage() {
  const api = process.env.NEXT_PUBLIC_BACKEND_API + '/chat-session'
  console.log('fetching', api)
  const res = await fetch(api, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Authorization': 'Bearer secret'
    }
  })
  console.log(res)
}

const ChatThread: FunctionComponent<ChatThreadProps> = ({ completion }) => {
  // test session
  useEffect(() => {
    sendMessage().then(sendMessage)
  }, [])

  return (
    <div>
      {completion && <MessageBox sender={"GPT"} message={completion} />}
      {/* {chatThreadMock.messages.map(({sender, id, text}, key) => (*/}
      {/*  <MessageBox key={id} sender={sender} alternate={key % 2 === 0} message={text} />*/}
      {/* ))}*/}
    </div>
  )
}

export default ChatThread
