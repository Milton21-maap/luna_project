// ==========================================
// CONFIGURACIÓN DE CREDENCIALES DE ACCESO
// ==========================================
const USUARIO_CORRECTO = "HarliMorfa"; // Nombre establecido para ella
const PIN_CORRECTO = "210226";         // Clave de 6 dígitos

let etapaActual = 1; // Controla la fase: 1 = Nombre de Usuario, 2 = PIN de Acceso
let contadorPin = 1; // Lleva la cuenta de los intentos fallidos del PIN

// ==========================================
// CAPTURA DE ELEMENTOS DE LA PÁGINA (DOM)
// ==========================================
const loginForm = document.getElementById('loginForm');
const grupoUsuario = document.getElementById('grupo-usuario');
const grupoPin = document.getElementById('grupo-pin');
const inputNombre = document.getElementById('nombre');
const inputPin = document.getElementById('pin');
const btnSync = document.getElementById('btn-sync');
const mensajeError = document.getElementById('mensaje-error');
const subtitulo = document.getElementById('subtitulo');
const customModal = document.getElementById('custom-modal');
const successModal = document.getElementById('success-modal');

// Escuchar el evento cuando se envía el formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página intente recargarse sola
    mensajeError.innerText = ""; // Borra cualquier mensaje de error anterior

    if (etapaActual === 1) {
        // ------------------------------------------
        // ETAPA 1: VALIDACIÓN DE NOMBRE DE USUARIO
        // ------------------------------------------
        const usuarioDigitado = inputNombre.value.trim();

        if (usuarioDigitado === USUARIO_CORRECTO) {
            // --- INICIA TRANSICIÓN EN CADENA SUAVE HACIA EL PIN ---
            grupoUsuario.classList.add('fade-out'); // Desvanece el campo de usuario
            subtitulo.style.opacity = "0";          // Desvanece el subtítulo temporalmente
            
            // Esperamos los 400ms de la animación CSS para hacer el cambio físico
            setTimeout(() => {
                grupoUsuario.classList.add('hidden');    // Oculta por completo el bloque usuario
                grupoPin.classList.remove('hidden');     // Muestra el contenedor del PIN
                grupoPin.classList.add('fade-in');       // Lo hace aparecer con suavidad
                
                inputPin.setAttribute('required', 'true'); // Hace obligatorio escribir el PIN
                inputPin.focus();                          // Enfoca el teclado automáticamente ahí
                
                // Cambiamos los textos para la fase del PIN
                subtitulo.innerText = "Oh, te llamas como el amor de mi vida... De ser así, sabrás la clave. 😉";
                subtitulo.style.opacity = "1"; // Vuelve a mostrar el subtítulo ya cambiado
                btnSync.innerText = "SINCRONIZAR";
                
                etapaActual = 2; // Oficialmente pasamos a la etapa del PIN
            }, 400);

        } else {
            // --- USUARIO INCORRECTO: DISPARA MODAL DE BLOQUEO ---
            customModal.classList.remove('hidden'); 

            // Espera 2.5 segundos y la expulsa a Google
            setTimeout(() => {
                window.location.href = "https://www.google.com"; 
            }, 2500);
        }
        
    } else if (etapaActual === 2) {
        // ------------------------------------------
        // ETAPA 2: VALIDACIÓN DE PIN (Tu lógica .psc)
        // ------------------------------------------
        const pinDigitado = inputPin.value.trim();

        if (pinDigitado === PIN_CORRECTO) {
            // --- PIN CORRECTO: DISPARA EL MODAL DE ÉXITO CON CORAZÓN ---
            sessionStorage.setItem('luna_sesion_activa', 'true');
            successModal.classList.remove('hidden');
            
            // Espera 2 segundos (mientras corre la barra verde) y entra al main.html
            setTimeout(() => {
                window.location.href = "main.html"; 
            }, 2000);

        } else {
            // PIN incorrecto: Selección de mensajes personalizados
            let respuesta = "";
            switch(contadorPin) {
                case 1:
                    respuesta = "Lo supuse >:(\nNo eres la dueña de mi corazón";
                    break;
                case 2:
                    respuesta = "Inténtalo de nuevo XD\nSi no te la sabes no pasarás de aquí >:/";
                    break;
                case 3:
                    respuesta = "La tercera es la vencida, dicen :v";
                    break;
                case 4:
                    respuesta = "Mmmm. ¿Aún nada?\nPista: Es un número de 6 dígitos :P";
                    break;
                case 5:
                    respuesta = "Si lo sigues intentando es muy probable que sí seas mi esposa...";
                    break;
                case 6:
                    respuesta = "Vamos, amorcito; sigue intentando :3";
                    break;
                case 7:
                    respuesta = "Una vez más, mi amor; ya casi lo tienes";
                    break;
                case 8:
                    respuesta = "¿Una pista más?\nEs la fecha de nuestra boda XP";
                    break;
                case 9:
                    respuesta = "¿Aún nada?\nMmmm...\nInténtalo una vez más, bb; sé que puedes lograrlo";
                    break;
                case 10:
                    respuesta = "Vale XD\nCreo que ya estarás lo suficientemente estresada de adivinar.\nLa clave es: " + PIN_CORRECTO;
                    break;
                default:
                    respuesta = "Parece que aún tienes problemas :P\nEstá bien, mi amor; puedes seguirlo intentando";
            }
            
            // Muestra el mensaje en pantalla, limpia el campo y regresa el foco
            mensajeError.innerText = respuesta;
            inputPin.value = ""; 
            inputPin.focus();
            contadorPin++; 
        }
    }
});