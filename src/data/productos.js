const productos = [
  { id: "1", nombre: "Cinturón Ancho", categoria: "accesorios", precio: 2000 },
  { id: "2", nombre: "Borcegos", categoria: "calzado", precio: 4500 },
  { id: "3", nombre: "Botas", categoria: "calzado", precio: 5000 },
  { id: "4", nombre: "Top Bordo", categoria: "ropa", precio: 2800 },
  { id: "5", nombre: "Set de Collares", categoria: "accesorios", precio: 3000 },
  { id: "6", nombre: "Set de Anillos", categoria: "accesorios", precio: 3500 },
  { id: "7", nombre: "Conjunto Blanco", categoria: "ropa", precio: 4500 },
  { id: "8", nombre: "Bucanera", categoria: "calzado", precio: 6000 },
  { id: "9", nombre: "Short Negro", categoria: "ropa", precio: 2500 }
];

export function getProductos(categoria) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        categoria
          ? productos.filter(p => p.categoria === categoria)
          : productos
      );
    }, 800);
  });
}

export function getProductoPorId(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos.find(p => p.id === id));
    }, 800);
  });
}