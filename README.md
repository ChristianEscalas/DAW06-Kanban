# Gestor de tareas tipo Kanban

## Descripción

Es una aplicación web para gestionar tareas de tipo **Kanban**, creada con **HTML, CSS y JavaScript**.

Permite organizar tareas en diferentes estados:

- Por hacer
- En progreso
- Completadas

---

## Funciones

- Crear nuevas tareas
- Editar tareas
- Eliminar tareas
- Cambiar el estado de las tareas
- Filtrar por estado y prioridad
- Ver estadísticas:
  - Total de tareas
  - Tareas por estado
  - Porcentaje por estado
  - Porcentaje por prioridad
- Persistencia con **localStorage**

---

## Tecnologías usadas

- HTML5
- CSS3 (Flexbox / Grid)
- JavaScript
- Git & GitHub
- GitHub Pages

---

## ¿Como usarla?

### Crear una tarea

1. Rellena el formulario
2. Añade título, descripción, prioridad y fecha
3. Haz clic en "Añadir tarea"

### Editar una tarea

1. Pulsa el botón "Editar"
2. Modifica los datos
3. Guarda los cambios

### Eliminar una tarea

1. Pulsa "Eliminar"
2. Confirma

### Cambiar estado

Usa los botones para cambiar su estado entre:

- Por hacer
- En progreso
- Completada

### Filtrar y buscar

- Usa los filtros por estado o prioridad

---

## Estructura del proyecto

/proyecto
│
├── index.html
├── css/
│ └── styles.css
├── js/
│ ├── estadistica.js
│ ├── kanban.js
│ ├── script.js
│ ├── tarea.js
│ └── utils.js
└── README.md
