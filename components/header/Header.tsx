import styles from './Header.module.css';

type MenuName = 'shop' | 'collections' | 'makers';

type HeaderProps = {
  menuOpen: boolean;
  onMenuEnter: (menu: MenuName) => void;
};
const Header = ({ menuOpen, onMenuEnter }: HeaderProps) => {
  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <nav className={styles.primaryNav}>
        <a href='#' onMouseEnter={() => onMenuEnter('shop')}>
          Shop
        </a>
        <a href='#' onMouseEnter={() => onMenuEnter('collections')}>
          Collections
        </a>
        <a href='#' onMouseEnter={() => onMenuEnter('makers')}>
          The Makers
        </a>
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
