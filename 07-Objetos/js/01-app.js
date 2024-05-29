/* const persona = {
    dni : 39317996,
    nombre : "cristian",
    apellido : "vera"
}
console.log(persona);

persona.sepso = 'men';
console.log(persona);
// destructuring    en este caso me crea variables con los valores que tienen los elementos del objeto
const { dni,nombre, apellido } = persona;
console.log(dni); */


//crear un objeto dentro de otro objeto
//"use strict";
const apellido = "zalazar";


const persona = {
    dni : 39317996,
    nombre : "cristian",
    apellido : "vera",
    profesion : {
        legajo: 21412,
        carrera : "isi",
        duracion : 15
    },
    mostrarInf: function() {
        console.log(`el dni de ${this.apellido} es  ${this.dni} y su legajo es ${this.profesion.legajo} `)
    }
    }



//Object.freeze(persona);
const experiencia= {
    empresa : "rio uruguay",
    duraci: 5
}
// este tipo de modificaciones ya no se permiten al estar congelado el objeto
// persona.dni = 9;
// const union = Object.assign(persona, experiencia);
// console.log(union);

persona.mostrarInf();
