import { FaCheck } from "react-icons/fa6";


const PricingSection = () => {
  return (
    <div id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 mb-12">No hidden fees. Cancel anytime.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-3xl p-8 hover:border-purple-400 transition-all">
            <h3 className="text-xl font-semibold">Starter</h3>
            <div className="text-5xl font-bold my-6">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
            <ul className="space-y-3 text-left">
              <li className="flex justify-center items-center gap-2"><FaCheck /> Basic Features</li>
              <li className="flex justify-center items-center gap-2"><FaCheck /> Community Support</li>
              <li className="flex justify-center items-center gap-2"><FaCheck /> 5 Tools Access</li>
            </ul>
            <button className="btn btn-primary rounded-full w-full mt-10">Get Started Free</button>
          </div>

          <div className=" text-white bg-[#4F39F6] rounded-3xl p-8 relative scale-105 shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-200 text-orange-400 px-6 py-1 rounded-full font-normal w-40">Most Popular</div>
            <h3 className="text-xl font-semibold">Pro</h3>
            <div className="text-5xl font-bold my-6">$19<span className="text-lg font-normal text-gray-500">/month</span></div>
            <ul className="space-y-3 text-left">
              <li className="flex justify-center items-center gap-2"><FaCheck /> Unlimited Tools</li>
              <li className="flex justify-center items-center gap-2"><FaCheck />All Premium Features</li>
              <li className="flex justify-center items-center gap-2"><FaCheck />Priority Support</li>
              <li className="flex justify-center items-center gap-2"><FaCheck />Early Access</li>
            </ul>
            <button className="btn bg-white text-purple-500 rounded-full w-full mt-10">Start Pro Trial</button>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 hover:border-purple-400 transition-all">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <div className="text-5xl font-bold my-6">$49<span className="text-lg font-normal text-gray-500">/month</span></div>
            <ul className="space-y-3 text-left">
              <li className="flex justify-center items-center gap-2"><FaCheck /> Everything in Pro</li>
              <li className="flex justify-center items-center gap-2"><FaCheck /> Team Accounts</li>
              <li className="flex justify-center items-center gap-2"><FaCheck /> Custom Tools</li>
              <li className="flex justify-center items-center gap-2"><FaCheck /> Dedicated Manager</li>
            </ul>
            <button className="btn btn-primary rounded-full w-full mt-10">Contact Sales</button>
          </div>
        </div>
      </div>

     
    </div>

  );
};

export default PricingSection;