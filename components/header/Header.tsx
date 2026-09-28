import styles from './Header.module.css';

type MenuName = 'shop' | 'collections' | 'makers';

type HeaderProps = {
  menuOpen: boolean;
  onMenuEnter: (menu: MenuName) => void;
  activeMenu: MenuName | null;
  onMenuClose: () => void;
};
const Header = ({
  menuOpen,
  onMenuEnter,
  activeMenu,
  onMenuClose,
}: HeaderProps) => {
  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <nav className={styles.primaryNav}>
        <a
          className={activeMenu === 'shop' ? styles.active : ''}
          href='#'
          onMouseEnter={() => onMenuEnter('shop')}
        >
          Shop
        </a>
        <a
          className={activeMenu === 'collections' ? styles.active : ''}
          href='#'
          onMouseEnter={() => onMenuEnter('collections')}
        >
          Collections
        </a>
        <a
          className={activeMenu === 'makers' ? styles.active : ''}
          href='#'
          onMouseEnter={() => onMenuEnter('makers')}
        >
          The Makers
        </a>
        <a
          href='#'
          onMouseEnter={onMenuClose}
          className={styles.hoverUnderline}
        >
          The Journal
        </a>
        <a
          href='#'
          onMouseEnter={onMenuClose}
          className={styles.hoverUnderline}
        >
          Loyalty
        </a>
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
