"use client";

import { Eye } from "lucide-react";

import { StaticImageData } from "next/image";
import Image from "next/image";

import { Project } from "@/types";

import OutlineBadge from "./ui/OutlineBadge";
import PlusBox from "./ui/PlusBox";

export default function ProjectCard({
  name,
  description,
  techStack,
  image,
  link,
  status,
}: Project) {
  return (
    <div className="w-[400px] space-y-2 p-4">
      <div className="">
        <PlusBox
          svgFill="fill-gray-400"
          className="font-geist-sans w-40"
          href={link}
          isExternal
        >
          {name}
        </PlusBox>
      </div>
      <div className="space-y-2">
        <p className="w-[80%] text-xs">{description}</p>
        <div>
          {techStack.map((stack, index) => (
            <OutlineBadge key={index}>{stack}</OutlineBadge>
          ))}
        </div>
        <Image src={image} alt="batazia logo" className="h-[150px] w-[300px]" />
      </div>
    </div>
  );
}
