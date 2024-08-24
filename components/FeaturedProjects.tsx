import { ArrowUpRight, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import grainImage from "../public/grain.jpg";
type Props = {};

const portfolioProjects = [
  {
    company: "Clodron",
    year: "2024",
    title: "Website",
    results: [
      { title: "Website", url: "https://clodron.com" },
      { title: "Website", url: "https://clodron.com" },
      { title: "Website", url: "https://clodron.com" },
    ],
    image: "/web2.png",
  },
  {
    company: "Clodron1",
    year: "2024",
    title: "Website 01",
    results: [
      { title: "Website", url: "https://clodron.com" },
      { title: "Website01", url: "https://clodron.com" },
      { title: "Website02", url: "https://clodron.com" },
    ],
    image: "/web1.png",
  },
  {
    company: "Clodron2",
    year: "2024",
    title: "Website 02",
    results: [
      { title: "Website", url: "https://clodron.com" },
      { title: "Website1", url: "https://clodron.com" },
      { title: "Website2", url: "https://clodron.com" },
    ],
    image: "/web0.png",
  },
];

const FeaturedProjects = (props: Props) => {
  return (
    <section className="pb-16">
      <div className="container">
        <p className="font-semibold  tracking-widest bg-gradient-to-b from-orange-300 to-yellow-300 text-transparent bg-clip-text uppercase text-center text-lg md:text-2xl">
          Real World Process
        </p>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          See how we transformed our clients
        </p>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-neutral-800 border rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl z-0 after:z-10 overflow-hidden after:outline-white/20 px-8 pt-8 after:pointer-events-none">
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="bg-gradient-to-r from-orange-300 to-lime-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm text-white/50">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <Link href={"#"} className="z-20 relative">
                <button className="group bg-white text-neutral-950 h-12 w-full rounded-xl font-semibold hover:bg-white/70 transition duration-300 inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Project</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                </button>
              </Link>
              <Image
                src={project.image}
                alt={project.title}
                width={2000}
                height={2000}
                className="mt-8 -mb-4"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
