import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useCurrentUserContext } from "../../context/CurrentUser";
import { userUpdate } from "../../helpers/userUpdate";
import Island from "../Island/Island";
import styles from "./MyPage.module.scss";

function MyPage() {
  const { user, setUser } = useCurrentUserContext();
  const [showChangeStatus, setShowChangeStatus] = useState(false);
  const [status, setStatus] = useState(user.status && null);
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleStatusClick = (e) => {
    e.preventDefault();
    userUpdate(user, "status", status).then((res) => setUser(res.data));
  };
  return (
    <div className={styles.container}>
      <Island display="flex">
        <div className={styles.image}>
          <Image
            src={user.avatar}
            width="200px"
            height="200px"
            style={{ borderRadius: "15px" }}
            alt="avatar"
          />
          <div className={styles.settings}>
            <Link href="/settings" passHref>
              <a className={styles.settings_button}>Settings</a>
            </Link>
          </div>
        </div>
      </Island>
      <Island display="flex" width="59%" margin="0px 0px 0px 15px">
        <div className={styles.info}>
          <div className={styles.info_short}>
            <div className={styles.info_short_name}>{user.name}</div>
            <div
              className={styles.info_short_status}
              onClick={() => setShowChangeStatus(!showChangeStatus)}
            >
              {user.status ? <p>{user.status}</p> : <p>Status</p>}
            </div>
            {showChangeStatus && (
              <div className={styles.info_short_status_change}>
                <input
                  type="text"
                  value={status}
                  onChange={handleStatusChange}
                />
                <button onClick={handleStatusClick}>Confirm</button>
              </div>
            )}
          </div>
          <div className={styles.info_detailed}>
            <ul className={styles.info_detailed_list}>
              {user.birthday && (
                <li className={styles.info_detailed_item}>
                  <p>
                    Birthday:{" "}
                    <span className={styles.info_detailed_item_value}>
                      {user.birthday}
                    </span>
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Island>
    </div>
  );
}

export default MyPage;
