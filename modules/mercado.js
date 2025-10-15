import { Producto } from "./productos";


const mercado = [
  new Producto("Espada de Hierro", 1200, "común", "arma", { ataque: 5 }),
  new Producto("Armadura de Cuero", 950, "común", "armadura", { defensa: 3 }),
  new Producto("Poción de Vida", 500, "común", "consumible", { curacion: 20 }),
  new Producto("Espada de Fuego", 2500, "raro", "arma", { ataque: 12 }),
  new Producto("Escudo del Dragón", 2800, "raro", "armadura", { defensa: 10 }),
  new Producto("Espada Legendaria", 5500, "legendario", "arma", { ataque: 25 }),
  new Producto("Armadura Sagrada", 5000, "legendario", "armadura", { defensa: 20 })
];


//Mostrar todos los productos
function mostrarMercado() {
  mercado.forEach(p => console.log(p.presentar()));
}

//Buscar un producto por nombre
function buscarProducto() {
  return mercado.find(Producto => Producto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
}

//Filtrar productos por rareza
function filtrarPorRareza(rareza) {
  return mercado.filter(Producto => Producto.rareza === rareza);
}

//Aplicar descuento rareza y porcentaje
function aplicarDescuentoRareza({ tipo = null, rareza = null, porcentaje }) {
  return mercado.map(p => {
    if ((tipo && p.tipo === tipo) || (rareza && p.rareza === rareza)) {
      return p.aplicarDescuento(porcentaje);
    }
    return p;
  });

}

//Mostrar un producto por nombre
function mostrarProducto(nombre) {
  const p = buscarProducto(nombre);
  if (p) console.log(p.presentar());
  else console.log(`"No se encontro el producto  ${nombre}"`)
}




export { Producto, mercado, mostrarMercado, buscarProducto, filtrarPorRareza, aplicarDescuentoRareza, mostrarProducto };
