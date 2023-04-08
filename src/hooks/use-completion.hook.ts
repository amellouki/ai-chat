import getCompletionEventSource from '@/services/completion'
import { useCallback, useState } from 'react'
import { END_COMPLETION } from '@/constants'

const useCompletion = () => {
  const [completion, setCompletion] = useState('');
  const [debug, setDebug] = useState<any>();

  const sendQuery = useCallback((query: string) => {
    const eventSource = getCompletionEventSource(query);

    eventSource.onmessage = (event) => {
      if (event.data === END_COMPLETION) {
        eventSource.close();
        return;
      }
      const data = JSON.parse(event.data)
      if (data.type === 'debug') {
        setDebug(data.content);
        return;
      }
      setCompletion(data.content);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { completion, sendQuery, debug };
}

export default useCompletion
