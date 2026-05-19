// ==========================================
// BANCO DE PREGUNTAS MÚLTIPLES DEL TEST EQ
// ==========================================
const BANCO_PREGUNTAS = {
    1: [ // CATEGORÍA 1: Nuestra Relación
        {
            pregunta: "¿En qué fecha exacta nos hicimos novios oficiales? (Pista de seguridad: el login de L.U.N.A.) 😉",
            opciones: ["A) 14 de Febrero de 2026", "B) 2 de Febrero de 2026", "C) 21 de Febrero de 2026"],
            correcta: 1 
        },
        {
            pregunta: "¿A qué hora exacta quedó registrado nuestro inicio oficial en tu memoria de reloj?",
            opciones: ["A) 11:03 AM", "B) 12:00 PM", "C) 08:41 PM"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál de estos módulos representa nuestro rincón de cartas privadas?",
            opciones: ["A) Botiquín Emocional", "B) Tu Shakespeare Personal", "C) Calculadora Cronológica"],
            correcta: 1
        }
    ],
    2: [ // CATEGORÍA 2: Sobre Mí (Milton)
        {
            pregunta: "¿Cuál es una de mis grandes metas o pasiones actuales que desarrollo contigo?",
            opciones: ["A) Crear algoritmos en PseInt y desarrollo web", "B) Diseño gráfico avanzado", "C) Escribir monólogos teatrales de comedia"],
            correcta: 0
        },
        {
            pregunta: "¿Qué frase tierno/graciosa te digo siempre que adivino tus pensamientos?",
            opciones: ["A) ¡Eso era elemental, mi niña!", "B) ¿¡Tangamandapio :v!?", "C) Sabía que dirías eso XP"],
            correcta: 1
        },
        {
            pregunta: "¿Qué color vibrante prefiero inyectar en las decoraciones del sistema?",
            opciones: ["A) Azul cian neón", "B) Rosa oscuro brillante y fucsia", "C) Verde esmeralda apagado"],
            correcta: 1
        }
    ],
};

// CONTROLES DE PANTALLA (DOM) - NOMBRES ÚNICOS PARA EVITAR COLISIÓN
const cardTest = document.getElementById('btn-test');
const gridMenuTest = document.querySelector('.menu-grid'); // Renombrado
const viewTest = document.getElementById('view-test');

const wrapperMenuTest = document.getElementById('test-menu-wrapper'); // Renombrado
const quizWrapper = document.getElementById('test-quiz-wrapper');
const resultsWrapper = document.getElementById('test-results-wrapper');

const progressBar = document.getElementById('quiz-progress');
const counterText = document.getElementById('quiz-counter');
const questionText = document.getElementById('quiz-question-text');
const optionsBox = document.getElementById('quiz-options-box');

const resultEmoji = document.getElementById('result-emoji');
const resultScoreDigits = document.getElementById('result-score-digits');
const resultFeedbackText = document.getElementById('result-feedback-text');

// VARIABLES DE CONTROL DE ESTADO DE LA TRIVIA
let categoriaActiva = 1;
let preguntaIndiceActual = 0;
let respuestasCorrectasAcumuladas = 0;

// NAVEGACIÓN CENTRAL
cardTest.addEventListener('click', () => {
    document.body.classList.add('dark-theme'); // <-- MAGIA: ENCIENDE EL MODO OSCURO GLOBAL
    
    gridMenuTest.classList.add('hidden');
    viewTest.classList.remove('hidden');
    viewTest.classList.add('fade-in');
    resetTestModuleView();
});

document.getElementById('back-test-to-menu').addEventListener('click', () => {
    document.body.classList.remove('dark-theme'); // <-- MAGIA: APAGA EL MODO OSCURO GLOBAL (Vuelve al rosa)
    
    viewTest.classList.add('hidden');
    gridMenuTest.classList.remove('hidden');
    gridMenuTest.classList.add('fade-in');
});

document.getElementById('btn-finish-test').addEventListener('click', () => {
    resetTestModuleView();
});

// NUEVO: Permite abortar una prueba en curso
document.getElementById('btn-abort-test').addEventListener('click', () => {
    resetTestModuleView();
});

function resetTestModuleView() {
    resultsWrapper.classList.add('hidden');
    quizWrapper.classList.add('hidden');
    wrapperMenuTest.classList.remove('hidden'); // Usa el nuevo nombre
    wrapperMenuTest.classList.add('fade-in');   // Usa el nuevo nombre
    preguntaIndiceActual = 0;
    respuestasCorrectasAcumuladas = 0;
}

// INICIADOR DE CUESTIONARIOS
document.querySelectorAll('.test-cat-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        categoriaActiva = parseInt(button.getAttribute('data-category'));
        wrapperMenuTest.classList.add('hidden'); // Usa el nuevo nombre
        quizWrapper.classList.remove('hidden');
        quizWrapper.classList.add('fade-in');
        
        cargarPreguntaTrivia();
    });
});

// CARGADOR DINÁMICO DE PREGUNTAS
function cargarPreguntaTrivia() {
    optionsBox.innerHTML = ""; 
    const preguntasDeCategoria = BANCO_PREGUNTAS[categoriaActiva];
    const totalPreguntas = preguntasDeCategoria.length;
    
    // 1. Actualizar barra de progreso
    const porcentajeProgreso = (preguntaIndiceActual / totalPreguntas) * 100;
    progressBar.style.width = `${porcentajeProgreso}%`;
    
    // 2. Actualizar el contador numérico en pantalla
    counterText.innerText = `Pregunta ${preguntaIndiceActual + 1} de ${totalPreguntas}`;
    
    // 3. Inyectar el texto de la pregunta activa
    const objetoPreguntaActual = preguntasDeCategoria[preguntaIndiceActual];
    questionText.innerText = objetoPreguntaActual.pregunta;
    
    // 4. Crear e inyectar los botones de respuesta múltiple de forma dinámica
    objetoPreguntaActual.opciones.forEach((opcionTexto, indiceOpcion) => {
        const optBtn = document.createElement('button');
        optBtn.className = "quiz-opt-btn";
        optBtn.innerText = opcionTexto;
        
        optBtn.addEventListener('click', () => {
            evaluarRespuestaSeleccionada(indiceOpcion, objetoPreguntaActual.correcta);
        });
        
        optionsBox.appendChild(optBtn);
    });
}

// EVALUADOR DE RESPUESTAS
function evaluarRespuestaSeleccionada(indiceSeleccionado, indiceCorrecto) {
    if (indiceSeleccionado === indiceCorrecto) {
        respuestasCorrectasAcumuladas++; 
    }
    
    preguntaIndiceActual++; 
    const totalPreguntasDeCategoria = BANCO_PREGUNTAS[categoriaActiva].length;
    
    if (preguntaIndiceActual < totalPreguntasDeCategoria) {
        quizWrapper.classList.remove('fade-in');
        void quizWrapper.offsetWidth; 
        quizWrapper.classList.add('fade-in');
        cargarPreguntaTrivia();
    } else {
        finalizarCuestionarioYMostrarResultados();
    }
}

// PROCESADOR DE RESULTADOS FINALES CASE SWITCH
function finalizarCuestionarioYMostrarResultados() {
    quizWrapper.classList.add('hidden');
    progressBar.style.width = "100%"; 
    resultsWrapper.classList.remove('hidden');
    resultsWrapper.classList.add('fade-in');
    
    const totalPreguntasDeCategoria = BANCO_PREGUNTAS[categoriaActiva].length;
    resultScoreDigits.innerText = `${respuestasCorrectasAcumuladas}/${totalPreguntasDeCategoria}`;
    
    let feedback = "";
    let emoji = "🎉";
    
    switch(respuestasCorrectasAcumuladas) {
        case 1:
            emoji = "🙃";
            feedback = "Buena suerte para la próxima, mi amor. ¡Sé que puedes mejorar esta nota! 💖";
            break;
        case 2:
            emoji = "✨";
            feedback = "Ey, lo hiciste bien :3. Conoces gran parte de nuestra historia, preciosa.";
            break;
        case 3:
            emoji = "👑";
            feedback = "¡Increíble! Sabía que lo lograrías <3. Eres oficialmente la dueña absoluta de mi corazón y mi mente.";
            break;
        default:
            emoji = "🥀";
            feedback = "Mmmm... Parece que estuviste distraída, mi niña. ¡Regresa cuando quieras volver a intentarlo! 😘";
    }
    
    resultEmoji.innerText = emoji;
    resultFeedbackText.innerText = feedback;
}