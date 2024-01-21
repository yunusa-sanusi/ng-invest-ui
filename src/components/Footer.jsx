const footer = () => {
  return (
    <footer className="w-full h-24 md:h-20 bg-blue border-t border-t-grey">
      <div className="container flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-0 h-full">
        <h1 className="text-white rounded-md w-fit mt-4 md:mt-0">
          <a href="#hero">NG-Invest</a>
        </h1>

        <ul className="font-medium flex justify-center md:justify-start gap-x-4 flex-wrap text-white">
          <li>
            <a
              href="#services"
              className="hover:opacity-70 transition-all duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#choose-us"
              className="hover:opacity-70 transition-all duration-300"
            >
              Why Choose Us?
            </a>
          </li>

          {/* <li>
            <a
              href="#subscribe"
              className="hover:opacity-70 transition-all duration-300"
            >
              Get Started
            </a>
          </li> */}

          <li>
            <a
              href="#portfolio"
              className="hover:opacity-70 transition-all duration-300"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default footer;
