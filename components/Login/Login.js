import styles from './Login.module.scss'

import React, { useState } from 'react'
import classNames from 'classnames'

function Login() {
    const loginClassnames = classNames(styles.container, styles.login);
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const loginHandler = (e) => {
        setLogin(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const sendData = (e) => {

    }
  return (
    <div className={loginClassnames}>
        <div className={styles.login__form}>
            <p>Login</p>
            <form onSubmit={sendData}>
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

export default Login