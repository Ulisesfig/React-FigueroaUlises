import Item from "./Item";

function ItemList({ productos }) {
  return (
    <section className="item-list">
      <h2>Catálogo de productos</h2>
      <div className="item-list-grid">
        {productos.map(prod => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
}

export default ItemList;