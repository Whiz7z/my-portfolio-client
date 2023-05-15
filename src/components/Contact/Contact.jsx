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
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<contact>"}</p>
      <div className={styles.content}>
        <h1>Feel free to contact me</h1>
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
        <button
          className={`${styles.cv_btn} ${styles.btn}`}
          onClick={() => window.open(pdf)}
        >
          Download CV
        </button>
      </div>

      <p className={`${styles.tag} ${styles.last_tag}`}>{"</contact>"}</p>
    </div>
  );
};

export default Contact;
