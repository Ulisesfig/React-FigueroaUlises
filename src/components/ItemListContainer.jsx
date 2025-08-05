
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fakeFetch = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Remera negra', price: 3500 },
          { id: 2, title: 'Pantalón beige', price: 7000 },
          { id: 3, title: 'Zapatillas urbanas', price: 15000 }
        ]);
      }, 1000);
    });

    fakeFetch.then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>{greeting}</h2>
      <ItemList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default ItemListContainer;
