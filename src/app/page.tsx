import HeroCarousel from '../components/HeroCarousel';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceProcess from '../components/ServiceProcess';
import ServiceAreasCarousel from '../components/ServiceAreasCaroussel';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import ItemsWeTake from '../components/ItemsWeTake';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Services />
      <ItemsWeTake />
      <WhyChooseUs />
      <ServiceProcess />
      <ServiceAreasCarousel />
      <Testimonials />
      <CallToAction />
    </>
  );
}