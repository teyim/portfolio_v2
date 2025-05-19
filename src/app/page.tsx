import Image from "next/image";
import React from "react";
import HeadshotImage from "public/images/headshot.webp";
import OpenToWork from "@/components/ui/OpenToWork";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    href: "https://twitter.com",
    icon: <Twitter strokeWidth={1.5} />,
    external: true,
  },
  {
    href: "https://linkedin.com",
    icon: <Linkedin strokeWidth={1.5} />,
    external: true,
  },
  {
    href: "mailto:example@email.com",
    icon: <Mail strokeWidth={1.5} />,
    external: false,
  },
  {
    href: "https://github.com",
    icon: <Github strokeWidth={1.5} />,
    external: true,
  },
  {
    href: "https://upwork.com",
    icon: <span className="text-sm font-bold">Upwork</span>,
    external: true,
  },
];

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <section className="relative grid h-[150px] grid-cols-3 px-[300px]">
        <div className="base-border-color absolute top-[54px] left-0 w-full border-b"></div>

        <div className="base-border-color border-x"></div>
        <div className="base-border-color border-r"></div>
        <div className="base-border-color border-r"></div>
        <div className="base-border-color absolute top-36 left-0 w-full border-b"></div>
        <h1 className="font-geist-sans absolute top-5 left-[21vw]">TEYIM.</h1>
        <div className="absolute top-16 left-[48vw] flex gap-2">
          <OpenToWork />
        </div>
      </section>
      <section className="relative grid h-[300px] grid-cols-3 px-[300px]">
        <div className="base-border-color col-span-2 border-x p-4">
          <h6 className="mt-3 text-2xl">About me</h6>
          <p className="text-slate-600">
            I am a Frontend developer who converts eye-catching designs into
            seamless user experiences.
          </p>
          <p className="mt-2 text-slate-600">
            With 4+ years of experience, I provide value to clients by
            converting client ideas and designs into 1:1 implementations.
          </p>
          <div className="x-2 mt-4 ml-auto w-1/2">
            <h6 className="mt-3 text-right text-lg">Find Me On</h6>
            <div className="mt-3 flex justify-end gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-slate-50 hover:text-slate-600 hover:shadow-sm"
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="cont base-border-color flex justify-center border-r py-6">
          <div className="relative h-[250px] w-[200px] rounded-xl bg-green-400 shadow-md">
            <Image
              src={HeadshotImage}
              alt="headshot profile"
              className="h-full w-full rounded-xl object-cover hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="base-border-color border-r"></div>
        <div className="base-border-color absolute top-[298px] left-0 w-full border-b"></div>
      </section>
    </main>
  );
}
