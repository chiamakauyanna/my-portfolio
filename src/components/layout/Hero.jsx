import Socials from "../common/Socials";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section id="home" className="flex bg-primary w-screen h-screen justify-center">
      <div
        className="flex flex-col justify-center items text-textColor"
        data-aos="fade-in"
      >
        <h4 className="font-bold mb-4 text-accent">Hi, my name is</h4>
        <h1 className="font-bold leading-none text-wrap font-mono">Chiamaka Uyanna.</h1>
        <h2 className="mt-4 text-other font-mono">I am a frontend developer</h2>
        <Socials />
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
