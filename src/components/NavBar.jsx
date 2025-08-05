import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.jpg';

const NavBar = ({ cart, onRemoveFromCart }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#343a40',
      color: 'white'
    }}>
      <div>
        <img src={logo} alt="Logo Micaela" style={{ height: '40px' }} />
      </div>
      <CartWidget cart={cart} onRemoveFromCart={onRemoveFromCart} />
    </nav>
  );
};

export default NavBar;
