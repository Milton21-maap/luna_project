// ==========================================
// BASE DE DATOS LOCAL DE TU SHAKESPEARE PERSONAL
// ==========================================
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
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" +
               "<div style='text-align: right;'><small><i>-- 18 de mayo de 2026<br>-- De tu amado</i></small></div>"
    },
    { 
        id: 2, 
        titulo: "Flor de Cactus", 
        imagen: "../assets/fondos/FlorDeCactus.jpg",
        texto: "&nbsp;&nbsp;&nbsp;&nbsp;Caminando un día cualquiera con destino desconocido,<br>" +
               "divisé un jardín hermoso al lado del camino;<br>" +
               "Era un paisaje pequeño, hermoso y colorido<br>" +
               "Donde el sol y la sombra eran mejores amigos.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Me quedé a observar caminando un día cualquiera,<br>" +
               "Y cayeron mis ojos en el verde de la hierba;<br>" +
               "Me caí hacia atrás de la enorme sorpresa<br>" +
               "De que las bellas flores serpientes escondieran.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Seguí con mi camino un día cualquiera<br>" +
               "y adelante vi un terreno caluroso, árido y soleado;<br>" +
               "No había insectos, mariposas ni abejas,<br>" +
               "Porque todo el espacio lo ocupaba la anaranjada arena.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Un día cualquiera me detuve a observar<br>" +
               "El pequeño desierto con el que me había cruzado<br>" +
               "Porque a la distancia claramente se podía notar<br>" +
               "Un cactus verde, alto, amplio y solitario.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Noté en el cactus un día cualquiera<br>" +
               "Un detalle que no pasaba desapercibido;<br>" +
               "Se trataba de una flor tan hermosa como un lirio,<br>" +
               "Rodeada de espinas y ante el sol descubierta.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Ese mismo día, ya no cualquiera,<br>" +
               "Conocí una flor como ninguna otra,<br>" +
               "No porque las otras se extinguieran,<br>" +
               "Sino porque brillaba aun estando sola.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Era una flor preciosa como un diamante<br>" +
               "Creciendo en un ambiente hostil y sofocante,<br>" +
               "Protegida y rodeada de una coraza punzante,<br>" +
               "Aislada en lo más alto del cactus errante.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;El sol le daba directo a sus delicados pétalos<br>" +
               "Y aun así ella lo recibía de lleno,<br>" +
               "Sola y plácida en medio del desierto<br>" +
               "Dando sombra al cactus entero.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Ese día cualquiera conocí una flor<br>" +
               "Que para ser ella misma no necesitaba invitación...<br>" +
               "Y aún en la más intensa situación<br>" +
               "Resaltaba incluso sin querer llamar la atención.<br><br>" +

               "&nbsp;&nbsp;&nbsp;&nbsp;Esa flor no era perfecta, pero no necesitaba serlo;<br>" +
               "Con su belleza era más que suficiente para provocarte celos,<br>" +
               "Y aún en los días calurosos, soleados y secos,<br>" +
               "Cuando el sol le golpea de lleno en los pétalos<br>" +
               "Y la arena se acumula para hacerla caer al suelo,<br>" +
               "Y la brisa se esconde y con ella el viento,<br>" +
               "Su hermosura es única en el mundo entero.<br><br>" +
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" +
               "<div style='text-align: right;'><small><i>-- 23 de mayo de 2026 <br>-- De tu fan N° 1</i></small></div>"
    },
    { 
        id: 3, 
        titulo: "Secreto", 
        imagen: "../assets/fondos/Secreto.jpg",
        texto: "&nbsp;&nbsp;&nbsp;&nbsp;Me fascinas, pero decírtelo me causa terror,<br>" +
               "mis manos tiemblan y las piernas me tambalean;<br>" +
               "dudo, pero los nervios me dicen que no es un error<br>" +
               "y el mundo entero se pinta de dorado marrón.<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;Te observo a hurtadillas buscando en tu mirada<br>" +
               "una señal de confirmación divina;<br>" +
               "que el cielo me diga que no es mentira,<br>" +
               "que sientes lo mismo que mi corazón maquina.<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;Te escribo cartas y te hago dibujos,<br>" +
               "te compro mil rosas de mil distintos colores,<br>" +
               "las deslizo bajo tu puerta a medianoche,<br>" +
               "y en la mañana las quito sin que tú lo notes.<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;<i>[ERROR_DE_SISTEMA: Línea fuera de compás]</i><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;<b>Si el secreto del portal deseas invocar,</b><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;<b>el latido del título lateral debes presionar.</b><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;<b>Busca el corazón carmesí que corona la bienvenida,</b><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;<b>y la caja fantasma de entrada será encendida.</b><br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;En mi mente tenemos dos hijos y una casa en el extranjero,<br>" +
               "en tu mundo ni siquiera notas lo que por ti siento;<br>" +
               "por las mañanas me levanto extrañando tu falso recuerdo<br>" +
               "y en la noche abrazando la almohada me acuesto.<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;Tú me observas y dices: “Te amo”,<br>" +
               "provocando en mi mente cortocircuito;<br>" +
               "te ríes con inocencia y me tomas de la mano,<br>" +
               "mientras observas extrañada cómo me derrito.<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;Por las madrugadas sin explicación me despierto<br>" +
               "observando tu imagen en la nada fija,<br>" +
               "y al dormirme de nuevo te encuentro en mis sueños<br>" +
               "disipando la soledad de mi alma vacía.<br><br>" +
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" +
               "<div style='text-align: right;'><small><i>-- 23 de mayo de 2026 <br>-- De tu futuro esposo</i></small></div>"
    },
    { 
        id: 4, 
        titulo: "Dibujo", 
        imagen: "../assets/fondos/Dibujo.jpg",
        texto: "&nbsp;&nbsp;&nbsp;&nbsp;Te haré un dibujo con estas manos exhaustas y sucias; te haré tan realista de mil formas distintas.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Te voy a retratar en figuras de diferentes maneras, y plasmaré en papel tu inigualable belleza mediante trazos delicados y suaves; con granos de café haré tus ojos, con chocolate tentador voy a colorear tu piel.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Tu nombre estará hecho de grafito, y con mi borrador delinearé tu hermosa silueta. A tu sombra pondré la luna y las estrellas en tu mirada; con líneas cortas haré tus cabellos, cada uno con detalle devoto a la realidad.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Tus manos cubriré con guantes, y tu piel con vestidos reales; cuando dibuje tus labios cambiaré el lápiz de inmediato, pues sería deshonra a tu recuerdo considerarlos iguales al resto de ti.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;En cuanto termine, nadie aparte de mí lo verá. Ni siquiera sabrás de su existencia, porque lo guardaré bajo mi almohada, y lo cubriré de mi perfume; al reverso escribiré 7 veces nuestros nombres, para que en mis sueños esté siempre tu imagen.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Te haré mil dibujos con estas manos exhaustas y sucias; los haré para que nuestro amor nunca se desvanezca, y cuando el lápiz se acabe y las hojas se arruguen compraré todas las papelerías del planeta.<br><br>" +
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" +
               "<div style='text-align: right;'><small><i>-- 24 de mayo de 2026 <br>-- De tu loco enamorado</i></small></div>"
    },
    { 
        id: 5, 
        titulo: "El Sentido de la Vida", 
        imagen: "../assets/fondos/ElSentidoDeLaVida.jpg",
        texto: "&nbsp;&nbsp;&nbsp;&nbsp;Un día estando yo lleno de preguntas viajé al pasado en busca de respuestas, a ver si las encontraba en las grandes mentes que alguna vez marcaron al mundo con su grandeza.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;En eso, me encontré por el camino con Aristóteles observando cómo las nubes se movían a lo largo del gran cielo.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;— “¿Cuál es el sentido de la vida?”, le pregunté sin mayores rodeos.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;— “La felicidad y la virtud”, me respondió sin apartar la vista de las nubes; “Sólo con acciones buenas le darás sentido a tu vida”, concluyó.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Seguí caminando y no tardé en encontrarme con Enrique VIII (un gobernante antiguo), a quien le hice la misma pregunta.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;— “El poder es el sentido de la vida; quien no es poderoso, no es nadie y su vida no tiene sentido alguno”.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Aterrado por su respuesta seguí caminando y encontrándome con varios otros personajes importantes y conocidos.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;“Proteger a los débiles es el sentido de la vida”, me dijo el “Che” Guevara; “Luchar por la patria, lo es realmente”, me dijo George Washington; “No, aceptar la vida es el verdadero sentido de la vida”, corrigió Zenón de Citio; “La familia es lo más importante”, dijo Dominic Toreto; “¡Patrañas!”, finalmente respondió Nietzsche, “La vida no tiene sentido” …<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Frustrado por no hallar una sola respuesta a mi duda existencial, volví al presente en busca de alguien que lograra dar con mi respuesta.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Acudí a la medicina, al derecho, a la matemática y a la religión… Ninguno pudo contestar… Fue entonces cuando mi abuelo se cruzó por mi camino y le hice la misma pregunta que ya había hecho mil veces antes:<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;— “Abuelo mío, no me falles tú también; le he preguntado a las mentes más brillantes que han pisado la tierra, he hablado con los hombres más temidos y poderosos, con las manos más nobles y altruistas y los pies más experimentados de la historia. Ningún ser humano o ciencia me ha podido dar la respuesta a mi pregunta. Así que dime tú, abuelo, ¿cuál es el sentido de la vida?”.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Una sonrisa de comprensión se dibujó en el rostro de mi abuelo, y una suave risa salió de su voz ya desgastada…<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;— “Me temo, hijo mío, que la respuesta que buscas, tampoco la tengo yo”, me contestó, acabando con mi ilusión; “Pero conozco alguien que sabe exactamente cuál es la respuesta y te la puede dar sin costo alguno”.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;— “¿Quién es esa persona, abuelo? Dime ya para ir a buscarlo de inmediato”, respondí con un último destello de esperanza renovada.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;— “Para encontrar tus respuestas, tendrás que seguir mis instrucciones al pie de la letra, sin saltarte ni un solo paso”, levantó un dedo para centrar mi atención en él. “Así que escucha bien… Esta persona es muy tímida y se la pasa muy ocupada, tanto que nadie puede verlo en ningún momento del día. Tendrás que estar en tu habitación a oscuras, sin distracciones y completamente solo, con un espejo delante tuyo; permanece atento y no te quedes dormido, porque de lo contrario jamás lo encontrarás.”<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Y así lo hice sin saltarme ningún paso… Sin embargo, pasaban las horas, los minutos o segundos; el tiempo se estiró y el aburrimiento me acompañó hasta el final, y jamás vi al sujeto que respondería mi pregunta.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Fue entonces cuando encendí la luz, con el ceño fruncido por la frustración debido al tiempo perdido, y al verme al espejo una vez más entendí de inmediato en dónde se hallaba mi respuesta.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Recibí entonces tu mensaje diciendo: “Te amo”, sin razón alguna, y llegué a la conclusión de que eres tú lo que le da sentido a mi vida…<br><br>" +
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" +
               "<div style='text-align: right;'><small><i>-- 24 de mayo de 2026 <br>-- De tu poeta personal</i></small></div>"
    },
    { 
        id: 6, 
        titulo: "Amor de Loco", 
        imagen: "../assets/fondos/AmorDeLoco.jpg",
        texto: "&nbsp;&nbsp;&nbsp;&nbsp;Si tuviera que decirte cuánto te amo lo haría de varias formas distintas.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Para decirte que te amo, sería tu poeta personal. Te escribiría historias de amor y desamor, todas tendrían tu imagen en alguna que otra parte y la dedicatoria inicial siempre tendría tu nombre y apellido; así todo el mundo sabría que escribo esos cuentos para ti.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Publicaría novelas en tu nombre, te escribiría incontables poemas y crearía universos enteros para ti, hechos de papel, tinta y sentimientos… Escribiría para decirte que te amo.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Para decirte que te amo, sería el Picasso de tu vida. Te haría dibujos sin razón alguna; te daría cartas raras y mal hechas, pero llenas de mi esfuerzo y amor; podría dibujarte gatos, aves, serpientes e historias. Todos te los daría si los quisieras aceptar, y los guardaría para no repetirlos jamás… Dibujaría para decirte que te amo.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Para decirte que te amo, sería tu ayudante y confidente. Haría tus tareas y te desearía un gran día. Lo que no te gusta hacer lo haría yo por ti; llevaría tu bolso y escribiría tus apuntes. Te compraría libros y pequeños regalos. Escucharía tus problemas en los días malos, te llevaría cargada cuando se cansen tus pies, te llevaría a mi cuarto cuando te gane el estrés… Te dedicaría mi vida para decirte que te amo.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Para decirte que te amo, me quedaría contigo. Te amaría con fervor en los días soleados; por los caminos buenos y tranquilos correría y reiría contigo. Pero también te amaría en silencio en los días malos; tomaría tu mano en los caminos nublados, la sostendría con firmeza incluso si tropezamos. Si caes te sostengo con todas mis fuerzas, si caemos ambos me levanto contigo… Te amaría, te perdonaría y te vería crecer para decirte que te amo.<br><br>" +
               "&nbsp;&nbsp;&nbsp;&nbsp;Para decirte que te amo te lo diría de frente… En lugar de mirar tus fotos pegadas en mi armario, o de abrazar la almohada pensando que te abrazo, o de mirar el techo deseando estar a tu lado… Estaría a tu lado para decirte que te amo… Pero como no puedo estarlo, tendré que crearte un sitio web para demostrar que te amo.<br><br>" +
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" +
               "<div style='text-align: right;'><small><i>-- 25 de mayo de 2026 <br>-- De tu loco enamorado</i></small></div>"
    },
    { 
        id: 7, 
        titulo: "Mátame", 
        imagen: "../assets/fondos/Matame.jpg",
        texto: "&nbsp;&nbsp;&nbsp;&nbsp;Acaba conmigo, pero de la forma linda,<br>" +
               "no me mates con tu abandono y distancia;<br>" +
               "mátame con un amor tan intenso y real<br>" +
               "como la luz del sol directo en las pupilas.<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;Quémame en el fuego de tus celos,<br>" +
               "asfíxiame en el abrazo de tu presencia.<br>" +
               "Llévame a tu cuarto amordazado por completo<br>" +
               "y enciérrame en tu armario sin aviso previo.<br>" +
               "Cuando vuelvas aliméntame con incontables besos<br>" +
               "y dame a beber cada gota de ti como si fuera agua.<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;Mátame, pero con tus suaves caricias,<br>" +
               "que sean tantas que me canse al final del día;<br>" +
               "vuélveme adicto a tu cercanía a la fuerza<br>" +
               "para que también me mate el golpe de tu ausencia<br>" +
               "y mi vida se torne gris en cuanto te des la vuelta.<br>" +
               "Deseo necesitarte para sentirme completo<br>" +
               "y que mi alegría se marche contigo de la mano…<br><br>" +
               
               "&nbsp;&nbsp;&nbsp;&nbsp;Mátame de ti, porque de amor ya no puedo morir…<br><br>" +
               "<hr style='border:none; border-top:1px dashed #c9b68d; margin:15px 0;'>" +
               "<div style='text-align: right;'><small><i>-- 25 de mayo de 2026 <br>-- De tu peqqueño inmaduro</i></small></div>"
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