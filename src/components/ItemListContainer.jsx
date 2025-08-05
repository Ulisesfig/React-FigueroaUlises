import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de fetch
    const fakeProducts = [
      {
        id: 1,
        title: 'Top Negro (Microfibra)',
        price: 5000,
        image: img1,
      },
      {
        id: 2,
        title: 'Top Blanco',
        price: 3500,
        image: img2,
      },
      {
        id: 3,
        title: 'Top Bordo',
        price: 2500,
        image: img3,
      },
      {
        id: 4,
        title: 'Top Irregular Bordo',
        price: 4000,
        image: img4,
      },
    ];

    setTimeout(() => {
      setProducts(fakeProducts);
    }, 500);
  }, []);

  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>{greeting}</h2>
      <ItemList products={products} onAddToCart={onAddToCart} />
    </>
  );
};

export default ItemListContainer;
