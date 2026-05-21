// --- GUARDIA DE RUTA SEGURA ---
// Si no existe el pase virtual en el navegador, expulsa al usuario al login en un milisegundo
if (sessionStorage.getItem('luna_sesion_activa') !== 'true') {
    window.location.href = "index.html";
}

// ==========================================
// FECHA OFICIAL ESTABLECIDA (2 de Febrero de 2026 - 11:03 AM)
// ==========================================
const FECHA_ANIVERSARIO = new Date(2026, 1, 2, 11, 3, 0); 

let secuenciaTeclado = ""; // Registra el truco secreto del huevo de pascua

// Ejecución automática: El reloj arranca inmediatamente al cargar el panel
actualizarRelojTiempoJuntos(); 
setInterval(actualizarRelojTiempoJuntos, 1000); 

// Control del botón de cierre de sistema
document.getElementById('btn-salir').addEventListener('click', function() {
    // Destruye el pase de abordaje para que no pueda volver a entrar dándole "atrás" en el navegador
    sessionStorage.removeItem('luna_sesion_activa');
    const logoutModal = document.getElementById('logout-modal');
    logoutModal.classList.remove('hidden');
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 2500);
});

// ==========================================
// ALGORITMO DE CALENDARIO REAL (PRECISIÓN ABSOLUTA)
// ==========================================
function actualizarRelojTiempoJuntos() {
    const ahora = new Date(); // Hora actual exacta del sistema de ella
    
    // Extraemos la diferencia directa en componentes de calendario puros
    let anios = ahora.getFullYear() - FECHA_ANIVERSARIO.getFullYear();
    let meses = ahora.getMonth() - FECHA_ANIVERSARIO.getMonth();
    let dias = ahora.getDate() - FECHA_ANIVERSARIO.getDate();
    let horas = ahora.getHours() - FECHA_ANIVERSARIO.getHours();
    let minutos = ahora.getMinutes() - FECHA_ANIVERSARIO.getMinutes();
    let segundos = ahora.getSeconds() - FECHA_ANIVERSARIO.getSeconds();
    
    // --- MANEJO DE PRÉSTAMOS MATEMÁTICOS PARA EVITAR NEGATIVOS ---
    
    // 1. Ajuste de Segundos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    // 2. Ajuste de Minutos
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    // 3. Ajuste de Horas
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    // 4. Ajuste de Días (Calcula cuántos días reales tuvo el mes anterior del calendario)
    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }
    // 5. Ajuste de Meses
    if (meses < 0) {
        meses += 12;
        anios--;
    }
    
    // Control de seguridad global
    if (anios < 0) anios = meses = dias = horas = minutos = segundos = 0;

    // Inyección en tiempo real en el HTML
    document.getElementById('calc-years').innerText = anios;
    document.getElementById('calc-months').innerText = meses;
    document.getElementById('calc-days').innerText = dias;
    document.getElementById('calc-hours').innerText = horas;
    document.getElementById('calc-minutes').innerText = minutos;
    document.getElementById('calc-seconds').innerText = segundos;
}

// ==========================================
// HUEVO DE PASCUA (020226) - MODAL MULTIMEDIA
// ==========================================
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        secuenciaTeclado += event.key;
        if (secuenciaTeclado.length > 6) {
            secuenciaTeclado = secuenciaTeclado.substring(secuenciaTeclado.length - 6);
        }
        if (secuenciaTeclado === "020226") {
            secuenciaTeclado = "";
            document.getElementById('easter-egg-modal').classList.remove('hidden');
        }
    }
});

// Cerrar el modal del Easter Egg
document.getElementById('close-easter-egg').addEventListener('click', () => {
    document.getElementById('easter-egg-modal').classList.add('hidden');
});

// Capturamos las dos piezas nuevas
const triggerHuevo = document.getElementById('trigger-huevo');
const inputFantasma = document.getElementById('input-huevo-fantasma');

// Cuando toque el corazón en la tablet, invocamos el teclado virtual
triggerHuevo.addEventListener('click', () => {
    inputFantasma.focus();
});

// Escuchamos lo que digita dentro del input fantasma
inputFantasma.addEventListener('input', (e) => {
    let valor = e.target.value;
    
    // Si digita el código correcto
    if (valor.includes("020226")) {
        inputFantasma.value = ""; // Limpiamos
        inputFantasma.blur();        // Oculta el teclado de la tablet automáticamente
        document.getElementById('easter-egg-modal').classList.remove('hidden'); // Abre tu modal premium
    }
});