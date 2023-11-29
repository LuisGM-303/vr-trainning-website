import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Hero from "@/sections/Hero";


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    
    <div className="relative">
      <About />
    </div>
  </div>
)

export default Page;