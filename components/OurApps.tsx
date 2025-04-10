"use client"
import { motion } from "framer-motion"
import { HeroHighlight, Highlight } from "./ui/hero-highlight"
import Apps from "./Apps"

export default function OurApps() {
  return (
    <div id="apps" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-800">Our Applications</h2>
        <HeroHighlight className="h-full px-6 md:px-10 mb-16">
          <motion.div
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
            className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-700 max-w-4xl mx-auto text-center lg:leading-relaxed"
          >
            Here, at Onelight Apps, we always encourage your creativity and provide a plenty of opportunities to express
            it making you feel like <Highlight className="text-black">anything is possible.</Highlight>
            With us you can think outside the box as well as set and achieve the ambitious goals.
          </motion.div>
        </HeroHighlight>
        <div className="mt-16 px-4 md:px-0">
          <Apps />
        </div>
      </div>
    </div>
  )
}
