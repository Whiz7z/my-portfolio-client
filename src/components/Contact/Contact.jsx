import styles from "./Contact.module.scss";
import LinkedIn from "../../svg/LinkedIn";
import Mail from "../../svg/Mail";
import Telegram from "../../svg/Telegram";
import Instagram from "../../svg/Instagram";
import GitHub from "../../svg/GitHub";
import pdf from "../../../public/img/Yevhen Yevstratov Junior Front-end Developer.pdf";
const Contact = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<about me>"}</p>
      <div className={styles.content}>
        <h1>More about me</h1>
        <div className={styles.text}>
          <p>
            My passion for programming began at a young age, and by the time I
            was 17.
            <br /> I {"wasn't"} sure that it was the career I wanted to pursue.
            However, after graduating Law University in Ukraine, I realized that
            my true calling was in the world of programming. So, I decided to
            make a change and pursue my hobby full-time.
          </p>

          <p className={styles.right}>
            Since then, {"I've"} been honing my skills as a front-end developer
            and exploring new ways to create intuitive and user-friendly web
            experiences. I love working on projects that challenge me and push
            me to learn something new, and {"I'm"} always excited to collaborate
            with others to bring their ideas to life
          </p>

          {/* <div className={`${styles.social_item} ${styles.mail}`}>
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
          </div> */}
        </div>

        <button
          className={`${styles.cv_btn} ${styles.btn}`}
          onClick={() => window.open(pdf)}
        >
          Download CV
        </button>
        <div className={styles.mail_block}>
          <a className={styles.mail} href="mailto:gjevstratov@gmail.com">
            gjevstratov@gmail.com
          </a>
        </div>
      </div>

      <p className={`${styles.tag} ${styles.last_tag}`}>{"</about me>"}</p>
    </div>
  );
};

export default Contact;
