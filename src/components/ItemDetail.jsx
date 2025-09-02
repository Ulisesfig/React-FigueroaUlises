function ItemDetail({ id, nombre, precio, categoria, agregarAlCarrito }) {
  const imagen = require(`../assets/${id}.jpg`);
  return (
    <section className="item-detail">
      <img src={imagen} alt={nombre} className="item-detail-img" />
      <h2>{nombre}</h2>
      <p><strong>Precio:</strong> ${precio}</p>
      <p><strong>Categoría:</strong> {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</p>
      <button
        className="add-to-cart-btn"
        onClick={() => agregarAlCarrito({ id, nombre, precio, categoria })}
      >
        Agregar al carrito
      </button>
    </section>
  );
}

export default ItemDetail;