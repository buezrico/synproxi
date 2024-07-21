import Countup from "@/app/components/Countup";
import Courses from "@/app/components/Courses";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import PopularCourses from "@/app/components/PopularCourses";
import Whatsapp from "@/app/components/Whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 lg:gap-20 pb-20">
      <Hero />
      <Courses />
      <About />
      <Countup />
      <PopularCourses />
      <Whatsapp />
    </div>
  );
}
