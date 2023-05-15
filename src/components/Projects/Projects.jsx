import { useState } from "react";
import styles from "./Projects.module.scss";
import bookImg from "../../../public/img/projects/books-market.png";
import rpsImg from "../../../public/img/projects/rock-paper-scissors.png";
import travelImg from "../../../public/img/projects/travel.png";
import BooksMarket from "../BooksMarket/BooksMarket";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";
import TravelAgency from "./../TravelAgency/TravelAgency";
const Projects = () => {
  const [booksMarket, setBooksMarket] = useState(false);
  const [rockPapeprScissors, setRockPapeprScissors] = useState(false);
  const [travelAgency, setTravelAgency] = useState(false);
  const closeModalHandler = (project) => {
    if (project === "booksMarket") {
      setBooksMarket((prev) => !prev);
    } else if (project === "rockPaperScissors") {
      setRockPapeprScissors((prev) => !prev);
      console.log("yes");
    } else if (project === "travelAgency") {
      setTravelAgency((prev) => !prev);
    }
  };
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<projects>"}</p>
      <div className={styles.content}>
        <div
          className={styles.project}
          onClick={() => closeModalHandler("booksMarket")}
        >
          <div className={styles.img_block}>
            <img alt="books" src={bookImg} />
          </div>
          <div className={styles.info}>
            <h2>Books-market</h2>
            <p className={styles.desc}>
              E-commerce web-site for selling books with admin panel
            </p>
            <p className={styles.tech}>react redux mongo express</p>
          </div>
        </div>

        <div
          className={styles.project}
          onClick={() => closeModalHandler("rockPaperScissors")}
        >
          <div className={styles.img_block}>
            <img alt="rock" src={rpsImg} />
          </div>
          <div className={styles.info}>
            <h2>Rock Paper Scissors Online</h2>
            <p className={styles.desc}>
              Online rock-paper-scissors game, where you can create rooms and
              play with you friends
            </p>
            <p className={styles.tech}>
              react redux zustand mongo express socket.io sass
            </p>
          </div>
        </div>

        <div
          className={styles.project}
          onClick={() => closeModalHandler("travelAgency")}
        >
          <div className={styles.img_block}>
            <img alt="layout" src={travelImg} />
          </div>
          <div className={styles.info}>
            <h2>Travel agency layout</h2>
            <p className={styles.desc}>
              Simple responsive layout using Scss and React
            </p>
            <p className={styles.tech}>react sass/scss</p>
          </div>
        </div>
      </div>
      <p className={`${styles.tag} ${styles.last_tag}`}>{"</projects>"}</p>
      {booksMarket && (
        <BooksMarket onCloseModal={() => closeModalHandler("booksMarket")} />
      )}
      {rockPapeprScissors && (
        <RockPaperScissors
          onCloseModal={() => closeModalHandler("rockPaperScissors")}
        />
      )}
      {travelAgency && (
        <TravelAgency onCloseModal={() => closeModalHandler("travelAgency")} />
      )}
    </div>
  );
};

export default Projects;
