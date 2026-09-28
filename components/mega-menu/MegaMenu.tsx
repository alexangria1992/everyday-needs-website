import React from 'react';
import styles from './MegaMenu.module.css';

const makerColumns = [
  [
    {
      letter: 'A',
      makers: ['Abel', 'Alexander Mills', 'Apartamento', 'Autumn Sonata'],
    },
    {
      letter: 'B',
      makers: ['BAR BAR', 'Barebones'],
    },
    {
      letter: 'C',
      makers: ['Claska DO', 'Classiky', 'Common Garden'],
    },
    {
      letter: 'D',
      makers: ['Delfonics', "Dr Bronner's"],
    },
    {
      letter: 'E',
      makers: ['Escuyer', 'Everyday Needs'],
    },
    {
      letter: 'F',
      makers: ['Fair Trade Bangladesh'],
    },
    {
      letter: 'G',
      makers: ['Grant Bailey'],
    },
  ],

  [
    {
      letter: 'H',
      makers: ['Hario', 'Hetkinen', 'Hinu', 'Hōhepa'],
    },
    {
      letter: 'I',
      makers: ['Iris Hantverk'],
    },
    {
      letter: 'J',
      makers: ['Japanese Craft', 'Japanese Incense'],
    },
    {
      letter: 'K',
      makers: ['King Bees', 'Kinto', 'Kirsten Dryburgh'],
    },
    {
      letter: 'L',
      makers: ['Leuchtfeuer-Strickwaren', 'Lucky Luijk'],
    },
  ],

  [
    {
      letter: 'M',
      makers: [
        'Martino Gamper',
        'Maruhiro',
        'Maryse',
        'Midori',
        'Mr Kitly',
        'Mungo',
      ],
    },
    {
      letter: 'N',
      makers: ['Nůž'],
    },
    {
      letter: 'O',
      makers: ['Ono Rina', 'Opinel'],
    },
    {
      letter: 'P',
      makers: [
        'PLYWOOD Laboratory',
        'Palorosa',
        'Penco',
        'Prairie',
        'Provider Store',
      ],
    },
    {
      letter: 'R',
      makers: ['Redecker', 'Rodopska Takan', 'Røros Tweed'],
    },
  ],

  [
    {
      letter: 'S',
      makers: [
        'Sage Journal',
        'Scott Brough',
        'Shunshun',
        'Six Point Press',
        'Sori Yanagi',
        'Southeast Craft',
        'Stanley',
        'Stitchwallah',
        'Swedish Dream',
        'Sänger GmbH',
        'Sén Living',
      ],
    },
    {
      letter: 'T',
      makers: ['Thread-Line', 'Toyo-Sasaki', "Traveler's Company", 'Trusco'],
    },
    {
      letter: 'V',
      makers: ['Vintage Kilim', 'Vintage Stitch Up'],
    },
  ],

  [
    {
      letter: 'W',
      makers: ['Wild Love', 'Wool Slippers'],
    },
  ],
];
type MenuName = 'shop' | 'collections' | 'makers';

type MegaMenuProps = {
  activeMenu: MenuName;
  menuOpen: boolean;
};
const MegaMenu = ({ activeMenu, menuOpen }: MegaMenuProps) => {
  return (
    <div className={`${styles.megaMenu} ${menuOpen ? styles.open : ''}`}>
      {activeMenu === 'shop' && (
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
      )}
      {activeMenu === 'collections' && (
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
            <a href='#'>Gifting</a>
            <a href='#'>Seasonal</a>
            <a href='#'>Made in Aotearoa</a>
            <a href='#'>Made in Japan</a>
            <a href='#'>Our Everyday Favourites</a>
            <a href='#'>Travel Companions</a>
            <a href='#'>Local Ceramics</a>
            <a href='#'>The Scent Edit</a>
            <a href='#'>The Homebody</a>
            <a href='#'>The Cook</a>
          </div>

          <div className={styles.categoryColumn}>
            <a href='#'>The Creative</a>
            <a href='#'>The Gardener</a>
            <a href='#'>The Happy Couple</a>
            <a href='#'>Hello, Baby!</a>
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
      )}

      {activeMenu === 'makers' && (
        <div className={styles.makersContent}>
          {makerColumns.map((column, columnIndex) => (
            <div className={styles.makerColumn} key={columnIndex}>
              {column.map((group) => (
                <div className={styles.makerGroup} key={group.letter}>
                  <span className={styles.makerLetter}>{group.letter}</span>
                  <div className={styles.makerLinks}>
                    {group.makers.map((maker) => (
                      <a href='#' key={maker}>
                        {maker}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
