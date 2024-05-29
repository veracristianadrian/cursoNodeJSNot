document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje:''
    }






    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputcc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]'); // selecciona etiqueta y a su vez atributo
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');




    //asignar eventos
    inputEmail.addEventListener('input', validar );
    inputAsunto.addEventListener('input', validar );     
    inputMensaje.addEventListener('input', validar );
    inputcc.addEventListener('input', validarAlt);
    formulario.addEventListener('submit', enviarEmail);8

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        reinicarFormulario();

    })

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            
            reinicarFormulario();

            //crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10',
             'font-bold', 'text-sm', 'uppercase');
             alertaExito.textContent = 'Mensaje enviado correctamente';

             formulario.appendChild(alertaExito);
             
             setTimeout(() => {
                alertaExito.remove();
             }, 3000);



        }, 3000);
    }

    function validar(e){
        if(e.target.value.trim()===''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name]='';
            comprobarEmail();
            return; // muestra la alerta y el return detiene la ejecucion del codigo
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)){  // llama a validar email con el valor ingresado
            mostrarAlerta('El email no es valido',e.target.parentElement);
            email[e.target.name]='';
            comprobarEmail();
            return;
        }; 

        limpiarAlerta(e.target.parentElement); // limpia las alertas repetidas

        //asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        //comprobar el email
        comprobarEmail();

    }
    function validarAlt(e){
        if(e.target.value.trim()===''){
            email[e.target.name]='';
            comprobarEmail();
            limpiarAlerta(e.target.parentElement);
            return
        }
        if(e.target.id === 'cc' && !validarEmail(e.target.value)){  // llama a validar email con el valor ingresado
            mostrarAlerta('El email no es valido',e.target.parentElement);
            email[e.target.name]='';
            comprobarEmail();
            return;
        }; 

        limpiarAlerta(e.target.parentElement); // limpia las alertas repetidas

        //asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        //comprobar el email
        comprobarEmail();
    }
    
    function mostrarAlerta(mensaje, referencia){
        
        limpiarAlerta(referencia);
       
        //generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
       
        //inyectar el error al formulario
        referencia.appendChild(error);
    }
    //comprueba si ya existe un alerta
    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if( alerta){
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    // const email = {
    //     email: '',
    //     cc: '',
    //     asunto: '',
    //     mensaje:''
    // }


    function comprobarEmail(){
        if (email.email==='' || email.asunto==='' || email.mensaje===''){
        //if(Object(email).filter(([clave,valor]) => clave !== 'cc').includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true; 
            return

        }
            btnSubmit.classList.remove('opacity-50');  //esto podria requerir de un else pero al utilizar return corta 
            btnSubmit.disabled = false;
        
    }
    function reinicarFormulario(){
    //reiniciar el objeto
    email.email = '';
    email.cc = ''; 
    email.asunto= '';
    email.mensaje = '';

    formulario.reset();
    comprobarEmail();
    }
});
