import { cargarTareas } from "./tarea.js";
import { crearTarjetaTarea } from "./utils.js";

const tareas = cargarTareas();

export function getTareasFiltradas(tareas, filtros) {
  return tareas.filter((tarea) => {
    const cumpleEstado = filtros.estado === "" || tarea.estado === filtros.estado;
    const cumplePrioridad = filtros.prioridad === "" || tarea.prioridad === filtros.prioridad;

    return cumpleEstado && cumplePrioridad;
  });
}

export function mostrarTareas(tareasFiltradas) {
  let tarea = {};

  document.getElementById("tarjetasPorHacer").innerHTML = "";
  document.getElementById("tarjetasEnProgreso").innerHTML = "";
  document.getElementById("tarjetasHechas").innerHTML = "";
  for (let tareaLista of tareasFiltradas) {
    tarea = tareaLista;

    let divMostrarTarea = "";
    if (tarea.estado == "porHacer") {
      divMostrarTarea = "tarjetasPorHacer";
    } else if (tarea.estado == "enProgreso") {
      divMostrarTarea = "tarjetasEnProgreso";
    } else {
      divMostrarTarea = "tarjetasHechas";
    }

    const div = document.getElementById(divMostrarTarea);

    div.appendChild(crearTarjetaTarea(tarea));
  }
}
