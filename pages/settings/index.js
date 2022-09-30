import axios from "axios";
import React, { useState } from "react";
import ChangeInformationForm from "../../components/ChangeInformationForm/ChangeInformationForm";
import Header from "../../components/Header/Header";
import Island from "../../components/Island/Island";
import { useCurrentUserContext } from "../../context/CurrentUser";
import styles from "./Settings.module.scss";

function Settings() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Island padding={"15px"} borderRadius={"30px"}>
          <h1>Settings</h1>
          <ChangeInformationForm changingField="name" />
          <ChangeInformationForm changingField="birthday" />
        </Island>
      </div>
    </>
  );
}

export default Settings;
