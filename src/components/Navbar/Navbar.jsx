import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ cartCount = 0 }) => {
    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
                <div className="navbar-start">
                    <a href="/" className="flex items-center gap-3">
                        <div>
                            <h1 className="text-3xl font-bold text-purple-700">DigiTools</h1>
                        </div>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-base font-medium">
                        <li><a href="#products">Products</a></li>
                        <li><a href="#products">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#pricing">Testimonials</a></li>
                        <li><a href="#steps">FAQ</a></li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-6">

                    <div className="relative cursor-pointer group flex">
                        <div className="w-10 h-10 hover:bg-purple-100 rounded-3xl flex items-center justify-center transition-all bg-base-200">
                            <FaCartArrowDown />
                        </div>
                        {cartCount > 0 && (
                            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ring-2 ring-white">
                                {cartCount}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="btn text-normal rounded-full h-10 w-24 ">Login</button>
                        <button className="btn btn-primary rounded-full px-6 btn-sm">Get Started</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;