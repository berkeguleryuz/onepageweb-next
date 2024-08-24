import Link from "next/link";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <header className="w-full flex justify-center items-center fixed top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
        <Link
          className="px-4 py-1.5 rounded-full text-white/70 hover:text-white text-sm font-semibold hover:bg-white/10 transition duration-300"
          href={"#"}>
          Home
        </Link>
        <Link
          className="px-4 py-1.5 rounded-full text-white/70 hover:text-white text-sm font-semibold hover:bg-white/10 transition duration-300"
          href={"#"}>
          Projects
        </Link>
        <Link
          className="px-4 py-1.5 rounded-full text-white/70 hover:text-white text-sm font-semibold hover:bg-white/10 transition duration-300"
          href={"#"}>
          About
        </Link>
        <Link
          className="px-4 py-1.5 rounded-full   text-sm font-semibold bg-white text-neutral-950 hover:bg-white/70 transition duration-300"
          href={"#"}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
