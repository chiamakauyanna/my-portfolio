import PortfolioCard from "./common/PortfolioCard"

const PorfolioList = () => {
  return (
    <div>
    <h2 className="font-semibold text-center" data-aos="fade-down">My <span className="text-accent">Portfolio</span></h2>
    <div data-aos="zoom-in-up" className="py-32">
      <PortfolioCard/>
      </div>
    </div>
  )
}

export default PorfolioList