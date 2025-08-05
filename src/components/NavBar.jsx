
import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/logo.jpg';

const NavBar = ({ cart }) => {
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
        <img src={logo} alt="Logo Micalea" style={{ height: '40px' }} />
      </div>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '1.5rem',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Productos</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
      </ul>
      <CartWidget cart={cart} />
    </nav>
  );
};

export default NavBar;

