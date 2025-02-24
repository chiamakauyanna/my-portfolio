import PorfolioList from "../PorfolioList"

const Portfolio = () => {
  return (
    <section  id="portfolio" className="w-screen flex items-center justify-center px-10 lg:px-32 md:px-24 bg-secondary text-textColor pt-32">
      <PorfolioList/>
    </section>
  )
}

export default Portfolio