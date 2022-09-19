import styles from './NewsCard.module.scss'
import avatar from './User.png'
import React from 'react'
import Image from 'next/image'
import { useUsersContext } from '../../context/Users'

function NewsCard({data}) {
    const users = useUsersContext();
    let user;
    if(users){
        user = users.find(el => el.id === data.userId); 
    }
  return (
    <div className={styles.news__card}>
        <div className={styles.news__header}>
            <div className={styles.user__picture}>
                <Image
                src={avatar}
                alt=''
                role='avatar'
                width={50}
                height={50}
                />
            </div>
            <div className={styles.user__info}>
                <p className={styles.user__name}>{user && user.name}</p>
            </div>
        </div>
        <div className={styles.news__content}>
            <p>{data && data.body}</p>
        </div>
    </div>
  )
}

export default NewsCard