import React, { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

const Scaffolding: FC<PropsWithChildren> = (props) => {
  return (
    <div id="root" className={styles.container}>
      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </div>
  )
}

export default Scaffolding
