import styles from './UserCard.module.scss'
import React from 'react'

function UserCard({data}) {
  return (
    <div className={styles.userCard__container}>
      <h1 className={styles.userCard__name}>{data.name}</h1>
    </div>
  )
}

export default UserCard