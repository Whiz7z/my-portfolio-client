import { useState } from "react";
import styles from "./Projects.module.scss";
import bookImg from "../../img/projects/books-market.png";
import rpsImg from "../../img/projects/rock-paper-scissors.png";
import travelImg from "../../img/projects/travel.png";
import moneyTrImg from "../../img/projects/myexpenses.png";

import BooksMarket from "../BooksMarket/BooksMarket";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";
import TravelAgency from "./../TravelAgency/TravelAgency";
import MoneyTracker from "./../MoneyTracker/MoneyTracker";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useComponent } from "../../zustand/store";
const Projects = () => {
  const [booksMarket, setBooksMarket] = useState(false);
  const [rockPapeprScissors, setRockPapeprScissors] = useState(false);
  const [travelAgency, setTravelAgency] = useState(false);
  const [moneyTracker, setMoneyTracker] = useState(false);

  const [page, setPage] = useState(2);
  const { setComponent } = useComponent((state) => state);
  const closeModalHandler = (project) => {
    if (project === "booksMarket") {
      setBooksMarket((prev) => !prev);
    } else if (project === "rockPaperScissors") {
      setRockPapeprScissors((prev) => !prev);
      console.log("yes");
    } else if (project === "travelAgency") {
      setTravelAgency((prev) => !prev);
    } else if (project === "moneyTracker") {
      setMoneyTracker((prev) => !prev);
    }
  };

  let projects;

  if (page === 1) {
    projects = (
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
              play with your friends
            </p>
            <p className={styles.tech}>
              react redux zustand mongo express socket.io sass
            </p>
          </div>
        </div>

        <div
          className={`${styles.project}`}
          onClick={() => closeModalHandler("moneyTracker")}
        >
          <div className={styles.img_block}>
            <img alt="rock" src={moneyTrImg} />
          </div>
          <div className={styles.info}>
            <h2>Money Tracker</h2>
            <p className={styles.desc}>
              Money tracker web app where you can record your expenses and
              income
            </p>
            <p className={styles.tech}>
              next.js mongo tailwind approuter next-auth
            </p>
          </div>
        </div>
      </div>
    );
  } else if (page === 2) {
    projects = (
      <div className={styles.content}>
        <div
          className={`${styles.project} ${styles.projectCentered}`}
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
    );
  }

  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<projects>"}</p>
      <div className={styles.navUp} onClick={() => setComponent("Hello")}>
        <div className={styles.arrow}>
          <MdKeyboardArrowUp />
        </div>
        <p>Main</p>
      </div>
      {projects}
      <div className={styles.pagePicker}>
        <div
          className={`${styles.pageBtn} ${
            page === 1 ? styles.pageActive : styles.pageNonActive
          }`}
          onClick={() => setPage(1)}
        ></div>
        <div
          className={`${styles.pageBtn} ${
            page === 2 ? styles.pageActive : styles.pageNonActive
          }`}
          onClick={() => setPage(2)}
        ></div>
      </div>
      <div className={styles.nav} onClick={() => setComponent("Skills")}>
        <p>Skills</p>
        <div className={styles.arrow}>
          <MdKeyboardArrowDown />
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
      {moneyTracker && (
        <MoneyTracker onCloseModal={() => closeModalHandler("moneyTracker")} />
      )}
    </div>
  );
};

export default Projects;
