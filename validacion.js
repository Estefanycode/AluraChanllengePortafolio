/** animacion de menu en top */
let isMenuFixed = false;

function updateMenuStickyState() {
    const menu = document.getElementById("menu");
    const container = document.getElementById("container");
    const scrollY = window.scrollY;
    const shouldBeFixed = scrollY > container.offsetTop;

    if (shouldBeFixed && !isMenuFixed) {
        menu.classList.add("menu--fixed");
        isMenuFixed = true;
    } else if (!shouldBeFixed && isMenuFixed) {
        menu.classList.remove("menu--fixed");
        isMenuFixed = false;
    }
}

let rafId;

function handleScroll() {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateMenuStickyState);
}

window.addEventListener("scroll", handleScroll);


/**** validacion de formulario */

function validarNombre() {
    var nombre = document.forms["form"]["nombre"].value.trim();
    var errorNombre = document.getElementById("error-nombre");
    if (nombre === "") {
        errorNombre.textContent = "Por favor, ingresa tu nombre.";
    } else {
        errorNombre.textContent = "";
    }
}

function validarEmail() {
    var email = document.forms["form"]["email"].value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var errorEmail = document.getElementById("error-email");
    if (email === "") {
        errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
    } else if (!email.match(emailRegex)) {
        errorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
    } else {
        errorEmail.textContent = "";
    }
}

function validarAsunto() {
    var asunto = document.forms["form"]["asunto"].value.trim();
    var errorAsunto = document.getElementById("error-asunto");
    if (asunto === "") {
        errorAsunto.textContent = "Por favor, ingresa un asunto.";
    } else {
        errorAsunto.textContent = "";
    }
}

function validarMensaje() {
    var mensaje = document.forms["form"]["mensaje"].value.trim();
    var errorMensaje = document.getElementById("error-mensaje");
    if (mensaje === "") {
        errorMensaje.textContent = "Por favor, ingresa un mensaje.";
    } else {
        errorMensaje.textContent = "";
    }
}