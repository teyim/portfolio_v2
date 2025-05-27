import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import worldIllustration from "public/images/assets/web.svg";
import Image, { StaticImageData } from "next/image";

interface ServicesCardProps {
  name: string;
  description: string;
  illustration: StaticImageData;
}

function ServicesCard({ name, description, illustration }: ServicesCardProps) {
  return (
    <Link
      href=""
      className="base-border-color relative flex overflow-hidden rounded-xl p-4 shadow-sm ring-1 transition-transform duration-300 hover:scale-105 hover:shadow-md hover:ring-gray-950/35"
    >
      <div className="w-[80%] space-y-2 text-left">
        <h6 className="text-sm">{name}</h6>
        <p className="text-xs text-slate-600">{description}</p>
        <div className="text-underline flex items-center text-xs font-semibold">
          I need this service
          <span className="ml-1">
            <ArrowRight strokeWidth={1} size={15} />
          </span>
        </div>
      </div>
      <div className="absolute -right-4 h-35 w-35">
        <Image
          src={illustration || worldIllustration}
          alt="item description illustration"
          className="opacity-20"
        />
      </div>
    </Link>
  );
}

export default ServicesCard;
