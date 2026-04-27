import { mostrarTareas } from "./kanban.js";
import { crearTarea, cargarTareas, cambiarEstadoTarjeta } from "./tarea.js";

document.addEventListener("DOMContentLoaded", () => {
  const tareas = cargarTareas();
  mostrarTareas(tareas);
  crearTarea(mostrarTareas);
});

document.addEventListener("click", (event) => {
  const id = event.target.dataset.id;

  if (id) {
    cambiarEstadoTarjeta(id, mostrarTareas);
  }
});
