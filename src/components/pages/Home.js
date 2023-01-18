import About from "../home/about/About";
import BlogSection from "../home/blogs/BlogSection";
import Destinations from "../home/destinations/Destinations";
import Hotels from "../home/destinations/Hotels";
import Header from "../home/header/Header";
import { useState } from "react";

export default function Home() {
  const [searchState, setSearchState] = useState("");
  return (
    <>
      <Header searchState={searchState} setSearchState={setSearchState} />
      <Destinations />
      <Hotels />
      <BlogSection />
      <About />
    </>
  );
}
