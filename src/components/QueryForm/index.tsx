import React, { FC } from 'react'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

type QueryFormProps = {
  onSubmit: (query: string) => void;
}

const QueryForm: FC<QueryFormProps> = ({ onSubmit }) => {
  return (
    <form
      className="flex w-full content-center flex-row space-x-2"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const inputElement = form.elements.namedItem(
          "query-field"
        ) as HTMLInputElement;
        onSubmit(inputElement.value);
      }}
    >
      <TextInput id={"query-field"} className={'flex-1'} />
      <Button type="submit">Send</Button>
    </form>
  )
}

export default QueryForm
