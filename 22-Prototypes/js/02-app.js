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

//herencia del constructor
function Persona (nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono; // al no existir en cliente se agrega como propiedad nueva
}

//herencia de las funciones
Persona.prototype = Object.create( Cliente.prototype); //funcion diseñada para copiar el 
Persona.prototype.constructor = Cliente;// asignamos el constructor de cliente ya que lo perdimos


//instanciarlo
const juan = new Persona('juan',5000,101215455);
console.log(juan);

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}