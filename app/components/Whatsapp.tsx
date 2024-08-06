import whatsapp from "@/public/assets/images/whatsapp.png";
import Image from "next/image";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Whatsapp() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:justify-between">
      <div className="w-[50%] h-[50%] md:w-[60%] md:h-[60%]">
        <Image src={whatsapp} alt="" className="w-full lg:h-full" />
      </div>

      <div className="w-full flex flex-col gap-4">
        <p className="text-green-600">COMMUNITY</p>
        <p className="text-slate-800 text-3xl md:text-4xl">
          Join Our <span className="text-green-600">Whatsapp</span> Community.
        </p>

        <p className="text-slate-500 text-sm">
          We&apos;re thrilled to welcome you to our community! By joining our
          WhatsApp group, you&apos;ll be able to connect with other passionate
          learners, exchange ideas, and receive guidance from experienced
          mentors. Stay informed about our latest events, resources, and
          announcements.
        </p>

        <Link href={"https://discord.gg/HV3ehxqZ"} target="_blank">
          <button
            className={`group px-8 py-2 transition-all text-slate-50 bg-green-600 hover:bg-green-800 hover:shadow-lg duration-300 flex items-center justify-center gap-4 rounded-full w-fit`}
          >
            <p className="font-medium text-sm">Join Community</p>

            <div className="group-hover:bg-green-200 transition-all flex items-center justify-center p-2 bg-green-100 text-green-600 rounded-full">
              <FaPeopleGroup size={20} />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
