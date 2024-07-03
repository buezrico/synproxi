import Countup from "@/app/components/Countup";
import Courses from "@/app/components/Courses";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <Hero />
      <Courses />
      {/* <About /> */}

      <Countup />
    </div>
  );
}
