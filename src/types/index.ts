import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  image: StaticImageData;
  link: string;
  techStack: string[];
  status: string;
};
