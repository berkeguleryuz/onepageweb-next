import React from "react";
import { PiStarFourFill } from "react-icons/pi";

type Props = {};

const words = [
  "Accesible",
  "Adaptable",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Productive",
  "Powerful",
  "Complete",
];

const StyleMode = (props: Props) => {
  return (
    <section className="py-16">
      <div className="overflow-x-clip bg-gradient-to-r from-orange-300 to-lime-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex py-3 items-center flex-none gap-4">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4">
                <span className="text-neutral-950 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <PiStarFourFill className="size-5 text-neutral-950" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleMode;
