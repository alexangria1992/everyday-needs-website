import React from 'react';
import styles from './MegaMenu.module.css';

type MenuName = 'shop' | 'collections' | 'makers';

type MegaMenuProps = {
  activeMenu: MenuName;
};
const MegaMenu = ({ activeMenu }: MegaMenuProps) => {
  return (
    <div className={styles.megaMenu}>
      <div className={styles.content}>
        <div className={styles.utilityColumn}>
          <a href='#'>Shop All</a>
          <a href='#'>Latest Arrivals</a>
          <a href='#'>Back in Stock</a>
          <a href='#'>Gift Voucher</a>
          <a href='#'>Sale</a>
          <a href='#'>The Edit</a>
        </div>
        <div className={styles.categoryColumn}>
          <a href='#'>Living</a>
          <a href='#'>Kitchen & Table</a>
          <a href='#'>Bedroom</a>
          <a href='#'>Bathroom</a>
          <a href='#'>Housekeeping</a>
          <a href='#'>Office & Paper</a>
          <a href='#'>Apparel & Accessories</a>
          <a href='#'>Outdoors</a>
          <a href='#'>Baby & Child</a>
        </div>
        <div className={styles.categoryColumn}>
          <a href='#'>Blankets & Cushions</a>
          <a href='#'>Rugs & Mats</a>
          <a href='#'>Baskets & Storage</a>
          <a href='#'>Incense & Home Fragrance</a>
          <a href='#'>Candles & Candle Holders</a>
          <a href='#'>Ceramics</a>
          <a href='#'>Hooks</a>
          <a href='#'>Lighting</a>
          <a href='#'>Planters & Vases</a>
          <a href='#'>Decorations</a>
          <a href='#'>Mirrors</a>
        </div>

        <div className={styles.featured}>
          <div className={styles.featuredCard}>
            <div className={styles.placeholderImage} />
            <p>Featured product</p>
          </div>
          <div className={styles.featuredCard}>
            <div className={styles.placeholderImage} />
            <p>Featured product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
