// object literal
const persona = {
    dni : 39317996,
    nombre : "cristian",
    apellido : "vera",
    profesion : {
        legajo: 21412,
        carrera : "isi",
        duracion : 15
    }
}

// object constructor

function product (nombre, precio) {
    this.name = nombre;
    this.price = precio;
    this.disponible = true;
}

const producto1 = new product("harina", 200);

console.log(Object.entries(producto1));