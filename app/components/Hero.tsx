"use client";

import React from "react";
import { Bounce, Slide } from "react-awesome-reveal";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import girl_with_laptop from "@/public/assets/images/girl_with_laptop.png";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="min-h-screen w-full justify-center items-center flex flex-col-reverse md:flex-row gap-4 mt-32 md:mt-20 pt-10 md:pt-0">
      <Slide>
        <div className="h-full w-full sm:h-[70%] sm:w-[70%] md:h-full md:w-full flex items-center justify-center md:items-end">
          <Image
            src={girl_with_laptop}
            alt="girl with laptop"
            className="h-[70%] w-[70%]"
          />
        </div>
      </Slide>

      <div className="w-full flex flex-col gap-4">
        <Bounce>
          <h1 className="text-5xl xl:text-7xl md:text-center font-bold leading-snug md:leading-snug text-slate-800">
            Learn<span className="text-blue-600 px-2 font-bold">Today,</span>{" "}
            <br />
            Lead<span className="text-blue-600 px-2 font-bold">
              Tomorrow
            </span>{" "}
            in Tech.
          </h1>
        </Bounce>
        <p className="md:text-center font-medium text-slate-600">
          <Typewriter
            words={[
              "Join Synproxi and gain the skills you need to succeed in the ever-evolving tech landscape.",
            ]}
            // loop={0}
            cursor
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </p>
        <div className="mt-8 flex flex-col justify-center lg:flex-row gap-4 w-full">
          <Bounce>
            <button className="group px-8 py-4 transition-all text-slate-50 bg-blue-600 hover:bg-blue-800 flex items-center justify-center gap-4 rounded-full shadow-lg hover:shadow-sm w-full lg:w-fit">
              <p className="font-medium">Find Course</p>

              <IoIosArrowForward size={24} />
            </button>
          </Bounce>
          <Bounce>
            <button className="group px-8 py-4 transition-all text-blue-600 bg-transparent border border-blue-600 hover:border-blue-800 flex items-center justify-center gap-4 rounded-full shadow-lg hover:shadow-sm duration-300 w-full lg:w-fit">
              <p className="font-medium">Get in Touch</p>

              <FiMessageCircle size={22} />
            </button>
          </Bounce>
        </div>
      </div>
    </main>
  );
}
