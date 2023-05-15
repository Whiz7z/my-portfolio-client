import styles from "./Hello.module.scss";
import LinkedIn from "../../svg/LinkedIn";
import Mail from "../../svg/Mail";
import Telegram from "../../svg/Telegram";
import Instagram from "../../svg/Instagram";
import GitHub from "../../svg/GitHub";
import myPhoto from "../../../public/img/me.jpg";
import pdf from "../../../public/img/Yevhen Yevstratov Junior Front-end Developer.pdf";
const Hello = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<hello>"}</p>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>
            My name is Yevhen
            <br />
            {`I'm`} self-taught web developer <br />
            from Ukraine
          </h1>
          <p>
            {`I'm`} currently based in London.
            <br />
            Passionate about information
            <br />
            technology and how it is transforming business.
            <br />
            <br />
            Looking for opportunity to gain
            <br />
            experience working on real projects.
          </p>
          <div className={styles.btns}>
            <button className={`${styles.contact_btn} ${styles.btn}`}>
              Contact me
            </button>
            <div
              className={`${styles.cv_btn} ${styles.btn}`}
              onClick={() => window.open(pdf)}
            >
              Download CV
            </div>
          </div>
        </div>
        <div className={styles.myPhoto_section}>
          <div className={styles.myPhoto}>
            <img alt="my" src={myPhoto} />
          </div>

          <div className={styles.socials}>
            <div className={`${styles.social_item} ${styles.mail}`}>
              <Mail />
            </div>
            <div className={`${styles.social_item} ${styles.telegram}`}>
              <Telegram />
            </div>
            <div className={`${styles.social_item} ${styles.linkedIn}`}>
              <LinkedIn />
            </div>
            <div className={`${styles.social_item} ${styles.insta}`}>
              <Instagram />
            </div>
            <div className={`${styles.social_item} ${styles.git}`}>
              <GitHub />
            </div>
          </div>
        </div>
      </div>
      <p className={`${styles.tag} ${styles.last_tag}`}>{"</hello>"}</p>
    </div>
  );
};

export default Hello;
