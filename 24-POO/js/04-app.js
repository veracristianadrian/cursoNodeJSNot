class Cliente {
    #nombre
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
      return  this.#nombre;
    }

}

const Cristian =new Cliente();
Cristian.setNombre('chapa');

console.log(Cristian.getNombre());

// console.log(Cristian.#nombre) no permite pq esta definido como un campo privado