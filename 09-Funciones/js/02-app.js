// const reproductor= {
//     reproduciendo: function(nombre){
//         console.log(`se esta reproduciendo una cancion llamada ${nombre}`)
//     },
//     pausa: function(){
//         console.log(`la musica esta pausada`)
//     }
// };

// reproductor.reproduciendo('waka waka');

 const sumar = (a,b) =>    a + b;


 console.log(sumar(2,2));


//  let total = 0;
//  function agregarCarrito (precio){
//      return total += precio; 
//  }

let total = 0;
const agregarCarro = producto => total += producto;

agregarCarro(200);
agregarCarro(150);

console.log(`èl total del carro es de $ ${total}`);

const aplicarImp = montoTotal => montoTotal*1.21;

console.log(`el monto total con el impuesto es de ${aplicarImp(total)}`);
