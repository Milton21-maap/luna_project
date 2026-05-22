// ==========================================
// BANCO DE PREGUNTAS MÚLTIPLES DEL TEST EQ (MODO ALEATORIO)
// ==========================================
const BANCO_PREGUNTAS = {
    1: [ // CATEGORÍA 1: Nuestra Relación
        {
            pregunta: "¿Cuál de las siguientes es la fecha correcta de nuestra boda?",
            opciones: ["21 de febrero de 2026", "29 de febrero de 2026", "2 de febrero de 2026", "29 de enero de 2026"],
            correcta: 0 
        },
        {
            pregunta: "¿Cómo solemos concluir los debates?",
            opciones: ["Investigamos en internet para saber quién tiene razón", "No tenemos debates, naturalmente", "Tú siempre tienes la razón y yo me deleito escuchándote", "Buscamos ayuda en foros y grupos de Facebook"],
            correcta: 2
        },
        {
            pregunta: "¿Cuándo empezamos a hablar?",
            opciones: ["El 8 de enero de 2026", "El 29 de enero de 2026", "El 29 de enero de 2025", "El 2 de febrero de 2026"],
            correcta: 1
        },
        {
            pregunta: "¿Cuáles de los siguiente gustos compartimos?",
            opciones: ["Las matemáticas y la mitología griega", "Las papas fritas y la pizza con piña :D", "La programación y los deportes", "Los musicales y la lectura"],
            correcta: 3
        },
        {
            pregunta: "¿En dónde nos conocimos, y por qué?",
            opciones: ["En una comunidad de WhatsApp, por una 'amiga' de ambos", "En un grupo raro de Telegram, por un video extraño", "En un grupo de WhatsApp, por una dinámica", "En la escuela de mi hermano, por una reunión de acudientes"],
            correcta: 0
        },
        {
            pregunta: "¿De qué forma y tamaño era la piedra que te regalé?",
            opciones: ["Era un óvalo deforme grande", "Era un piedra, yo qué sé :v", "Era un triángulo/pirámide pequeño", "Era como un plato mediano"],
            correcta: 2
        },
        {
            pregunta: "¿Cuáles de estas canciones usaremos en nuestra próxima boda?",
            opciones: ["La canción de amor entre Verónica y su novio, de Heathers", "La canción de amor entre Orfeo y Eurídice, y Hades y Perséfone, de Hadestown", "Nuestras canciones favoritas de Mäneskin y Vicente Fernández", "La canción de Penélope cuando Odiseo ya casi llega a Ítaca, de Epic"],
            correcta: 1
        },
        {
            pregunta: "¿Qué hacemos de seguido para sentirnos más cerca uno del otro?",
            opciones: ["Crear peluches de tamaño real con nuestras caras", "Mandarnos videos y fotos de animales adorables", "Videollamadas de horas enteras (incluso sin decir una sola palabra)", "Ir a un parque y observar el paisaje imaginando la compañía del otro"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es la más grande diferencia entre las otras relaciones y la nuestra?",
            opciones: ["Nosotros somos adultos que juegan a ser niños", "Las otras relaciones no son relaciones a distancia", "Las otras personas sí se han podido besar", "Las otras parejas no se ven a diario"],
            correcta: 0
        },
        {
            pregunta: "¿Cómo solemos arreglar los problemas?",
            opciones: ["Alejándonos y hablando con nuestros amigos", "Discutiendo y priorizando nuestras propias opiniones", "Cantando y bailando salsa juntos", "Con comunicación asertiva y comprensión mutua"],
            correcta: 3
        },
        {
            pregunta: "Al principio, ¿por qué me enamoré perdidamente de ti?",
            opciones: ["Porque eres cariñosa y dulce", "Porque eres dominante-posesiva", "Porque tienes dinero y familia importante", "Porque eres hermosa y muy atractiva"],
            correcta: 1
        },
        {
            pregunta: "¿Qué juramento es el más importante que hemos hecho?",
            opciones: ["Abrazarnos todos los días y cada vez que nos encontremos", "Vivir con nuestros padres todos en una misma casa", "Estar siempre juntos, en las buenas y en las malas", "Vernos lo más pronto posible, aunque sea un día"],
            correcta: 2
        },
        {
            pregunta: "¿Cuándo hicimos nuestro noviazgo oficial?",
            opciones: ["El 2 de febrero de 2026", "El 31 de enero de 2026", "El 2 de febrero de 2025", "El 29 de enero de 2026"],
            correcta: 0
        },
        {
            pregunta: "El día siguiente de nuestra primera conversación, ¿qué pasó?",
            opciones: ["Yo estuve en una fiesta y tú en casa", "Los dos estuvimos en nuestras casas", "Nos pusimos a jugar Hollow Knight", "Tú fuiste a clases y yo te ayudé con una tarea"],
            correcta: 3
        },
        {
            pregunta: "¿Dónde dijimos que viviremos juntos?",
            opciones: ["En Perú :O", "En Canadá", "En tu país", "En mi país"],
            correcta: 1
        }
    ],
    2: [ // CATEGORÍA 2: Sobre Mí
        {
            pregunta: "¿Cuál de estos instrumentos sé tocar?",
            opciones: ["El violín, el chelo y la caja", "El piano y la guitarra", "La flauta dulce y la guitarra", "El xilófono, la guitarra y la trompeta"],
            correcta: 2
        },
        {
            pregunta: "¿Cuáles son mis colores favoritos?",
            opciones: ["Negro y blanco", "Rojo y blanco", "Verde y azul", "Gris y amarillo"],
            correcta: 0
        },
        {
            pregunta: "¿Qué es lo que más valoro de mi relación contigo?",
            opciones: ["Las llamadas y los regalos que nos damos", "Lo que aprendo gracias a ti a diario", "Los momentos de alegría y tranquilidad", "El cariño y la atención que me das"],
            correcta: 1
        },
        {
            pregunta: "¿Cuáles son los únicos dos amigos tuyos que me caen bien?",
            opciones: ["Yuli y Luz", "Argenis y Lim", "Nao y María", "Neto y Sebastián"],
            correcta: 3
        },
        {
            pregunta: "De las siguientes ¿cuál es mi flor favorita?",
            opciones: ["Las buganvillas", "Las rosas", "La flor de cactus", "Las flor delicada :v"],
            correcta: 2
        },
        {
            pregunta: "¿Qué es lo que más me da celos?",
            opciones: ["Que tus exnovios se relacionen contigo de alguna forma", "Que tus amigas te abracen", "Que le digas cosas lindas a los niños", "Que un hombre cualquiera hable contigo"],
            correcta: 0
        },
        {
            pregunta: "¿Cuál de las siguientes cosas es una de las que tengo en mi chat personal?",
            opciones: ["Tus presentaciones de la comunidad", "Todas son correctas", "Libros de mitología griega", "Los audios que me has mandado"],
            correcta: 1
        },
        {
            pregunta: "En la siguiente escala, ¿qué tan raro soy?",
            opciones: ["Un poco nada más", "Muy raro", "Bastante raro", "INFINITAMENTE RARO"],
            correcta: 3
        },
        {
            pregunta: "¿Cuáles son los apodos que más suelo usar contigo?",
            opciones: ["'Amor' y 'Cosita'", "'Mika' y 'Niña'", "'Amor' y 'Princesa'", "'Cariño' y 'Dulzura'"],
            correcta: 2
        },
        {
            pregunta: "¿Qué es lo más importante para mí en mi vida personal (sacándote a ti de la ecuación)?",
            opciones: ["Mi espacio y mi privacidad", "Mi celular y mi computadora", "Mis juegos y mi habitación", "Mi familia y mis amigos"],
            correcta: 0
        },
        {
            pregunta: "¿Qué tipo de música me gusta más?",
            opciones: ["Rock alternativo", "No sé, we; si suena bien va pa’ la playlist", "Indie pop", "Música triste"],
            correcta: 1
        },
        {
            pregunta: "¿Cuál de los siguientes es uno de mis lugares favoritos?",
            opciones: ["La cocina", "Una biblioteca", "Tu compañía", "El SENA"],
            correcta: 2
        },
        {
            pregunta: "¿Cuál es mi juego favorito?",
            opciones: ["Hollow Knight", "Todas son correctas", "FNAF", "Ajedrez"],
            correcta: 0
        },
        {
            pregunta: "¿Qué es lo que más me gusta de ti?",
            opciones: ["Tu voz tierna", "Tus piernas hermosas", "Tus ojos cafés", "Tu figura sexy"],
            correcta: 1
        },
        {
            pregunta: "⚠️ [PREGUNTA ANÓMALA]: Si una caja fuerte digital requiriera un código de sincronización para abrir un regalo secreto, ¿de cuántos dígitos numéricos exactos estaríamos hablando?",
            opciones: ["De 4 dígitos, como una tarjeta de crédito", "De 6 dígitos exactos (un PIN de fecha crucial)", "De 8 dígitos con letras mayúsculas", "De 10 dígitos como un número telefónico"],
            correcta: 1
        }
    ]
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

// PROCESADOR DE RESULTADOS FINALES ACTUALIZADO (RANGOS)
function finalizarCuestionarioYMostrarResultados() {
    quizWrapper.classList.add('hidden');
    progressBar.style.width = "100%"; 
    resultsWrapper.classList.remove('hidden');
    resultsWrapper.classList.add('fade-in');
    
    const totalPreguntasDeCategoria = BANCO_PREGUNTAS[categoriaActiva].length;
    resultScoreDigits.innerText = `${respuestasCorrectasAcumuladas}/${totalPreguntasDeCategoria}`;
    
    let feedback = "";
    let emoji = "🎉";
    
    // Evaluamos rangos de respuesta en lugar de números fijos
    if (respuestasCorrectasAcumuladas === totalPreguntasDeCategoria) {
        // Puntaje Perfecto (15/15)
        emoji = "🏆";
        feedback = "¡Perfecto! Eres una experta en nuestra historia, mi amor. ¡No hay duda de que eres la mejor! 💖";
    } else if (respuestasCorrectasAcumuladas >= 11) {
        // Puntaje Alto (11 a 14)
        emoji = "👑";
        feedback = "¡Increíble! Sabía que lo lograrías <3. Eres oficialmente la dueña absoluta de mi corazón y mi mente.";
    } else if (respuestasCorrectasAcumuladas >= 6) {
        // Puntaje Medio (6 a 10)
        emoji = "✨";
        feedback = "Ey, lo hiciste bien :3. Conoces gran parte de nuestra historia, preciosa.";
    } else if (respuestasCorrectasAcumuladas >= 1) {
        // Puntaje Bajo (1 a 5)
        emoji = "🙃";
        feedback = "Buena suerte para la próxima, mi amor. ¡Sé que puedes mejorar esta nota! 💖";
    } else {
        // Puntaje Cero (0 aciertos)
        emoji = "🥀";
        feedback = "Mmmm... Parece que estuviste distraída, mi niña. ¡Regresa cuando quieras volver a intentarlo! 😘";
    }
    
    resultEmoji.innerText = emoji;
    resultFeedbackText.innerText = feedback;
}