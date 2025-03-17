import React from "react";
import Header from "../components/Header";
import OurApps from "../components/OurApps";
import AboutUs from "../components/AboutUs";
import InfiniteScroll from "../components/InfiniteScroll";
import SparklesPreview from "@/components/Sparklesheader";

const Home = () => {
  return (
    <div>
      <Header />
      <OurApps />
      <AboutUs />
      <InfiniteScroll />
      <SparklesPreview />
    </div>
  );
};

export default Home;
