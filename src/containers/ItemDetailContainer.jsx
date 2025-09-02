import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getProductoPorId } from "../data/productos";

function ItemDetailContainer({ agregarAlCarrito }) {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProductoPorId(itemId).then(setProducto);
  }, [itemId]);

  return producto ? (
    <ItemDetail {...producto} agregarAlCarrito={(prod) => agregarAlCarrito(prod, navigate)} />
  ) : (
    <p>Cargando...</p>
  );
}

export default ItemDetailContainer;