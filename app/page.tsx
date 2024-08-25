import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import StyleMode from "@/components/StyleMode";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <StyleMode />
      <Testimonials />
      <About />
    </main>
  );
}
