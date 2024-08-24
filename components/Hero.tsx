import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="py-32">
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
            <div className="bg-green-500 size-2.5 rounded-full items-center"></div>
            <div className="text-sm font-semibold">
              Available for the new projects.
            </div>
          </div>
        </div>
        <h1 className="font-serif text-5xl text-center mt-8 tracking-wide">
          We are building the future with unique design and technology.
        </h1>
        <p className="mt-4 text-center text-white/60">
          We are transforming designs into the functional, qualified and
          beautiful projects.
        </p>
        <div className="flex flex-col items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore our projects</span>
            <ArrowDown className="h-6 w-6" />
          </button>
          <button>
            <span>🌟</span>
            <span>Let get in touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
