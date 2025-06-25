import HeroSlideshow from '../components/HeroSlideshow';
import ServiceCards from '../components/ServiceCards';
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
      <div className="relative">
        <HeroSlideshow />
        <div className="container-custom relative z-30">
          <ServiceCards />
        </div>
      </div>
      <div className="pt-32"></div>
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