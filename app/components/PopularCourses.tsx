import Image from "next/image";
import React from "react";
import web_development from "@/public/assets/images/web_development.jpg";
import forex_trading from "@/public/assets/images/forex_trading.jpg";
import ui_ux from "@/public/assets/images/ui_ux.jpg";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function PopularCourses() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 py-20 items-center md:justify-between">
      <div className="w-full flex flex-col gap-4 mt-20 lg:mt-0">
        <p className="text-blue-600">Our Courses</p>
        <p className="text-slate-800 text-3xl md:text-4xl">
          Our Most Popular <span className="text-blue-600">Courses</span>
        </p>

        <div className="grid sm:grid-cols-2 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16 pt-20">
          <div className="w-full px-4">
            <Image
              src={web_development}
              alt=""
              className="rounded shadow border-2 border-blue-600 p-1 rotate-6 hover:rotate-0 transition-all duration-300"
            />
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-sm font-medium text-blue-600">
                Web Development
              </p>

              <button
                className={`py-2 transition-all text-blue-600 text-xs md:text-sm duration-300 flex items-center gap-2 rounded w-fit hover:underline place-self-end px-4 bg-blue-100`}
              >
                <p className="">Enroll Now</p>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="w-full px-2">
            <Image
              src={ui_ux}
              alt=""
              className="rounded shadow border-2 border-red-600 p-1 rotate-6 hover:rotate-0 transition-all duration-300"
            />
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-sm font-medium text-red-600">UI/UX Design</p>

              <button
                className={`py-2 transition-all text-red-600 text-xs md:text-sm duration-300 flex items-center gap-2 rounded w-fit hover:underline place-self-end px-4 bg-red-100`}
              >
                <p className="">Enroll Now</p>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="w-full  px-2">
            <Image
              src={forex_trading}
              alt=""
              className="rounded shadow border-2 border-green-600 p-1 rotate-6 hover:rotate-0 transition-all duration-300"
            />
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-sm font-medium text-green-600">
                Forex Trading
              </p>

              <button
                className={`py-2 transition-all text-green-600 text-xs md:text-sm duration-300 flex items-center gap-2 rounded w-fit hover:underline place-self-end px-4 bg-green-100`}
              >
                <p className="">Enroll Now</p>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
