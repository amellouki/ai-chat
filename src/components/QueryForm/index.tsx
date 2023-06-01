import React, { FC } from 'react'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import styles from './styles.module.scss'

type QueryFormProps = {
  onSubmit: (query: string) => void;
}

const QueryForm: FC<QueryFormProps> = ({ onSubmit }) => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const inputElement = form.elements.namedItem(
          "query-field"
        ) as HTMLInputElement;
        onSubmit(inputElement.value);
      }}
    >
      <TextInput id={"query-field"} className={styles.fillRest} />
      <Button type="submit">Send</Button>
    </form>
  )
}

export default QueryForm
