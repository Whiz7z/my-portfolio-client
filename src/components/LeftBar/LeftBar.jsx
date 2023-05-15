import styles from "./LeftBar.module.scss";

const LeftBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <span className={styles.menu_item}>Main</span>
        <span className={styles.menu_item}>Projects</span>
        <span className={styles.menu_item}>Skills</span>
        <span className={styles.menu_item}>Contact</span>
      </div>
    </div>
  );
};

export default LeftBar;
