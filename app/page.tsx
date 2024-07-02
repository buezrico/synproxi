import Image from "next/image";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Courses from "@/app/components/Courses";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <Hero />
      <Courses />
      {/* <About /> */}
    </div>
  );
}
