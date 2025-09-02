function Carrito({ carrito, quitarDelCarrito }) {
  return (
    <section className="carrito-section">
      <h2>Tu carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="carrito-lista">
          {carrito.map(prod => (
            <li key={prod.id} className="carrito-item">
              <span>{prod.nombre} ({prod.cantidad}) - ${prod.precio * prod.cantidad}</span>
              <button
                className="btn-quitar"
                onClick={() => quitarDelCarrito(prod.id)}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Carrito;