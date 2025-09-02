import { Link } from "react-router-dom";

function Item({ id, nombre, precio, categoria }) {
  const imagen = require(`../assets/${id}.jpg`);
  return (
    <div className="item-card">
      <img src={imagen} alt={nombre} className="item-img" />
      <h3>{nombre}</h3>
      <p>Categoría: {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</p>
      <p>Precio: <strong>${precio}</strong></p>
      <Link className="item-detail-link" to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;