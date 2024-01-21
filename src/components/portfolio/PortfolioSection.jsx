import { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection = ({ portfolioData }) => {
  const [riskScore, setRiskScore] = useState(0);
  const [maxAllocation, setMaxAllocation] = useState(0);

  const [portfolio, setPortfolio] = useState({
    riskScore: 0,
    nigerianStock: 0,
    foreignStock: 0,
    techStock: 0,
    emergingStock: 0,
    nigerianBond: 0,
    foreignBond: 0,
    commodiy: 0,
    realEstate: 0,
    tBills: 0,
    alternative: 0,
  });

  useEffect(() => {
    const selectedPortfolio = portfolioData.find(
      (portfolio) => portfolio.riskScore === Number(riskScore),
    );

    setPortfolio(selectedPortfolio);
  }, [riskScore, portfolioData]);

  useEffect(() => {
    if (portfolio !== undefined) {
      const arr = portfolio !== undefined && Object.values(portfolio).slice(1);
      const highestNum = Math.max(...arr);
      const mxAlloc = highestNum / 100;
      setMaxAllocation(mxAlloc);
    }
  }, [portfolio]);

  const handleOnChange = (e) => {
    setRiskScore(e.target.value);
  };

  return (
    <section id="portfolio" className="py-10 bg-blue text-white">
      <div className="container">
        <div className=" mb-4">
          <h2 className="font-semibold text-2xl md:text-4xl capitalize mb-3">
            What level of risk suits you best?
          </h2>
          <p>
            Use our custom example portfolio to know which investment option is
            would like base on the risk
          </p>
        </div>

        <div>
          <select
            onChange={handleOnChange}
            className="text-blue py-3 px-2 rounded-lg w-full outline-none border-none"
          >
            <option value="">Select a Risk Score</option>
            {portfolioData.length > 0 &&
              portfolioData.map((portfolio) => {
                return (
                  <option key={portfolio._id} value={portfolio.riskScore}>
                    {portfolio.riskScore}
                  </option>
                );
              })}
          </select>
        </div>

        {portfolio !== undefined && (
          <div className="pt-16">
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.nigerianStock}
              stock="Nigerian Stocks"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.foreignStock}
              stock="Foreign Stocks"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.techStock}
              stock="Tech Stocks"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.emergingStock}
              stock="Emerging Stocks"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.nigerianBond}
              stock="Nigerian Bonds"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.foreignBond}
              stock="Foreign Bonds"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.commodiy}
              stock="Commodities"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.realEstate}
              stock="Real Estate"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.tBills}
              stock="T-Bills"
            />
            <PortfolioItem
              maxAllocation={maxAllocation}
              percent={portfolio.alternative}
              stock="Alternatives"
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default PortfolioSection;
