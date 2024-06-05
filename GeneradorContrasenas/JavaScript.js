const InputNumeroCaracteres = document.getElementById("InputNumeroCaracteres");
const InputIncluirMayusculas = document.getElementById("InputIncluirMayusculas");
const InputIncluirMinusculas = document.getElementById("InputIncluirMinusculas");
const InputIncluirNumeros = document.getElementById("InputIncluirNumeros"); 
const InputIncluirSimbolos = document.getElementById("InputIncluirSimbolos");
const BotonGenerar = document.getElementById("BotonGenerar");

//Funcion el recibe todas el numero de caracteres y preferencias y dependiendo de cuales fueron seleccionadas se genera la contrasena 
function generarContrasena(contrasenaLength, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos){

    const Minusculas = "abcdefghijklmnñopqrstuvwxyz";
    const Mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const Numeros = "1234567890";
    const Simbolos = "!@#$%^&*()_+|\?=";

    let caracteresPermitidos = "";
    let contrasena = "";

    if (incluirMinusculas) {
        caracteresPermitidos += Minusculas;
    }

    if (incluirMayusculas) {
        caracteresPermitidos += Mayusculas;
    }

    if (incluirNumeros) {
        caracteresPermitidos += Numeros;
    }

    if (incluirSimbolos) {
        caracteresPermitidos += Simbolos;
    }

    for(let i=0; i < contrasenaLength; i++){
        const randomIndex = Math.floor(Math.random()*caracteresPermitidos.length);
        contrasena += caracteresPermitidos[randomIndex];
    }

    return contrasena;
}

// Dentro del evento click del botón "Generar". Validamos el numero de caracteres y cuales checkboxes fueron seleccionados
BotonGenerar.addEventListener('click', function() {
    const contrasenaLength = parseInt(InputNumeroCaracteres.value);
    const incluirMayusculas = InputIncluirMayusculas.checked;
    const incluirMinusculas = InputIncluirMinusculas.checked;
    const incluirNumeros = InputIncluirNumeros.checked;
    const incluirSimbolos = InputIncluirSimbolos.checked;

    const contrasena = generarContrasena(contrasenaLength, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);

    // Mostrar la contraseña generada en el elemento <h3>
    const contrasenaGeneradaElement = document.getElementById("contrasenaGenerada");
    contrasenaGeneradaElement.textContent = "Tu contraseña es: " + contrasena;
});

