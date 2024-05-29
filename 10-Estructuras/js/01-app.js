const puntaje = 100;

if (puntaje > 100){
    console.log('si es mayor a 100')
} else{
    console.log('es menor o igual')
}



const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'efectivo':
        console.info('realizaste un pago en efectivo');
        break;
    case 'tarjeta':
        console.log('realizaste un pago con tarjeta');
        break;
    default:
        console.info('metodo de pago no soportado');
        break;
}
