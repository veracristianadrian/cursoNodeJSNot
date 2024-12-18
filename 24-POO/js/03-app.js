//sintaxis class declaration 
class Cliente{
    #nombre; //atributo de clase privado 

    constructor(nombre,saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){ //es metodo de get, y como aqui si le permito el acceso al atributo privado si se puede mostrar
        return `Cliente: ${this.#nombre}, su saldo es de ${this.saldo}`;  //si puede acceder pq estoy llamando a la propiedad desde la clase
    }
    // metodo de la clase cliente no de un cliente en particular.. cristian.bienvenida no fue heredado
    static bienvenida(){
        return `bienvenido al cajero`;
    }
}


const Cristian = new Cliente('Juan',400);
console.log(Cristian.mostrarInformacion());
console.log(Cristian); //propiedad publica ya que se puede acceder desde el objeto o desde la clase





//====================================
//publico se puede acceder desde la clase o desde el objeto.. mientras que privado solo se puede desde la clase
/*
aca accedo desde la clase
    mostrarInformacion(){
            return `Cliente: ${this.nombre}, su saldo es de ${this.saldo}`;  
        }
aca accedo desde el objeto
const Cristian = new Cliente('Juan',400);
console.log(Cristian.nombre); 


*/