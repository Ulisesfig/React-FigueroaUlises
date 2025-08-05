import React from 'react';

const Item = ({ title, price, id, onAddToCart }) => {
  const handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      const product = { id, title, price };
      onAddToCart(product);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#fff',
        textAlign: 'center'
      }}
    >
      <h4>{title}</h4>
      <p>Precio: ${price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;
