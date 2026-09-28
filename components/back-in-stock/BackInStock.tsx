import React from 'react';
import styles from './BackInStock.module.css';
import Image from 'next/image';

const products = [
  {
    maker: 'Toyo-Sasaki',
    name: 'Japanese Beer Glass Gift Set',
    price: '$99',
    image: '/images/products/TokyoGlass_Beer_web.webp',
  },
  {
    maker: 'Midori',
    name: 'MD Wall Calendar 2027',
    price: '$49',
    image: '/images/products/MD-wall-calendar-2027-3-Web.webp',
  },
  {
    maker: 'Ono Rina',
    name: 'Michiyuki-Tou LED Paper Lantern // Tall',
    price: '$169',
    image:
      '/images/products/Japaneseaperlantern_tall_web_add6e281-a472-4702-b55e-9958e9b7d1cd.webp',
  },
];

const BackInStock = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Shop // Back in Stock</h2>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <article className={styles.productCard} key={product.name}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt='Japanese Beer Glass Gift Set'
                fill
                className={styles.productImage}
              />
            </div>

            <div className={styles.productInfo}>
              <p className={styles.maker}>{product.maker}</p>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BackInStock;
