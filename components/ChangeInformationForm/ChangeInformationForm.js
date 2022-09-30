import axios from 'axios';
import React, { useState } from 'react'
import { useCurrentUserContext } from '../../context/CurrentUser';
import Island from '../Island/Island'
import styles from './ChangeInformationForm.module.scss'

function ChangeInformationForm({changingField}) {
    const { user, setUser } = useCurrentUserContext();
    const [value, setValue] = useState("");
    const inputHandler = (e) => {
      e.preventDefault();
      setValue(e.target.value);
    };
    const handleClick = async () => {
      await axios
        .put(`https://6324bd619075b9cbee414973.mockapi.io/users/${user.id}`, {
            [changingField]: value,
          })
        .then((res) => {
          console.log(res.data);
          setUser({ ...user, [changingField]: value });
        })
        .catch((error) => {
          console.error(error);
        });
    };
    console.log([changingField])
  return (
    <Island borderRadius={"15px"} padding={"8px 15px"}>
    <div className={styles.settings_name}>
      <p>Your {`${changingField}`} is: {user[changingField]}, wanna change it?</p>
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        className={styles.settings_input}
      />
      <button
        className={styles.settings_button}
        onClick={handleClick}
      >
        Change it!
      </button>
    </div>
  </Island>
  )
}

export default ChangeInformationForm