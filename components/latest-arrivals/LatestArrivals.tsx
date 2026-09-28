import React from 'react';
import styles from './LatestArrivals.module.css';
import Image from 'next/image';

const LatestArrivals = () => {
  return (
    <section className={styles.section}>
      <div className={styles.leftColumn}>
        <Image
          src='/images/Benny-RamenTakara-05-Web.webp'
          alt=''
          width={332}
          height={495}
          className={styles.leftImage}
        />
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>
            Shop // Latest
            <br />
            Arrivals
          </h2>

          <a href='#' className={styles.link}>
            Shop Latest Arrivals
          </a>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Image
          src='/images/Kinto-CLK-Instore03-Web.webp'
          alt=''
          width={515}
          height={770}
          className={styles.rightImage}
        />
      </div>
    </section>
  );
};

export default LatestArrivals;
