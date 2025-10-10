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