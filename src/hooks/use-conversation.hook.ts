import {useCallback, useState} from 'react'
import {ChatHistory} from "@/types/ChatRequest";
import {io} from "socket.io-client";

const PATH = process.env.NEXT_PUBLIC_BACKEND_API + '/conversational-retrieval-qa'

const useConversation = (onResponseComplete: (message: string) => void) => {
  const [completion, setCompletion] = useState('');
  const [resources, setResources] = useState<any>();

  const sendQuestion = useCallback((history: ChatHistory, question: string) => {
    const socket = io(PATH)
    socket.emit('getCompletion', {
      history,
      question
    })
    socket.on('data', (data) => {
      if (data.type === 'token' && data.params.chainType === 'question-answering') {
        setCompletion((prev) => prev + data.content)
      }
      if (data.type === 'response') {
        onResponseComplete(data.content)
        setCompletion('')
      }
    })
    socket.on('error', (error) => {
      console.error('error', error)
    })
    socket.on('disconnect', (reason) => {
      console.log('disconnect', reason)
    })

    return () => {
      socket.close()
    };
  }, [onResponseComplete]);

  return {completion, sendQuestion, resources};
}

export default useConversation
