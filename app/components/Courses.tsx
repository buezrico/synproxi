"use client";

import Image from "next/image";
import React from "react";
import coding from "@/public/assets/icons/coding.png";
import cyber_security from "@/public/assets/icons/cyber-security.png";
import forex_trading from "@/public/assets/icons/forex.png";
import ui from "@/public/assets/icons/ui.png";
import machine_learning from "@/public/assets/icons/machine-learning.png";
import { Bounce, JackInTheBox, Slide } from "react-awesome-reveal";

export default function Courses() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-8">
        <JackInTheBox cascade>
          <div className="bg-red-50 w-full rounded p-4 flex flex-row-reverse lg:flex-row items-center gap-2">
            <div className="min-w-12 min-h-12 w-12 h-12 border border-red-400 p-3 rounded-full bg-slate-50 shadow">
              <Image src={cyber_security} alt="" className="rounded-full" />
            </div>{" "}
            <p className="text-red-600 font-medium">Cyber Security</p>
          </div>
          <div className="bg-blue-50 w-full rounded p-4 flex items-center gap-2">
            <div className="min-w-12 min-h-12 w-12 h-12 border border-blue-400 p-3 rounded-full bg-slate-50 shadow">
              <Image src={coding} alt="" className="rounded-full" />
            </div>{" "}
            <p className="text-blue-600 font-medium">Web Development</p>
          </div>
          <div className="bg-green-50 w-full rounded p-4 flex flex-row-reverse lg:flex-row items-center gap-2">
            <div className="min-w-12 min-h-12 w-12 h-12  border border-green-400 p-3 rounded-full bg-slate-50 shadow">
              <Image src={forex_trading} alt="" className="rounded-full" />
            </div>{" "}
            <p className="text-green-600 font-medium">Forex Trading</p>
          </div>
          <div className="bg-violet-50 w-full rounded p-4 flex items-center gap-2">
            <div className="min-w-12 min-h-12 w-12 h-12  border border-violet-400 p-3 rounded-full bg-slate-50 shadow">
              <Image src={ui} alt="" className="rounded-full" />
            </div>{" "}
            <p className="text-violet-600 font-medium">UI/UX Design</p>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
}
