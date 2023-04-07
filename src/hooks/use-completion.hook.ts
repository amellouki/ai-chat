import getCompletionEventSource from '@/services/completion'
import { useCallback, useState } from 'react'
import { END_COMPLETION } from '@/constants'

const useCompletion = () => {
  const [completion, setCompletion] = useState('');

  const sendQuery = useCallback((query: string) => {
    const eventSource = getCompletionEventSource(query);

    eventSource.onmessage = (event) => {
      if (event.data === END_COMPLETION) {
        eventSource.close();
        return;
      }
      setCompletion(JSON.parse(event.data));
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { completion, sendQuery };
}

export default useCompletion
