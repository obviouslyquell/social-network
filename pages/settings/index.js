import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Island from "../../components/Island/Island";
import { useCurrentUserContext } from "../../context/CurrentUser";
import styles from "./Settings.module.scss";

function Settings() {
  const { user, setUser } = useCurrentUserContext();
  const [nameValue, setNameValue] = useState("");
  const nameHandler = (e) => {
    e.preventDefault();
    setNameValue(e.target.value);
  };
  const nameHandleClick = async (e) => {
    await axios
      .put(`https://6324bd619075b9cbee414973.mockapi.io/users/${user.id}`, {
        name: nameValue,
      })
      .then((res) => {
        console.log(res.data);
        setUser({ ...user, name: nameValue });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Island padding={"15px"} borderRadius={"30px"}>
          <h1>Settings</h1>
          <Island borderRadius={"15px"} padding={"8px 15px"}>
            <div className={styles.settings_name}>
              <p>Your name is: {user.name}, wanna change it?</p>
              <input
                type="text"
                value={nameValue}
                onChange={nameHandler}
                className={styles.settings_name_input}
              />
              <button
                className={styles.settings_button}
                onClick={nameHandleClick}
              >
                Change it!
              </button>
            </div>
          </Island>
        </Island>
      </div>
    </>
  );
}

export default Settings;
