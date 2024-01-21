import ChooseUsCard from './ChooseUsCard';
import chooseUsImage from '../../assets/choose-us.png';

const ChooseUsSection = () => {
  return (
    <section id="choose-us" className="py-16 bg-grey">
      <div className="container">
        <h2 className="text-3xl md:text-4xl pb-3 font-semibold capitalize text-center mb-10">
          Why Choose Us
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
          <ChooseUsCard
            title="Reliable and diversified"
            body="Your money is invested in a wide range of asset classes across the market. It's a time-tested way to help maximize returns while minimizing risk."
          />
          <ChooseUsCard
            title="Made for modern investors"
            body="Get access to rare, innovative investing opportunities without high fees. Enjoy intuitive tech and get human help along the way."
          />
          <ChooseUsCard
            title="Supported by experts"
            body="Our in-house investment team will customize a portfolio to suit your risk tolerance and goals. They keep a close eye on market trends and opportunities, so you don’t have to."
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-36 mb-6 pt-16">
          <div>
            <img src={chooseUsImage} alt="image" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-2xl md:text-5xl pb-3 font-semibold capitalize text-center md:text-left">
              Invest with confidence
            </h2>
            <ChooseUsCard
              title="Withstand market highs and lows"
              body="We don’t try to predict the market. Instead, we invest your money in different assets that perform well at different times. Resiliency is built right in."
            />
            <ChooseUsCard
              title="Make the most of your money"
              body="In the background, we’re taking care of the little things that make a big difference, like asset allocation, rebalancing, and dividend reinvestment."
            />
            <ChooseUsCard
              title="Trusted advice, any time"
              body="Our advisors are here to help at every stage of your money journey — and as fiduciaries, they'll always put your financial best interests first."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUsSection;
