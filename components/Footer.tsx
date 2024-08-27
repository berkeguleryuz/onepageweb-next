import Link from "next/link";
import React from "react";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

type Props = {};

const footerLinks = [
  {
    title: "Instagram",
    url: "#",
    icon: BsInstagram,
  },
  {
    title: "Linkedin",
    url: "#",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    url: "#",
    icon: BsTwitterX,
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="relative inset-0 -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500/30 to-yellow-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className="z-10 inline-flex items-center gap-1.5 hover:scale-105 cursor-pointer transition-all duration-300">
                <span className="font-semibold">{link.title}</span>
                {link.icon && <link.icon className="size-4" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
