import styles from './Login.module.scss'

import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useCurrentUserContext } from '../../context/CurrentUser';
import axios from 'axios';

function Login() {
    const loginClassnames = classNames(styles.container, styles.login);
    const {user, setUser} = useCurrentUserContext();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const loginHandler = (e) => {
        setLogin(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const sendData = (e) => {
        e.preventDefault()
        axios.get('https://6324bd619075b9cbee414973.mockapi.io/users')
        .then((res)=>{
            if(res.data.find(e=>(e.login === login && e.password === password))){
                const currentUserFromQuery = res.data.find(e=>(e.login === login && e.password === password));
                setUser(currentUserFromQuery);
                document.cookie=`SNuserId=${currentUserFromQuery.id}`
                document.cookie=`SNuserAvatar=${currentUserFromQuery.avatar}`
            }else{
                alert('wrong login/password')
            }
        })
        .catch((e)=>alert(e))
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