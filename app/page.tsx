import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import StyleMode from "@/components/StyleMode";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <StyleMode />
    </main>
  );
}
