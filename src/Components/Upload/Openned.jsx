import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./OpennedCart.module.scss";
import UploadItem from "../UploadImage/uploadItem";
import { Link } from "react-router-dom";
import photo from "./../../images/photo.png";

const OpennedCart = () => {
  return (
    <div className={styles.content}>
      <button className={styles.button}>
        <div className={styles.buttonContent}>
          <IoIosArrowBack className={styles.icon} />
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1> Go back</h1>
          </Link>
        </div>
      </button>
      <div className={styles.contentImage}>
        <img className={styles.image} src={photo} alt="photo" />
      </div>
      <UploadItem />
    </div>
  );
};

export default OpennedCart;
