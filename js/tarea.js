const tareas = [];

function calcularId() {
  let maxId = 0;
  for (let tarea of tareas) {
    if (tarea.id > maxId) {
      maxId = tarea.id;
    }
  }
  return maxId + 1;
}

export function crearTarea() {
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
    console.log(tareas);
  });
}
