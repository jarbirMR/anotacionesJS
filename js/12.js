//objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Object.freeze(producto); no me permite eliminar ni agregar cosas al objeto

Object.seal (producto); //permite modificar datos del objeto pero no agrega ni eliminar atributos

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);