import { cargarTareas } from "./tarea.js";
import { crearParStrong } from "./utils.js";

export function mostrarEstadisticas(tareas) {
  const divTotal = document.getElementById("infoTotal");
  divTotal.innerHTML = "";

  const tareasTotales = tareas.length;
  const pInfoTotal = crearParStrong(`${tareasTotales}`, "Total de tareas: ", "infoTareas");
  divTotal.appendChild(pInfoTotal);

  const divPorEstado = document.getElementById("infoEstado");
  divPorEstado.innerHTML = "";
  let porHacer = 0;
  let enProgreso = 0;
  let hechas = 0;
  let baja = 0;
  let media = 0;
  let alta = 0;

  for (let tarea of tareas) {
    if (tarea.estado === "porHacer") {
      porHacer = porHacer + 1;
    } else if (tarea.estado === "enProgreso") {
      enProgreso = enProgreso + 1;
    } else {
      hechas = hechas + 1;
    }

    if (tarea.prioridad === "baja") {
      baja = baja + 1;
    } else if (tarea.prioridad === "media") {
      media = media + 1;
    } else {
      alta = alta + 1;
    }
  }

  divPorEstado.appendChild(crearParStrong(`${porHacer}`, "Tareas por hacer: ", "infoTareas"));
  divPorEstado.appendChild(crearParStrong(`${enProgreso}`, "Tareas en progreso: ", "infoTareas"));
  divPorEstado.appendChild(crearParStrong(`${hechas}`, "Tareas hechas: ", "infoTareas"));

  const divPorcentaje = document.getElementById("infoPorcentaje");
  divPorcentaje.innerHTML = "";

  const porcentajePorHacer = (porHacer * 100) / tareas.length;
  divPorcentaje.appendChild(crearParStrong(`${parseInt(porcentajePorHacer)}%`, "Porcentaje de por hacer: "));

  const porcentajeEnProgreso = (enProgreso * 100) / tareas.length;
  divPorcentaje.appendChild(crearParStrong(`${parseInt(porcentajeEnProgreso)}%`, "Porcentaje de en progreso: "));

  const porcentajeHechas = (hechas * 100) / tareas.length;
  divPorcentaje.appendChild(crearParStrong(`${parseInt(porcentajeHechas)}%`, "Porcentaje de hechas: "));

  const porcentajeBajas = (baja * 100) / tareas.length;
  divPorcentaje.appendChild(crearParStrong(`${parseInt(porcentajeBajas)}%`, "Porcentaje de prioridad baja: "));

  const porcentajeMedias = (media * 100) / tareas.length;
  divPorcentaje.appendChild(crearParStrong(`${parseInt(porcentajeMedias)}%`, "Porcentaje de prioridad media: "));

  const porcentajeAltas = (alta * 100) / tareas.length;
  divPorcentaje.appendChild(crearParStrong(`${parseInt(porcentajeAltas)}%`, "Porcentaje de prioridad alta: "));
}
