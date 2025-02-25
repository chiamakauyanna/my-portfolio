import Socials from "../common/Socials";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section id="home" className="flex bg-primary w-screen h-screen justify-center relative">
      <div
        className="flex flex-col justify-center text-textColor lg:items-start md:items-start items-center"
        data-aos="fade-in"
      >
        <h4 className="font-bold mb-4 text-accent">Hi, my name is</h4>
        <h1 className="font-bold leading-none text-wrap font-mono lg:text-left md:text-left text-center">Chiamaka Uyanna.</h1>
        <h2 className="mt-4 text-other font-mono">I am a frontend developer</h2>
        <div className="lg:absolute lg:-left-64 lg:transform lg:rotate-90 lg:border lg:py-3 lg:px-4 lg:rounded-full border-accent lg:shadow-md lg:shadow-accent">
          <Socials />
        </div>
        
        <div className="mt-10">
          <a href="#contact">
            <Button text="Hire me" className="btn-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
