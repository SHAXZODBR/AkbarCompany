"use client"
import { SparklesCore } from "./ui/sparkles"
import ContactButton from "./ContactButton"

export default function SparklesPreview() {
  return (
    <div id="contact" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Get In Touch</h2>
        <div className="h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-xl px-4 md:px-8 py-16 max-w-5xl mx-auto">
          <div className="w-full md:w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
          <h3 className="mt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-xl font-medium tracking-tight text-transparent md:text-2xl text-center max-w-3xl mx-auto leading-relaxed">
            Here, at Onelight Apps, we always encourage your creativity and provide a plenty of opportunities to express
            it making you feel like anything is possible. With us you can think outside the box as well as set and
            achieve the ambitious goals.
          </h3>
          <div className="mt-12">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  )
}

