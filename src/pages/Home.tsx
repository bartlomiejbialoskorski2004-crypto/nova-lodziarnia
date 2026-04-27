import Hero from '../components/Hero';
import Story from '../components/Story';
import FeaturedMenu from '../components/FeaturedMenu';
import SeasonalOffer from '../components/SeasonalOffer';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Story />
        <FeaturedMenu />
        <SeasonalOffer />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
