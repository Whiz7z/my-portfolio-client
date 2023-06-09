import { useState } from "react";
import styles from "./BooksMarket.module.scss";
import GitHub from "../../svg/GitHub";
import product from "../../img/projects/product.png";
import cart from "../../img/projects/cart.png";
import edit from "../../img/projects/edit.png";

import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const BooksMarket = ({ onCloseModal }) => {
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
            <img alt="imm" src={product} />
          </div>
          <div className={`${styles.img} ${photoToShow === 1 && styles.show}`}>
            <img alt="imm" src={cart} />
          </div>
          <div className={`${styles.img} ${photoToShow === 2 && styles.show}`}>
            <img alt="imm" src={edit} />
          </div>
          <div
            className={styles.right_arrow}
            onClick={() => forwardPhotoHandler()}
          >
            <MdArrowForwardIos />
          </div>
        </div>
        <div className={styles.info}>
          <h1>Books market</h1>
          <p>
            You can log in demo as admin or user.
            <br />
            You can create/edit/delete products, manage orders, monitor messages
            from users.
            <br />
            You can add products to cart, buy them or cancel the order.
            <br />
            You can search product by collection and tags.
            <br />
            <br />I used JWT for authorization, MongoDB to store products and
            File System to store images. On the client-side Redux was
            <br />
            used for state management and RTKQuery for making the requests.
            <br />
            <br />
            {"There's"} a github link to client code. In my profile
            <br />
            you can find backend code also
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
            href="https://github.com/Whiz7z/books-market-client.git"
            className={styles.git}
          >
            <GitHub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://books-market.onrender.com/"
            className={`${styles.btn} ${styles.btn_link}`}
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default BooksMarket;
