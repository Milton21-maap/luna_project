// ==========================================
// BASE DE DATOS DE DIÁLOGOS EMOCIONALES
// ==========================================
const DIALOGOS_BOTIQUIN = {
    1: [
        "Ay, mi niña linda...",
        "Me gustaría abrazarte suavemente y en silencio...",
        "¿Estás sola? De ser así, llora con libertad, princesa...",
        "Está bien estar mal. ❤️",
        "<div style='position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; margin-top:10px; border: 2px solid var(--rosa-vibrante);'><iframe style='position:absolute; top:0; left:0; width:100%; height:100%; border:none;' src='https://www.youtube.com/embed/dQw4w9WgXcQ' allowfullscreen></iframe></div>"
    ],
    2: [
        "¡Oh, cielos! 🌟",
        "Me encantaría saber a qué se debe esa alegría, mi amor :3",
        "Me temo que no puedo saberlo ahora mismo (a menos de que me lo cuentes)...",
        "Pero eso no significa que no comparta tu alegría, mi amor.",
        "Espero que la sigas pasando súper hoy; no dejes que nadie apague tu brillo. ✨",
        "🎁 [RECURSO MULTIMEDIA]: Aquí colocarás tu GIF bailando con memes."
    ],
    3: [
        "Bueno...",
        "Creo que en parte tengo culpa de que te sientas así, mi niña... Lo siento. 😔",
        "Pero, hey; no estás del todo sola.",
        "En cuanto decidas o puedas volver a mis brazos, estaré allí para recibirte con alegría y cariño. 🌹",
        "<img src='assets/fotos/imagen_prueba.png' style='width:100%; border-radius:12px; margin-top:10px; box-shadow:0 6px 15px rgba(0,0,0,0.08); border: 1px solid #edf2f7;'>"
    ],
    4: [
        "Ou... Creo que no es el mejor momento para estar aquí...",
        "Pero, ahora que me fijo...",
        "Eres una cosita muy tierna y adorable estando enojada. 😡❤️",
        "Me encantaría ayudarte a controlar tu enojo, pero es algo difícil en este mismo instante, preciosura.",
        "Sólo, no olvides quién es la niña hermosa de papi. 🥰",
        "🎁 [RECURSO MULTIMEDIA]: Aquí puedes adjuntar una pendejada graciosa tuya para calmar su genio."
    ],
    5: [
        "Mmmm... Te están presionando mucho hoy, ¿no?",
        "Quizás el día parece eterno...",
        "¿Te parece si nos tomamos 5 minutos, mi reina?",
        "Quisiera que te tomaras un pequeño descanso, mi niña. 💆‍♀️",
        "🎁 [RECURSO MULTIMEDIA]: Aquí colocarás tu video tutorial con 'hacks' para estudiar/quehaceres."
    ],
    6: [
        "Vaya... No sé cómo ayudarte en este tipo de casos, mi niña.",
        "Eres la mujer más valiente que conozco. :P",
        "Apuesto a que, en tus zapatos, yo estaría cagado. :v",
        "Ya sé, dicen que la risa es la mejor medicina. :3",
        "¿Qué tal un par de chistes malos y pendejadas de mi autoría para alivianar la tensión? XD",
        "<video src='assets/videos/video_prueba.mp4' controls style='width:100%; border-radius:12px; margin-top:10px; border: 2px solid rgba(255, 194, 209, 0.5); box-shadow: 0 4px 10px rgba(0,0,0,0.05);'></video>"
    ],
    7: [
        "Estás aburrida, ¿eh? :P",
        "Bueno, eso es algo que se puede solucionar fácilmente, mi niña linda. :3",
        "Te gusta leer, ¿no?",
        "Escribí esto justo para ti... Ojalá te guste",
        "<a href='assets/descargables/Memorias del Arma Divina.pdf' download='Memorias_del_Arma_Divina.pdf' class='back-romantic-btn' style='display:block; text-decoration:none; margin-top:10px;'>📖 Descarga tu cuento.pdf</a>"
    ]
};

// CONTROLES DOM
const cardBotiquin = document.getElementById('btn-botiquin');
const mainGridMenuBox = document.querySelector('.menu-grid');
const viewBotiquin = document.getElementById('view-botiquin');
const menuWrapper = document.getElementById('botiquin-menu-wrapper');
const chatWrapper = document.getElementById('botiquin-chat-wrapper');
const timelineBox = document.getElementById('chat-timeline-box');

// CONTROLES DEL JUEGO (OPCIÓN 8)
const inputZone = document.getElementById('chat-interactive-input-zone');
const choicesZone = document.getElementById('chat-game-choices');
const wordInput = document.getElementById('game-word-input');
let palabraPensada = ""; 

// MEMORIA INTERNA: Guarda los identificadores de los hilos de tiempo activos
let botiquinTimeouts = [];

// NAVEGACIÓN CENTRAL
cardBotiquin.addEventListener('click', () => {
    mainGridMenuBox.classList.add('hidden');
    viewBotiquin.classList.remove('hidden');
    viewBotiquin.classList.add('fade-in');
    resetBotiquinView();
});

document.getElementById('back-botiquin-to-menu').addEventListener('click', () => {
    viewBotiquin.classList.add('hidden');
    mainGridMenuBox.classList.remove('hidden');
    mainGridMenuBox.classList.add('fade-in');
    resetBotiquinView();
});

document.getElementById('back-to-moods').addEventListener('click', () => {
    resetBotiquinView();
});

// FUNCIÓN DE REINICIO SEGURO (ANIQUILA DUENDES ASÍNCRONOS)
function resetBotiquinView() {
    // Comando Maestro: Mata de raíz cualquier temporizador activo del chat anterior
    botiquinTimeouts.forEach(id => clearTimeout(id));
    botiquinTimeouts = []; // Vaciamos la lista de control
    
    chatWrapper.classList.add('hidden');
    menuWrapper.classList.remove('hidden');
    menuWrapper.classList.add('fade-in');
    timelineBox.innerHTML = ""; // Vacía las burbujas físicas de la pantalla
    inputZone.classList.add('hidden');
    choicesZone.classList.add('hidden');
    wordInput.value = "";
}

// ESCUCHADOR DE LOS BOTONES DE ÁNIMO
document.querySelectorAll('.mood-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const moodId = parseInt(e.target.getAttribute('data-mood'));
        menuWrapper.classList.add('hidden');
        chatWrapper.classList.remove('hidden');
        chatWrapper.classList.add('fade-in');
        
        // Arranca de forma inmediata eliminando los textos introductorios globales redundantes
        if (moodId === 8) {
            arrancarMinijuegoNormal();
        } else {
            procesarFlujoDialogos(DIALOGOS_BOTIQUIN[moodId]);
        }
    });
});

// IMPRESORA DE BURBUJAS ASÍNCRONA REGISTRADA
function imprimirMensajeChat(texto, retraso, esRegalo = false) {
    // Guardamos la ejecución en una variable interna
    let timeoutId = setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.className = esRegalo ? "chat-media-container" : "chat-bubble";
        bubble.innerHTML = texto;
        timelineBox.appendChild(bubble);
        timelineBox.scrollTop = timelineBox.scrollHeight; // Auto-scroll dinámico
    }, retraso);
    
    // Registramos el ID en nuestra lista de control de seguridad
    botiquinTimeouts.push(timeoutId);
}

// PROCESADOR EN CADENA CON MARGEN DE TIEMPO COHERENTE (1.8 SEGUNDOS)
function procesarFlujoDialogos(arregloLineas) {
    let tiempoAcumulado = 0;
    arregloLineas.forEach((linea, indice) => {
        const esElUltimoElemento = indice === arregloLineas.length - 1;
        imprimirMensajeChat(linea, tiempoAcumulado, esElUltimoElemento);
        tiempoAcumulado += 1800; // Simulación perfecta de ritmo de escritura natural humana
    });
}

// ==========================================
// MÓDULO INTERACTIVO: JUEGO OPCIÓN "NORMAL" (8)
// ==========================================
function arrancarMinijuegoNormal() {
    imprimirMensajeChat("Oh, ya veo... Bueno, pos, juguemos algo. :3", 0);
    imprimirMensajeChat("Piensa en una palabra y escríbela aquí abajo, yo la adivinaré >:3", 1500);
    
    let tInput = setTimeout(() => {
        inputZone.classList.remove('hidden'); 
    }, 2800);
    botiquinTimeouts.push(tInput);
}

document.getElementById('btn-send-word').addEventListener('click', () => {
    palabraPensada = wordInput.value.trim();
    if (!palabraPensada) return;
    
    inputZone.classList.add('hidden'); 
    
    imprimirMensajeChat(`(Pensando en: "${palabraPensada}")`, 0);
    imprimirMensajeChat("Bien... procesando tu mente...", 1200);
    imprimirMensajeChat("Tu palabra es...", 2800);
    imprimirMensajeChat("¿¡Tangamandapio :v!?", 4500);
    
    let tChoices = setTimeout(() => {
        choicesZone.classList.remove('hidden'); 
    }, 5500);
    botiquinTimeouts.push(tChoices);
});

document.getElementById('game-yes').addEventListener('click', () => {
    choicesZone.classList.add('hidden');
    imprimirMensajeChat("¡Ala! 😱 ¡Adiviné! :3", 0);
    imprimirMensajeChat(`Por un momento llegué a pensar que tu palabra de verdad era "${palabraPensada}"... ¡Qué coincidencia! :v`, 1500);
    concluirJuegoNormal();
});

document.getElementById('game-no').addEventListener('click', () => {
    choicesZone.classList.add('hidden');
    imprimirMensajeChat("Chale. :/", 0);
    imprimirMensajeChat("Soy malísimo en esto...", 1200);
    imprimirMensajeChat(`Sabía que debí haber dicho "${palabraPensada}" desde el principio... ¡Estaba en mi mente!`, 2500);
    concluirJuegoNormal();
});

function concluirJuegoNormal() {
    let tConcluir = setTimeout(() => {
        imprimirMensajeChat("Pero bueno... Espero haberte sacado una sonrisa. XP", 0);
        imprimirMensajeChat("💬 <b>[MENSAJE CIFRADO DEL SISTEMA]:</b> He dejado un canal oculto en la matriz. Cuando el LATIDO despierte el teclado, no busques palabras... <i>debes digitar el código numérico de acceso</i> para liberar la melodía oculta...", 1500)
    }, 4500);
    botiquinTimeouts.push(tConcluir);
}