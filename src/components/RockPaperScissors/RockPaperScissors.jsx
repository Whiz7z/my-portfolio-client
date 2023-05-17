import { useState } from "react";
import styles from "../BooksMarket/BooksMarket.module.scss";
import GitHub from "../../svg/GitHub";
import roomspage from "../../img/projects/roompage.png";
import game from "../../img/projects/game.png";
import result from "../../img/projects/result.png";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
const RockPaperScissors = ({ onCloseModal }) => {
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
            <img alt="imm" src={roomspage} />
          </div>
          <div className={`${styles.img} ${photoToShow === 1 && styles.show}`}>
            <img alt="imm" src={game} />
          </div>
          <div className={`${styles.img} ${photoToShow === 2 && styles.show}`}>
            <img alt="imm" src={result} />
          </div>
          <div
            className={styles.right_arrow}
            onClick={() => forwardPhotoHandler()}
          >
            <MdArrowForwardIos />
          </div>
        </div>

        <div className={styles.info}>
          <h1>Rock Paper Scissors Online</h1>
          <p>
            {"It's"} an online game on React and Socket.io
            <br />
            You can create/delete rooms ерн will be updated online
            <br />
            To test the game i <span>recommend</span> to create two different
            accounts and login from two different tabs
            <br />
            After winning or loosing your winrate will be updated
            <br />
            <br />I used JWT for authorization, MongoDB to store rooms and
            users.
            <br />I used zustand state manager on the client-side.
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
            onClick={() => onCloseModal("rockPaperScissors")}
          >
            Close
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Whiz7z/rock-paper-scissors-client.git"
            className={styles.git}
          >
            <GitHub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://rock-paper-scissors-multiplayer-2n56.onrender.com/"
            className={`${styles.btn} ${styles.btn_link}`}
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
