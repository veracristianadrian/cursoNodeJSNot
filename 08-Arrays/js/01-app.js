 // const numeros = [10, 20, 30, 40, 50];
// for (let i=0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }
const carrito = [
    {nombre:"monitor", precio:25},
    {nombre:"celular", precio:34},
    {nombre:"auri", precio:200},
    {nombre:"termo", precio:255},
];

// const producto1 ={
//     nombre : 'monitor',
//     precio : 200
// };
// const producto2 = {
//     nombre: 'teclado',
//     precio: 45
// };


// carrito.push(producto1);
// carrito.unshift(producto2);
// console.table(carrito);  
carrito.forEach( function(producto){
    console.log(`el producto ${producto.nombre} tiene un precio de ${producto.precio}`);
})

const nuevoCarrito = carrito.map( function(p){
    return `el producto ${p.nombre} tiene un precio de ${p.precio}`;
}
);
console.log(nuevoCarrito);