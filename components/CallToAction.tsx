import { ArrowUpRight } from "lucide-react";
import React from "react";
import grainImage from "../public/grain.jpg";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section className="py-16 pt-12 lg:py-24">
      <div className="container">
        <div className="bg-gradient-to-r from-yellow-300 to-orange-500 text-neutral-950 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className="flex flex-col gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-5xl">
                Lets create something great
              </h2>
              <p className="text-sm md:text-xl mt-2">
                Ready to get started of your project? Connect and discover with
                us.
              </p>
            </div>
            <div>
              <button className="text-white bg-neutral-950 inline-flex items-center px-6 h-12 rounded-xl group gap-2 w-max border border-neutral-950">
                <span className="font-semibold">Contact Us</span>
                <ArrowUpRight className="group-hover:rotate-45 transition duration-300 size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
