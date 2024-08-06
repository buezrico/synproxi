"use client";

import baah from "@/public/assets/images/baah.jpg";
import mohammed from "@/public/assets/images/mohammed.jpg";
import silvernus from "@/public/assets/images/silvernus.jpg";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const grey_qo = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Testimonials() {
  const [testimony, setTestimony] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setTestimony(
          (prevTestimony) => (prevTestimony + 1) % testimonials.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="flex flex-col gap-12 pt-12">
      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-500">Testimonials</p>
        <h2 className="text-3xl font-semibold">
          What Our <span className="text-blue-600">Students Say</span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-between gap-10">
        <div
          className="flex h-full w-[90%] flex-col gap-8 text-center md:w-[80%] lg:w-[60%] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col gap-1">
            <p
              className={`${grey_qo.className} text-3xl font-bold text-blue-600`}
            >
              {testimonials[testimony].name}
            </p>
            <p className="text-sm text-teal-600">
              {testimonials[testimony].position}
            </p>
          </div>
          <p className="text-justify lg:text-center font-normal">
            {testimonials[testimony].testimony}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`flex h-20 w-20 cursor-pointer flex-col items-center gap-4 lg:h-24 lg:w-24 `}
                onClick={() => setTestimony(index)}
              >
                <div>
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-full ${
                      testimony == index ? "bg-blue-600" : ""
                    }`}
                  >
                    <div className="h-2 w-2 rounded-full bg-slate-50"></div>
                  </div>
                </div>
                <Image
                  src={item.image}
                  alt="client image"
                  className={`h-full w-full border-2 p-2 hover:opacity-100 ${
                    testimony == index
                      ? "rounded border-blue-600 opacity-100"
                      : "rounded-full border-slate-300 opacity-70"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const testimonials = [
  {
    name: "Ifoghale Silvernus",
    position: "Front-End Developer",
    testimony:
      "I'm thrilled to share my positive experience at Synproxi, the institute is equipped with qualified  and experienced tutors, the teaching pattern is exceptional, with a well structured up-to-date curriculum, practical based learning and hands-on projects. Synproxi has a robust community that fosters productivity, creativity and collaboration. Overall Synproxi is nothing short of Exceptional. If you're looking to upskill or transition into a tech, Synproxi got you.",
    image: silvernus,
  },
  {
    name: "Lord Baah",
    position: "Front-End Developer",
    testimony:
      "Synproxi's Frontend program was a game-changer! The instructors were excellent, the hands-on projects were practical, and I feel confident tackling real-world frontend challenges. I highly recommend this program for anyone looking to level up their skills!",
    image: baah,
  },
  {
    name: "Abubakari Mohammed",
    position: "Front-End Developer",
    testimony:
      "Learning Frontend web development with Synproxi has been an incredible journey. The instructors are knowledgeable and supportive, breaking down complex concepts into easily understandable lessons. The hands-on projects and real-world applications made the learning experience both engaging and practical. After completing the course, I feel confident in my skills and ready to tackle any web development challenge. Plus, earning a certificate at the end was a great bonus!",
    image: mohammed,
  },
  //   {
  //     name: "Kosi Anthony",
  //     position: "Cyber Security Specialist",
  //     testimony:
  //       "I had been worried about finding a suitable PPA until I discovered this platform. The user-friendly interface and personalized recommendations helped me find a placement that fits my career aspirations. I can't wait to contribute to my community through my service year!",
  //     image: client4,
  //   },
];
