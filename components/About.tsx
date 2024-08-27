import React from "react";
import grainImage from "../public/grain.jpg";
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import { DiGithub, DiJavascript, DiReact } from "react-icons/di";
import { SiSolidity, SiTailwindcss, SiVercel } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import mapImage from "../public/world-map.png";

type Props = {};

const toolboxItems = [
  {
    title: "Next.js",
    icon: RiNextjsFill,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    title: "React",
    icon: DiReact,
  },
  {
    title: "Solidity",
    icon: SiSolidity,
  },
  {
    title: "Github",
    icon: DiGithub,
  },
  {
    title: "Vercel",
    icon: SiVercel,
  },
];

const hobbies = [
  {
    title: "Music",
    icon: "🎧",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    icon: "🌎",
    left: "50%",
    top: "5%",
  },
  {
    title: "Shopping",
    icon: "🛍️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "SocialMedia",
    icon: "📱",
    left: "50%",
    top: "45%",
  },
  {
    title: "Content Writing",
    icon: "📝",
    left: "5%",
    top: "65%",
  },
  {
    title: "Electronics",
    icon: "🖥️",
    left: "45%",
    top: "70%",
  },
  {
    title: "Reading",
    icon: "📖",
    left: "80%",
    top: "11%",
  },
  {
    title: "Sports",
    icon: "🏃",
    left: "35%",
    top: "1%",
  },
];

const About = (props: Props) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <p className="font-semibold  tracking-widest bg-gradient-to-b from-orange-300 to-yellow-300 text-transparent bg-clip-text uppercase text-center text-lg md:text-2xl">
          About Us
        </p>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          See what we do
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Learn more about us and what we do.
        </p>
        <div className="flex flex-col md:mt-20 mt-10 gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8 space-y-8 md:space-y-0">
            {/* 1 */}
            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 p-6 after:pointer-events-none h-[320px] col-span-2 ">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="flex flex-col items-center justify-center">
                <div className="inline-flex gap-2 font-bold uppercase items-center justify-center tracking-widest">
                  <PiStarFourFill className="size-7 text-orange-300" />
                  <h3 className="font-serif text-3xl">My Story</h3>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-white/60">
                  Explore our story and see how we started.
                </p>
                <h3 className="mt-2">
                  We are a qualified team of developers who build awesome apps.
                </h3>
                <Image
                  src="/logo.png"
                  alt="logo"
                  className="h-full mt-5"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            {/* 2 */}
            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 p-0 after:pointer-events-none h-[320px] col-span-3">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="flex flex-col gap-2 font-bold uppercase items-center justify-center tracking-widest py-6">
                <div className="inline-flex gap-2 items-center">
                  <PiStarFourFill className="size-7 text-orange-300" />
                  <h3 className="font-serif text-3xl">
                    Technologies what we use
                  </h3>
                </div>
                <p className="text-sm text-white/60">
                  Learn about the technologies we use.
                </p>
              </div>
              {/* toolbox items */}
              <div>
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex flex-none py-0.5 gap-6 pr-6">
                    {toolboxItems.map((item) => (
                      <div
                        key={item.title}
                        className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl border p-2">
                          <item.icon className="size-10" />
                        </div>
                        <span className="font-semibold">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-6">
                  <div className="flex flex-none py-0.5 gap-6 pr-6 md:gap-24">
                    {[...toolboxItems].reverse().map((item) => (
                      <div
                        key={item.title}
                        className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl border p-2">
                          <item.icon className="size-10" />
                        </div>
                        <span className="font-semibold">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-5  md:gap-8 space-y-8 md:space-y-0">
            {/* 3 */}
            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 after:pointer-events-none h-[320px] col-span-3 flex flex-col p-6">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="flex flex-col gap-2 font-bold uppercase items-center justify-center tracking-widest">
                <div className="inline-flex gap-2 items-center ">
                  <PiStarFourFill className="size-7 text-orange-300" />
                  <h3 className="font-serif text-3xl">Beyond the work</h3>
                </div>
                <p className="text-sm text-white/60">
                  Our daily routine about how we increase our productivity and
                  efficiency.
                </p>
              </div>

              <div className="relative flex-1 mt-2">
                {hobbies.map((item) => (
                  <div
                    key={item.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-yellow-300 to-orange-500 items-center rounded-full py-1.5 absolute "
                    style={{
                      left: item.left,
                      top: item.top,
                    }}>
                    <span className="text-neutral-950 font-medium">
                      {item.title}
                    </span>
                    <span className="p-1">{item.icon}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* 4 */}
            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 p-0 col-span-2 after:pointer-events-none h-[320px]">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <Image
                src={mapImage}
                alt="about"
                className="h-full w-full object-contain"
                priority
              />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-2/3 bg-gradient-to-l from-yellow-500 to-orange-500 -rotate-3 rounded-full p-2 after:[content-''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-full z-0 after:z-10">
                <Image
                  src="/logo.png"
                  alt="about"
                  width={35}
                  height={35}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
