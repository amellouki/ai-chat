const PATH = process.env.NEXT_PUBLIC_BACKEND_API + '/completion'

export default function getCompletionEventSource(query: string): EventSource {
  return new EventSource(`${PATH}?query=${query}`)
}

