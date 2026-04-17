import { toast } from 'react-toastify';
import { FaCheck } from "react-icons/fa6";


const ProductCard = ({ product, onAddToCart, isAlreadyInCart }) => {

  const handleAddToCart = () => {
    if (isAlreadyInCart) return;
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div id="products" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-purple-200 h-full">

      <figure className="px-6 pt-6">
        <div className="w-12 h-13 bg-blue-50 rounded-full flex items-center justify-center">
          <img src={product.icon} alt={product.name} className="w-10 h-10 object-contain" />
        </div>
      </figure>

      <div className="card-body">

        <div className="flex justify-between items-start">
          <h2 className="card-title text-xl font-bold">{product.name}</h2>
          {product.tag && (
            <div className={`badge font-bold py-3 ${product.tagType === 'popular' ? 'badge-warning text-orange-900' : 'badge-primary'
              }`}>
              {product.tag.toUpperCase()}
            </div>
          )}
        </div>


        <p className="text-sm text-gray-600 mt-2">{product.description}</p>


        <div className="mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-purple-700">${product.price}</span>
            <span className="text-gray-500 font-medium">/{product.period}</span>
          </div>
        </div>


        <ul className="mt-4 space-y-3">
          {product.features && product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
              <FaCheck className="text-green-500 text-lg" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>


        <div className="card-actions mt-auto pt-8">
          <button
            onClick={handleAddToCart}
            disabled={isAlreadyInCart}
            className={`btn btn-block text-lg font-bold h-10 rounded-full ${isAlreadyInCart
              ? 'bg-purple-100 text-purple-400 border-none'
              : 'btn-primary bg-purple-700 hover:bg-purple-800'
              }`}
          >
            {isAlreadyInCart ? 'Added to Cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;