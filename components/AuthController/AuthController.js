import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCurrentUserContext } from "../../context/CurrentUser";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

function AuthController({ children }) {
  const { user, setUser } = useCurrentUserContext();
  const [cookieValueId, setCookieValueId] = useState("");
  useEffect(() => {
    setCookieValueId(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("SNuserId="))
        ?.split("=")[1]
    );
    axios
      .get("https://6324bd619075b9cbee414973.mockapi.io/users")
      .then((res) => {
        if (res.data.find((e) => e.id == cookieValueId)) {
          const currentUserFromQuery = res.data.find(
            (e) => e.id == cookieValueId
          );
          setUser(currentUserFromQuery);
          console.log(currentUserFromQuery);
        }
      });
  }, [cookieValueId, setUser]);
  return (
    <>
      {user.id ? (
        <div>{children}</div>
      ) : (
        <>
          <Registration />
          <Login />
        </>
      )}
    </>
  );
}

export default AuthController;
