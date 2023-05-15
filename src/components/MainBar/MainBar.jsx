import { useState, useEffect } from "react";

import styles from "./MainBar.module.scss";
import Hello from "../Hello/Hello";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import onceWheel from "once-wheel";
import { useComponent } from "../../zustand/store";

const MainBar = () => {
  const [element, setElement] = useState(<Hello />);
  const [scrollCount, setScrollCount] = useState(0);
  const { setComponent, component } = useComponent((state) => state);

  function scrollDownHandler() {
    setScrollCount(scrollCount + 1);
  }

  function scrollUpHandler() {
    setScrollCount(scrollCount - 1);
  }

  onceWheel(scrollDownHandler, scrollUpHandler);

  // const handleScroll = (event) => {
  //   //console.log(event);
  //   if (!event.ctrlKey && event.deltaY > 0) {
  //     setScrollCount((prev) => prev + 1);
  //   } else if (!event.ctrlKey && event.deltaY < 0) {
  //     setScrollCount((prev) => prev - 1);
  //   }
  // };

  useEffect(() => {
    console.log(scrollCount);
    if (scrollCount < 3 && scrollCount > 0) {
      setComponent(<Hello />);
    } else if (3 < scrollCount && scrollCount < 6) {
      setComponent(<Projects />);
    } else if (6 < scrollCount && scrollCount < 9) {
      setComponent(<Skills />);
    } else if (9 < scrollCount && scrollCount < 12) {
      setComponent(<Contact />);
    } else if (scrollCount > 12) {
      setScrollCount(12);
    } else if (scrollCount <= 0) {
      setScrollCount(0);
    }
  }, [scrollCount]);
  return <div className={styles.container}>{component}</div>;
};

export default MainBar;
