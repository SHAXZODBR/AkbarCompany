"use client"
import { motion } from "framer-motion"
import { LampContainer } from "./ui/lamp"

export default function AboutUs() {
  return (
    <div id="about" className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">About Us</h2>
        <div className="md:hidden">
          {/* Mobile version without lamp effect */}
          <div className="flex flex-col gap-8 px-4 max-w-4xl mx-auto">
            <p className="text-slate-300 text-lg font-medium text-center leading-relaxed">
              Founded in 2019, Onelight Apps is a photo & video apps developer with more than 80 million downloads.
              Creativity, passion, and the desire for every mobile user to be able to create, edit or share their photos
              and videos easily drive us to deliver top-quality products and enhance our portfolio of mobile apps.
            </p>
            <p className="text-slate-300 text-lg font-medium text-center leading-relaxed">
              People, Product, Profit - we believe that every great product starts from passionate and open-minded
              people. That's why our team is always the highest priority. We work hard to support the creative and
              productive startup environment to let each teammate grow, unlock their potential, and have fun.
            </p>
            <p className="text-slate-300 text-lg font-medium text-center leading-relaxed">
              Our team consists of talented professionals in mobile design, engineering, and marketing. We're still
              small enough to make decisions fast, but experienced enough to solve complex problems. If you're
              interested in creating market-leading products, join us!
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Desktop version with lamp effect */}
          <LampContainer>
            <motion.div
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col gap-10 px-6 md:px-10 max-w-4xl mx-auto"
            >
              <p className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-xl font-medium tracking-tight text-transparent md:text-2xl text-center md:text-left leading-relaxed">
                Founded in 2019, Onelight Apps is a photo & video apps developer with more than 80 million downloads.
                Creativity, passion, and the desire for every mobile user to be able to create, edit or share their
                photos and videos easily drive us to deliver top-quality products and enhance our portfolio of mobile
                apps.
              </p>
              <p className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-xl font-medium tracking-tight text-transparent md:text-2xl text-center md:text-left leading-relaxed">
                People, Product, Profit - we believe that every great product starts from passionate and open-minded
                people. That's why our team is always the highest priority. We work hard to support the creative and
                productive startup environment to let each teammate grow, unlock their potential, and have fun.
              </p>
              <p className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-xl font-medium tracking-tight text-transparent md:text-2xl text-center md:text-left leading-relaxed">
                Our team consists of talented professionals in mobile design, engineering, and marketing. We're still
                small enough to make decisions fast, but experienced enough to solve complex problems. If you're
                interested in creating market-leading products, join us!
              </p>
            </motion.div>
          </LampContainer>
        </div>
      </div>
    </div>
  )
}

