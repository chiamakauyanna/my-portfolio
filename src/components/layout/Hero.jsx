import Socials from "../common/Socials";
import heroImg from "../../../public/assets/images/img2.png"
import Button from "../common/Button";

const Hero = () => {
    return (
        <div className="flex bg-primary w-screen h-screen">
            <div className="flex flex-col flex-1 justify-center lg:pl-40 px-12 text-text">
                <p className="font-bold mb-4">Hi, There!</p>
                <h1 className="font-bold leading-none">
                    I'm{" "}
                    <span className="text-accent text-wrap">
                        Chiamaka Uyanna
                    </span>
                </h1>
                <p className="mt-4">I am a frontend web developer</p>
                <Socials />
                <div className="mt-10 flex gap-4">
                    <Button
                        text="Hire me"
                        className="bg-accent text-gray-900 font-bold px-4 py-2 rounded"
                    />
                    <Button
                        text="Download CV"
                        className="bg-transparent border border-accent text-accent font-bold px-4 py-2 rounded"
                    />
                </div>
            </div>
            <div className="lg:flex  md:flex hidden flex-1">
                <img src={heroImg} alt="hero image" />
            </div>
        </div>
    );
};

export default Hero;
