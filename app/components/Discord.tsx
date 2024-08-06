import discord from "@/public/assets/images/discord.png";
import Image from "next/image";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Discord() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between">
      <div className="w-[50%] h-[50%] md:w-[60%] md:h-[60%]">
        <Image src={discord} alt="" className="w-full lg:h-full" />
      </div>

      <div className="w-full flex flex-col gap-4">
        <p className="text-blue-600">COMMUNITY</p>
        <p className="text-slate-800 text-3xl md:text-4xl">
          Join Our <span className="text-blue-600">Discord</span> Community.
        </p>

        <p className="text-slate-500 text-sm">
          We’re excited to have you join our community! Connect with fellow
          learners, share your progress, and get real-time support from our
          mentors. Our Discord server is the perfect place to stay updated on
          upcoming events and resources. Don’t miss out on any of the action!
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
