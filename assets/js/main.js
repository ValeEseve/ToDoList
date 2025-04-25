// Variables
const listaTareas = document.querySelector("#lista-tareas")
const nuevaTareaInput = document.querySelector("#nueva-tarea-input-box")
const btnAgregar = document.querySelector("#nueva-tarea-btn")
const tareasTotal = document.querySelector("#tareas-total")
const tareasRealizadas = document.querySelector("#tareas-realizadas")

// Render
renderTareas()
actualizarContadores()

// Event Listeners
btnAgregar.addEventListener("click", agregarTarea);

function renderTareas() {
    let html = "";
    dataTareas.forEach((tarea) => {
        html += `
            <div class="tarea">
                <div class="tarea-id">
                    <p>${tarea.id}</p>
                </div>
                <div class="tarea-nombre">
                    <p class="${tarea.realizada ? "realizada" : ""}">${tarea.nombre}</p>
                </div>
                <div class="tarea-check">
                    <input class="tarea-checkbox" type="checkbox" data-id="${tarea.id}" ${tarea.realizada ? "checked" : ""}>
                </div>
                <div class="tarea-btn">
                    <button data-id="${tarea.id}" class="tarea-btn-eliminar">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>`

    })
    listaTareas.innerHTML = html;

    const botonesBorrar = document.querySelectorAll(".tarea-btn-eliminar")
    botonesBorrar.forEach(boton =>
        boton.addEventListener("click", ele => {
            const id = Number(ele.currentTarget.dataset.id)
            borrarTarea(id)
        }))
    const checkboxes = document.querySelectorAll(".tarea-checkbox")
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const id = parseInt(e.target.dataset.id)
            const tarea = dataTareas.find(t => t.id === id)
            if (tarea) {
                tarea.realizada = e.target.checked;
                renderTareas()
                actualizarContadores()
            }
        })
    })
    actualizarContadores()
}


function agregarTarea() {
    const nuevaTarea = nuevaTareaInput.value
    if (nuevaTarea.trim() !== "") {
        const id = parseInt(Date.now().toString().slice(-4))
        dataTareas.push({ id: id, nombre: nuevaTarea, realizada: false })
    }
    nuevaTareaInput.value = ""
    renderTareas()
    actualizarContadores()
}

function borrarTarea(id) {
    const indice = dataTareas.findIndex((ele) => ele.id === id)
    if (indice !== -1) {
        dataTareas.splice(indice, 1)
        renderTareas()
        actualizarContadores()
    }
}

function actualizarContadores(){
    tareasTotal.textContent = dataTareas.length
    const realizadas = dataTareas.filter(tarea => tarea.realizada).length
    tareasRealizadas.textContent = realizadas
}

