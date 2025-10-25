const form = document.getElementById('form-contacto');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  alertPlaceholder.innerHTML = ''; // limpia alertas anteriores
  alertPlaceholder.append(wrapper);
};

form.addEventListener('submit', function (e) {
  e.preventDefault(); // evita recargar

  const datos = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: datos,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      appendAlert('✅ El mensaje ha sido enviado con éxito.', 'success');
      form.reset();
    } else {
      appendAlert('❌ Hubo un error al enviar el mensaje. Intenta nuevamente.', 'danger');
    }
  })
  .catch(() => {
    appendAlert('⚠️ Error en la conexión. Vuelve a intentarlo.', 'warning');
  });
});