"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <nav className="py-4 z-40 fixed w-full flex items-center justify-center bg-slate-50">
      <div className="w-[90%] lg:w-[85%]">
        <div className="flex items-center justify-between gap-4">
          <div className="z-50">
            <p className="text-2xl md:text-3xl font-bold ">
              Syn<span className="text-blue-600">Proxi</span>
            </p>
          </div>

          <div
            className={`lg:flex gap-10 ${
              menu
                ? "fixed h-screen w-4/6 md:w-1/2 top-0 left-0 flex flex-col bg-blue-50 shadow p-8 pt-28"
                : "hidden"
            }`}
          >
            <ul
              className={`flex gap-10 text-slate-600 text-sm  ${
                menu ? "flex-col pl-2 pt-20" : "items-center"
              }`}
            >
              <li className="cursor-pointer hover:text-blue-600">About</li>
              <li className="cursor-pointer hover:text-blue-600">Courses</li>
              <li className="cursor-pointer hover:text-blue-600">
                Testimonials
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Instructors
              </li>
            </ul>

            <button
              className={`group px-4 py-2 transition-all text-slate-50 bg-blue-600 hover:bg-blue-800 hover:shadow-lg duration-300 flex items-center gap-4 rounded w-fit`}
            >
              <p className="font-medium text-sm">Join For Free</p>

              <div className="group-hover:bg-blue-200 transition-all flex items-center justify-center p-2 bg-blue-100 text-blue-600 rounded">
                <IoIosArrowForward size={24} />
              </div>
            </button>
          </div>

          <div
            className="group-hover:bg-blue-200 transition-all flex items-center justify-center p-2 bg-blue-100 text-blue-600 rounded lg:hidden cursor-pointer shadow hover:shaodw-lg hover:text-blue-800"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <AiOutlineClose size={24} /> : <HiMenuAlt3 size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
}
