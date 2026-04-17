
const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex gap-6 bg-base-100 p-6 rounded-2xl shadow-sm border">
      <img
        src={item.icon}
        alt={item.name}
        className="w-20 h-20 object-contain bg-white p-3 rounded-xl border"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-xl">{item.name}</h3>
        <p className="text-gray-600 mt-1">{item.description}</p>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-purple-500">${item.price}</span>
            <span className="text-sm text-gray-500"> /{item.period}</span>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="btn btn-ghost text-red-500 hover:bg-red-50"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;