// Variables
listaTareas = document.querySelector("#lista-tareas")
nuevaTareaInput = document.querySelector("#nueva-tarea-input-box")
btnAgregar = document.querySelector("#nueva-tarea-btn")

// Render
renderTareas()

// Event Listeners
btnAgregar.addEventListener("click", agregarTarea);

// Funciones
function renderTareas() {
    const tareas = listaTareas
    let html = ""
    dataTareas.forEach(tarea => {
        html += `
            <div class="tarea">
                <div class="tarea-id">
                    <p>${tarea.id}</p>
                </div>
                <div class="tarea-nombre">
                    <p class="${tarea.realizada ? 'realizada' : ''}">${tarea.nombre}</p>
                </div>
                <div class="tarea-check">
                    <input class="tarea-checkbox" type="checkbox" ${tarea.realizada ? "checked" : ""}>
                </div>
                <div class="tarea-btn">
                    <button class="tarea-btn-eliminar">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>`
    })
    tareas.innerHTML = html;
}

function agregarTarea(){
    let nuevaTarea = nuevaTareaInput.value
    const id = Date.now().toString()
    if (nuevaTarea.trim() !== ""){
        dataTareas.push({id: id.slice(-4), nombre: nuevaTarea, realizada: false})
        nuevaTareaInput.value = ""
    }
    renderTareas()
}

