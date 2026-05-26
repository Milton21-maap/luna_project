// ==========================================
// BASE DE DATOS DE DIÁLOGOS EMOCIONALES (NUEVO MOTOR JSON)
// ==========================================
const CHATS_BOTIQUIN = {
    1: { // TRISTE (Guion Interactivo con Opciones y Dibujo)
        secuenciaInicial: [
            { tipo: "texto", contenido: "Ay, mi niña linda..." },
            { tipo: "texto", contenido: "Debes estar en tu límite para admitir que te sientes mal, bb." },
            { tipo: "texto", contenido: "Eres muy fuerte, incluso cuando no tienes necesidad de serlo." },
            { tipo: "texto", contenido: "¿Estás sola?" },
            { tipo: "opciones", opciones: [
                { texto: "Sí...", idBoton: "game-yes" }, 
                { texto: "No...", idBoton: "game-no" }
            ]}
        ],
        rutasCondicionales: {
            "game-yes": [
                { tipo: "texto", contenido: "Vale, eso es bueno." },
                { tipo: "texto", contenido: "Tienes la libertad de gritar, llorar y liberar lo que sientes sin que te moleste tu mamá o cualquier otro metiche." },
                { tipo: "texto", contenido: "Está bien estar mal, cosita." },
                { tipo: "texto", contenido: "Nadie puede culparte por sentirte mal; es normal en todos, dulzura." }
            ],
            "game-no": [
                { tipo: "texto", contenido: "Oh, entiendo..." },
                { tipo: "texto", contenido: "Está bien, mi amor." },
                { tipo: "texto", contenido: "Yo estoy aquí contigo." },
                { tipo: "texto", contenido: "No estás sola, princesa." },
                { tipo: "texto", contenido: "Te amo mucho, Harli. Lo sabes, y no lo olvides jamás." }
            ]
        },
        secuenciaFinal: [
            { tipo: "texto", contenido: "Quizás te haga falta pasar un momento a solas." },
            { tipo: "texto", contenido: "O un pequeño detalle puede ayudar también..." },
            { tipo: "texto", contenido: "Qué tal uno de esos que te gustan tanto..." },
            { tipo: "texto", contenido: "¡Exacto! Un dibujo/carta :D" },
            { tipo: "imagen", contenido: "assets/fotos/Dibujos/Triste.jpeg" }, // Tu dibujo del Cisne
            { tipo: "texto", contenido: "La hice justo para ti, mi amor; espero que te guste. Ojalá te haya podido ayudar un poco con esto." },
            { tipo: "texto", contenido: "Si no fue así, sé que pasar un rato sola con tus hobbies te va a ayudar mucho :3" },
            { tipo: "texto", contenido: "Nadie morirá si te escapas por 5 minutos O.O" }
        ]
    },
    2: { // FELIZ
        secuenciaInicial: [
            { tipo: "texto", contenido: "Alaaaa :O" },
            { tipo: "texto", contenido: "Parece que alguien hoy está alegre :3" },
            { tipo: "texto", contenido: "Eso me hace muy feliz a mí también <3" },
            { tipo: "texto", contenido: "Me encantaría saber qué es lo que te hace tan feliz..." },
            { tipo: "opciones", opciones: [
                { texto: "🍔 Estoy comiendo", idBoton: "game-comiendo" },
                { texto: "✨ Pasó algo bueno", idBoton: "game-bueno" },
                { texto: "💸 Tengo dinero", idBoton: "game-dinero" },
                { texto: "🎁 Me dieron un regalo", idBoton: "game-regalo" },
                { texto: "😶 Otro", idBoton: "game-otro" }
            ]}
        ],
        rutasCondicionales: {
            "game-comiendo": [
                { tipo: "texto", contenido: "Oh, ya veo :3" },
                { tipo: "texto", contenido: "Sé que no me darás de tu comida, así que mejor no te pido XD" },
                { tipo: "texto", contenido: "Disfrútalo, mi niña; buen provecho." },
                { tipo: "texto", contenido: "Luego me cuentas qué comes, vale?" }
            ],
            "game-bueno": [
                { tipo: "texto", contenido: "Interesante :OOO" },
                { tipo: "texto", contenido: "Si eso te hace feliz, sea lo que sea, a mí me hace feliz, dulzura" },
                { tipo: "texto", contenido: "No olvides qué es para que al rato me cuentes, va?" }
            ],
            "game-dinero": [
                { tipo: "texto", contenido: "Jajajaja, está bien." },
                { tipo: "texto", contenido: "Si fue un regalo, o si lo ganaste trabajando; de cualquier manera disfrútalo ;3" },
                { tipo: "texto", contenido: "Lo mereces, bb" },
                { tipo: "texto", contenido: "Felicidad :3" }
            ],
            "game-regalo": [
                { tipo: "texto", contenido: "Oh, entiendo" },
                { tipo: "texto", contenido: "Mmmmmmm..." },
                { tipo: "texto", contenido: "Ahora quiero saber qué es >:v" },
                { tipo: "texto", contenido: "Pero bueno, luego me cuentas qué es, sí?" }
            ],
            "game-otro": [
                { tipo: "texto", contenido: "Hmmm, entonces se trata de otra cosa :v" },
                { tipo: "texto", contenido: "Está bien :3" },
                { tipo: "texto", contenido: "Sea lo que sea de lo que se trate, quiero que sepas que me alegra mucho que estés feliz :3" },
                { tipo: "texto", contenido: "Y que espero que me cuentes el chisme en cuanto puedas :v" },
                { tipo: "texto", contenido: "Que no sepa lo que es no significa que no me interese o que no comparta tu alegría, mi vida." }
            ]
        },
        secuenciaFinal: [
            { tipo: "texto", contenido: "Ojalá la sigas pasando súper hoy" },
            { tipo: "texto", contenido: "No dejes que nada ni nadie arruine tu alegría, mi niña" },
            { tipo: "texto", contenido: "Te amo mucho; ten un día maravilloso, cariño <3" },
            // Aquí enlazamos tu futuro video bailando (ajusta la ruta y el nombre cuando lo grabes)
            { tipo: "video", contenido: "assets/videos/FelizVideo.mp4" } 
        ]
    },
    3: { // SOLA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Bueno..." },
            { tipo: "texto", contenido: "Creo que en parte tengo culpa de que te sientas así, mi niña... Lo siento. 😔" },
            { tipo: "texto", contenido: "Pero, hey; no estás del todo sola." },
            { tipo: "texto", contenido: "En cuanto decidas o puedas volver a mis brazos, estaré allí para recibirte con alegría y cariño. 🌹" },
            { tipo: "imagen", contenido: "assets/fotos/imagen_prueba.png" }
        ]
    },
    4: { // ENOJADA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Ou... Creo que no es el mejor momento para estar aquí..." },
            { tipo: "texto", contenido: "Pero, ahora que me fijo..." },
            { tipo: "texto", contenido: "Eres una cosita muy tierna y adorable estando enojada. 😡❤️" },
            { tipo: "texto", contenido: "Me encantaría ayudarte a controlar tu enojo, pero es algo difícil en este mismo instante, preciosura." },
            { tipo: "texto", contenido: "Sólo, no olvides quién es la niña hermosa de papi. 🥰" },
            { tipo: "texto", contenido: "🎁 [RECURSO MULTIMEDIA]: Aquí puedes adjuntar una pendejada graciosa tuya para calmar su genio." }
        ]
    },
    5: { // ESTRESADA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Mmmm... Te están presionando mucho hoy, ¿no?" },
            { tipo: "texto", contenido: "Quizás el día parece eterno..." },
            { tipo: "texto", contenido: "¿Te parece si nos tomamos 5 minutos, mi reina?" },
            { tipo: "texto", contenido: "Quisiera que te tomaras un pequeño descanso, mi niña. 💆‍♀️" },
            { tipo: "texto", contenido: "🎁 [RECURSO MULTIMEDIA]: Aquí colocarás tu video tutorial con 'hacks' para estudiar/quehaceres." }
        ]
    },
    6: { // ASUSTADA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Vaya... No sé cómo ayudarte en este tipo de casos, mi niña." },
            { tipo: "texto", contenido: "Eres la mujer más valiente que conozco. :P" },
            { tipo: "texto", contenido: "Apuesto a que, en tus zapatos, yo estaría cagado. :v" },
            { tipo: "texto", contenido: "Ya sé, dicen que la risa es la mejor medicina. :3" },
            { tipo: "texto", contenido: "¿Qué tal un par de chistes malos y pendejadas de mi autoría para alivianar la tensión? XD" },
            { tipo: "video", contenido: "assets/videos/video_prueba.mp4" }
        ]
    },
    7: { // ABURRIDA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Estás aburrida, ¿eh? :P" },
            { tipo: "texto", contenido: "Bueno, eso es algo que se puede solucionar fácilmente, mi niña linda. :3" },
            { tipo: "texto", contenido: "Te gusta leer, ¿no?" },
            { tipo: "texto", contenido: "Escribí esto justo para ti... Ojalá te guste" },
            { tipo: "descargable", url: "assets/descargables/Memorias del Arma Divina.pdf", nombre: "📖 Descarga tu cuento.pdf" }
        ]
    }
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

// MEMORIA INTERNA
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

// FUNCIÓN DE REINICIO SEGURO
function resetBotiquinView() {
    botiquinTimeouts.forEach(id => clearTimeout(id));
    botiquinTimeouts = []; 
    
    chatWrapper.classList.add('hidden');
    menuWrapper.classList.remove('hidden');
    menuWrapper.classList.add('fade-in');
    timelineBox.innerHTML = ""; 
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
        
        if (moodId === 8) {
            arrancarMinijuegoNormal();
        } else {
            // Arranca el nuevo motor JSON con la secuencia inicial
            procesarSecuencia(CHATS_BOTIQUIN[moodId].secuenciaInicial, moodId);
        }
    });
});

// ==========================================
// NUEVO MOTOR DE CHAT SECUENCIAL INTELIGENTE
// ==========================================
function procesarSecuencia(secuencia, moodIdContexto = null, callbackTermino = null) {
    let indice = 0;
    
    function siguienteMensaje() {
        if (indice >= secuencia.length) {
            // Si la secuencia terminó y existe un callback, lo ejecuta (útil para unir secuencias condicionales con la final)
            if (callbackTermino) callbackTermino();
            return; 
        }
        
        const msg = secuencia[indice];
        
        // Si es una pregunta con opciones, PAUSA el bucle y dibuja los botones
        if (msg.tipo === "opciones") {
            dibujarOpcionesDinamicas(msg.opciones, moodIdContexto);
            return; // Se detiene la recursividad hasta que ella haga clic
        }
        
        // Renderizado visual según el tipo de objeto
        if (msg.tipo === "texto") {
            imprimirBurbujaDinamica(msg.contenido, "chat-bubble");
        } else if (msg.tipo === "imagen") {
            imprimirBurbujaDinamica(`<img src='${msg.contenido}' style='width:100%; border-radius:12px; margin-top:10px; box-shadow:0 6px 15px rgba(0,0,0,0.08); border: 1px solid #edf2f7;'>`, "chat-media-container");
        } else if (msg.tipo === "video") {
            imprimirBurbujaDinamica(`<video src='${msg.contenido}' controls style='width:100%; border-radius:12px; margin-top:10px; border: 2px solid rgba(255, 194, 209, 0.5); box-shadow: 0 4px 10px rgba(0,0,0,0.05);'></video>`, "chat-media-container");
        } else if (msg.tipo === "descargable") {
            imprimirBurbujaDinamica(`<a href='${msg.url}' download class='back-romantic-btn' style='display:block; text-decoration:none; margin-top:10px;'>${msg.nombre}</a>`, "chat-media-container");
        }
        
        indice++;
        
        // Los multimedia cargan rápido (800ms), los textos se toman su tiempo para leer (1800ms)
        let espera = (msg.tipo === "texto") ? 1800 : 800;
        let tId = setTimeout(siguienteMensaje, espera);
        botiquinTimeouts.push(tId);
    }
    
    siguienteMensaje(); // Arranca el motor
}

// INYECTOR DE BOTONES EN EL CHAT
function dibujarOpcionesDinamicas(opciones, moodIdContexto) {
    const cajaBotones = document.createElement('div');
    cajaBotones.className = "chat-choices-zone fade-in";
    
    opciones.forEach(opt => {
        const btn = document.createElement('button');
        
        // Usamos la nueva clase pastel por defecto
        btn.className = "choice-btn chat-opt-btn"; 
        
        // Mantenemos a salvo los colores del minijuego de Tangamandapio
        if (opt.idBoton === "game-yes") btn.className = "choice-btn yes";
        if (opt.idBoton === "game-no") btn.className = "choice-btn no";
        
        btn.innerText = opt.texto;
        
        btn.onclick = () => {
            cajaBotones.remove(); // Desaparecen los botones al dar clic
            
            // Inyectamos su selección como un mensaje enviado por ella
            imprimirBurbujaDinamica(opt.texto, "chat-bubble user-reply");
            
            // Busca la ruta que eligió
            let rutaElegida = CHATS_BOTIQUIN[moodIdContexto].rutasCondicionales[opt.idBoton];
            if (rutaElegida) {
                // Simulamos que tú tardas 800ms en leer su respuesta antes de seguir
                let tId = setTimeout(() => {
                    procesarSecuencia(rutaElegida, null, () => {
                        procesarSecuencia(CHATS_BOTIQUIN[moodIdContexto].secuenciaFinal, null, null);
                    });
                }, 800);
                botiquinTimeouts.push(tId);
            }
        };
        cajaBotones.appendChild(btn);
    });
    
    timelineBox.appendChild(cajaBotones);
    timelineBox.scrollTop = timelineBox.scrollHeight;
}

// IMPRESORA FÍSICA PARA EL MOTOR NUEVO
function imprimirBurbujaDinamica(htmlContent, claseCSS) {
    const bubble = document.createElement('div');
    bubble.className = claseCSS;
    bubble.innerHTML = htmlContent;
    bubble.style.animation = "aparecerSuave 0.4s forwards";
    timelineBox.appendChild(bubble);
    timelineBox.scrollTop = timelineBox.scrollHeight;
}

// ==========================================
// MÓDULO INTERACTIVO LEGACY: JUEGO OPCIÓN "NORMAL" (8)
// ==========================================
// (Se mantiene intacto usando su impresora original para no alterar tu lógica)

function arrancarMinijuegoNormal() {
    imprimirMensajeChatLegacy("Oh, ya veo... Bueno, pos, juguemos algo. :3", 0);
    imprimirMensajeChatLegacy("Piensa en una palabra y escríbela aquí abajo, yo la adivinaré >:3", 1500);
    
    let tInput = setTimeout(() => {
        inputZone.classList.remove('hidden'); 
    }, 2800);
    botiquinTimeouts.push(tInput);
}

document.getElementById('btn-send-word').addEventListener('click', () => {
    palabraPensada = wordInput.value.trim();
    if (!palabraPensada) return;
    
    inputZone.classList.add('hidden'); 
    
    imprimirMensajeChatLegacy(`(Pensando en: "${palabraPensada}")`, 0);
    imprimirMensajeChatLegacy("Bien... procesando tu mente...", 1200);
    imprimirMensajeChatLegacy("Tu palabra es...", 2800);
    imprimirMensajeChatLegacy("¿¡Tangamandapio :v!?", 4500);
    
    let tChoices = setTimeout(() => {
        choicesZone.classList.remove('hidden'); 
    }, 5500);
    botiquinTimeouts.push(tChoices);
});

document.getElementById('game-yes').addEventListener('click', () => {
    choicesZone.classList.add('hidden');
    imprimirMensajeChatLegacy("¡Ala! 😱 ¡Adiviné! :3", 0);
    imprimirMensajeChatLegacy(`Por un momento llegué a pensar que tu palabra de verdad era "${palabraPensada}"... ¡Qué coincidencia! :v`, 1500);
    concluirJuegoNormal();
});

document.getElementById('game-no').addEventListener('click', () => {
    choicesZone.classList.add('hidden');
    imprimirMensajeChatLegacy("Chale. :/", 0);
    imprimirMensajeChatLegacy("Soy malísimo en esto...", 1200);
    imprimirMensajeChatLegacy(`Sabía que debí haber dicho "${palabraPensada}" desde el principio... ¡Estaba en mi mente!`, 2500);
    concluirJuegoNormal();
});

function concluirJuegoNormal() {
    let tConcluir = setTimeout(() => {
        imprimirMensajeChatLegacy("Pero bueno... Espero haberte sacado una sonrisa. XP", 0);
        imprimirMensajeChatLegacy("💬 <b>[MENSAJE CIFRADO DEL SISTEMA]:</b> He dejado un canal oculto en la matriz. Cuando el LATIDO despierte el teclado, no busques palabras... <i>debes digitar el código numérico de acceso</i> para liberar la melodía oculta...", 1500)
    }, 4500);
    botiquinTimeouts.push(tConcluir);
}

// Impresora original para que el minijuego no se rompa
function imprimirMensajeChatLegacy(texto, retraso, esRegalo = false) {
    let timeoutId = setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.className = esRegalo ? "chat-media-container" : "chat-bubble";
        bubble.innerHTML = texto;
        timelineBox.appendChild(bubble);
        timelineBox.scrollTop = timelineBox.scrollHeight; 
    }, retraso);
    botiquinTimeouts.push(timeoutId);
}