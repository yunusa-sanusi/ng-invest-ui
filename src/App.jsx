import { useState, useEffect } from 'react';
import axios from 'axios';

import HeroSection from './components/hero/HeroSection';
import ServicesSection from './components/services/ServicesSection';
import ChooseUsSection from './components/choose-us/ChooseUsSection';
// import SubscribeSection from './components/subscribe/SubscribeSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import Footer from './components/footer';

function App() {
  const [portfolioData, setPortfolioData] = useState([]);

  const fetchPortfolios = async () => {
    const response = await axios.get('https://ng-invest.onrender.com/');
    setPortfolioData(response.data.data);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ChooseUsSection />
      {/* <SubscribeSection /> */}
      <PortfolioSection portfolioData={portfolioData} />
      <Footer />
    </main>
  );
}

export default App;
