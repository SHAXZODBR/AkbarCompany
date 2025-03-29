"use client"
import { useState, type JSX, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true) // Start with visible navbar
  const [activeSection, setActiveSection] = useState("")
  const [hasScrolled, setHasScrolled] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // Mark that we've started scrolling
      if (current > 0.05 && !hasScrolled) {
        setHasScrolled(true)
      }

      // Only apply hide/show logic after we've scrolled a bit
      if (hasScrolled) {
        const direction = current! - scrollYProgress.getPrevious()!

        if (direction < 0) {
          // Scrolling up - show navbar
          setVisible(true)
        } else if (direction > 0) {
          // Scrolling down - hide navbar
          setVisible(false)
        }
      }
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute("id") || ""
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Start at normal position
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 pl-8 py-3 items-center justify-center space-x-6",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors pr-6",
              activeSection === navItem.link.replace("#", "") ? "text-blue-500 dark:text-blue-400 font-bold" : "",
            )}
            onClick={(e) => {
              e.preventDefault()
              const targetId = navItem.link.replace("#", "")
              const targetElement = document.getElementById(targetId)
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

