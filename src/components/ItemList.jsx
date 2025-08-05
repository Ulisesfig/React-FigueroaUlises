
import React from 'react';
import Item from './Item';

const ItemList = ({ products, onAddToCart }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      padding: '2rem'
    }}>
      {products.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          title={prod.title}
          price={prod.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ItemList;
