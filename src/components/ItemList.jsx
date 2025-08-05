import React from 'react';
import Item from './Item';

const ItemList = ({ products, onAddToCart }) => (
  <div className="container">
    <div className="row g-3 py-3">
      {products.map((prod) => (
        <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Item
            id={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ItemList;
