import { skills } from "../../services/Skills";

const SkillsCard = () => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6">
      {skills.map((skill) => 
      <li className="border border-transparent shadow-md shadow-accent rounded-2xl py-6 bg-secondary" key={skill.id}>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-12 h-12">
            <img src={skill.img} alt={skill.text}/>
          </div>
          <p className="font-semibold text-lg">{skill.text}</p>
        </div>
      </li>)}
    </ul>
  );
};

export default SkillsCard;
