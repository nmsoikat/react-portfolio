import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import SocialIcons from "../shared/SocialIcons/SocialIcons";

const Home = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={props} className={styles.homeContainer}>
      <div className={styles.animationArea}>
        <div className={styles.itemWrap}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </div>
      </div>
      <div className={styles.mainContentWrap}>
        <h1>Nur Mohammad Soikat</h1>
        <p className={styles.designation}>MERN Stack Developer</p>
        <div className="tp-icons-wrap">
          <SocialIcons />
        </div>
      </div>
      <div className={styles.downButton}>
        <Link to="/about">More Info.</Link>
      </div>
    </animated.div>
  );
};

export default Home;
