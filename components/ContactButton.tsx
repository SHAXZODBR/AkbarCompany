"use client"
import { Button } from "./ui/moving-border"

export default function ContactButton() {
  return (
    <div className="flex justify-center">
      <Button
        borderRadius="1.75rem"
        className="border-6 bg-neutral-300 dark:bg-slate-900 text-black dark:text-white border-neutral-900 dark:border-slate-800 text-lg font-medium px-8 py-4 hover:scale-105 transition-transform duration-300"
      >
        Contact Us
      </Button>
    </div>
  )
}
