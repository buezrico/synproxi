import Image from "next/image";
import React from "react";
import friends from "@/public/assets/images/friends.jpg";
import friends2 from "@/public/assets/images/friends2.jpg";
import friends3 from "@/public/assets/images/friends3.jpg";
import friends4 from "@/public/assets/images/friends4.jpg";
import whatsapp from "@/public/assets/images/whatsapp.png";
import { FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";

export default function Whatsapp() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between">
      <div className="w-[60%] h-[60%] md:w-[80%] md:h-[80%] relative px-10 flex items-center justify-center">
        <Image src={whatsapp} alt="" className="w-full lg:h-full" />
      </div>

      <div className="w-full flex flex-col gap-4">
        <p className="text-green-600">COMMUNITY</p>
        <p className="text-slate-800 text-3xl md:text-4xl">
          Join Our <span className="text-green-600">Whatsapp</span> Community.
        </p>

        <p className="text-slate-500 text-sm">
          Welcome to Synproxi, where we empower you to enhance your tech and
          digital skills from any location. Our mission is to provide top-tier
          education that helps you succeed in the digital world.
        </p>

        <Link
          href={"https://chat.whatsapp.com/JmSB2Mgpwrr7NWAzjEpbyq"}
          target="_blank"
        >
          <button
            className={`group px-8 py-2 transition-all text-slate-50 bg-blue-600 hover:bg-blue-800 hover:shadow-lg duration-300 flex items-center justify-center gap-4 rounded-full w-fit`}
          >
            <p className="font-medium text-sm">Join Community</p>

            <div className="group-hover:bg-blue-200 transition-all flex items-center justify-center p-2 bg-blue-100 text-blue-600 rounded-full">
              <FaPeopleGroup size={20} />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
