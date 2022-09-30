import React from 'react'
import styles from './Island.module.scss'

function Island({children, padding, borderRadius, display, justifyContent}) {
  return (
    <div className={styles.container} style={{padding: padding, borderRadius: borderRadius, display: display, justifyContent: justifyContent}}>{children}</div>
  )
}

export default Island