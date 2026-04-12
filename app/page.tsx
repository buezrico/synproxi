import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import FeaturedWork from "./components/FeaturedWork";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTABand from "./components/CTABand";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Stats />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CTABand />
    </div>
  );
}
