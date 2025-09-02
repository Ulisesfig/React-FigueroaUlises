import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const categorias = ["ropa", "accesorios", "calzado"];

function NavBar({ cantidadCarrito = 0 }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Micaela Store" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-links categoria-links">
        {categorias.map(cat => (
          <Link key={cat} to={`/categoria/${cat}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
        ))}
      </div>
      <div className="navbar-cart ms-3">
        <Link to="/carrito" className="position-relative">
          <i className="bi bi-cart" style={{ fontSize: "2rem", color: "#fff" }}></i>
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {cantidadCarrito}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;