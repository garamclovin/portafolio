// Función para manejar el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtén los valores del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Aquí puedes agregar lógica para enviar el mensaje (ej: con AJAX o un servicio de backend)
  console.log(`Nombre: ${name}, Correo: ${email}, Mensaje: ${message}`);

  // Muestra un mensaje de éxito
  alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
});