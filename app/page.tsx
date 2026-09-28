import Image from 'next/image';
import AnnouncementBar from '../components/annoucement-bar/AnnouncementBar';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import LatestArrivals from '@/components/latest-arrivals/LatestArrivals';
import SpringRefresh from '@/components/spring-refresh/SpringRefresh';
import BackInStock from '@/components/back-in-stock/BackInStock';
import localFont from 'next/font/local';

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Hero />
      <LatestArrivals />
      <SpringRefresh />
      <BackInStock />
    </main>
  );
}
