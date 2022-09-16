import styles from './Registration.module.scss'

import React, { useState } from 'react'
import classNames from 'classnames'
import axios from 'axios';

function Registration() {
    const registrationClassnames = classNames(styles.container, styles.registration)

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    console.log(password,login)
    const loginHandler = (e) => {
        setLogin(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const sendData = (e) => {
        e.preventDefault();
        if(password && login){
            axios.post('https://6324bd619075b9cbee414973.mockapi.io/users', {password: password, login: login, name: name})
        }
    }
  return (
    <div className={registrationClassnames}>
        <div className={styles.registration__form}>
            <p>Registration</p>
            <form onSubmit={sendData}>
                <label htmlFor="name">Name:</label>
                <input value={name} onChange={nameHandler}/>
                <label htmlFor='login'>Login:</label>
                <input type="text" id="login" value={login} onChange={loginHandler}/>
                <label htmlFor='password'>Password:</label>
                <input type="text" name="" id="password" value={password} onChange={passwordHandler}/>
                <button className={styles.registration__button}>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Registration