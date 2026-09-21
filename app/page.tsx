import Image from 'next/image';
import AnnouncementBar from '../components/annoucement-bar/AnnouncementBar';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Hero />
    </main>
  );
}
