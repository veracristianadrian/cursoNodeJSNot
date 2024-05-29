const  carrito2 = [
    {nombre:'tele',precio:200},
    {nombre:'moinitor',precio:300},
    {nombre:'tele',precio:100},
    {nombre:'notebook',precio:1000},
]

// let resultado = carrito2.reduce( (total, producto) => total + producto.precio,0);

// console.log(resultado)

// resultado2 = carrito2.filter( elemento => elemento.precio > 200);

// console.log(resultado2);

// resultado3 = carrito2.filter(elemento => elemento.nombre
//     !== 'tele' );
// console.log(resultado3)
const resultado = carrito2.find(prod => prod.nombre==='tele');

console.log(resultado)

