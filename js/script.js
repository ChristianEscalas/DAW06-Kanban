import { mostrarTareas } from "./kanban.js";
import { crearTarea, cargarTareas } from "./tarea.js";

const tareas = cargarTareas();

crearTarea(mostrarTareas);
mostrarTareas(tareas);
