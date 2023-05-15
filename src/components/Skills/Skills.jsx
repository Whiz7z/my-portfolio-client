import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.tag} ${styles.first_tag}`}>{"<skills>"}</p>
      <div className={styles.content}>
        <div className={`${styles.collumn} ${styles.left}`}>
          <div className={`${styles.skill} ${styles.skill_react}`}>
            React<span>Routing</span>
          </div>
          <div className={`${styles.skill} ${styles.skill_redux}`}>
            Redux<span>RTKQuery</span>
          </div>
          <div className={`${styles.skill} ${styles.skill_git}`}>Git</div>
          <div className={`${styles.skill} ${styles.skill_node}`}>Node</div>
          <div className={`${styles.skill} ${styles.skill_express}`}>
            Express<span>JWT</span>
          </div>
        </div>
        <div className={`${styles.collumn} ${styles.right}`}>
          <div className={`${styles.skill} ${styles.skill_mongo}`}>
            Mongo<span>CRUD</span>
          </div>
          <div className={`${styles.skill} ${styles.skill_mysql}`}>
            MySQL
            <span>CRUD</span>
          </div>
          <div className={`${styles.skill} ${styles.skill_css}`}>
            CSS/SCSS<span>Responsive</span>
          </div>
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
