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

const Cristian = new Cliente('Juan',400);
console.log(Cristian.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Cristian);
// sintaxis class expression
const Cliente2 = class{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
};

const Cristian2 = new Cliente2('pedro',500);
console.log(Cristian2);