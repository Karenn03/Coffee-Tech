const Nombre = document.getElementById("name")
const Correo = document.getElementById("email")
const Contraseña = document.getElementById("password")
const ConfirmarContraseña = document.getElementById("confirm-password")
const Form = document.getElementById("form")

Form.addEventListener("submit", e => {
    if (!validateRegistrationForm()) {
        e.preventDefault();
    }
});

function validateRegistrationForm() {
    const name = Nombre.value.trim();
    const email = Correo.value.trim();
    const password = Contraseña.value;
    const confirmPassword = ConfirmarContraseña.value;

    if (name === "") {
        showToast("El campo de nombre es obligatorio");
        return false;
    }
    if (email === "") {
        showToast("El campo de correo electrónico es obligatorio");
        return false;
    }
    if (!validateEmail(email)) {
        showToast("Ingrese un correo electrónico válido");
        return false;
    }
    if (password === "") {
        showToast("El campo de contraseña es obligatorio");
        return false;
    }
    if (!isPasswordValid(password)) {
        showToast("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número");
        return false;
    }
    if (confirmPassword === "") {
        showToast("El campo de confirmación de contraseña es obligatorio");
        return false;
    }
    if (password !== confirmPassword) {
        showToast("Las contraseñas no coinciden");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isPasswordValid(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
}

function showToast(message) {
    alert(message); 
}