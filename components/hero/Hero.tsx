'use client';
import React, { useState } from 'react';
import styles from './Hero.module.css';
import Header from '../header/Header';
import Image from 'next/image';
import MegaMenu from '../mega-menu/MegaMenu';

type MenuName = 'shop' | 'collections' | 'makers';

const Hero = () => {
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  return (
    <section className={styles.hero}>
      <Image
        src='/images/hero.jpg'
        alt=''
        fill
        priority
        className={styles.heroImage}
      />
      <div className={styles.navShell} onMouseLeave={() => setActiveMenu(null)}>
        {activeMenu && <MegaMenu activeMenu={activeMenu} />}
        <Header
          menuOpen={activeMenu !== null}
          onMenuEnter={setActiveMenu}
          activeMenu={activeMenu}
        />
      </div>
      <div className={styles.brand}>
        <span className={styles.rule}></span>

        <span className={styles.word}>everyday</span>

        <span className={styles.rule}></span>

        <div className={styles.needsRow}>
          <span className={styles.word}>needs</span>
          <span className={styles.registered}>®</span>
        </div>

        <span className={styles.rule}></span>
      </div>
    </section>
  );
};

export default Hero;
