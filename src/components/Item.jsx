import React from 'react';

const Item = ({ id, title, price, image, onAddToCart }) => (
  <div className="card h-100 shadow-sm">
    <img
      src={image}
      className="card-img-top"
      alt={title}
      style={{ height: '70%', objectFit: 'cover' }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">${price}</p>
      <button
        className="btn btn-primary mt-auto"
        onClick={() => onAddToCart({ id, title, price, image })}
      >
        Agregar al carrito
      </button>
    </div>
  </div>
);

export default Item;
