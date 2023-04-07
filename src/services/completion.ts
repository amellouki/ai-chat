const PATH = 'http://localhost:3001/completion'

export default function getCompletionEventSource(query: string): EventSource {
  return new EventSource(`${PATH}?query=${query}`)
}

