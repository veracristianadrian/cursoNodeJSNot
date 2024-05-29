//como eliminar un elemento de local storage


const meses = ['Enero','Frebero','marzo'];
localStorage.setItem('meses',JSON.stringify(meses)); // creamos y almacenamos el elemento
//como actualizar un registro o lo llamado CRUD create read update delete
const mesesArray =JSON.parse(localStorage.getItem('meses')); //obtenemos el elemento a actualizar
mesesArray.push('Nuevo mes'); //agregamos un item al arreglo
localStorage.setItem('meses',JSON.stringify(mesesArray))//cargamos el arreglo actualizado
//para limpiar todo lo que contiene local storage utilizamos

// localStorage.clear();