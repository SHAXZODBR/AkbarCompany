import { HoverEffect } from "./ui/card-hover-effect"

export default function Apps() {
  return (
    <div className="max-w-6xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  )
}

export const projects = [
  {
    title: "Photo Editor Pro",
    description:
      "A powerful photo editing app with advanced filters, effects, and tools for professional-quality edits on mobile.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Video Creator",
    description:
      "Create stunning videos with our easy-to-use video editor featuring transitions, effects, and music integration.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camera Plus",
    description:
      "Advanced camera app with manual controls, RAW support, and professional-grade features for mobile photography.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Story Maker",
    description:
      "Create engaging social media stories with templates, animations, and creative tools for maximum impact.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

