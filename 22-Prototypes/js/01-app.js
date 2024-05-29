//todos los objetos tienen un prototype
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function(){
    let tipo;   // de manera facil mantiene una referencia al objeto actual

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo >5000){
        tipo = 'Platinum';
    }else{
        tipo ='normal';
    }
    return tipo;

}
Cliente.prototype.nombreClienteSaldo = function (){
    return`Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo-= retira
}




//function busca en la ventana local y arrhow function busca en la ventana global

//instanciarlo
const chapa = new Cliente('chapa', 6000);
console.log(chapa.tipoCliente());
console.log(chapa.nombreClienteSaldo());
chapa.retiraSaldo(1000);
console.log(chapa.nombreClienteSaldo());
console.log(chapa);