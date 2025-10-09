let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("phyton");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("dedicacion");
        habilidades[7].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Muestra una alerta y envia un mensaje al presionar el botón de Enviar 
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const form = document.getElementById('form-contacto');

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  alertPlaceholder.innerHTML = ""; // Limpia alertas anteriores
  alertPlaceholder.append(wrapper)
}

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue

  appendAlert('✅ Mensaje enviado correctamente.','success');

  // Envía el formulario manualmente a formsubmit.co
  form.submit();
})

function mostrarMensaje() {
  window.alert("¡Tu mensaje ha sido enviado con éxito!"); // Este es el mensaje que se mostrará
}
