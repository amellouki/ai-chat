import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

const Scaffolding: FC<PropsWithChildren> = (props) => {
  const getMode = () => {
    // TODO: refactor & include a logic to get the mode from the local storage
    // then we would be using class instead of media for dark mode (should update tailwind.config.js as well)
    return undefined;
  }

  return (
    <div className={clsx('flex justify-center', getMode())}>
      <div className="max-w-screen-lg w-full my-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {props.children}
      </div>
    </div>
  )
}

export default Scaffolding
