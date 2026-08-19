// ==========================================
// CAPTURAR ELEMENTOS DEL HTML
// ==========================================

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');

const guardar = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');


// ==========================================
// EVENTO DEL BOTÓN GUARDAR
// ==========================================

guardar.addEventListener('click', function (event) {

    // Evitar que el formulario se recargue
    event.preventDefault();


    // ==========================================
    // CREAR OBJETO CON LOS DATOS
    // ==========================================

    const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        correo: correo.value,
        telefono: telefono.value
    };


    // ==========================================
    // MOSTRAR DATOS EN LA CONSOLA
    // ==========================================

    console.log('Guardado correctamente:', datos);


    // ==========================================
    // MOSTRAR DATOS EN LA PÁGINA
    // ==========================================

    resultado.innerHTML = `
        <div class="card">

            <h2>Datos del usuario</h2>

            <p>
                <strong>Nombre:</strong>
                <span>${datos.nombre}</span>
            </p>

            <p>
                <strong>Apellido:</strong>
                <span>${datos.apellido}</span>
            </p>

            <p>
                <strong>Edad:</strong>
                <span>${datos.edad}</span>
            </p>

            <p>
                <strong>Correo:</strong>
                <span>${datos.correo}</span>
            </p>

            <p>
                <strong>Teléfono:</strong>
                <span>${datos.telefono}</span>
            </p>

        </div>
    `;
});