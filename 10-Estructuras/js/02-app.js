const puntaje = 199;
let autenticado = true;
let puedePagar= false;
function revisarPuntaje(){
    if (puntaje > 300){
                 puedePagar = true;
        return;
    }
    if (puntaje > 100){
        puedePagar=false;
        return;
    }
}
revisarPuntaje();

//operador ternario

console.log(autenticado && puedePagar ? 'usted puede pagar': 'usted no puede pagar');