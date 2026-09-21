import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.primaryNav}>
        <a href='#'>Shop</a>
        <a href='#'>Collections</a>
        <a href='#'>The Makers</a>
        <a href='#'>The Journal</a>
        <a href='#'>Loyalty</a>
      </nav>
      <nav className={styles.utilityNav} aria-label='Utility navigation'>
        <a href='#'>Search</a>
        <a href='#'>Account</a>
        <a href='#'>Your Edit</a>
        <a href='#'>NZD⌄</a>
        <a href='#'>Cart (0)</a>
      </nav>
    </header>
  );
};

export default Header;
