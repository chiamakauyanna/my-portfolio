import aboutImg from "../../../public/assets/images/img3.png";
import Button from "../common/Button";

const About = () => {
  return (
    <section
      id="about"
      className="h-full w-screen flex flex-col lg:flex-row md:flex-row lg:px-40 md:px-20 px-10 bg-secondary text-textColor pt-32"
    >
      <div className="flex-1 lg:p-8 md:p-6 px-10 py-8 mx-auto">
        <img
          src={aboutImg}
          alt="about me image"
          className="border-8 border-accent shadow-lg shadow-accent rounded-full" data-aos="zoom-in-down"
        />
      </div>
      <div className="p-8 m-auto flex-1 lg:text-left md:text-left text-center" data-aos="zoom-in-up">
        <h2 className="font-semibold flex-wrap leading-tight mb-5">
          I am a <span className="text-accent">Frontend</span> Web Devoloper
        </h2>
        <div className="space-y-3 text-textColor font-bold">
          <p>
            Experience:
            <span className=" text-other ml-2">1 year</span>
          </p>
          <p>
            Specialty:
            <span className=" text-other ml-2"> Web development</span>
          </p>
          <p>
            Email:
            <span className=" text-other ml-2">Chiamakauyanna@gmail.com</span>
          </p>
          <p>
            Phone:
            <span className=" text-other ml-2">+2347051000546</span>
          </p>
          <p>
            Freelance:
            <span className=" text-other ml-2">Available</span>
          </p>
        </div>

        <Button
          text="View All Projects"
          className="btn-primary mt-8"
        />
      </div>
    </section>
  );
};

export default About;
