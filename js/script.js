import { mostrarTareas } from "./kanban.js";
import { crearTarea, cargarTareas, cambiarEstadoTarjeta, eliminarTarea } from "./tarea.js";

document.addEventListener("DOMContentLoaded", () => {
  const tareas = cargarTareas();
  mostrarTareas(tareas);
  crearTarea(mostrarTareas);
});

document.addEventListener("click", (event) => {
  const elemento = event.target;
  const id = elemento.dataset.id;

  if (elemento.classList.contains("enProgresoBoton") || elemento.classList.contains("hechaBoton")) {
    cambiarEstadoTarjeta(id, mostrarTareas);
  }

  if (elemento.classList.contains("eliminarBoton")) {
    eliminarTarea(id, mostrarTareas);
  }
});
