export function cargarTareas() {
  return JSON.parse(localStorage.getItem("listaTareas")) || [];
}

let tareas = cargarTareas();
let idEditando = null;

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
  const botonSubmit = form.querySelector("button[type='submit'][id='crearTarea']");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (idEditando !== null) {
      const tarea = tareas.find((tarea) => tarea.id === parseInt(idEditando));
      if (tarea) {
        tarea.titulo = document.getElementById("titulo").value;
        tarea.descripcion = document.getElementById("descripcion").value;
        tarea.prioridad = document.getElementById("prioridadCrear").value;
        tarea.fechaVencimiento = document.getElementById("fechaVencimiento").value;
      }
      idEditando = null;
      botonSubmit.textContent = "Crear";
    } else {
      const nuevatarea = {};
      nuevatarea.id = calcularId();
      nuevatarea.titulo = document.getElementById("titulo").value;
      nuevatarea.descripcion = document.getElementById("descripcion").value;
      nuevatarea.prioridad = document.getElementById("prioridadCrear").value;
      nuevatarea.estado = "porHacer";
      nuevatarea.fechaVencimiento = document.getElementById("fechaVencimiento").value;

      tareas.push(nuevatarea);
    }

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

  if (!tarea) return;

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

export function eliminarTarea(id, mostrarTarjetas) {
  tareas = tareas.filter((tarea) => tarea.id !== parseInt(id));

  guardarTareas(tareas);
  if (mostrarTarjetas) {
    mostrarTarjetas(tareas);
  }
}

export function editarTarea(id) {
  const tarea = tareas.find((tarea) => tarea.id === parseInt(id));

  if (!tarea) return;

  idEditando = id;
  const form = document.getElementById("crearForm");
  form["titulo"].value = tarea.titulo;
  form["descripcion"].value = tarea.descripcion;
  form["prioridadCrear"].value = tarea.prioridad;
  form["fechaVencimiento"].value = tarea.fechaVencimiento;

  form.querySelector("button[type='submit'][id='crearTarea']").textContent = "Actualizar";
}
