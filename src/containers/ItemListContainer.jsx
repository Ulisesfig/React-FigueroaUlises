import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProductos } from "../data/productos";

function ItemListContainer({ mensaje }) {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [precioMax, setPrecioMax] = useState(7000);

  useEffect(() => {
    getProductos(categoriaId).then(setProductos);
  }, [categoriaId]);

  const productosFiltrados = productos.filter(p => p.precio <= precioMax);

  return (
    <section className="itemlist-section">
      {mensaje && (
        <div className="alert-exito">
          {mensaje}
        </div>
      )}
      <div className="filtro-barra">
        <label htmlFor="precioMax">
          Precio máximo: <strong>${precioMax}</strong>
        </label>
        <input
          id="precioMax"
          type="range"
          min={0}
          max={7000}
          step={500}
          value={precioMax}
          onChange={e => setPrecioMax(Number(e.target.value))}
        />
        <button className="btn-limpiar" onClick={() => setPrecioMax(7000)}>
          Limpiar filtro
        </button>
      </div>
      <ItemList productos={productosFiltrados} />
    </section>
  );
}

export default ItemListContainer;