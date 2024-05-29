//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[];
//event listeners
eventListeners();
function eventListeners(){
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);//dispara el evento cuando presionamos submit o enviar
    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        //console.log(tweets);
        crearHTML();
    })

}


//funciones

function agregarTweet(e){
    e.preventDefault();

    //text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value; //obtenemos lo que escribio el usuario
    
    //validacion...
    if(tweet===''){
        mostrarError('un mensaje no puede ir vacio');
        return;//evita que se ejecuten mas lineas de codigo
    }
    
    const tweetObj ={
        id: Date.now(),
        tweet // es equivalente a tener tweet: tweet, es valido por tener el mismo nombre
    }
    tweets = [...tweets, tweetObj];
    
    //una vez agregado vamos a crear el html
    crearHTML();

    //reiciar el formulario
    formulario.reset();

}



//mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    //insertando en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //elimina la alerta despues de 3 segundos
    setTimeout(() =>{
        mensajeError.remove();
    }, 3000);

}

//muestra un listado de los tweets
function crearHTML(){
    limpiarHTML();

    if (tweets.length > 0){  //comprobacion por si alguien elimina todos los tweets
        
        tweets.forEach( tweet => {
            //agregar un boton de eliminar
            const btnEliminar = document.createElement('a');//el tipo a es inferior a un li
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            
            //añadir la funcion de eliminar 
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            //crear el HTML
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.tweet

            //asignar el boton 
            li.appendChild(btnEliminar);

            //insertar en el html
            listaTweets.appendChild(li);
        })
    }
    sincronizarStorage();
}

//agregar los Tweets actuales a LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}




//se realiza pq osino el html repite los primeros elementos cargados
function limpiarHTML(){
    while (listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
