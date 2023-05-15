import styles from "./Projects.module.scss";
import bookImg from "../../../public/img/projects/books-market.png";
import rpsImg from "../../../public/img/projects/rock-paper-scissors.png";
import travelImg from "../../../public/img/projects/travel.png";
const Projects = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<projects>"}</p>
      <div className={styles.content}>
        <div className={styles.project}>
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

        <div className={styles.project}>
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

        <div className={styles.project}>
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
    </div>
  );
};

export default Projects;
