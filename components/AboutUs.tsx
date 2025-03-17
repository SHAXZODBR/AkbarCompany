"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-lg font-medium tracking-tight text-transparent md:text-xl text-left p-108"
      >
        Founded in 2019, Onelight Apps is a photo & video apps developer with
        more than 80 million downloads. Creativity, passion, and the desire for
        every mobile user to be able to create, edit or share their photos and
        videos easily drive us to deliver top-quality products and enhance our
        portfolio of mobile apps.
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-lg font-medium tracking-tight text-transparent md:text-xl text-left p-108"
      >
        People, Product, Profit - we believe that every great product starts
        from passionate and open-minded people. That’s why our team is always
        the highest priority. We work hard to support the creative and
        productive startup environment to let each teammate grow, unlock their
        potential, and have fun.
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-lg font-medium tracking-tight text-transparent md:text-xl text-left p-108"
      >
        Our team consists of talented professionals in mobile design,
        engineering, and marketing. We’re still small enough to make decisions
        fast, but experienced enough to solve complex problems. If you’re
        interested in creating market-leading products, join us!
      </motion.h1>
    </LampContainer>
  );
}
