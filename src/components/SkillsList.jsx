import SkillsCard from "./common/SkillsCard"

const SkillsList = () => {
  return (
    <div>
       <h2 className="font-semibold mb-6 text-center" data-aos="fade-down">My <span className="text-accent" >Skills</span></h2>
       <div data-aos="zoom-in-up">
        <SkillsCard/>
       </div>
    </div>
  )
}

export default SkillsList