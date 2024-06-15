// Función para abrir el modal y mostrar los detalles según la opción seleccionada
function openModal(option) {
  // Obtener el modal y el contenido del modal
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent");

  // Definir el contenido del modal según la opción seleccionada
  var modalHTML = "";
  switch (option) {
    case "Envío en el día":
      modalHTML = `
                <h2>Detalles de Envío en el día</h2>
                <p>Llega el mismo día de la compra. Disponible para todas las zonas de entrega dentro de nuestra área de servicio.</p>
                <p>Precio: Variable. Los costos pueden variar según el tamaño y el peso del paquete.</p>
            `;
      break;
    case "Envío en 3 días":
      modalHTML = `
                <h2>Detalles de Envío en 3 días</h2>
                <p>Llega en un plazo de 3 días. Garantizamos la entrega dentro del plazo especificado, incluso en días festivos.</p>
                <p>Precio: Variable. Los precios se basan en la distancia y el tipo de envío seleccionado.</p>
            `;
      break;
    case "Envío en 5 días hábiles":
      modalHTML = `
                <h2>Detalles de Envío en 5 días hábiles</h2>
                <p>Llega en un plazo de 5 días hábiles. Ofrecemos seguimiento en tiempo real para que puedas rastrear tu paquete en todo momento.</p>
                <p>Precio: Variable. El precio se calcula en función del peso y las dimensiones del paquete, así como de la distancia de envío.</p>
            `;
      break;
    case "Envío en 1 semana":
      modalHTML = `
                <h2>Detalles de Envío en 1 semana</h2>
                <p>Llega en un plazo de 7 días. Servicio económico para envíos menos urgentes.</p>
                <p>Precio: Variable. Ofrecemos opciones de envío estándar y exprés para adaptarnos a tus necesidades y presupuesto.</p>
            `;
      break;
    default:
      modalHTML = `<h2>Detalles de Envío</h2><p>Información no disponible.</p>`;
  }

  // Insertar el contenido generado en el modal
  modalContent.innerHTML = modalHTML;

  // Mostrar el modal
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
