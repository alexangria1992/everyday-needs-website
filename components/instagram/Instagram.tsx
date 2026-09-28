import React from 'react';
import styles from './Instagram.module.css';
import Image from 'next/image';

const instagramImages = [
  '/images/Hinoki-Stool-Web.webp',
  '/images/Benny-RamenTakara-02-Web.webp',
  '/images/Claire-Mossong-AW26-Web-699.jpg',
];

const Instagram = () => {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2>Our Instagram</h2>

        <p>
          Dive into our world of timeless essentials through our lovingly
          produced and curated imagery. Explore everyday products and the people
          in our community we love, along with updates on store news. Follow us
          for a daily dose of inspiration and discover the beauty in the
          everyday.
        </p>

        <a href='#'>View all</a>
      </div>
      <div className={styles.imageGrid}>
        {instagramImages.map((image) => (
          <div className={styles.imageWrapper} key={image}>
            <Image src={image} alt='' fill className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
