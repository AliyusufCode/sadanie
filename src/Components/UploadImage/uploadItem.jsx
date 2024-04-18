import React from "react";
import styles from "./upload.module.scss";
import { BsFillImageFill } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
const UploadItem = () => {
  return (
    <div className={styles.uploadItems}>
      <div className={styles.content}>
        <Link to="result" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.contentInfo}>
            <BsFillImageFill className={styles.galery} />
            <h5>Choose photo from gallery</h5>
          </div>
        </Link>
      </div>
      <div className={styles.content}>
        <Link to="result" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.contentInfo}>
            <FaCamera className={styles.camera} />
            <h5>Take photo with camera</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UploadItem;
