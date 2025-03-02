// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];
    const MAX_PERSONAS = 20; // Límite de nombres permitidos

    // Seleccionamos los elementos del DOM
    const inputAmigo = document.getElementById("amigo");
    const btnAgregar = document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    const btnSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");
    const alertaVisual = document.createElement("div"); // Crear un div para el popup visual

    // Configurar tooltip en los elementos
    inputAmigo.setAttribute("title", "Ingrese un nombre de 3 a 20 caracteres.");
    btnAgregar.setAttribute("title", "Debe ingresar un nombre de 3 a 20 caracteres.");

    // Insertamos el div de alerta visual en el body
    alertaVisual.className = "popup-alert";
    document.body.appendChild(alertaVisual);

    // Asociamos funciones a los eventos
    btnAgregar.addEventListener("click", agregarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);

    /**
     * Función para agregar nombres a la lista
     */
    function agregarAmigo() {
        let nombre = inputAmigo.value.trim();

        // Validación de caracteres
        if (nombre.length < 3 || nombre.length > 20) {
            alert("El nombre debe tener entre 3 y 20 caracteres.");
            return;
        }

        // Verificar si se alcanzó el límite de personas
        if (amigos.length >= MAX_PERSONAS) {
            mostrarPopup("Se ha alcanzado el límite de 20 personas.");
            return;
        }

        // Agregar nombre a la lista
        amigos.push(nombre);
        actualizarLista();

        // Mostrar alerta si quedan 5 o menos espacios
        let espaciosRestantes = MAX_PERSONAS - amigos.length;
        if (espaciosRestantes > 0 && espaciosRestantes <= 5) {
            alert(`Quedan ${espaciosRestantes} espacios disponibles.`);
        }

        // Limpiar el campo y volver a enfocarlo
        inputAmigo.value = "";
        inputAmigo.focus();
    }

    /**
     * Función para actualizar la lista en la interfaz
     */
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    /**
     * Función para sortear un amigo aleatoriamente
     */
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let ganador = amigos[indiceAleatorio];

        resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`;
    }

    /**
     * Función para mostrar un popup visual con CSS
     */
    function mostrarPopup(mensaje) {
        alertaVisual.textContent = mensaje;
        alertaVisual.classList.add("show");

        // Ocultar popup después de 3 segundos
        setTimeout(() => {
            alertaVisual.classList.remove("show");
        }, 3000);
    }
});
