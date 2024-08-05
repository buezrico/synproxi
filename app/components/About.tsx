import Image from "next/image";
import React from "react";
import friends from "@/public/assets/images/friends.jpg";
import woman_sitting from "@/public/assets/images/woman_sitting.jpg";
import red_shirt_man from "@/public/assets/images/red_shirt_man.jpg";
import whatsapp from "@/public/assets/icons/whatsapp.png";
import { FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 py-20 items-center md:justify-between">
      <div className="w-full relative px-10">
        <Image
          src={friends}
          alt=""
          className=" h-full sm:h-80 w-full lg:h-full rounded-xl shadow border-2 border-teal-600 p-1 rotate-12"
        />
        <Image
          src={woman_sitting}
          alt=""
          className="h-16 w-16 sm:h-28 sm:w-28 rounded-full absolute -top-5 left-5 sm:left-0 shadow border-2 border-blue-600 p-1 animate-bounce"
        />
        <Image
          src={red_shirt_man}
          alt=""
          className="h-16 w-16 sm:h-28 sm:w-28 rounded-full absolute -bottom-0 right-5 sm:right-0 shadow border-2 border-red-600 p-1 animate-bounce"
        />
      </div>

      <div className="w-full flex flex-col gap-4 mt-20 lg:mt-0">
        <p className="text-blue-600">ABOUT US</p>
        <p className="text-slate-800 text-3xl md:text-4xl">
          Learn & Grow <span className="text-blue-600">Your Skills</span> From
          Anywhere.
        </p>

        <p className="text-slate-500 text-sm">
          Welcome to Synproxi, where we empower you to enhance your tech and
          digital skills from any location. Our mission is to provide top-tier
          education that helps you succeed in the digital world.
        </p>

        <div className="flex gap-8 justify-between flex-col sm:flex-row">
          <div className="w-full">
            <p className="font-medium text-blue-600">Flexible Timings</p>
            <p className="text-slate-500 text-justify text-sm">
              Our courses are designed to fit your schedule, allowing you to
              learn at your own pace without compromising on quality.
            </p>
          </div>
          <div className="w-full">
            <p className="font-medium text-blue-600">Expert Instructors</p>
            <p className="text-slate-500 text-justify text-sm">
              Learn from industry professionals who bring real-world experience
              and knowledge to the classroom.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 md:gap-8 items-center">
          <Link
            href={"https://chat.whatsapp.com/JmSB2Mgpwrr7NWAzjEpbyq"}
            target="_blank"
          >
            <button
              className={`group px-4 py-2 transition-all text-slate-50 bg-blue-600 hover:bg-blue-800 hover:shadow-lg duration-300 flex items-center gap-4 rounded-full w-fit place-self-start`}
            >
              <p className="font-medium text-sm">Join Community</p>

              <div className="group-hover:bg-blue-200 transition-all flex items-center justify-center p-2 bg-blue-100 text-blue-600 rounded-full">
                <FaPeopleGroup size={20} />
              </div>
            </button>
          </Link>

          <Link
            href={"https://call.whatsapp.com/voice/L9Ka1fP8ZLQwyikybhExWH "}
            target="_blank"
          >
            <div className="flex gap-4 items-center place-self-end cursor-pointer">
              <Image src={whatsapp} alt="whatsapp logo" className="w-10 h-10" />
              <div>
                <p className="text-sm text-slate-500">Contact Us Now</p>
                <p className="font-medium">+234-810-9169-579</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
