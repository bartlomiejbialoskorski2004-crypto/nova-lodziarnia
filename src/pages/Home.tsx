import Hero from '../components/Hero';
import Story from '../components/Story';
import FeaturedMenu from '../components/FeaturedMenu';
import ScrollJourney from '../components/ScrollJourney';
import SeasonalOffer from '../components/SeasonalOffer';
import Testimonials from '../components/Testimonials';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Story />
        <FeaturedMenu />
        <ScrollJourney />
        <SeasonalOffer />
        <Testimonials />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
