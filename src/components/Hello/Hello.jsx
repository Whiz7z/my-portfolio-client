import styles from "./Hello.module.scss";
import { useComponent } from "../../zustand/store";
import LinkedIn from "../../svg/LinkedIn";
import Telegram from "../../svg/Telegram";
import Instagram from "../../svg/Instagram";
import GitHub from "../../svg/GitHub";
import myPhoto from "../../img/me.jpg";
import pdf from "../../img/Yevhen Yevstratov frontend developer final.pdf";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hello = () => {
  const { setComponent } = useComponent((state) => state);
  const goToAboutMeHandler = () => {
    setComponent("Contact");
  };
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<hello>"}</p>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>
            My name is Yevhen
            <br className={styles.firstBr} />
            {`I'm`} self-taught web developer <br className={styles.secondBr} />
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
            <button
              className={`${styles.contact_btn} ${styles.btn}`}
              onClick={() => goToAboutMeHandler()}
            >
              About me
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
          <div className={styles.myPhoto}></div>

          <div className={styles.socials}>
            <a
              href="https://t.me/YevMyDev"
              target="_blank"
              rel="noreferrer"
              className={`${styles.social_item} ${styles.telegram}`}
            >
              <Telegram />
            </a>
            <a
              href="https://linkedin.com/in/
yevhen-yevstratov-a2271023b"
              target="_blank"
              rel="noreferrer"
              className={`${styles.social_item} ${styles.linkedIn}`}
            >
              <LinkedIn />
            </a>
            <a
              href="https://instagram.com/yevyevstratov?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noreferrer"
              className={`${styles.social_item} ${styles.insta}`}
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/Whiz7z"
              target="_blank"
              rel="noreferrer"
              className={`${styles.social_item} ${styles.git}`}
            >
              <GitHub />
            </a>
          </div>
          <div className={styles.mail_block}>
            <a className={styles.mail} href="mailto:gjevstratov@gmail.com">
              gjevstratov@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.nav} onClick={() => setComponent("Projects")}>
        <p>Projects</p>
        <div className={styles.arrow}>
          <MdKeyboardArrowDown />
        </div>
      </div>
      <p className={`${styles.tag} ${styles.last_tag}`}>{"</hello>"}</p>
    </div>
  );
};

export default Hello;
