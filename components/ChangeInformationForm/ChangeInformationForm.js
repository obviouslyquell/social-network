import axios from 'axios';
import React, { useState } from 'react'
import { useCurrentUserContext } from '../../context/CurrentUser';
import FieldIsland from '../FieldIsland/FieldIsland';
import styles from './ChangeInformationForm.module.scss'
import { userUpdate } from '../../helpers/userUpdate';

function ChangeInformationForm({changingField}) {
    const { user, setUser } = useCurrentUserContext();
    const [value, setValue] = useState("");
    const inputHandler = (e) => {
      e.preventDefault();
      setValue(e.target.value);
    };
    const handleClick = () => {
      userUpdate(user, changingField, value)    
      .then((res) => {
        setUser(res.data);
      });
    };
  return (
    <FieldIsland padding={"8px 0px"} margin={"5px 0px"}>
    <div className={styles.container}>
      {user[changingField] ? <p>Your {`${changingField}`} is: {user[changingField]}, wanna change it?</p> 
      : 
      <p>Your {`${changingField}`} does not set yet, wanna change it?</p>}
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        className={styles.input}
      />
      <button
        className={styles.button}
        onClick={handleClick}
      >
        Change it!
      </button>
    </div>
  </FieldIsland>
  )
}

export default ChangeInformationForm