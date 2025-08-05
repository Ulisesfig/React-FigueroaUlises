import React, { useState } from 'react';

const CartWidget = ({ cart, onRemoveFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalQuantity = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ position: 'relative' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white' }}
      >
        🛒
        <span style={{
          backgroundColor: 'red',
          borderRadius: '50%',
          padding: '2px 8px',
          fontSize: '0.8rem',
          marginLeft: '8px'
        }}>
          {totalQuantity}
        </span>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          right: 0,
          top: '30px',
          width: '300px',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          padding: '1rem',
          zIndex: 1000
        }}>
          <h4>Carrito</h4>
          {totalQuantity === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul style={{ listStyle: 'none', paddingLeft: 0, maxHeight: '200px', overflowY: 'auto' }}>
              {Object.values(cart).map((item) => (
                <li key={item.id} style={{
                  marginBottom: '0.5rem',
                  borderBottom: '1px solid #ddd',
                  paddingBottom: '0.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <strong>{item.title}</strong><br />
                    Cantidad: {item.quantity}<br />
                    Precio: ${item.price * item.quantity}
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      padding: '0.2rem 0.5rem'
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}
          <hr />
          <p><strong>Total: ${totalPrice}</strong></p>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
