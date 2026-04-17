import { SiIlovepdf } from "react-icons/si";


const Footer = () => {
  return (
    <> 
      <div className="w-11/12 mx-auto bg-[#4F39F6] text-white py-20 space-y-12 mt-16 text-center rounded-2xl">
        <h2 className="font-bold text-4xl">Ready to Transform Your Workflow?</h2>
        <p>
          Join thousands of professionals who are already using Digitools to work smarter <br />
          Start your free trial today.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="btn text-purple-600 rounded-full hover:bg-red-300">
            Explore Products
          </button>
          <button className="w-28 border rounded-full text-white hover:bg-white hover:text-purple-700 transition-all">
            View Pricing
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-16 mb-10 w-11/12 mx-auto rounded">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center md:grid-cols-4 gap-10">
            <div>
              <span className="text-2xl font-bold text-white">DigiTools</span>
              <p className="text-sm mt-6">Making digital productivity simple and powerful with AI.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
                <li className="hover:text-white cursor-pointer">Community</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm flex justify-center items-center gap-2">
            © 2026 DigiTools. All rights reserved. Made with <SiIlovepdf className="text-red-600" /> in Bangladesh
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;