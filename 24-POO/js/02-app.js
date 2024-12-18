//sintaxis class declaration 
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, su saldo es de ${this.saldo}`;
    }
    // metodo de la clase cliente no de un cliente en particular.. cristian.bienvenida no fue heredado
    static bienvenida(){
        return `bienvenido al cajero`;
    }
}

//Herencia
class Empresa extends Cliente {
    constructor (nombre,saldo,telefono,categoria) {
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida(){  //reescribir un método
        return `bienvenido al cajero de Empresas`;
    }
}






const Cristian = new Cliente('Juan',400);
const empresita =new Empresa('codigo chapa',500,370455555,'empresa chapa');
console.log(empresita)
console.log(empresita.mostrarInformacion());
console.log(Empresa.bienvenida());
console.log(Cliente.bienvenida());
