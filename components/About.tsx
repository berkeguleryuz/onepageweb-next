import React from "react";
import grainImage from "../public/grain.jpg";
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import { DiGithub, DiJavascript, DiReact } from "react-icons/di";
import { SiSolidity, SiTailwindcss, SiVercel } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import mapImage from "../public/map.png";

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
  },
  {
    title: "Traveling",
    icon: "🌎",
  },
  {
    title: "Shopping",
    icon: "🛍️",
  },
  {
    title: "Gaming",
    icon: "🎮",
  },
  {
    title: "Social Media",
    icon: "📱",
  },
  {
    title: "Content Writing",
    icon: "📝",
  },
  {
    title: "Electronics",
    icon: "🖥️",
  },
  {
    title: "Reading",
    icon: "📖",
  },
  {
    title: "Sports",
    icon: "🏃",
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
        <div className="mt-20">
          <div className="flex flex-col md:mt-20 mt-10 gap-20">
            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 p-6 after:pointer-events-none">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="inline-flex gap-2 font-bold uppercase items-center justify-center tracking-widest">
                <PiStarFourFill className="size-7 text-orange-300" />
                <h3 className="font-serif text-3xl">My Story</h3>
              </div>
              <p>Explore our story and see how we started.</p>
              <Image
                src="/book-cover.png"
                alt="about"
                width={222}
                height={222}
                priority
              />
            </div>

            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 p-6 after:pointer-events-none">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="inline-flex gap-2 font-bold uppercase items-center justify-center tracking-widest">
                <PiStarFourFill />
                <h3>Technologies what we use</h3>
                <p>Learn about the technologies we use.</p>
              </div>
              <div>
                {toolboxItems.map((item) => (
                  <div key={item.title}>
                    <span>
                      <item.icon className="size-10 " />
                    </span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 p-6 after:pointer-events-none">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="inline-flex gap-2 font-bold uppercase items-center justify-center tracking-widest">
                <PiStarFourFill />
                <h3>Beyond the work</h3>
                <p>Our daily routine about how we increase our productivity.</p>
              </div>
              <div>
                {hobbies.map((item) => (
                  <div key={item.title}>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 p-6 after:pointer-events-none">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <Image src={mapImage} alt="about" />
              <Image src="/logo.png" alt="about" width={111} height={111} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
