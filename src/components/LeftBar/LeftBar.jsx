import { useEffect, useRef, useState } from "react";
import styles from "./LeftBar.module.scss";
import { useComponent } from "../../zustand/store";
import { FaTimes, FaBars } from "react-icons/fa";
function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

const LeftBar = () => {
  const { setComponent, component } = useComponent((state) => state);
  const navRef = useRef();
  const showBar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    if (!component) {
      setComponent("Hello");
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.menu} ref={navRef}>
        <span
          className={`${styles.menu_item} ${
            (component === "Hello" || component.type === "div") && styles.active
          }`}
          onClick={() => {
            setComponent("Hello");
            if (screenSize.width <= 955) showBar();
          }}
        >
          Main
        </span>
        <span
          className={`${styles.menu_item} ${
            component === "Projects" && styles.active
          }`}
          onClick={() => {
            setComponent("Projects");
            if (screenSize.width <= 955) showBar();
          }}
        >
          Projects
        </span>
        <span
          className={`${styles.menu_item} ${
            component === "Skills" && styles.active
          }`}
          onClick={() => {
            setComponent("Skills");
            if (screenSize.width <= 955) showBar();
          }}
        >
          Skills
        </span>
        <span
          className={`${styles.menu_item} ${
            component === "Contact" && styles.active
          }`}
          onClick={() => {
            setComponent("Contact");
            if (screenSize.width <= 955) showBar();
          }}
        >
          About Me
        </span>
        <button
          className={`${styles.nav_btn} ${styles.nav_close_btn}`}
          onClick={() => showBar()}
        >
          <FaTimes />
        </button>
      </div>
      <button
        className={`${styles.nav_btn} ${styles.nav_burger_btn}`}
        onClick={() => showBar()}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default LeftBar;
