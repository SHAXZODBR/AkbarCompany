"use client"
import { FloatingNav } from "./ui/floating-navbar"
import { SparklesCore } from "./ui/sparkles"
import { Cover } from "@/components/ui/cover"

import { IconHome, IconMessage, IconUser, IconPhoto, IconApps } from "@tabler/icons-react"

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Apps",
      link: "#apps",
      icon: <IconApps className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "#gallery",
      icon: <IconPhoto className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ]
  return (
    <div id="home" className="relative w-full">
      <FloatingNav navItems={navItems} />
      <SparklesHeader />
    </div>
  )
}

export function SparklesHeader() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 text-center px-6 md:px-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-100 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-tight mb-6">
          Build amazing websites <br /> at <Cover>warp speed</Cover>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
          Creating exceptional mobile experiences with passion and innovation
        </p>
      </div>
    </div>
  )
}

