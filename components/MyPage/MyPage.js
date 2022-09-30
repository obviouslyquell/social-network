import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCurrentUserContext } from "../../context/CurrentUser";
import Island from "../Island/Island";
import styles from "./MyPage.module.scss";

function MyPage() {
  const { user, setUser } = useCurrentUserContext();
  return (
    <div className={styles.container}>
      <Island display="flex">
        <div className={styles.image}>
          <Image
            src={user.avatar}
            width="256px"
            height="256px"
            style={{ borderRadius: "15px" }}
            alt="avatar"
          />
          <div className={styles.settings}>
            <Link href="/settings">Settings</Link>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info_short}>
            <div className={styles.info_short_name}>{user.name}</div>
            <div className={styles.info_short_status}>Status</div>
          </div>
          <div className={styles.info_detailed}>
            <ul className={styles.info_detailed_list}>
              {user.birthday && (
                <li className={styles.info_detailed_item}>
                  <p>Information : 220401241</p>
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
