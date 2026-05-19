// ==========================================
// BASE DE DATOS LOCAL DE TU SHAKESPEARE PERSONAL
// ==========================================
// Milton: Limpié los prefijos "Poema Uno". Ahora puedes bautizar cada poema con su título real.
// Agregué la propiedad "imagen" para disparar el efecto de corte diagonal de fondo.
const MIS_POEMAS = [
    { 
        id: 1, 
        titulo: "Tu Mirada", 
        imagen: "../assets/icons/poesia_icon.jpg",
        texto: "Aquí va el texto completo de tu primer poema...\nEscribe con libertad, usa '\\n' si necesitas forzar un espacio manual,\naunque el CSS ya leerá tus renglones de forma nativa. ❤️" 
    },
    { 
        id: 2, 
        titulo: "Mi Lugar Seguro", 
        imagen: "../assets/icons/poesia_icon.jpg",
        texto: "Texto de tu segundo poema...\n\nCada línea que escribas aquí se renderizará de forma hermosa en el papel digital marfil." 
    },
    { 
        id: 3, 
        titulo: "El Secreto", 
        imagen: "../assets/icons/poesia_icon.jpg",
        texto: "Milton, de acuerdo con tu algoritmo base (.psc),\naquí puedes esconder la PRIMERA PISTA crucial\npara que ella deduzca el código de la opción oculta (020226). 😉" //
    },
    { 
        id: 4, 
        titulo: "Instantes", 
        imagen: "../assets/icons/poesia_icon.jpg",
        texto: "Texto del cuarto poema dedicado para HarliMorfa..." 
    },
    { 
        id: 5, 
        titulo: "Eternidad", 
        imagen: "../assets/icons/poesia_icon.jpg",
        texto: "Texto del quinto poema quemado para la fase estructural inicial."
    }
];

// CAPTURA DE ELEMENTOS (DOM)
const cardShakespeare = document.getElementById('btn-shakespeare');
const mainGridMenu = document.querySelector('.menu-grid');
const viewShakespeare = document.getElementById('view-shakespeare');

const backToMenuBtn = document.getElementById('back-to-menu');
const backToListBtn = document.getElementById('back-to-list');

const listWrapper = document.getElementById('poetry-list-wrapper');
const readerWrapper = document.getElementById('poetry-reader-wrapper');
const dynamicListContainer = document.getElementById('dynamic-poems-list');

const renderTitle = document.getElementById('poem-render-title');
const renderText = document.getElementById('poem-render-text');

// ==========================================
// SISTEMA DE NAVEGACIÓN CON TRANSICIÓN SUAVE
// ==========================================

cardShakespeare.addEventListener('click', function() {
    mainGridMenu.classList.add('hidden');       
    viewShakespeare.classList.remove('hidden'); 
    viewShakespeare.classList.add('fade-in'); // Suaviza la transición menú -> lista
    renderPoemsList();                         
});

backToMenuBtn.addEventListener('click', function() {
    viewShakespeare.classList.add('hidden');
    viewShakespeare.classList.remove('fade-in');
    mainGridMenu.classList.remove('hidden');    
    mainGridMenu.classList.add('fade-in'); // Suaviza el regreso al menú principal
});

backToListBtn.addEventListener('click', function() {
    readerWrapper.classList.add('hidden');     
    readerWrapper.classList.remove('fade-in');
    listWrapper.classList.remove('hidden');    
    listWrapper.classList.add('fade-in'); // Suaviza el regreso lector -> lista
});

// ==========================================
// FUNCIÓN CENTRAL: RENDERIZADO ASIMÉTRICO
// ==========================================
function renderPoemsList() {
    dynamicListContainer.innerHTML = ""; 
    
    MIS_POEMAS.forEach((poema) => {
        const itemBtn = document.createElement('div');
        itemBtn.className = "poem-item-btn";
        
        // Inyectamos la imagen correspondiente en la variable interna del CSS
        itemBtn.setAttribute('style', `--poem-bg: url('${poema.imagen}');`);
        
        // RESTRUCTURADO: Eliminamos la etiqueta del número de poema para limpiar el layout
        itemBtn.innerHTML = `<span>${poema.titulo}</span>`;
        
        itemBtn.addEventListener('click', function() {
            openPoemReader(poema); 
        });
        
        dynamicListContainer.appendChild(itemBtn);
    });
}

function openPoemReader(poema) {
    listWrapper.classList.add('hidden');          
    listWrapper.classList.remove('fade-in');
    readerWrapper.classList.remove('hidden');     
    readerWrapper.classList.add('fade-in'); // Suaviza la transición lista -> lector
    
    renderTitle.innerText = poema.titulo;         
    renderText.innerText = poema.texto;           
}