import React, {FC, PropsWithChildren} from 'react'
import styles from './styles.module.scss'
import clsx from "clsx";

type ScaffoldingProps = {
  className?: string
  contentWrapperClassName?: string
}

const Scaffolding: FC<PropsWithChildren<ScaffoldingProps>> = ({className, contentWrapperClassName, children}) => {
  return (
    <div id="root" className={clsx(styles.container, className)}>
      <div className={clsx(styles.contentWrapper, contentWrapperClassName)}>
        {children}
      </div>
    </div>
  )
}

export default Scaffolding
