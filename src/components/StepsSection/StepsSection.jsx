import { FiUser, FiPackage } from "react-icons/fi";

import { HiOutlineRocketLaunch } from "react-icons/hi2";


const StepCard = ({ number, Icon, title, description, isPlain }) => {
  return (
    <div className="relative p-9 bg-white border border-gray-100 rounded-[2.5rem] shadow-lg shadow-gray-100/50 flex flex-col items-center text-center hover:bg-gray-200">


      <div className="absolute top-6 right-6 w-10 h-10 bg-[#7B39FD] rounded-full flex items-center justify-center text-white font-semibold text-sm">
        {number}
      </div>


      <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mt-6 mb-10">
        <Icon className="w-14 h-14 text-[#9A60FF]" strokeWidth={1} />
      </div>


      <div className={`mt-auto w-full ${isPlain ? 'px-2' : ''}`}>
        {title && <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>}
        <p className="text-gray-600 text-[15px] leading-relaxed max-w-120 mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};


const GetStartedSection = () => {

  const steps = [
    {
      number: "01",
      Icon: FiUser,
      isPlain: true,
      description: "Sign up for free in seconds. No credit card required to get started."
    },
    {
      number: "02",
      Icon: FiPackage,
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      number: "03",
      Icon: HiOutlineRocketLaunch,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        <div className="text-center mb-16 space-y-3">
          <h2 className="text-5xl font-bold text-gray-800">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetStartedSection;