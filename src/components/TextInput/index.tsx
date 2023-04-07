import React from "react";
import clsx from "clsx";

type TextInputProps = {
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

const TextInput = (props: TextInputProps) => {
  const { id, value, onChange, error, className, ...rest } = props;
  return (
    <div className={className}>
      <input
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={onChange}
        placeholder={"Send a message..."}
        {...rest}
      />
      {error && <span className="text-input__error">{error}</span>}
    </div>
  );
};

export default TextInput;
