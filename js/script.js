import { mostrarTareas, getTareasFiltradas } from "./kanban.js";
import { crearTarea, cargarTareas, cambiarEstadoTarjeta, eliminarTarea, editarTarea } from "./tarea.js";

document.addEventListener("DOMContentLoaded", () => {
  const tareas = cargarTareas();
  mostrarTareas(tareas);
  crearTarea(mostrarTareas);

  const formFiltro = document.getElementById("filtrarForm");
  formFiltro.addEventListener("submit", (event) => {
    event.preventDefault();

    const filtros = {
      estado: formFiltro["estadFiltro"].value,
      prioridad: formFiltro["prioridadFiltro"].value,
    };

    const tareasFiltradas = getTareasFiltradas(tareas, filtros);
    mostrarTareas(tareasFiltradas);
  });
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

  if (elemento.classList.contains("editarBoton")) {
    editarTarea(id);
  }
});
