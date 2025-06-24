import HeroSlideshow from '../components/HeroSlideshow';
import Services from '../components/Services';
import ItemsWeTake from '../components/ItemsWeTake';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceProcess from '../components/ServiceProcess';
import ServiceAreasCaroussel from '../components/ServiceAreasCaroussel';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <ServiceAreasCaroussel />
      <Services />
      <ItemsWeTake />
      <WhyChooseUs />
      <ServiceProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
}