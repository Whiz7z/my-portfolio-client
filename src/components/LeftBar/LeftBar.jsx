import { useEffect } from "react";
import styles from "./LeftBar.module.scss";
import { useComponent } from "../../zustand/store";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import MainBar from "../MainBar/MainBar";
import Hello from "../Hello/Hello";

const LeftBar = () => {
  const { setComponent, component } = useComponent((state) => state);

  useEffect(() => {
    if (!component) {
      setComponent(<Hello />);
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <span
          className={`${styles.menu_item} ${
            (component.type.name === "Hello" || component.type === "div") &&
            styles.active
          }`}
          onClick={() => setComponent(<Hello />)}
        >
          Main
        </span>
        <span
          className={`${styles.menu_item} ${
            component.type.name === "Projects" && styles.active
          }`}
          onClick={() => setComponent(<Projects />)}
        >
          Projects
        </span>
        <span
          className={`${styles.menu_item} ${
            component.type.name === "Skills" && styles.active
          }`}
          onClick={() => setComponent(<Skills />)}
        >
          Skills
        </span>
        <span
          className={`${styles.menu_item} ${
            component.type.name === "Contact" && styles.active
          }`}
          onClick={() => setComponent(<Contact />)}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default LeftBar;
