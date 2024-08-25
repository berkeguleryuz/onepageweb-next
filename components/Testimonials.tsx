import React from "react";

import Image from "next/image";
import grainImage from "../public/grain.jpg";

const testimonials = [
  {
    name: "Jane Doe",
    position: "Marketing Manager @ Clodron",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam velit harum et natus, temporibus necessitatibus perspiciatis fuga perferendis rem, assumenda ullam alias, consectetur excepturi quisquam nisi? Possimus voluptatem autem amet.",
    avatar: "/memoji-avatar-1.png",
  },
  {
    name: "John Doe",
    position: "Head of Design @ Clodron",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non adipisci deleniti minus sint. Adipisci magnam cupiditate vitae veritatis labore architecto iusto eos velit quos, distinctio, magni nostrum consequatur. Rem ullam fugit perferendis illo eius repellat ea totam impedit debitis dolore!",
    avatar: "/memoji-avatar-2.png",
  },
  {
    name: "B G",
    position: "CEO @ Clodron",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam nihil, molestias corporis aliquam eum sint quam. Accusantium facilis maxime veritatis, dolores praesentium exercitationem, et eaque omnis explicabo labore pariatur illum, ex cumque dicta.",
    avatar: "/memoji-avatar-3.png",
  },
  {
    name: "Clod",
    position: "Product Manager @ Clodron",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum nulla fugit deserunt. Temporibus, laboriosam velit. Veritatis rem ratione earum amet incidunt! Et obcaecati, quos nihil eligendi dolores veniam deserunt. Ipsa itaque ea architecto quia rem minima facere porro nobis?",
    avatar: "/memoji-avatar-4.png",
  },
  {
    name: "Alvin the cat",
    position: "Director of IT @ Clodron",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, amet ullam. Quam iste minus voluptatem beatae.",
    avatar: "/memoji-avatar-5.png",
  },
];

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <p className="font-semibold  tracking-widest bg-gradient-to-b from-orange-300 to-yellow-300 text-transparent bg-clip-text uppercase text-center text-lg md:text-2xl">
          Happy Clients
        </p>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See what our clients have to say about our work
        </p>
        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-neutral-800 border rounded-3xl p-6 relative overflow-hidden z-0 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:oufline-offset-2 after:rounded-3xl after:z-10 after:outline-white/20 after:pointer-events-none  max-w-xs md:p-8 md:max-w-md">
                <div
                  className="absolute inset-0 opacity-10 -z-10"
                  style={{ backgroundImage: `url(${grainImage.src})` }}></div>
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-neutral-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="max-h-full p-1"
                      priority
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
