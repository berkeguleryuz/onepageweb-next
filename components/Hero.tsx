import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import grainImage from "../public/grain.jpg";
import { IoIosStar } from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";
import HeroStars from "./HeroStars";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Halka bölümleri  */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5" />
      <div className="absolute inset-0 size-[770px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5" />
      <div className="absolute inset-0 size-[920px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5" />
      <div className="absolute inset-0 size-[1070px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5" />

      {/* Yıldızlar */}
      <HeroStars size={800} rotation={-72}>
        <IoIosStar className="size-12 text-orange-300" />
      </HeroStars>
      <HeroStars size={800} rotation={-20}>
        <PiStarFourFill className="w-12 h-12 text-orange-300" />
      </HeroStars>
      <HeroStars size={800} rotation={180}>
        <PiStarFourFill className="w-12 h-12 text-orange-300" />
      </HeroStars>
      <HeroStars size={800} rotation={220}>
        <PiStarFourFill className="w-12 h-12 text-orange-300" />
      </HeroStars>
      <HeroStars size={800} rotation={120}>
        <IoIosStar className="size-12 text-orange-300" />
      </HeroStars>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={300}
            height={300}
            className="size-[100px] mb-1"
            priority
          />
          <div className="bg-neutral-900 border border-neutral-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full items-center animate-ping duration-500 transition-all"></div>
            <div className="text-sm font-semibold">
              Available for the new projects.
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            We are building the future with unique design and technology.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            We are transforming designs into the functional, qualified and
            beautiful projects.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore</span>
            <ArrowDown className="h-6 w-6" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-neutral-950 h-12 px-6 rounded-xl">
            <span>🌟</span>
            <span className="font-semibold">Let get in touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
