import Image from 'next/image';
import styles from './VisitStore.module.css';

const VisitStore = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src='/images/Tezza-0851_df73fad9-1dee-4f1c-bc3e-98ed49fc4c31.webp'
          alt='Everyday Needs Ponsonby store'
          fill
          className={styles.image}
          sizes='430px'
        />
      </div>

      <div className={styles.content}>
        <h2>
          Visit Us: Our
          <br />
          Ponsonby Store
        </h2>

        <p>
          Everyday Needs is for those who choose to live thoughtfully. Each
          piece is carefully sourced and personally curated for its design,
          quality, and everyday usefulness - products made to be used,
          appreciated, and kept. Our selection brings together hard-to-find
          pieces and trusted classics we return to again and again. It’s
          considered, distinctive, and always evolving. Proudly New
          Zealand-owned and operated, we’re here to help you make better choices
          for the way you live - discover something you’ll use and love, every
          day.
        </p>

        <a href='#'>About Us</a>
      </div>
    </section>
  );
};

export default VisitStore;
