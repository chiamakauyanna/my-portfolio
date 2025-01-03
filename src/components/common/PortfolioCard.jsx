import { FaGithub } from "react-icons/fa";
import { projects } from "../../services/portfolio";

const PortfolioCard = () => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:grid-cols-4">
      {projects.map((project) => (
        <li
          key={project.id}
          className="border border-transparent shadow-md shadow-accent rounded-2xl py-4 bg-primary px-4 hover:-translate-y-2 hover:scale-105 transition ease-in-out duration-500"
        >
          <div>
            <img
              src={project.img}
              alt="project image"
              className="rounded-2xl h-auto w-full"
            />
          </div>
          <div>
            <div className="flex justify-between mt-6">
              <h3 className="text-other font-bold">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-full bg-accent"
              >
                <FaGithub className="rounded-full bg-accent" />
              </a>
            </div>
            <p className="text-sm">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioCard;
