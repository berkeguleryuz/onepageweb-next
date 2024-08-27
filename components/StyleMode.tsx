import React, { Fragment } from "react";
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
  "Glorious",
  "Enjoyable",
  "Exceptional",
  "Creative",
];

const StyleMode = (props: Props) => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className=" bg-gradient-to-r from-orange-300 to-lime-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex py-3 items-center flex-none gap-4 md:gap-4 -translate-x-0 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4">
                    <span className="text-neutral-950 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <PiStarFourFill className="size-5 -rotate-12 text-neutral-950" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleMode;
