import { cargarTareas } from "./tarea.js";
import { crearTarjetaTarea } from "./utils.js";

const tareas = cargarTareas();

export function mostrarTareas(tareas) {
  let tarea = {};

  document.getElementById("tarjetasPorHacer").innerHTML = "";
  document.getElementById("tarjetasEnProgreso").innerHTML = "";
  document.getElementById("tarjetasHechas").innerHTML = "";
  for (let tareaLista of tareas) {
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
