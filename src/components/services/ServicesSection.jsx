import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-4xl pb-3 font-semibold capitalize text-center text-blue">
            our best services
          </h2>
          <h3 className="text-4xl pb-3 font-semibold capitalize text-center text-blue">
            for your convinience
          </h3>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <ServiceCard
            icon={<TfiHeadphoneAlt size={28} className="text-center mx-auto" />}
            title="Support System"
            body="A robust financial support system is crucial for successful investment, providing stability during market fluctuations and offering guidance to navigate challenges, ensuring long-term wealth growth and security."
          />
          <ServiceCard
            icon={<CiMoneyCheck1 size={28} className="text-center mx-auto" />}
            title="Financial Management"
            body="Effective financial management is crucial for successful financial investment, involving strategic planning, risk assessment, and portfolio optimization to maximize returns while minimizing potential losses in dynamic market conditions."
          />
          <ServiceCard
            icon={
              <AiOutlineSafetyCertificate
                size={28}
                className="text-center mx-auto"
              />
            }
            title="Safety Compliance"
            body="Safety compliance in financial investment is crucial, ensuring adherence to regulations and standards that safeguard investors. It fosters trust, mitigates risks, and promotes a secure environment for wealth growth."
          />
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
