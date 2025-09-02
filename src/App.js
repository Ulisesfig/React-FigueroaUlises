import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Carrito from "./components/Carrito";
import NotFound from "./components/NotFound";
import './App.css';


function App() {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Agregar producto y redirigir
  const agregarAlCarrito = (producto, navigate) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      if (existe) {
        return prev.map(p =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
    setMensaje("Tu producto se ha agregado con éxito");
    navigate("/");
    setTimeout(() => setMensaje(""), 2500);
  };

  // Quitar producto
  const quitarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
  };

  // Cantidad total
  const cantidadCarrito = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  return (
    <BrowserRouter>
      <NavBar cantidadCarrito={cantidadCarrito} />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje={mensaje} />}
        />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer mensaje={mensaje} />}
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/carrito"
          element={<Carrito carrito={carrito} quitarDelCarrito={quitarDelCarrito} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;