const PortfolioItem = ({ percent, stock, maxAllocation }) => {
  const pw = percent / 100;
  const computeWidth = (pw / maxAllocation) * 100;

  const bgColors =
    computeWidth > 70
      ? 'bg-skyBlue'
      : computeWidth > 50 && computeWidth < 70
      ? 'bg-lightBlue'
      : computeWidth > 40 && computeWidth < 50
      ? 'bg-yellow-500'
      : computeWidth > 30 && computeWidth < 40
      ? 'bg-red-500'
      : 'bg-red-900';
  return (
    <article
      className={`w-full items-center ${
        percent === 0 ? 'hidden' : 'flex'
      } overflow-hidden`}
    >
      <h3 className="w-1/4">{stock}</h3>
      <div className={`w-full`}>
        <div
          className={`${bgColors} min-w-[64px] text-white px-2 py-3 transition-all duration-700 border`}
          style={{ width: `calc(${computeWidth}%)` }}
        >
          <p className="w-full">{percent}%</p>
        </div>
      </div>
    </article>
  );
};
export default PortfolioItem;
