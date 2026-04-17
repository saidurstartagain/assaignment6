
const ToggleSection = ({ activeTab, setActiveTab, cartCount = 0 }) => {
  return (
    <div className="my-12 px-4">

      <div>
        <h2 className="text-4xl font-bold text-center mb-4">Premium Digital Tools</h2>
        <p className="text-center text-gray-600 mb-12"> Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>


      <div className="btn-group flex justify-center gap-2">


        <button
          onClick={() => setActiveTab('product')}
          className={`btn btn-lg rounded-full ${activeTab === 'product'
            ? 'btn-primary'
            : 'btn-outline'}`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab('cart')}
          className={`btn btn-lg rounded-full flex items-center ${activeTab === 'cart'
            ? 'btn-primary'
            : 'btn-outline'}`}
        >
          Cart
          <span className="bg-white text-purple-600 px-2 py-1 rounded-full text-sm font-bold">
            ({cartCount})
          </span>
        </button>

      </div>
    </div>
  );
};

export default ToggleSection;