import About from "../home/about/About";
import BlogSection from "../home/blogs/BlogSection";
import Destinations from "../home/destinations/Destinations";
import Hotels from "../home/destinations/Hotels";

export default function Home() {
  return (
    <>
      <Destinations />
      <Hotels />
      <BlogSection />
      <About />
    </>
  );
}
