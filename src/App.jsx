
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';
import ToggleSection from './components/ToggleSection/ToggleSection';
import ProductSection from './components/ProductSection/ProductSection';
import Cart from './components/Cart/Cart';
import StepsSection from './components/StepsSection/StepsSection';
import PricingSection from './components/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('product');
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <ToggleSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.length} 
      />

      {activeTab === 'product' ? (
        <ProductSection cart={cart} setCart={setCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}

      <StepsSection />
      <PricingSection />
      <Footer />

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;