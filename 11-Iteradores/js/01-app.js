
// for (i= 0 ; i < 20; i++){
//     if (i % 2 === 0){
//         console.log(`numero par ${i}`);
//     }else{
//         console.log(`numero impar ${i}`);
//     }
// }

const carrito = [
    {nombre:"monitor", precio:25,descuento:false},
    {nombre:"celular", precio:25,descuento:true},
    {nombre:"auri", precio:200,descuento:true},
    {nombre:"termo", precio:255,descuento:false},
];

for (let i=0; i<carrito.length;i++){
    if(carrito[i].descuento){
        console.log(`el producto ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(`el producto ${carrito[i].nombre} vale $ ${carrito[i].precio}`)
}

for (let i=0 ; i < 100 ; i++){
    if (i%3===0 && i%5===0){
        console.log('fizz buzz');
        console.log(`${i}`);
    }else if(i%3===0){
        console.log('fizz');
        console.log(`${i}`);
    }else if(i%5===0){
        console.log('buzz');
        console.log(`${i}`);
    }

}