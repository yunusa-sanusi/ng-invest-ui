import Navbar from '../Navbar';
import HeroCard from './HeroCard';
import hero from '../../assets/hero.png';

const HeroSection = () => {
  return (
    <header id="hero" className="w-full h-auto bg-blue text-white">
      <Navbar />
      <section className="container flex flex-col md:flex-row justify-between pb-16 pt-36 gap-y-16">
        <div className="text-center md:text-left md:w-3/6 h-full">
          <h3 className="text-3xl md:text-6xl font-bold ">
            We make it easy for everyone to invest
          </h3>
          <p className="font-medium py-10">
            Investment is a term with several meanings related to finance and
            economics. The term relates to the accumulation of an assets in the
            forms of an expectation of the future profits.
          </p>

          <div className="flex flex-row justify-center md:justify-start gap-3 mb-10 flex-wrap">
            <HeroCard metric="15+" word="Years Experience" />
            <HeroCard metric="70%" word="Growth Rate" />
            <HeroCard metric="120+" word="Active Country" />
          </div>

          <a
            href=""
            className="bg-white rounded-full py-3 px-6 text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        <div className="bg-grey bg-opacity-30 rounded-lg h-[500px] w-[350px] mx-auto">
          <img src={hero} alt="hero image" className="w-full h-full" />
        </div>
      </section>
    </header>
  );
};
export default HeroSection;
