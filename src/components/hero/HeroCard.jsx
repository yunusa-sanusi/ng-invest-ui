const HeroCard = ({ metric, word }) => {
  return (
    <div className="w-[180px] h-[115px] bg-white text-black font-medium rounded-md flex flex-col justify-center items-center">
      <p>{metric}</p>
      <p>{word}</p>
    </div>
  );
};
export default HeroCard;
