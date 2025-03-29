import Header from "../components/Header"
import OurApps from "../components/OurApps"
import AboutUs from "../components/AboutUs"
import InfiniteScroll from "../components/InfiniteScroll"
import SparklesPreview from "@/components/Sparklesheader"

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <OurApps />
      <AboutUs />
      <InfiniteScroll />
      <SparklesPreview />
    </main>
  )
}

export default Home

