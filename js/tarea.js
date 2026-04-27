export function cargarTareas() {
  return JSON.parse(localStorage.getItem("listaTareas")) || [];
}

const tareas = cargarTareas();

function calcularId() {
  let maxId = 0;
  for (let tarea of tareas) {
    if (tarea.id > maxId) {
      maxId = tarea.id;
    }
  }
  return maxId + 1;
}

function guardarTareas(tareas) {
  localStorage.setItem("listaTareas", JSON.stringify(tareas));
}

export function crearTarea(mostrarTareas) {
  const form = document.getElementById("crearForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const tarea = {};
    tarea.id = calcularId();
    tarea.titulo = document.getElementById("titulo").value;
    tarea.descripcion = document.getElementById("descripcion").value;
    tarea.prioridad = document.getElementById("prioridadCrear").value;
    tarea.estado = "porHacer";
    tarea.fechaVencimiento = document.getElementById("fechaVencimiento").value;

    tareas.push(tarea);
    form.reset();
    guardarTareas(tareas);

    if (mostrarTareas) {
      mostrarTareas(tareas);
    }
  });
}

export function cambiarEstadoTarjeta(id, mostrarTarjetas) {
  let tarea = {};
  for (let tareaLista of tareas) {
    if (tareaLista.id === parseInt(id)) {
      tarea = tareaLista;
      break;
    }
  }

  if (tarea.estado === "porHacer") {
    tarea.estado = "enProgreso";
  } else if (tarea.estado === "enProgreso") {
    tarea.estado = "hecha";
  } else {
    tarea.estado = "enProgreso";
  }

  guardarTareas(tareas);
  if (mostrarTarjetas) {
    mostrarTarjetas(tareas);
  }
}
