const carrito = [
    {nombre: 'pantalla',precio: 200 },
    {nombre: 'raton',precio:45 },
    {nombre: 'cargador',precio: 150 },
    {nombre: 'auri',precio: 25 },
]

const nuevoCarrito = carrito.map( (product) => `${product.nombre} precio ${product.precio}`)

console.log(nuevoCarrito);




carrito.forEach( productito => console.log( `${productito.nombre} su precio es de ${productito.precio}`) )