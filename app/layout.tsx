import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Synproxi | Hub Of Innovations",
  description:
    "Join Synproxi and gain the skills you need to succeed in the ever-evolving tech landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} bg-blue-50 w-full h-full flex`}>
        <div className="w-full h-full flex flex-col items-center">
          <Navbar />
          <div className="h-full w-[90%] lg:w-[85%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
