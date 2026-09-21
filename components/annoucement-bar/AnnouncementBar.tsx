import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
  return (
    <div className={styles.announcementBar}>
      <p className={styles.message}> Fair Trade Bangladesh // Back in Stock</p>
      <button
        className={styles.closeButton}
        type='button'
        aria-label='Close annoucement'
      >
        x
      </button>
    </div>
  );
};

export default AnnouncementBar;
