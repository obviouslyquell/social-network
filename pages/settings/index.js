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
        <h1 className={styles.heading}>Settings</h1>
        <Island
          padding={"15px"}
          borderRadius={"20px"}
          display={"flex"}
          justifyContent={"space-between"}
          backgroundColor={"#2a2a2a"}
        >
          <Island borderRadius={"15px"} padding={"10px 15px"}>
            <h3>General</h3>
            <ChangeInformationForm changingField="name" />
            <ChangeInformationForm changingField="birthday" />
            <ChangeInformationForm changingField="birthplace" />
          </Island>
          <Island borderRadius={"15px"} padding={"10px 15px"}>
            <h3>Something</h3>
            <ChangeInformationForm changingField="name" />
            <ChangeInformationForm changingField="birthday" />
            <ChangeInformationForm changingField="birthplace" />
          </Island>
        </Island>
      </div>
    </>
  );
}

export default Settings;
