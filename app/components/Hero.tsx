import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <main className="h-screen w-full justify-center items-center flex flex-col gap-4">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl text-left font-bold leading-snug md:leading-snug text-slate-800">
          Learn<span className="text-blue-600 px-2 font-bold">Today,</span>{" "}
          <br />
          Lead<span className="text-blue-600 px-2 font-bold">Tomorrow</span> in
          Tech.
        </h1>{" "}
        <p className="text-start font-medium text-slate-600">
          Join Synproxi and gain the skills you need to succeed in the
          ever-evolving tech landscape.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <button className="group px-8 py-4 transition-all text-slate-50 bg-blue-600 hover:bg-blue-800 flex items-center justify-center gap-4 rounded-full shadow-lg">
            <p className="font-medium">Find Course</p>

            <IoIosArrowForward size={24} />
          </button>{" "}
          <button className="group px-8 py-4 transition-all text-blue-600 bg-transparent border border-blue-600 hover:border-blue-800 flex items-center justify-center gap-4 rounded-full shadow-lg duration-300">
            <p className="font-medium">Get in Touch</p>

            <FiMessageCircle size={22} />
          </button>
        </div>
      </div>
    </main>
  );
}
