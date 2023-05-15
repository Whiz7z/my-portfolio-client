import styles from "../BooksMarket/BooksMarket.module.scss";
import GitHub from "../../svg/GitHub";
import roomspage from "../../../public/img/projects/roompage.png";
import game from "../../../public/img/projects/game.png";
import result from "../../../public/img/projects/result.png";
const RockPaperScissors = ({ onCloseModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img_blocks}>
          <div className={styles.img}>
            <img alt="imm" src={roomspage} />
          </div>
          <div className={styles.img}>
            <img alt="imm" src={game} />
          </div>
          <div className={styles.img}>
            <img alt="imm" src={result} />
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
