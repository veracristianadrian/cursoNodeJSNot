//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto );
    
    formulario.addEventListener('submit',agregarGasto)
}

//clases 
class Presupuesto{
    constructor (presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos= [];
    }

    nuevoGasto(gasto){
     this.gastos = [...this.gastos, gasto];   
     this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total,gasto)=> total + gasto.cantidad, 0);
        this.restante= this.presupuesto - gastado;
    }

}

class UI{
    insertarPresupuesto(cantidad){
        //extrayendo valores
        const {presupuesto, restante} = cantidad;

        //insertando al html
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje,tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');   // alert es una clase de boosttrap


        if(tipo==='error'){
            divMensaje.classList.add('alert-danger');  // le da un estilo de tipo danger
        }else{
            divMensaje.classList.add('alert-success');// le da un estilo de tipo correcto o verde
        }
        //mensaje de error 
        divMensaje.textContent = mensaje;

        // insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
            //quitar del html 
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    
    agregarGastoListado(gastos){

        this.limpiarHTML();

        // iterar sobre los gastos 
        gastos.forEach(gasto => {
            
            const { cantidad, nombre, id} = gasto;

            //crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';  //clases de botstrap
            nuevoGasto.dataset.id = id;
            //Agregar el HTML del gasto
            nuevoGasto.innerHTML =`${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>
            
            `
            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            nuevoGasto.appendChild(btnBorrar);
            //agregar al HTML
            gastoListado.appendChild(nuevoGasto);

        });
    }
    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }
    

}


// variables globales
const  ui = new UI();
let presupuesto;
//=======================================================================
// funciones


function preguntarPresupuesto(){
    const presupuestoUsuario = prompt ('Cual es tu presupuesto?');

    //console.log(Number(presupuestoUsuario));

    if(presupuestoUsuario ==='' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }
    // Presupuesto valido 
    presupuesto = new  Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
    
    ui.insertarPresupuesto(presupuesto) //llamamos al constructor de la clase con el objeto presup.. que ya tiene un  pres y restante
    
}
//========================================================================
//añade gastos

function agregarGasto(e){
    e.preventDefault();
    //leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //validar 
    if (nombre===''|| cantidad===''){
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
        return;
    }else if(cantidad <=0 ||isNaN(cantidad) ){
        ui.imprimirAlerta('Cantidad no valida','error');
        return;
    }

    //generar un objeto con el gasto es de tipo llave valor pero como nombre y cantidad son el mismo nombre no hace falta la sintaxis
    const gasto = { nombre, cantidad, id: Date.now() } 

    // añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);
    //mensaje de todo bien
    ui.imprimirAlerta('gasto agregado correctamente');

    //Imprimir los gastos 
    const {gastos, restante} = presupuesto;
    ui.agregarGastoListado(gastos);
    ui.actualizarRestante(restante);
    //Reinicia el formulario
    formulario.reset();
}