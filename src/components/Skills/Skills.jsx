import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<skills>"}</p>
      <div className={styles.content}>
        <div className={`${styles.collumn} ${styles.left}`}>
          <div className={`${styles.skill} ${styles.skill_react}`}>React</div>
          <div className={`${styles.skill} ${styles.skill_redux}`}>Redux</div>
          <div className={`${styles.skill} ${styles.skill_git}`}>Git</div>
          <div className={`${styles.skill} ${styles.skill_node}`}>Node</div>
          <div className={`${styles.skill} ${styles.skill_express}`}>
            Express
          </div>
        </div>
        <div className={`${styles.collumn} ${styles.right}`}>
          <div className={`${styles.skill} ${styles.skill_mongo}`}>Mongo</div>
          <div className={`${styles.skill} ${styles.skill_mysql}`}>MySQL</div>
          <div className={`${styles.skill} ${styles.skill_css}`}>CSS/SCSS</div>
          <div className={`${styles.skill} ${styles.skill_socket}`}>
            Socket.io
          </div>
          <div className={`${styles.skill} ${styles.skill_js}`}>
            Java Script
          </div>
        </div>
      </div>
      <p className={`${styles.tag} ${styles.last_tag}`}>{"</skills>"}</p>
    </div>
  );
};

export default Skills;
