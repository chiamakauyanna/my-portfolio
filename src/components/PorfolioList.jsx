import PortfolioCard from "./common/PortfolioCard";

const PorfolioList = () => {
  return (
    <div className="text-center">
      <div
        data-aos="fade-down"
        className="border-b border-accent inline-block"
      >
        <h2 className="font-semibold text-center p-2">
          My <span className="text-accent">Portfolio</span>
        </h2>
      </div>

      <div data-aos="zoom-in-up" className="pb-32 mt-24">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default PorfolioList;
