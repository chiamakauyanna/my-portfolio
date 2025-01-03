import PortfolioCard from "./common/PortfolioCard"

const PorfolioList = () => {
  return (
    <div>
    <h2 className="font-semibold mb-6 text-center" data-aos="fade-down">My <span className="text-accent">Portfolio</span></h2>
    <div data-aos="zoom-in-up">
      <PortfolioCard/>
      </div>
    </div>
  )
}

export default PorfolioList