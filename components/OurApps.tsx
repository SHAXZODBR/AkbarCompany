"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Apps from "./Apps";

export default function HeroHighlightDemo() {
  return (
    <div>
      <HeroHighlight className="h-full m-30">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-lg px-4 md:text-xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-5xl text-left  lg:leading-snug  mx-auto leading-relaxed"
        >
          Here, at Onelight Apps, we always encourage your creativity and
          provide a plenty of opportunities to express it making you feel like{" "}
          <Highlight className="text-black dark:text-white ">
            anything is possible.
          </Highlight>
          With us you can think outside the box as well as set and achieve the
          ambitious goals.
        </motion.h1>
      </HeroHighlight>
      <Apps />
    </div>
  );
}
