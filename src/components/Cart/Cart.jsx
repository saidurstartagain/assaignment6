
import { toast } from 'react-toastify';
import { BsCart3 } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";


import CartItem from '../CartItem/CartItem';

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed from cart", { autoClose: 1500 });
  };

  const proceedToCheckout = () => {
    setCart([]);
    toast.success("Checkout Successful!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <div className="text-7xl mb-4 flex justify-center">
          <TiShoppingCart /></div>
        <h2 className="text-3xl font-semibold mb-3">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">No products added yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8"><BsCart3 />Your Cart ({cart.length})</h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))}
      </div>

      <div className="mt-12 bg-base-200 p-8 rounded-2xl">
        <div className="flex justify-between text-2xl font-semibold mb-6">
          <span>Total Amount:</span>
          <span className="text-purple-600">${totalPrice}</span>
        </div>
        <button
          onClick={proceedToCheckout}
          className="btn btn-primary w-full rounded-4xl text-lg py-4"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;