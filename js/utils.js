export function crearParStrong(textoP, textoS, clase) {
  const p = document.createElement("p");
  const strong = document.createElement("strong");

  strong.appendChild(document.createTextNode(textoS));
  p.appendChild(strong);
  p.appendChild(document.createTextNode(textoP));
  p.className = clase;

  return p;
}

function crearBoton(texto, clase, tareaId) {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.appendChild(document.createTextNode(texto));
  boton.className = clase;
  boton.dataset.id = tareaId;

  return boton;
}

export function crearTarjetaTarea(tarea) {
  const div = document.createElement("div");
  div.className = "tarjeta";

  const titulo = document.createElement("h4");
  titulo.appendChild(document.createTextNode(tarea.titulo));
  titulo.className = "tituloTarea";
  div.appendChild(titulo);

  const descripcion = crearParStrong(tarea.descripcion, "Descripción: ", "campo");
  div.appendChild(descripcion);

  const prioridad = crearParStrong(tarea.prioridad, "Prioridad: ", "campo");
  div.appendChild(prioridad);

  const estado = crearParStrong(tarea.estado, "Estado: ", "campo");
  div.appendChild(estado);

  const fechaVencimiento = crearParStrong(tarea.fechaVencimiento, "Fecha de vencimiento: ", "campo");
  div.appendChild(fechaVencimiento);

  const divBotones = document.createElement("div");
  divBotones.className = "botonesTarea";
  if (tarea.estado === "porHacer") {
    divBotones.appendChild(crearBoton("En progreso", "enProgresoBoton", tarea.id));
  } else if (tarea.estado === "enProgreso") {
    divBotones.appendChild(crearBoton("Finalizada", "hechaBoton", tarea.id));
  } else {
    divBotones.appendChild(crearBoton("En progreso", "enProgresoBoton", tarea.id));
  }
  divBotones.appendChild(crearBoton("Editar", "editarBoton", tarea.id));
  divBotones.appendChild(crearBoton("Eliminar", "eliminarBoton", tarea.id));
  div.appendChild(divBotones);

  return div;
}
