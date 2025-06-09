"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import worldIllustration from "public/images/assets/web.svg";

import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServicesCardProps {
  name: string;
  description: string;
  illustration: StaticImageData;
}

function ServicesCard({ name, description, illustration }: ServicesCardProps) {
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const contentVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const illustrationVariants = {
    initial: { opacity: 0.2, scale: 1, rotate: 0 },
    hover: {
      opacity: 0.4,
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <Link href="" className="">
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        className=" base-border-color relative flex h-full overflow-hidden rounded-xl p-4 shadow-sm ring-1 transition-shadow duration-300 hover:shadow-md hover:ring-gray-950/35"
      >
        <div className="flex h-full w-[80%] flex-col justify-between space-y-2 text-left">
          <div className="space-y-2">
            <motion.h6
              className="text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.h6>
            <motion.p
              className="text-xs text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {description}
            </motion.p>
          </div>
          <motion.div
            className="text-underline flex items-center text-xs font-semibold"
            variants={contentVariants}
          >
            I need this service
            <motion.span className="ml-1" variants={contentVariants}>
              <ArrowRight strokeWidth={1} size={15} />
            </motion.span>
          </motion.div>
        </div>
        <motion.div
          className="absolute -right-4 h-35 w-35"
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          variants={illustrationVariants}
        >
          <Image
            src={illustration || worldIllustration}
            alt="item description illustration"
            className="h-full w-full transition-all "
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default ServicesCard;
