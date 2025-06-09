import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import HeadshotImage from "public/images/headshot.webp";

import React from "react";

import Image from "next/image";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ServicesCard from "@/components/ServiceCard";
import AnimatedLink from "@/components/ui/AnimatedLink";
import HighlightedText from "@/components/ui/HighlightedText";
import OpenToWork from "@/components/ui/OpenToWork";
import PlusBox from "@/components/ui/PlusBox";
import { links, projects, services } from "@/constants";

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
  {
    href: "https://dev.to/teyim",
    icon: <span className="text-sm font-bold">Dev.to</span>,
    external: true,
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <section className="relative grid h-[150px] grid-cols-3 container-padding pt-16">
        <div className="base-border-color absolute top-[54px] left-0 w-full border-b"></div>
        <div className="base-border-color absolute bottom-0 left-0 w-full border-b"></div>
        <div className="base-border-color border-x"></div>
        <div className="base-border-color border-r"></div>
        <div className="base-border-color border-r"></div>
        <div className="base-border-color absolute top-36 left-0 w-full border-b"></div>
        <h1 className="font-geist-sans absolute top-5 left-[21vw] text-9xl">
          TEYIM.
        </h1>
        <div className="absolute top-16 left-[48vw] flex gap-2">
          <OpenToWork />
        </div>
      </section>
      <section className="relative grid h-[450px] grid-cols-3 container-padding">
        <div className="base-border-color col-span-2 border-x p-4">
          <h5 className="font-geist-sans mt-3">About me</h5>
          <p className="text-slate-600">
            Hi, my name is <HighlightedText>Teyim Asobo</HighlightedText>, I am
            a <HighlightedText>Frontend developer</HighlightedText> who converts
            eye-catching designs into seamless user experiences.
          </p>
          <p className="mt-2 text-slate-600">
            With <HighlightedText>4+ years of experience</HighlightedText>, I
            provide value to clients by converting client ideas into clean,
            optimised web applications.
          </p>
          <p className="mt-2 text-slate-600">
            I maintain high-quality standards through thorough planning, regular
            communication, and rigorous testing, ensuring clean, maintainable
            code that meets modern development standards.
          </p>
          <div className="x-2 mt-4 ml-auto w-1/2">
            <h6 className="mt-3 text-right">Find Me On</h6>
            <div className="mt-3 flex justify-end gap-4">
              {socialLinks.map((link, index) => (
                <AnimatedLink
                  key={index}
                  href={link.href}
                  isExternal={link.external}
                  className="p-2"
                >
                  {link.icon}
                </AnimatedLink>
              ))}
            </div>
          </div>
        </div>
        <div className="cont base-border-color pattern-diagonal-bg flex justify-center border-r py-6">
          <div className="relative my-auto h-[250px] w-[200px] rounded-xl bg-green-400 shadow-md">
            <Image
              src={HeadshotImage}
              alt="headshot profile"
              className="h-full w-full rounded-xl object-cover hover:cursor-pointer"
            />
          </div>
        </div>

        <div className="base-border-color absolute top-[450px] left-0 w-full border-b"></div>
      </section>
      <section className="relative grid h-auto grid-cols-1 container-padding">
        <div className="base-border-color absolute top-1 left-0 w-full border-b"></div>
        <div className="base-border-color absolute bottom-0 left-0 w-full border-b"></div>
        <div className="base-border-color border-x p-4">
          <h5 className="font-geist-sans mt-3">My Services</h5>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <ServicesCard
                key={idx}
                name={service.name}
                description={service.description}
                illustration={service.illustration}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="absolute top-0 right-0 h-full w-8" />
      <section className="relative container-padding">
        <div className="base-border-color border-x">
          <div className="base-border-color absolute top-1 left-0 w-full border-b"></div>
          <div className="px-4 pt-4">
            <h4 className="font-geist-sans mt-3">Projects</h4>
          </div>
          <div className="my-4 px-4">
            <h6>Freelance</h6>
            <div className="my-2 space-y-2">
              <p className="text-sm text-slate-600">
                I have successfully completed numerous projects on{" "}
                <HighlightedText highlightColor="">Upwork</HighlightedText>,
                working with diverse clients to deliver high-quality solutions.
              </p>

              <div className="mt-2">
                <PlusBox
                  href={links.external.upworkProfile}
                  isExternal
                  svgFill="fill-gray-400"
                  className="w-60"
                >
                  View Upwork Profile
                </PlusBox>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="px-4">
              <h6>Personal Projects</h6>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  name={project.name}
                  status={project.status}
                  techStack={project.techStack}
                />
              ))}
            </div>
            <div className="my-5 flex justify-center">
              <PlusBox
                isExternal
                svgFill="fill-gray-400"
                className="w-40"
                href=""
              >
                View More
              </PlusBox>
            </div>
          </div>
          <div className="base-border-color absolute bottom-0 left-0 mt-5 w-full border-b"></div>
        </div>
      </section>
    </main>
  );
}
