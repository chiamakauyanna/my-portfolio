import { useEffect } from "react";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Portfolio from "./components/layout/Portfolio";
import Skills from "./components/layout/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1400,
      once: true,
      mirror: false,
    });
  }, []);
  
  return (
    <div className="font-ubuntu overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
