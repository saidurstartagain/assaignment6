import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {

    fetch('/data/product.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error("File not found");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <div id='Psection' className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            isAlreadyInCart={cart.some(item => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;