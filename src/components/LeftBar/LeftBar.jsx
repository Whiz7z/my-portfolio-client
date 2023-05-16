import { useEffect } from "react";
import styles from "./LeftBar.module.scss";
import { useComponent } from "../../zustand/store";

const LeftBar = () => {
  const { setComponent, component } = useComponent((state) => state);

  useEffect(() => {
    if (!component) {
      setComponent("Hello");
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <span
          className={`${styles.menu_item} ${
            (component === "Hello" || component.type === "div") && styles.active
          }`}
          onClick={() => setComponent("Hello")}
        >
          Main
        </span>
        <span
          className={`${styles.menu_item} ${
            component === "Projects" && styles.active
          }`}
          onClick={() => setComponent("Projects")}
        >
          Projects
        </span>
        <span
          className={`${styles.menu_item} ${
            component === "Skills" && styles.active
          }`}
          onClick={() => setComponent("Skills")}
        >
          Skills
        </span>
        <span
          className={`${styles.menu_item} ${
            component === "Contact" && styles.active
          }`}
          onClick={() => setComponent("Contact")}
        >
          About Me
        </span>
      </div>
    </div>
  );
};

export default LeftBar;
