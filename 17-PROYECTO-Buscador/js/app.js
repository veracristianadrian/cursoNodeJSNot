//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();  // la ventaja es si quiero trabajar con los ultimos 10años no hay que actualizar nada
const min = max -10;

//generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',

}






//eventos
document.addEventListener('DOMContentLoaded', () => {

mostrarAutos(autos); //muestra los autos al cargar

//llena las opciones de años
llenarSelect();

})

//event listener para los select de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
})
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt( e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
})






//funciones
function mostrarAutos(autos) {
  
    limpiarHtml(); //elimina el html previo
    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p'); 
        
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmision: ${transmision}  - Precio: $ ${precio} - Color ${color}

        `;
        //insertar en el HTML
        resultado.appendChild(autoHTML);
        
    }) 
};

function limpiarHtml(){
    while(resultado.firstChild){ //itera mientras quede un elemento por eliminar
        resultado.removeChild(resultado.firstChild) //elimina elemento a elemento
    }

}

//genera los años del select
function llenarSelect(){
    for( let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent= i;
        year.appendChild(opcion)//agrega las opciones de año al select
    }}

//funcion que filtra en base a la busqueda 
function filtrarAuto(){            //funcion de alto nivel ya que utilza otra funcion 
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuerta).filter(filtrarTransmision).filter(filtrarColor)

   if(resultado.length){
    mostrarAutos(resultado);//llamamos a la funcion con el resultado de los filtros
   }else{
    noResultado();
   }
   }

function noResultado(){
    limpiarHtml();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay Resultados'
    resultado.appendChild(noResultado);
}
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if (marca){   //comprueba que marca no este vacio
        return auto.marca ===marca;   //filtra las marcas que coinciden con la busqueda actual
    }
    return auto; //permite no perder los autos en el caso que no se seleccione ninguna marca
}
function filtrarYear(auto){
    const {year} = datosBusqueda;
    if (year){   
        return auto.year ===parseInt(year);   
    }
    return auto; 
}
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    
    if (minimo){   
        return auto.precio >= minimo;   //como no existe un  comparador estricto igual toma un string y un int
    }
    return auto; 
}
function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
     
    if (maximo){   
        return auto.precio <= maximo;   
    }
    return auto; 
}
function filtrarPuerta(auto){
    const {puertas} = datosBusqueda;
    console.log(puertas)
    if (puertas){
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
        if (transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
        if (color){
        return auto.color === color;
    }
    return auto;
}