import React from 'react';
import styles from './SpringRefresh.module.css';
import Image from 'next/image';
const SpringRefresh = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2>Spring Refresh</h2>

        <p>
          Explore the Spring Refresh collection, which showcases items from Iris
          Hantverk, who bring new dimensions to the concept of being sensitively
          made by hand, and a selection of products crafted from Hinoki Cypress
          by our network of expert Japanese makers.
        </p>

        <a href='#'>Shop the Spring Refresh Collection</a>
      </div>

      <div className={styles.imageColumn}>
        <Image
          src='/images/Matapihi-CM_59_of_65.webp'
          alt=''
          fill
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default SpringRefresh;
