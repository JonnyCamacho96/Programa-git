let currentStep = 0;
const steps = document.querySelectorAll('.form-step');
const progress = document.querySelector('.progress-bar');

document.addEventListener('DOMContentLoaded', () => {
  showStep(currentStep);
});

function showStep(n) {
  steps.forEach((step, index) => {
    step.classList.remove('active');
    if (index === n) {
      step.classList.add('active');
    }
  });
  updateProgressBar(n);
}

function nextStep() {
  const inputs = steps[currentStep].querySelectorAll("input, select, textarea");
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.checkValidity() || input.value.trim() === "") {
      allFilled = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });

  if (!allFilled) {
    return; // No continúa si hay campos vacíos o inválidos
  }

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

function updateProgressBar(step) {
  const percent = ((step + 1) / steps.length) * 100;
  progress.style.width = percent + '%';
  progress.textContent = `Paso ${step + 1} de ${steps.length}`;
}

function enviarSolicitud() {
  // Obtener todos los campos del formulario
  const inputs = steps[currentStep].querySelectorAll("input, select, textarea");
  let allFilled = true;

  // Validación de campos
  inputs.forEach(input => {
    if (!input.checkValidity() || input.value.trim() === "") {
      allFilled = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });

  // Si todos los campos están llenos, simula el envío de formulario
  if (allFilled) {
    // Ocultar formulario y mostrar confirmación
    document.getElementById("formSoporte").style.display = "none";
    document.getElementById("confirmacion-exitosa").style.display = "block";
  } else {
    // Forzar la validación para que se muestren los errores
    steps[currentStep].querySelectorAll(".is-invalid").forEach(input => {
      input.classList.add("is-invalid");
    });
  }
}

// Función para crear nueva solicitud (volver a mostrar el formulario)
function crearNuevaSolicitud() {
  // Resetear todos los campos del formulario
  document.getElementById("formSoporte").reset();

  // Volver a mostrar el formulario y esconder la pantalla de confirmación
  document.getElementById("formSoporte").style.display = "block";
  document.getElementById("confirmacion-exitosa").style.display = "none";

  // Reiniciar los pasos del formulario
  currentStep = 0;
  showStep(currentStep);
}
