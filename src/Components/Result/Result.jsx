import React from "react";
import styles from "./Result.module.scss";
import { Link } from "react-router-dom";
import photo from "../../images/image.png";
const Result = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imageContent}>
        <img className={styles.image} src={photo} alt="photo" />
      </div>
      <div className={styles.button}>
        <button>
          <h1>Save</h1>
        </button>
      </div>
      <div className={styles.button2}>
        <Link to={"/"}>
          <button>
            <h1>More pics</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
