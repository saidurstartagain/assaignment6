
import { CiPlay1 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div id="home" className="py-12">
            <div className="max-w-11/12 mx-auto px-4 grid md:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                    <div className="flex">
                        <div className="inline-flex items-center gap-2.5 bg-[#EEEAFF] px-5 py-2.5 rounded-full border border-purple-200">
                            <span className="text-xl font-medium text-[#7C3AED] relative top-[-1px]">
                                <GoDotFill />
                            </span>
                            <span className="text-[15px] font-medium text-[#7C3AED] leading-none">
                                New: AI-Powered Tools Available
                            </span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Supercharge Your Digital Workflow
                    </h1>
                    <p className="text-xl text-gray-400">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary rounded-4xl hover:bg-gray-400   ">Explore Products</button>
                        <button className="btn rounded-4xl border-purple-600 text-purple-500 hover:bg-white hover:text-purple-700">
                            <CiPlay1 /> Watch Demo
                        </button>
                    </div>

                </div>

                <div className="flex justify-center max-h-130 w-full">
                    <img
                        src={bannerImage}
                        alt="Digital Tools Banner"
                        className="rounded-3xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;