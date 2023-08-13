import { useState } from "react";
import styles from "./MoneyTracker.module.scss";
import GitHub from "../../svg/GitHub";
import myExpenses from "../../img/projects/myexpenses.png";
import myItems from "../../img/projects/myitems.png";
import addExpense from "../../img/projects/add expense.png";

import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const MoneyTracker = ({ onCloseModal }) => {
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
            <img alt="imm" src={myExpenses} />
          </div>
          <div className={`${styles.img} ${photoToShow === 1 && styles.show}`}>
            <img alt="imm" src={myItems} />
          </div>
          <div className={`${styles.img} ${photoToShow === 2 && styles.show}`}>
            <img alt="imm" src={addExpense} />
          </div>
          <div
            className={styles.right_arrow}
            onClick={() => forwardPhotoHandler()}
          >
            <MdArrowForwardIos />
          </div>
        </div>
        <div className={styles.info}>
          <h1>Money Tracker</h1>
          <p>
            You can create/delete expenses and income records
            <br />
            You can create origin types of expenses/incomes and assign them a
            color using a color picker
            <br />
            Records can be displayed as a list or pie-chart
            <br />
            You can filter records by date
            <br />
            You can compare your total monthly expenses and income
            <br />I used next-auth JWT authorization, and MongoDB to store the
            records and origin types
            <br />
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
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Whiz7z/money-tracker"
            className={styles.git}
          >
            <GitHub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://money-tracker-chi.vercel.app/"
            className={`${styles.btn} ${styles.btn_link}`}
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoneyTracker;
