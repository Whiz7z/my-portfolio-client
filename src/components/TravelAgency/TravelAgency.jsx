import { useState } from "react";
import styles from "../BooksMarket/BooksMarket.module.scss";
import GitHub from "../../svg/GitHub";

import main from "../../img/projects/main.png";
import slider from "../../img/projects/slider.png";
import choose from "../../img/projects/choose.png";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const TravelAgency = ({ onCloseModal }) => {
  const [photoToShow, setPhotoToShow] = useState(0);
  const backPhotoHandler = () => {
    if (photoToShow === 0) {
      setPhotoToShow(2);
    } else {
      setPhotoToShow((prev) => prev - 1);
    }
  };

  const forwardPhotoHandler = () => {
    if (photoToShow === 2) {
      setPhotoToShow(0);
    } else {
      setPhotoToShow((prev) => prev + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img_blocks}>
          <div className={styles.left_arrow} onClick={() => backPhotoHandler()}>
            <MdOutlineArrowBackIos />
          </div>
          <div className={`${styles.img} ${photoToShow === 0 && styles.show}`}>
            <img alt="imm" src={main} />
          </div>
          <div className={`${styles.img} ${photoToShow === 1 && styles.show}`}>
            <img alt="imm" src={slider} />
          </div>
          <div className={`${styles.img} ${photoToShow === 2 && styles.show}`}>
            <img alt="imm" src={choose} />
          </div>{" "}
          <div
            className={styles.right_arrow}
            onClick={() => forwardPhotoHandler()}
          >
            <MdArrowForwardIos />
          </div>
        </div>
        <div className={styles.info}>
          <h1>Travel agency</h1>
          <p>
            Just a simple responsive landing layout of a travel agency web-site
          </p>
        </div>
        <div className={styles.btns}>
          <div
            className={`${styles.btn} ${styles.btn_close}`}
            onClick={() => onCloseModal()}
          >
            Close
          </div>
          <a
            className={styles.git}
            href="https://github.com/Whiz7z/my-travel-logs.git"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="https://travel-agency-4dqh.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.btn_link}`}
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default TravelAgency;
