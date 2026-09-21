import React from 'react';
import styles from './Hero.module.css';
import Header from '../header/Header';
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.brand}>
        <span className={styles.rule}></span>

        <span className={styles.word}>everyday</span>

        <span className={styles.rule}></span>

        <div className={styles.needsRow}>
          <span className={styles.word}>needs</span>
          <span className={styles.registered}>®</span>
        </div>

        <span className={styles.rule}></span>
      </div>
    </section>
  );
};

export default Hero;
