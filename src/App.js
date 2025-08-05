import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity += 1;
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  return (
    <>
      <NavBar cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      <ItemListContainer greeting="¡Bienvenido a Micaela Store!" onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
