import { FaGithub } from "react-icons/fa";
import { projects } from "../../services/portfolio";

const PortfolioCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 xl:grid-cols-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="shadow-md shadow-accent rounded-2xl pb-6 bg-primary hover:-translate-y-2 hover:scale-105 transition ease-in-out duration-500 flex flex-col"
        >
          <div className="font-mono p-2">
            <img
              src={project.img}
              alt={project.title}
              className="rounded-2xl w-full h-56 object-fill"
            />
          </div>
          <div className="px-4 py-6 flex-initial text-other mt-2">
            <div className="flex justify-between items-center">
              <h3 className="text-textColor font-bold text-lg mb-4">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-full border-accent border"
              >
                <FaGithub className="rounded-full" />
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;
