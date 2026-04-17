
const Stats = () => {
  return (
    <div className="w-11/12 mx-auto py-12 px-12 rounded-2xl bg-[#4F39F6] ">
      <div className="max-w-[70%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white">50K+</div>
            <div className="text-white mt-2">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">200+</div>
            <div className="text-white mt-2">Premium Tools</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">4.9</div>
            <div className="text-white mt-2">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;