//como almacenar objetos o arreglos en local storage
const producto ={
    nombre: "monitor de 24 pulgadas",
    precio: 300
}
const meses = ['Enero','Frebero','marzo'];

localStorage.setItem('producto',JSON.stringify(producto));
localStorage.setItem('meses',JSON.stringify(meses)); 
