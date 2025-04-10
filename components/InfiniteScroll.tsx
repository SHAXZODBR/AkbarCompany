"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

export default function InfiniteScroll() {
  return (
    <div id="gallery" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-br from-slate-700 to-slate-900 py-4 bg-clip-text text-transparent">
          Our Work
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Explore our portfolio of successful applications that have delighted millions of users worldwide
        </p>
        <div className="h-[60vh] md:h-[70vh] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={imageItems} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  )
}

const imageItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    alt: "App Screenshot 1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "App Screenshot 2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "App Screenshot 3",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "App Screenshot 4",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1741196776964-fff874686fa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "App Screenshot 5",
  },
]
