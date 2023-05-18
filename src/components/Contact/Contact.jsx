import styles from "./Contact.module.scss";

import pdf from "../../img/Yevhen Yevstratov Junior Front-end Developer.pdf";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useComponent } from "../../zustand/store";

const Contact = () => {
  const { setComponent } = useComponent((state) => state);
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<about me>"}</p>
      <div className={styles.navUp} onClick={() => setComponent("Skills")}>
        <div className={styles.arrow}>
          <MdKeyboardArrowUp />
        </div>
        <p>Skills</p>
      </div>
      <div className={styles.content}>
        <h1>More about me</h1>
        <div className={styles.text}>
          <p>
            My passion for programming began at a young age, when I was 17 years
            old.
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
