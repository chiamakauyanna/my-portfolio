import Socials from "../common/Socials";
import heroImg from "../../../public/assets/images/img2.png";
import Button from "../common/Button";
import { saveAs } from 'file-saver';
import resume from '../../../public/assets/Resume/ChiamakaUyanna.pdf'

 
const Hero = () => { 
  const DownloadCV = () => {
    saveAs(resume, "Chiamaka_Uyanna_CV.pdf");
  };

  return (
    <section
      id="home"
      className="flex bg-primary w-screen h-screen bg-no-repeat lg:bg-right-top lg:bg-contain bg-right"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div
        className="flex flex-col justify-center lg:pl-40 px-12 text-textColor"
        data-aos="fade-in"
      >
        <h4 className="font-bold mb-4">Hi, There!</h4>
        <h1 className="font-bold leading-none">
          I&apos;m{" "}
          <span className="text-accent text-wrap">Chiamaka Uyanna</span>
        </h1>
        <p className="mt-4 text-other">I am a frontend web developer</p>
        <Socials />
        <div className="mt-10 flex gap-4">
          <a href="#contact">
            <Button
              text="Hire me"
              className="btn-primary"
            />
          </a>

          <Button
            text="Download CV"
            className="btn-secondary"
            onClick={DownloadCV}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
