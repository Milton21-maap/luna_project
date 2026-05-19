// ==========================================
// BASE DE DATOS ESTRUCTURADA DE PREGUNTAS Y RESPUESTAS (Q&A)
// ==========================================
const CATEGORIAS_QYA = {
    1: {
        titulo: "Intimidad", icono: "🔥",
        urlFormulario: "ENLACE_GOOGLE_FORM_INTIMIDAD_AQUI",
        preguntas: [
            { q: "¿Pregunta 1 de intimidad?", a: "Respuesta 1..." },
            { q: "¿Pregunta 2 de intimidad?", a: "Respuesta 2..." }
        ]
    },
    2: {
        titulo: "Personalidad", icono: "🧩",
        urlFormulario: "ENLACE_GOOGLE_FORM_PERSONALIDAD_AQUI",
        preguntas: [
            { q: "¿Pregunta 1 de personalidad?", a: "Respuesta 1..." }
        ]
    },
    3: {
        titulo: "Lenguaje de Amor", icono: "💌",
        urlFormulario: "ENLACE_GOOGLE_FORM_LENGUAJE_AQUI",
        preguntas: [
            { q: "¿Pregunta 1 de lenguaje de amor?", a: "Respuesta 1..." }
        ]
    },
    4: {
        titulo: "Amistad y Terceros", icono: "👯‍♀️",
        urlFormulario: "ENLACE_GOOGLE_FORM_AMISTAD_AQUI",
        preguntas: [
            { q: "¿Pregunta 1 sobre amistades?", a: "Respuesta 1..." }
        ]
    },
    5: {
        titulo: "Gustos y Disgustos", icono: "🍕",
        urlFormulario: "ENLACE_GOOGLE_FORM_GUSTOS_AQUI",
        preguntas: [
            { q: "¿Pregunta 1 sobre gustos?", a: "Respuesta 1..." }
        ]
    },
    6: {
        titulo: "Historia", icono: "🕰️",
        urlFormulario: "ENLACE_GOOGLE_FORM_HISTORIA_AQUI",
        preguntas: [
            { q: "¿Pregunta 1 sobre historia?", a: "Respuesta 1..." }
        ]
    },
    7: {
        titulo: "Autopercepción", icono: "🪞",
        urlFormulario: "ENLACE_GOOGLE_FORM_AUTOPERCEPCION_AQUI",
        preguntas: [
            { q: "¿Pregunta 1 sobre autopercepción?", a: "Respuesta 1..." },
            { q: "💡 [PISTA FINAL]: ¿Pregunta codificada del huevo de pascua?", a: "Aquí escondes la clave para hallar el 020226 XP" }
        ]
    },
    8: {
        titulo: "Sobre L.U.N.A.", icono: "💻",
        urlFormulario: "ENLACE_GOOGLE_FORM_LUNA_AQUI",
        preguntas: [
            { q: "¿Por qué decidiste crear este sistema para mí?", a: "Porque quería darte algo único... Un rincón digital que sea solo nuestro." },
            { q: "¿Cuánto tiempo te tomó programar todo esto?", a: "Fueron muchas tazas de café, horas peleando con código y cazando duendes (bugs)... Pero valió la pena." }
        ]
    }
};

// CONTROLES DE PANTALLA (DOM)
const cardPreguntasBtn = document.getElementById('btn-preguntas');
const gridMenuPrincipal = document.querySelector('.menu-grid');
const viewPreguntasSec = document.getElementById('view-preguntas');

const menuQyaWrapper = document.getElementById('preguntas-menu-wrapper');
const contentQyaWrapper = document.getElementById('preguntas-content-wrapper');
const gridCategoriasBox = document.getElementById('qya-categories-box');
const faqListContainer = document.getElementById('faq-list');

const qyaCategoryTitle = document.getElementById('qya-category-title');
const qyaFormLink = document.getElementById('qya-form-link');

// INICIALIZACIÓN: Crear los botones del menú de categorías
function inicializarMenuQYA() {
    gridCategoriasBox.innerHTML = "";
    
    // Recorremos el objeto CATEGORIAS_QYA para crear sus botones
    Object.keys(CATEGORIAS_QYA).forEach(id => {
        const cat = CATEGORIAS_QYA[id];
        const btn = document.createElement('button');
        btn.className = 'qya-cat-btn';
        btn.innerHTML = `<span>${cat.icono}</span> <span>${cat.titulo}</span>`;
        
        btn.addEventListener('click', () => {
            abrirCategoriaQYA(id);
        });
        
        gridCategoriasBox.appendChild(btn);
    });
}

// NAVEGACIÓN CENTRAL DEL MÓDULO
cardPreguntasBtn.addEventListener('click', () => {
    gridMenuPrincipal.classList.add('hidden');
    viewPreguntasSec.classList.remove('hidden');
    viewPreguntasSec.classList.add('fade-in');
    
    // Mostramos el menú y ocultamos el contenido
    contentQyaWrapper.classList.add('hidden');
    menuQyaWrapper.classList.remove('hidden');
    menuQyaWrapper.classList.add('fade-in');
    
    inicializarMenuQYA(); // Construimos el menú si no estaba hecho
});

document.getElementById('back-preguntas-to-menu').addEventListener('click', () => {
    viewPreguntasSec.classList.add('hidden');
    gridMenuPrincipal.classList.remove('hidden');
    gridMenuPrincipal.classList.add('fade-in');
});

document.getElementById('back-to-qya-menu').addEventListener('click', () => {
    contentQyaWrapper.classList.add('hidden');
    menuQyaWrapper.classList.remove('hidden');
    menuQyaWrapper.classList.add('fade-in');
});

// ABRIR UNA CATEGORÍA Y RENDERIZAR SU ACORDEÓN
function abrirCategoriaQYA(idCategoria) {
    const dataCategoria = CATEGORIAS_QYA[idCategoria];
    
    // Ocultar menú, mostrar contenido
    menuQyaWrapper.classList.add('hidden');
    contentQyaWrapper.classList.remove('hidden');
    contentQyaWrapper.classList.remove('fade-in');
    void contentQyaWrapper.offsetWidth; // Reflow
    contentQyaWrapper.classList.add('fade-in');
    
    // Cargar título y enlace de formulario
    qyaCategoryTitle.innerText = `${dataCategoria.icono} ${dataCategoria.titulo}`;
    qyaFormLink.href = dataCategoria.urlFormulario;
    
    // Construir el acordeón
    faqListContainer.innerHTML = "";
    
    dataCategoria.preguntas.forEach((item) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';

        const questionDiv = document.createElement('div');
        questionDiv.className = 'faq-question';
        questionDiv.innerHTML = `<span>${item.q}</span><span class="faq-icon">🔽</span>`;

        const answerDiv = document.createElement('div');
        answerDiv.className = 'faq-answer';
        answerDiv.innerHTML = `<p>${item.a}</p>`;

        questionDiv.addEventListener('click', () => {
            const estaActivo = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            if (!estaActivo) faqItem.classList.add('active');
        });

        faqItem.appendChild(questionDiv);
        faqItem.appendChild(answerDiv);
        faqListContainer.appendChild(faqItem);
    });
}