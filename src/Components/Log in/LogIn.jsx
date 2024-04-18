import React from "react";
import styles from "./Login.module.scss";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const LogIn = ({ setClick }) => {
  return (
    <div className={styles.content}>
      <div className={styles.contents}>
        <div className={styles.close}>
          <Link to={"/"}>
            <GrClose className={styles.icon} />
          </Link>
        </div>

        <input className={styles.email} placeholder="Email" />
        <input className={styles.password} placeholder="Password" />
        <Link to={"/"}>
          <button className={styles.button} onClick={() => setClick(true)}>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
