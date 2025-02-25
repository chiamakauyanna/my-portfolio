import aboutImg from "../../../src/assets/images/img3.png";
import Button from "../common/Button";

const About = () => {
  return (
    <section
      id="about"
      className="h-full w-screen bg-secondary py-32 text-center"
    >
      <div data-aos="fade-down" className="border-b border-accent  mb-20  text-textColor inline-block">
      <h2 className="font-semibold text-center p-2" >About <span className="text-accent">Me</span></h2>
     </div>
      
      <div className="flex flex-col lg:flex-row md:flex-col   text-textColor  items-center justify-center px-12 gap-6">
      <div className="flex-1 py-8 items-center justify-center flex">
          <img
            src={aboutImg}
            alt="about me image"
            className="border-4 border-accent shadow-lg shadow-accent rounded-2xl"
            data-aos="zoom-in-down"
          />
        
      </div>
      <div className="py-8 px- m-auto flex-1 text-justify rounded-md" data-aos="zoom-in-up">
        <div className="text-md text-mono">
          <h2 className="text-accent mb-4">Hello!</h2>
          <div>
            My name is <span className="text-accent">Chiamaka Uyanna</span>, a
            frontend developer who loves turning code into beautiful, functional
            experiences. I can’t pinpoint exactly what sparked my interest in
            frontend development, but there’s something exciting about writing
            code that transforms into applications that people actually use and
            enjoy.
          </div>

          <div className="mt-4">
            Over the years, I’ve worked mostly with startups, helping them bring
            their ideas to life through clean and engaging frontend experiences.
            While freelancing has been my main gig, I’ve had the chance to
            collaborate with different teams and projects, constantly learning
            along the way.
          </div>

          <div className="mt-4">
            These days, I’m diving deep into{" "}
            <span className="text-accent font-medium">React Native</span> to
            build mobile applications, and I’m loving the challenge! My go-to
            tech stack includes <span className="text-accent">Next.js</span>,{" "}
            <span className="text-accent">Tailwind</span>,{" "}
            <span className="text-accent">React</span>, and, of course,{" "}
            <span className="text-accent">React Native</span>.
          </div>
          <div className="mt-4">
            I’m a big believer in keeping an open mind and exploring different
            perspectives. Whether in code or in life, I think there’s always
            something new to learn when you step outside of your comfort zone.
          </div>
          <div className="mt-4">
            When I’m not coding, you can probably find me on a volleyball court,
            enjoying a good game.
          </div>
        </div>

        <Button text="View All Projects" className="btn-primary mt-8" />
      </div>
      </div>
    </section>
  );
};

export default About;
