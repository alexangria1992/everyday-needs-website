import React from 'react';
import styles from './Journal.module.css';
import Image from 'next/image';

const Journal = () => {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2>The Journal</h2>

        <div className={styles.copy}>
          <p>
            The Journal is our way of staying connected to our community, while
            sharing the stories of local makers, artists, and businesses we
            admire.
          </p>

          <p>
            For our latest entry, we visited Prairie, the creative studio of
            Holly Houston, a self-taught jeweller, ceramic artist, mother, and
            gardener. We spent some time with Holly to learn more about her
            practice, her creative process, and Prairie.
          </p>
        </div>

        <a href='#' className={styles.journalButton}>
          View Journal
        </a>
      </div>

      <div className={styles.feature}>
        <p className={styles.category}>Interviews</p>
        <h3>Journal // Prairie Studio</h3>

        <div className={styles.imageWrapper}>
          <Image
            src='/images/journal/prairie-studio-claire-mossong-17.jpg'
            alt='Prairie Studio'
            fill
            className={styles.image}
            sizes='528px'
          />
        </div>

        <p className={styles.credit}>
          Images by Claire Mossong & Ophelia Mikkelson
        </p>

        <a href='#'>Read post</a>
      </div>
    </section>
  );
};

export default Journal;
