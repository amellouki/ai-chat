import React, { PropsWithChildren } from 'react'

//TODO: ADD BUTTON PREDEFINED STYLES (primary, secondary, outlined, etc)
type ButtonProps = {
  onClick?: () => void;
  type?: "submit" | "button";
};
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  type,
  children
}) => {
  return (
    <button
      className={
        "block text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button
