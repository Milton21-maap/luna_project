// ==========================================
// BASE DE DATOS DE DIÁLOGOS EMOCIONALES (NUEVO MOTOR JSON)
// ==========================================
const CHATS_BOTIQUIN = {
    1: { // TRISTE
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
            { tipo: "imagen", contenido: "assets/fotos/Triste.jpeg" },
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
                { tipo: "texto", contenido: "Felicidades :3" }
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
            { tipo: "youtube", contenido: "https://www.youtube.com/embed/L9lMNz_fAKQ" }
        ]
    },
    3: { // SOLA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Ou, ya veo..." },
            { tipo: "texto", contenido: "Creo que tengo parte de culpa de que te sientas así..." },
            { tipo: "texto", contenido: "Perdóname por no estar ahí para ti, cariño..." },
            { tipo: "texto", contenido: "Pero, quizás este sitio web te ayude un poco, mi niña" },
            { tipo: "texto", contenido: "¿Te parece si te cuento unos chistes para pasar el rato? :D?" },
            { tipo: "texto", contenido: "A ver..." },
            { tipo: "texto", contenido: "¿Sabías que eliminar los correos no deseados es fácil?" },
            { tipo: "texto", contenido: "..." },
            { tipo: "texto", contenido: "<i>¡Spam comido! :D</i>" },
            { tipo: "texto", contenido: "..." },
            { tipo: "texto", contenido: "<i>*sonidos de grillos*</i>" },
            { tipo: "texto", contenido: "Bien, creo que no se me da bien esto de los chistes :/" },
            { tipo: "texto", contenido: "¿Qué tal otro? :3" },
            { tipo: "texto", contenido: "Tengo un amigo otaku que está triste :(" },
            { tipo: "texto", contenido: "..." },
            { tipo: "texto", contenido: "<i>Así que lo animé :D</i>" },
            { tipo: "texto", contenido: "..." },
            { tipo: "texto", contenido: "N mms, qué vergüenza :')" },
            { tipo: "texto", contenido: "Mejor lo dejo ya XDDDDDDDDD" },
            { tipo: "texto", contenido: "Tan solo espero haberte hecho sentir un poco más acompañada, mi niña :3" },
            { tipo: "texto", contenido: "Puede que ahora mismo yo esté lejos, pero eso no significa que estés del todo sola." },
            { tipo: "texto", contenido: "Te lo he dicho antes: <b>Ya no estás sola, y nunca lo estarás de nuevo.</b>" },
            { tipo: "texto", contenido: "Te amo, Harli; más que a nada en el mundo." },
            { tipo: "texto", contenido: "Mira, si te ayuda, te dejo por aquí un video sobre cómo ganar en el ajedrez >:3" },
            { tipo: "texto", contenido: "PD: No soy el mejor jugando :')" },
            { tipo: "youtube", contenido: "https://www.youtube.com/embed/0C5Rarc-UiI" }
        ]
    },
    4: { // ENOJADA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Ou... Creo que no es el mejor momento..." },
            { tipo: "texto", contenido: "Pero si estás aquí es por algo..." },
            { tipo: "texto", contenido: "Pues mira :3" },
            { tipo: "texto", contenido: "Una flor para una mujer hermosa:" },
            { tipo: "imagen", contenido: "assets/fotos/Flor1.jpeg" },
            { tipo: "texto", contenido: "Te ves tan linda estando enojada, mi niña" },
            { tipo: "texto", contenido: "Y muy sexy también..." },
            { tipo: "texto", contenido: "Aún recuerdo lo que hice aquella vez que estabas enojada..." },
            { tipo: "texto", contenido: "Me puse a hacer cosas raras... Ya sabes..." },
            { tipo: "texto", contenido: "Si no lo recuerdas te quedarás con la intriga XDDDDDD" },
            { tipo: "texto", contenido: "Sólo diré que me gustaría ayudarte a controlar tu enojo... ya sabes de lo que hablo..." },
            { tipo: "texto", contenido: "Pero bueno, no puedo hacer nada, aunque quisiera..." },
            { tipo: "texto", contenido: "Me gustaría mimarte como la niña pequeña y consentida que eres, dulzura" },
            { tipo: "texto", contenido: "Porque eres mi niña linda, ¿verdad, bb?" },
            { tipo: "opciones", opciones: [
                { texto: "Sí 🥺", idBoton: "game-si1" },
                { texto: "Sí... 😳", idBoton: "game-si2" }
            ]}
        ],
        rutasCondicionales: {
            "game-si1": [
                { tipo: "texto", contenido: "Jejejeje, buena chica" },
                { tipo: "texto", contenido: "Toma otra flor :3" },
                { tipo: "imagen", contenido: "assets/fotos/Flor2.jpeg" }
            ],
            "game-si2": [
                { tipo: "texto", contenido: "Qué linda; buena chica" },
                { tipo: "texto", contenido: "Una flor para una niña tan linda y adorable <3" },
                { tipo: "imagen", contenido: "assets/fotos/Flor3.jpeg" }
            ]
        },
        secuenciaFinal: [
            { tipo: "texto", contenido: "Te amo mucho, Harli." },
            { tipo: "texto", contenido: "Tómate un respiro; un poco de agua en el cuerpo podría ayudar." },
            { tipo: "texto", contenido: "Si no puedes, con que te escapes por un par de minutos está bien." },
            { tipo: "texto", contenido: "Sea lo que sea que haya pasado, no dudes de que eres importante para mí, cariño; eres lo mejor que me ha pasado." },
            { tipo: "texto", contenido: "En cuanto podamos hablar, dime lo que sucedió, va?" },
            { tipo: "texto", contenido: "Si puedo ayudarte, lo haré con gusto." },
            { tipo: "texto", contenido: "Besos 😘" }
        ]
    },
    5: { // ESTRESADA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Mmmmm... No está siendo un buen día, no?" },
            { tipo: "texto", contenido: "Y quizás no esté pronto a acabar..." },
            { tipo: "texto", contenido: "Sabes? Dicen que el estrés es bueno. PERO hasta ciertos niveles O.O" },
            { tipo: "texto", contenido: "Si el estrés se vuelve muy pesado es muy probable que termines teniendo problemas cardiacos y de presión" },
            { tipo: "texto", contenido: "Y no quiero que se enferme tu corancito :(" },
            { tipo: "texto", contenido: "¿Te parece si nos tomamos 5 minutos, cariño?" },
            { tipo: "opciones", opciones: [
                { texto: "Sí... 🥺", idBoton: "game-si-estres" },
                { texto: "No 😔", idBoton: "game-no-estres" }
            ]}
        ],
        rutasCondicionales: {
            "game-si-estres": [
                { tipo: "texto", contenido: "¡Perfecto, mi amor!" },
                { tipo: "texto", contenido: "De verdad, lo agradezco mucho. Cuidarte es el regalo que más valoro en la vida." },
                { tipo: "texto", contenido: "Si no te cuidas, ¿con quién me voy a casar...?" },
                { tipo: "texto", contenido: "Así que ahora pide permiso para ir al baño, apaga todo y sal a tomar aire." },
                { tipo: "texto", contenido: "Échate un poco de agua en la cara, lávate las manos, siéntate en un lugar abierto y respira profundo durante unos minutos." },
                { tipo: "texto", contenido: "No te digo que pierdas clases o dejes de lado lo que haces, mi amor..." },
                { tipo: "texto", contenido: "Sólo quiero que te des 5 minutos máximo, ¿sí?" },
                { tipo: "texto", contenido: "Ve, yo sigo aquí 😘" },
                { tipo: "opciones", opciones: [
                    { texto: "Volví ✨", idBoton: "game-volvi" },
                    { texto: "No pude ir 😞", idBoton: "game-nopude" }
                ]}
            ],
            "game-no-estres": [
                { tipo: "texto", contenido: "Ou, ya veo... Seguramente estás muy ocupada y no puedes parar ahora." },
                { tipo: "texto", contenido: "Está bien, mi amor. Entiendo." },
                { tipo: "texto", contenido: "Sabes, a veces me frustra un poco estar lejos..." },
                { tipo: "texto", contenido: "Eres una mujer increíblemente fuerte, y sé que puedes con todo tú sola." },
                { tipo: "texto", contenido: "Pero a veces me duele verte cargar con el peso del mundo entero sobre tus hombros." },
                { tipo: "texto", contenido: "Me encantaría estar ahí para quitarte un poquito de esa carga, aunque sea por un rato." },
                { tipo: "texto", contenido: "No tienes que ser fuerte todo el tiempo conmigo, mi niña..." },
                { tipo: "texto", contenido: "Pero si hoy tienes que serlo, quiero que sepas que aquí estoy, admirándote y haciéndote porras." },
                { tipo: "texto", contenido: "Termina lo que tengas que hacer. Yo no me muevo de aquí." }
            ],
            "game-volvi": [
                { tipo: "texto", contenido: "Muchas gracias, mi niña linda.... De verdad... Gracias...." },
                { tipo: "texto", contenido: "Ojalá eso haya ayudado aunque fuera un poco, dulzura" },
                { tipo: "texto", contenido: "Te amo mucho..." }
            ],
            "game-nopude": [
                { tipo: "texto", contenido: "Carajo..." },
                { tipo: "texto", contenido: "Está bien, cariño; al menos lo intentaste, y eso me hace feliz también." }
            ]
        },
        secuenciaFinal: [
            { tipo: "texto", contenido: "Te amo mucho, Harli. Sin importar lo que hagas o digas; sin importar tu forma de ser, te amo tal cual eres." },
            { tipo: "texto", contenido: "Ojalá el día mejore." },
            { tipo: "texto", contenido: "En cuanto acabe, tómate un descanso bien largo y reconfortante... Lo tienes más que merecido." },
            { tipo: "texto", contenido: "Mira, te grabé esto. Quizás escucharme un ratito te ayude a relajarte un poco..." },
            { tipo: "youtube", contenido: "https://www.youtube.com/embed/5HX55n6RSkQ" }
        ]
    },
    6: { // ASUSTADA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Okay, no es tan malo, mi vida." },
            { tipo: "texto", contenido: "No sé cómo ayudarte en estos casos, pero sé que todo va a estar bien, cariño." },
            { tipo: "texto", contenido: "Eres la mujer más valiente que conozco" },
            { tipo: "texto", contenido: "Claro que eso no afecta en nada a lo que pueda pasar, es cierto" },
            { tipo: "texto", contenido: "Pero no pensemos tanto en eso, vale?" },
            { tipo: "texto", contenido: "A veces la mejor forma de enfrentar tus miedos es colocando las emociones en reposo, sabes?" },
            { tipo: "texto", contenido: "Así que..." },
            { tipo: "texto", contenido: "Qué te parece calmar la tensión con un par de pendejadas? :D" },
            { tipo: "texto", contenido: "No estoy seguro de si de verdad esto te haga reír :/" },
            { tipo: "texto", contenido: "Pero espero que al menos te ayude un poco, bb" },
            { tipo: "texto", contenido: "Si eso no ayuda, las cambiaré por mis propias bromas :3" },
            { tipo: "texto", contenido: "Te amo <3" },
            { tipo: "youtube", contenido: "https://youtu.be/embed/N1EMAOo2NHNQfw9x" }
        ]
    },
    7: { // ABURRIDA
        secuenciaInicial: [
            { tipo: "texto", contenido: "Oh, aburrida, eh?" },
            { tipo: "texto", contenido: "Mmmmmmmm, eso se puede resolver fácilmente :3" },
            { tipo: "texto", contenido: "Te gustan las curiosidades, ¿no?" },
            { tipo: "texto", contenido: "Aquí te tengo una que quizás no sabías >:3" },
            { tipo: "texto", contenido: "¿Sabías que, aunque estemos quietos, siempre estamos en constante movimiento? :O" },
            { tipo: "opciones", opciones: [
                { texto: "Ya lo sabía :/", idBoton: "game-sabia" },
                { texto: "No lo sabía :O", idBoton: "game-nosabia" }
            ]}
        ],
        rutasCondicionales: {
            "game-sabia": [
                { tipo: "texto", contenido: "Oh, ya veo :v" },
                { tipo: "texto", contenido: "A ver, entonces otro >:3" },
                { tipo: "texto", contenido: "¿Sabías que en la vida nada tiene sentido y lo único realmente seguro es que algún día morirás?...." },
                { tipo: "texto", contenido: "¿O sabías que la mitología griega es considerada una de las más reales y crueles en cuanto a representación de la sociedad y castigos divinos?" },
                { tipo: "texto", contenido: "Esto la hace una de las más interesantes y complejas :3" },
                { tipo: "texto", contenido: "Qué locura, no? :O" }
            ],
            "game-nosabia": [
                { tipo: "texto", contenido: "Oh, interesante :3" },
                { tipo: "texto", contenido: "He estado estudiando un poco últimamente, para hacerte sentir orgullosa :3" }
            ]
        },
        secuenciaFinal: [
            { tipo: "texto", contenido: "Espero que te haya puesto a abrir Google para quitarte un poco el aburrimiento XP" },
            { tipo: "texto", contenido: "Si aún sigues aburrida, entonces te dejo por aquí un libro en pdf, por si se te antoja algo de romance oscuro :3" },
            { tipo: "texto", contenido: "No preguntes cómo lo conseguí XD" },
            { tipo: "texto", contenido: "Te amo, disfruta la lectura :3" },
            // Reemplazamos el video por tu botón de descarga
            { tipo: "descargable", url: "assets/descargables/Butcher & Blackbird - Brynne Weavee.pdf", nombre: "📖 Descargar: Butcher & Blackbird" }
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
            // Si la secuencia terminó y existe un callback, lo ejecuta
            if (callbackTermino) {
                callbackTermino();
            } else {
                // Si NO hay callback, es el final absoluto. Imprimimos el cierre del sistema.
                let tSys = setTimeout(imprimirMensajeSistema, 1500);
                botiquinTimeouts.push(tSys);
            }
            return; 
        }
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
        } else if (msg.tipo === "youtube") {
            imprimirBurbujaDinamica(`<div style='position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; margin-top:10px; border: 2px solid rgba(255, 194, 209, 0.5); box-shadow: 0 4px 10px rgba(0,0,0,0.05);'><iframe style='position:absolute; top:0; left:0; width:100%; height:100%; border:none;' src='${msg.contenido}' allowfullscreen></iframe></div>`, "chat-media-container");
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
                    procesarSecuencia(rutaElegida, moodIdContexto, () => {
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

// IMPRESORA DEL MENSAJE DE SISTEMA FINAL
function imprimirMensajeSistema() {
    const msg = document.createElement('div');
    msg.className = "chat-system-message fade-in";
    msg.innerText = "--------- Simulación Finalizada ---------";
    timelineBox.appendChild(msg);
    timelineBox.scrollTop = timelineBox.scrollHeight;
}

// ==========================================
// MÓDULO INTERACTIVO LEGACY: JUEGO OPCIÓN "NORMAL" (8)
// ==========================================
// (Se mantiene intacto usando su impresora original para no alterar tu lógica)

function arrancarMinijuegoNormal() {
    imprimirMensajeChatLegacy("Oh, ya veo... Bueno, pos, juguemos algo :3", 0);
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
    
    if (palabraPensada.toLowerCase() === "tangamandapio") {
        // Ruta secreta: Descubrió el chiste antes de tiempo
        imprimirMensajeChatLegacy("Ey, espera -_-", 1500);
        imprimirMensajeChatLegacy("De verdad que eres curiosa, eh?", 3000);
        imprimirMensajeChatLegacy("Jummm, pero yo estoy tres pasos adelante >:3", 4500);
        imprimirMensajeChatLegacy("Aquí tienes la pista del sistema:", 6000);
        imprimirMensajeChatLegacy("💬 <b>[MENSAJE CIFRADO DEL SISTEMA]:</b> He dejado un canal oculto en la matriz. Cuando el LATIDO despierte el teclado, no busques palabras... <i>debes digitar el código numérico de acceso</i> para liberar la melodía oculta...", 8000);
        
        // Cierre de simulación para la ruta secreta
        let tFinal = setTimeout(imprimirMensajeSistema, 10500);
        botiquinTimeouts.push(tFinal);
        
    } else {
        // Ruta normal
        imprimirMensajeChatLegacy("Bien... procesando tu mente...", 1200);
        imprimirMensajeChatLegacy("Tu palabra es...", 2800);
        imprimirMensajeChatLegacy("¿¡Tangamandapio :v!?", 4500);
        
        let tChoices = setTimeout(() => {
            choicesZone.classList.remove('hidden'); 
        }, 5500);
        botiquinTimeouts.push(tChoices);
    }
});

// Respuestas a los botones del minijuego con inyección visual
document.getElementById('game-yes').addEventListener('click', () => {
    choicesZone.classList.add('hidden');
    
    // Inyectamos su selección en la pantalla
    imprimirBurbujaDinamica("¡SÍ! 😱", "chat-bubble user-reply");
    
    // Ajustamos los tiempos para darle un respiro a la lectura
    imprimirMensajeChatLegacy("¡Ala! 😱 ¡Adiviné! :3", 800);
    imprimirMensajeChatLegacy(`Por un momento llegué a pensar que tu palabra de verdad era "${palabraPensada}"... ¡Qué coincidencia! :v`, 2300);
    concluirJuegoNormal(3800);
});

document.getElementById('game-no').addEventListener('click', () => {
    choicesZone.classList.add('hidden');
    
    // Inyectamos su selección en la pantalla
    imprimirBurbujaDinamica("Nop 😜", "chat-bubble user-reply");
    
    imprimirMensajeChatLegacy("Chale :/", 800);
    imprimirMensajeChatLegacy("Soy malísimo en esto...", 2000);
    imprimirMensajeChatLegacy(`Sabía que debí haber dicho "${palabraPensada}" desde el principio... ¡Lo sabía!`, 3500);
    concluirJuegoNormal(5000);
});

function concluirJuegoNormal(delayBase = 4500) {
    let tConcluir = setTimeout(() => {
        imprimirMensajeChatLegacy("Pero bueno... Espero haberte sacado una sonrisa. XP", 0);
        
        // Llamado al mensaje del sistema al terminar la ruta normal
        let tSys = setTimeout(imprimirMensajeSistema, 1800);
        botiquinTimeouts.push(tSys);
    }, delayBase);
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