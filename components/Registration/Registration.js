import styles from './Registration.module.scss'
import React, { useState } from 'react'
import classNames from 'classnames'
import axios from 'axios';
import { useCurrentUserContext } from '../../context/CurrentUser';

function Registration() {
    const registrationClassnames = classNames(styles.container, styles.registration)

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { user, setUser } = useCurrentUserContext();

    const loginHandler = (e) => {
        setLogin(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const sendData = async (e) => {
        e.preventDefault();
        if(!!password && !!login && !!name){
            await axios.post('https://6324bd619075b9cbee414973.mockapi.io/users', {password: password, login: login, name: name})
            .then((res)=>{
                setUser(res.data)
                document.cookie=`SNuserId=${res.data.id}`
                document.cookie=`SNuserAvatar=${res.data.avatar}`
            })

        }else{
            alert('Fill all the inputs, idiot...')
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