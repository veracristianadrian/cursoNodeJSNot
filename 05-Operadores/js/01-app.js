let num1 = 20;
let num2 = "20";
// es un comparador pero en este caso no diferencia el tipo

console.log(num1 == num2);

// existe el comparador estricto

console.log(num1 === num2);

// para verificar diferencia
//no verifica tipos de datos
console.log(num1 != num2);

//existe el comparador estricto 
console.log(num1 !== num2);

let autenticado = true;

if (autenticado) {
    console.log('has iniciado sesion');
}else{
    console.log("no has iniciado sesion");
}