const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');

const guardar = document.querySelector('#boton');

guardar.addEventListener('click',function() {

    const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        correo: correo.value,
        telefono: telefono.value
    }

    console.log("Guardado Correctamente", datos);
}); 

const elemento = document.createElement("li");

elemento.textContent = `Nombre: ${nombre.value}, Apellido: ${apellido.value}, Edad: ${edad.value}, Correo: ${correo.value}, Teléfono: ${telefono.value}`;

const lista = document.querySelector('#resultado');
lista.appendChild(elemento);

console.log("Elemento agregado a la lista:");
