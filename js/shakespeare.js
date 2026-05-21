// ==========================================
// BASE DE DATOS LOCAL DE TU SHAKESPEARE PERSONAL
// ==========================================
// Milton: Limpié los prefijos "Poema Uno". Ahora puedes bautizar cada poema con su título real.
// Agregué la propiedad "imagen" para disparar el efecto de corte diagonal de fondo.
const MIS_POEMAS = [
    { 
        id: 1, 
        titulo: "Mi Regalo Para Ti", 
        imagen: "../assets/fondos/MiRegaloParaTi.jpg",
        texto: "&nbsp;&nbsp;&nbsp;&nbsp;<b>Te regalo la luna,</b><br>" +
               "pero no la que te observa a la distancia;<br>" +
               "te regalo la que será testigo<br>" +
               "de nuestras más oscuras noches.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;<b>Te regalo el sol,</b><br>" +
               "pero no el que ilumina tus días;<br>" +
               "te regalo el que hará brillar tu piel<br>" +
               "colándose por nuestras cortinas al rayar el alba.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Te regalo mi historia,<br>" +
               "pero no sólo los buenos cuentos;<br>" +
               "te regalo cada recuerdo y anécdota,<br>" +
               "cada cicatriz sin filtro alguno.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Te regalo cada parte de mí que aún no es tuya;<br>" +
               "<i>mi lealtad viene con el paquete.</i><br>" +
               "No pienses en el precio o esfuerzo que le precede,<br>" +
               "porque si es para ti sin duda lo vale;<br>" +
               "porque verte sonreír y saber que te hago feliz,<br>" +
               "tu alegría, hace parte de mi razón de vivir.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Te regalo interminables noches de pasión,<br>" +
               "pero en todo el sentido de la palabra;<br>" +
               "noches de besos y caricias picantes,<br>" +
               "noches de sábanas desordenadas,<br>" +
               "noches de abrazos reconfortantes,<br>" +
               "silencios, lágrimas y profunda nostalgia.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Te regalo sueños y deseos,<br>" +
               "te regalo mis hombros para que toques el cielo;<br>" +
               "te regalo mis brazos como apoyo o reposo<br>" +
               "para que tomes descanso y retomes el vuelo.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Te regalo euforia en los días locos, <br>alegría en los días buenos,<br>" +
               "amor infinito en los días malos<br>" +
               "y compañía en los inciertos.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Te regalo todo lo poco que tengo para darte<br>" +
               "y lo mucho que algún día te daré…<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Te regalo este poema y todos los otros que te escribiré después…<br><br>" +
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" + // Una línea punteada tierno estilo pergamino
               "<div style='text-align: right;'><small><i>-- 19 de mayo de 2026<br>-- De tu amado</i></small></div>"
    },
    { 
        id: 2, 
        titulo: "Mi Lugar Seguro", 
        imagen: "../assets/icons/poesia_icon.jpg",
        texto: "Texto de tu segundo poema...<br><br>Cada línea que escribas aquí se renderizará de forma hermosa en el papel digital marfil." 
    },
    { 
        id: 3, 
        titulo: "El Secreto", 
        imagen: "../assets/icons/poesia_icon.jpg",
        texto: "    Me pierdo en la profundidad de tus ojos,<br>" +
       "buscando el reflejo de un alma sincera...<br><br>" +
       
       "    <i>[ERROR_DE_SISTEMA: Línea fuera de compás]</i><br>" +
       "    <b>Si el secreto del portal deseas invocar,</b><br>" +
       "    <b>el latido del título lateral debes presionar.</b><br>" +
       "    <b>Busca el corazón carmesí que corona la bienvenida,</b><br>" +
       "    <b>y la caja fantasma de entrada será encendida.</b><br><br>" +
       
       "    Y vuelvo a encontrarte en mis sueños,<br>" +
       "    donde el tiempo no puede borrarnos..."
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
    renderText.innerHTML = poema.texto;           
}