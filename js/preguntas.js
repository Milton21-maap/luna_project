// ==========================================
// BASE DE DATOS ESTRUCTURADA DE PREGUNTAS Y RESPUESTAS (Q&A)
// ==========================================
const CATEGORIAS_QYA = {
    1: {
        titulo: "Intimidad", icono: "🔥",
        urlFormulario: "https://forms.gle/XQ4XFapWPtRp68Qz6",
        preguntas: [
            { q: "¿Qué pienso sobre nuestro futuro cuando sonrío a solas?", a: "El sueño que más me hace ilusión sobre nuestra vida juntos es ver crecer a nuestros hijos en un hogar sano y lleno de amor... De verdad me encantaría ser el mejor padre y esposo que pueda ser." },
            { q: "¿Cuándo descubrí que podía ser yo mismo en tu presencia?", a: "En cuanto te reíste de las pendejadas que hacía o decía, en lugar de juzgarme, me hiciste sentir aceptado tal como soy... Entonces, me di cuenta de que podía ser auténtico sin miedo." },
            { q: "¿Qué gesto tuyo me desarma cuando aparecen los celos?", a: "Sé que celoso suelo ser muy obstinado y terco, pero cuando me miras fijamente, me lanzas un beso y sonríes con satisfacción me desarmas completamente." },
            { q: "¿Qué es lo que más amo de nuestra dinámica de roles?", a: "¿Sabes? Me encanta cómo nos complementamos de diferentes maneras; cuando me siento mal o nervioso, tú sabes bien cómo tratarme para hacer de una situación incómoda un momento de conexión profunda." },
            { q: "¿Qué pienso de ti cuando te quedas dormida en videollamada?", a: "No puedo evitar verte por minutos que parecen eternos y efímeros a la vez, y pensar en lo hermosa, maravillosa, delicada y frágil que luces durmiendo plácidamente." },
            { q: "¿Qué miedo profundo superé por completo gracias a ti?", a: "Sé que sonará raro, pero tú me enseñaste que el futuro no tiene por qué aterrarme tanto, y que mis sueños, por más desafiantes que parezcan, a tu lado se vuelven posibles... <br>Gracias por permitirme soñar con libertad y seguridad." },
            { q: "¿Qué significa 'amor maduro' desde que te conozco?", a: "Eres la primera persona con la que puedo ser infantil y maduro al mismo tiempo, sin miedo al rechazo. Contigo, amar significa celarnos, hacer berrinches, decir pendejadas y reírnos de idioteces; pero también significa confianza, comprensión y correpondencia.<br>Sé que a veces los dos podemos ser impacientes y requerir algo de espacio y silencio para autoregularnos, pero contigo aprendí que la distancia (no por castigo) también hace parte del amor maduro." },
            { q: "¿Qué plan a futuro me emociona más construir contigo?", a: "Espero con ansias el día en el que nos podamos encontrar por primera vez, pero mi mayor sueño a tu lado es vivir en la casa de nuestros sueños, tener los hijos que queramos, criarlos de la forma en la que nunca lo hicieron nuestros padres y amarnos cada día más fuerte que el anterior, incluso cuando las cosas se complican y parecen no tener solución." },
            { q: "¿Qué parte de mis pensamientos es tuya por completo?", a: "Mi mente, desde que te conozco, se divide en dos partes: la que está ocupada con los oficios, las tareas, mis pasatiempos y lo demás de mi día a día; y luego está la que te tiene presente incluso cuando la otra tiene el control... <br>sIncluso estando ocupado me pregunto en qué estarás pensando, qué estarás haciendo, cómo te estarás sintiendo, en dónde estarás, y muchas otras preguntas más. No exagero cuando digo que me tienes enfermo de ti, y a la vez eres mi única cura." },
            { q: "¿Qué secreto nunca le conté a nadie excepto a ti?", a: "Mi forma de ser y mis pensamientos; Nadie me conoce tan bien como tú lo haces, porque a nadie más le he confiado mis miedos, mis debilidades, mis sueños, mis metas, mis pensamientos o mis sentimientos reales y sin filtros. <br>Confío plenamente en ti, y sé que, aunque diga estupideces sin sentido, serás capaz de comprenderme y aún así amarme tal cual soy, sin juicios ni condiciones." }
        ]
    },
    2: {
        titulo: "Personalidad", icono: "🧩",
        urlFormulario: "https://forms.gle/gsybkq2ei61w8RVp9",
        preguntas: [
            { q: "¿Cuál es nuestra mayor diferencia y cómo nos complementa?", a: "Aunque somos muy parecidos en varios aspectos, los dos sabemos bien que sómos diferentes en esencia (como todos en el mundo); eres más sociable que yo, y tienes un círculo de amigos más amplio mientras que yo apenas salgo de casa. Eso, aunque nos haga un tanto diferentes, nos permite ser el dúo perfecto en un ámbito social." },
            { q: "¿Qué es lo que más me cautiva de tu lado reservado?", a: "Ya sabes que, en una relación, no me gusta la distancia ni la frialdad, pero contigo es diferente; hay algo en tu silencio que me resulta irresistible. <br>Es algo que no logro descifrar, y eso me impulsa a querer descubrirlo y buscar tu lado cariñoso cada día con más desespero... Es casi como si necesitara resolver un hermoso enigma que lleva tu nombre." },
            { q: "¿Cuál es tu faceta 'infantil' que más me enamora?", a: "Me fascina cuando te comportas como una niña, dices cosas que no tienen mucho sentido, tu voz se vuelve más dulce y juguetona y, por un momento, haces que el mundo se limite a verte sonreír con esa inocencia que tanto amo ver en tu rostro... <br>Me encanta esa niña que guardas en tu interior... Quiero cuidarla con todas mis fuerzas." },
            { q: "¿Cómo siento que cambia tu forma de ser cuando estamos a solas?", a: "Últimamente he notado que, cuando por fin llegas a casa luego de un largo día de clases, lejos del resto del mundo, te acercas más, eres más abierta y correspondes a mis gestos con mayor intensidad. Quizás es porque entonces no hay nada ni nadie que nos distraiga, o quizás porque buscas un lugar donde puedas ser tú misma y respirar un poco... <br>Sea cual sea el motivo, quiero pedirte perdón por todas esas veces en las que no te he dado el espacio seguro y amoroso que necesitas." },
            { q: "¿Qué cualidad o fortaleza tuya admiro en secreto?", a: "Sé que no te lo he dicho antes, pero si hay algo de ti que siempre me sorprende es tu capacidad de perdonar y amar aún con más intensidad que antes... <br>Te he fallado muchas veces, y ambos lo sabemos; no he sido el mejor novio y en incontables ocasiones te he dicho y hecho cosas que me hacen odiarme a mí mismo... Y aún así me amas, sin juicios ni rencores. Gracias a ti puedo decir con seguridad que conocí lo que es el amor verdadero y real." },
            { q: "¿En qué momentos siento que nos equilibramos a la perfección?", a: "Cuando yo me siento mal, insuficiente, inseguro, cansado, triste, enojado, celoso... Siempre, sin importar cómo me sienta, sabes exactamente qué decir o cómo actuar para hacerme sentir mejor. <br>Eres la única persona que puede cambiar mi estado de ánimo en cuestión de segundos y de las formas más inesperadas, hermosas y sencillas posibles." },
            { q: "¿Qué parte de mi forma de ser ha mejorado gracias a ti?", a: "Gracias a ti me esfuerzo más que nunca para ser la mejor versión de mí mismo, y eso me llena de orgullo y satisfacción. Eres lo mejor que me ha pasado; mi mejor momento, y la mejor mujer con la que me pude encontrar... <br>No podría imaginar mi vida sin ti; aunque suene tóxico y poco sano, eres lo que me hace sentir vivo y me motiva a ser mejor cada día." },
            { q: "Si fueras un elemento de la naturaleza, ¿cuál serías?", a: "A ver, si tuviera que responder, serías agua; te adaptas a cualquier situación, cambias pero no pierdes tu esencia, puedes ser dura y fría con quien debes, pero también puedes ser un trago refrescante para quienes te merecen. Soy el hombre más afortunado del mundo por conocer estas pequeñas partes de ti." },
            { q: "¿Cuál es tu costumbre o rareza que más me fascina?", a: "Me gusta mucho el amor que tienes hacia los niños y los bebés. No es algo que se encuentre en todas las personas, así que me encanta que seas así... <br>Me pregunto si me vas a corregir cuando por un momento me olvide de mi promesa de ser el mejor padre." },
            { q: "¿Cómo logramos que nuestras inseguridades nos unan más?", a: "Lo he notado, y es algo digno de admiración: cuando siento que no soy suficiente, o que no me veo bien, o que estoy haciendo las cosas mal, siempre tienes las palabras adecuadas para dejarme sin argumentos y enseñarme la belleza detrás de mi imperfección." }
        ]
    },
    3: {
        titulo: "Lenguaje de Amor", icono: "💌",
        urlFormulario: "https://forms.gle/JzNVdCT9Eq8PCHZL7",
        preguntas: [
            { q: "¿Qué siento realmente cuando me bromeas o 'insultas'?", a: "Cuando sales con tus insultos extravagantes y tus burlas infantiles, no me siento ofendido ni señalado; por el contrario, me divierte y me haces reír también. Sin embargo, debo admitir que muchas veces no sé qué decir al respecto, así que simplemente me río y te miro con cariño." },
            { q: "¿Cómo prefiero que me acompañes en mis días grises?", a: "Valoro mucho mi espacio personal y mi tiempo a solas, pero desde que te tengo no he querido apartarme de tu lado... Ahora, cada vez que me siento mal, sin darme cuenta me la paso buscando tu consuelo y apoyo. <br>No siempre tengo ganas de hablar, pero tampoco hay momento en el que desee apartarme de ti." },
            { q: "¿Con qué regalo sentí que le atiné a tu corazón?", a: "Desde el día en que prometí pagarte ese viaje que tanto querías empecé a sentir que me amabas de verdad. Jamás he pensado que seas materialista; todo lo contrario, he creído que eres maravillosa y no necesitas mucho para ser feliz." },
            { q: "¿Qué mimo tuyo nunca falla cuando estoy enojado?", a: "Sonará raro, y esto ya lo sabes, pero el simple hecho de que me mires a los ojos en silencio, con esa sonrisa provocativa, hace que la ira y el enojo desaparezcan por completo.<br>Soy débil ante ti, ambos lo sabemos XD" },
            { q: "¿Cómo sé cuándo tus celos necesitan un abrazo de seguridad?", a: "Cuando la situación que provocó esos celos es delicada o requiere de una explicación clara y honesta. En ese momento me doy cuenta de que necesitas saber que te pertenezco y no hay razón para preocuparte." },
            { q: "¿Cuál es la forma más silenciosa en la que te demuestro amor?", a: "Sé que sonará muy raro, pero si hay algo que desde el día uno me hizo sentir seguro a tu lado son los silencios cómodos que compartimos: cuando no tenemos nada que decir y nuestra mera presencia basta. No es algo que pase con alguien aparte de ti, porque lo que más aprecio, aparte de ti, es la soledad y privacidad." },
            { q: "¿Qué hábito romántico me gustaría que tuviéramos más seguido?", a: "Aunque nunca lo hemos hecho, me encantaría recibirnos con un beso fuerte y un abrazo prolongado al reencontrarnos, incluso si sólo nos separamos por un par de minutos" },
            { q: "¿Cómo pienso en cuidarte cuando estás estresada?", a: "En esta situación me es imposible hacer mucho, pero me encantaría raptarte por un rato, llevarte a un lugar privado y encargarme de llevarme todo tu estrés... ya sabes cómo..." },
            { q: "¿Por qué funciona tan bien nuestra comunicación asertiva?", a: "Algo que me encanta de nuestra relación es cómo podemos confiarnos secretos, inseguridades, miedos, celos, enojos y demás emociones sin juzgarnos mutuamente. Es algo que no encuentras en todas partes, y lo tengo contigo." },
            { q: "¿Qué acción tuya me hace sentir 100% protegido por ti?", a: "Cuando me hablas suave y me mimas como a un niño pequeño; en esos momentos el mundo se detiene y me haces sentir que de verdad valgo la pena y que está bien ser vulnerable y sensible." }
        ]
    },
    4: {
        titulo: "Amistad y Terceros", icono: "👯‍♀️",
        urlFormulario: "https://forms.gle/tzozvn1MEy7fdML39",
        preguntas: [
            { q: "¿Cuál ha sido el 'chisme fresco' que más nos ha hecho reír?", a: "A ver, la verdad no tengo idea XD <br>Sólo puedo decir que me encanta escucharte hablar de tu día y las cosas que ves, escuchas, sientes, piensas y presencias. De hecho, me encanta escucharte hablar, sin importar de qué se trate (siempre y cuando no se trate de los cabrones de tus exs)." },
            { q: "¿Cómo nos protegemos del mundo en nuestra burbuja?", a: "A mí no me importa pasar vergüenza ni darle cringe a los que estén alrededor viendo cómo nos tratamos, y amo cómo me provocas sin importar las circunstancias en las que me encuentre. Me encanta que, aunque estemos siendo melosos y empalgosos en público, siempre nos sentimos seguros y protegidos en nuestro espacio." },
            { q: "¿Dónde le pongo el límite a mis celos frente a otros?", a: "Sé que, celoso, puedo llegar a ser explosivo y muy inmaduro; pero si algún día esos celos se volvieran insostenibles o muy perjudiciales te pondría a ti por encima de cualquier inseguridad pendeja y les pondría un alto definitivo." },
            { q: "¿De qué situación incómoda en público me sigo riendo?", a: "Sonrío como pendejo al recordar nuestras videollamadas en clases (las cuales últimamente ya no se dan tanto) y la forma tan cursi en la que nos hablábamos." },
            { q: "¿Cómo evito que los comentarios de terceros nos afecten?", a: "Hay muchas personas que no están del todo de acuerdo con nuestra relación; algunos por envidia, otros quizás por simple egoísmo y otros porque piensan que una relación a distancia nunca funcionaría. <br>Sé que ninguno de ellos sabe de lo que habla, y darles atención no vale la pena; estoy convencido de que este sentimiento es real y sincero, así que no dejo que la opinión o las burlas de gente irrelevante afecte lo que tenemos, ignorándolos y centrándome en lo que importa: TÚ." },
            { q: "¿Quiénes de mi entorno aportan más a nuestra relación?", a: "Sé que sonará difícil de creer, pero no hay una sola persona de mi círculo social que aporte algo positivo a nuestra relación. Es un poco decepcionante, pero no me siento mal en lo absoluto; después de todo, eres el único sueño en el que yo creo." },
            { q: "¿Qué reacción tuya noto cuando alguien me mira en público?", a: "Lo primero que noto es que tú lo notas XD <br>Primero observas, luego me miras fijamente con una sonrisa espectante y me preguntas: 'quién es esa?'... <br>Ahí es cuando digo que se siente bien ser celado hasta el punto tóxico de la palabra." },
            { q: "¿Cuál es mi regla de oro cuando estoy entre más gente?", a: "Cero contacto visual, físico o emocional. Para mí es casi una filosofía de vida; no soporto el contacto físico con más gente, no me gusta mantener contacto visual con desconocidos y menos entablar conversaciones vanales e innecesarias. <br>Si hay varias mujeres cerca mantengo mis manos pegadas a mis lados y la mirada en un punto fijo; no por miedo ni nada de eso, sino por incomodidad y respeto a esa parte de ti que sé que se pondría celosa." },
            { q: "¿A quién le haríamos la broma perfecta como cómplices?", a: "Uuuff, creo que mi hermano sería la víctima ideal, o alguno de tus amigos XD <br>Sea quien sea el objetivo, te ayudaría en lo que fuera, lindura." },
            { q: "¿Por qué eres mi mejor amiga antes que mi novia?", a: "Sé tú no me ves así, y está bien en realidad, pero para mí eres mi mejor amiga y única confidente; cuando estoy mal y me acerco a ti, nunca me defraudas; cuando estoy estresado, aunque no te lo pida, ofreces tu ayuda (o tu compañía en su defecto)... <br>Eres la única persona en la que confío plenamente y en cuya compañía me siento completo." }
        ]
    },
    5: {
        titulo: "Gustos y Disgustos", icono: "🍕",
        urlFormulario: "https://forms.gle/nMgXYTFvWHjPnSHx5",
        preguntas: [
            { q: "¿Qué dato curioso de ciencia o historia guardo para sorprenderte?", a: "El concepto de 'amor platónico' realmente retrata un amor real y verdadero; muy en contraste con la concepción accidental del término, que en se usa para referirse a un amor imposible y de fantasía... El punto es que tú eres mi primer, único y último amor platónico <3" },
            { q: "¿De qué torpeza mía sé que te encanta burlarte más?", a: "Te encanta reírte cada vez que uso un vaso para tomar agua, o cuando pierdo en algún juego, o cuando hago alguna pendejada. A mí me encanta saber que la niña dentro de ti aún es capaz de reírse pese a la crueldad del mundo." },
            { q: "¿Qué comida o antojo nos pone de acuerdo al instante?", a: "Ambos tenemos gustos de comida muy diferentes (y la pizza con piña es testigo XD), pero sé que nos pelearíamos por la última porción de spagueti con queso (es más probable que yo te la deje) o un tresleches (es mucho más probable que te lo comas todo antes darme la oportunidad de acercarme)." },
            { q: "¿Qué gusto mío sé que soportas únicamente porque me amas?", a: "Mis inseguridades, miedos y mi actitud dependiente; en el fondo sé que te irrita tenerme siempre buscando atención (sobretodo cuando no puedes dármela o necesitas un respiro) y que no sepa cómo ayudarte cuando eres tú quien se siente mal... <br>Lo siento por eso... Prometo cambiar; daré lo mejor de mí para que no termines odiando mi compañía." },
            { q: "¿Qué pequeño hábito mío creo que cambiarías si pudieras?", a: "Sé que odias que me ponga filosófico cuando estoy cansado o mi inestabilidad mental y emocional están hechas mierda XD <br>No te gusta que me ponga realista de la nada, y sé que sólo lo aguantas por amor (o por simple paciencia XD). <br>Sea cual sea el caso, intentaré cambiarlo por ti <3" },
            { q: "¿Qué tipo de planes o citas prefiero evitar por completo?", a: "Si tuviéramos una cita, una de mis reglas de oro es que no haya ninguna de tus amigas; ya sabes que no me caen bien, así que prefiero evitarlas por completo y mantenerlas lejos de mi vida social :v" },
            { q: "¿Cuál es mi mayor gusto culposo?", a: "Amo la comida frita y bien tostada, pero me hace mal :') <br>Me encantan las papas a la francesa, las tajadas bien tostadas, la carne frita, los nuggets, las embutidos y el resto de comida así XD" },
            { q: "¿En qué época histórica siento que nos veríamos mejor juntos?", a: "Chale, es una pregunta difícil de responder XD <br>Me gusta mucho la época medieval, pero creo que nos crucificarían por todas las cosas que pensamos, decimos y hacemos; en el mejor de los casos nos bañaríamos una vez al año XD" },
            { q: "¿Qué me da más gracia o me molesta cuando veo una peli, serie, documental, etc.?", a: "Lo que más odio de una obra cinematográfica es que sea aburrida y no tenga sentido. O sea, puede tener mil reseñas buenas y ser nominada al Óscar 7 veces, pero si no me llama la atención la voy a considerar una mierda; lo mismo pasa si tiene un final culero (quiero decir, ¿a quién le gustan los finales culeros?)." },
            { q: "¿En qué juego sale a relucir mi lado más competitivo?", a: "No he jugado muchas cosas, pero si hay un juego en el que no me gusta perder es el ajedrez. <br>Puedo perder en cualquier otro juego, pero perder una partida de ajedrez es algo que no soporto. Lo bueno es que sólo pierdo contra desconocidos :P <br>Si perdiera contra alguien que conozco le pondría en mi lista negra O_O" }
        ]
    },
    6: {
        titulo: "Historia", icono: "🕰️",
        urlFormulario: "https://forms.gle/YQS1rpcA6rbVwjSE7",
        preguntas: [
            { q: "¿Qué fue lo primero que pensé de ti el día que nos conocimos?", a: "A ver, pensando en exactamente lo primero que pensé de ti cuando empezamos a hablar... Creía que eras una chica muy fría y sin gustos ni inclinaciones :v <br>¿Sabes? algo así como Shoko, la compañera de Gojo y Gueto en JJK; esa tipa era completamente fría y creo que tenía un gusto extraño por los cadáveres." },
            { q: "¿Cuál es la anécdota más graciosa de nuestros inicios?", a: "Recuerdo cuando estábamos en la comunidad en la que nos conocimos y tú conseguiste el nuevo número; empezamos a hacer una escenita de infidelidad mal actuada para pasar el aburrimiento XD <br>Noir me escribió y casi me regaña XDDDD" },
            { q: "¿Cuándo supe que quería pasar el resto de mi vida contigo?", a: "Cuando empezaste a ser más cariñosa y a abrir tus emociones y pensamientos. Me empecé a dar cuenta de que eres la mujer que tanto imaginé tener; ahora que te tengo no quiero dejarte ir." },
            { q: "¿Qué título le pondría al primer capítulo de nuestra historia?", a: "Hmmmmmm, creo que le pondría algo como: 'El Génesis de un juego que se convirtió en una historia de amor'... o algo así XD" },
            { q: "¿Qué detalle de nuestra relación guardo como un tesoro?", a: "Tus fotos, las flores que me has regalado, la música que he decubierto gracias a ti y el dibujo de Capitán América (que está re GOD). Sin embargo, si tuviera que elegir la cosa más importante, me quedo con todo lo que he aprendido de ti, tanto bueno como malo; para mí, lo que aprendo de las personas es tan valioso como su compañía, y de ti he aprendido mucho. La vida se trata de nacimiento, crecimiento y muerte, y lo segundo ocupa la mayoría del tiempo que pasamos en esta tierra; contigo he crecido (y sigo creciendo a diario) demasiado, y aprecio más que nada en el mundo el hecho de que estés conmigo incluso cuando me equivoco o parece que me estanco en un punto... <br>Te amo <3" },
            { q: "¿Qué día de nuestra relación repetiría una y otra vez?", a: "Esta es una pregunta trampa; no repetiría ninguno, no porque ese día haya sido malo o porque no quiero volver a vivirlo contigo, sino porque sé que nos aguardan muchas más cosas en el presente y el futuro. <br>La historia que he escrito a tu lado conforma la mejor parte de mi vida, pero la historia que nos queda por escribir juntos será mejor aún y no planeo mirar hacia atrás si nuestros sueños se encuentran adelante." },
            { q: "¿Qué malentendido del principio nos hizo más fuertes hoy?", a: "¿Recuerdas cuando hablábamos y de la nada dejé de respondr tus mensajes? (Creo que no lo recuerdas XD) <br>Ese día fue el primero en el que te hice enojar, y, aunque fue por accidente, agradezco que ocurriera; de no haber pasado, no habría aprendido cómo tratarte para empezar a enamorarte... <br>Gracias por enojarte XD" },
            { q: "¿Qué canción siento que define nuestras primeras semanas juntos?", a: "En mi caso, la canción que narraría mi perspectiva respecto a nuestra relación en los primeros días sería 'Her', de JVKE; sé que sonará cliché pero en cuanto te encontré vi una última esperanza en el romance, y la mejor parte es que esa esperanza no fue en vano... <br>Encontré un tesoro en un mundo lleno de mierda y egoísmo. Lo que pasaba por tu mente en ese entonces es otro cuento." },
            { q: "¿Qué recuerdo de nosotros me hace sonreír en un mal día?", a: "No tengo buena memoria, así que cuando tengo tiempo y estoy de mal humor, leo nuestro chat, escucho tus audios diciéndome cosas lindas, veo tus fotos y videos e imagino que estás a mi lado y te puedo abrazar por fin." },
            { q: "¿En qué siento que he madurado más desde el día uno?", a: "A ver, al principio me comportaba con más educación de la que sería normal abusar; admito que me sentía intimidado por tu actitud dominante y distante, hacías que mis nervios hicieran cortocircuito, y me comportaba así para ocultar la cara de pendejo que tenía detrás de la pantalla." }
        ]
    },
    7: {
        titulo: "Autopercepción", icono: "🪞",
        urlFormulario: "https://forms.gle/5z4oHL4vaKjebM498",
        preguntas: [
            { q: "¿Cómo me haces sentir cuando cometo un error?", a: "Me equivoco a diario, ambos lo sabemos, y los errores que cometo son cosas que sólo un idiota comete; pero, aún así, me perdonas, me comprendes, me consuelas y me iluminas el camino incluso cuando no quiero verlo. <br>Muchas veces me disculpo sin motivo aparente, y aún así me hablas de la forma más madura y dulce posible." },
            { q: "¿Qué versión de mí siento que prefieres: el sumiso o el dominante?", a: "A ver, la neta no lo sé; si es por mí, me encanta ser sumiso y que me trates con rudeza y amor a la vez (Damn... me fascina, pta madre); pero si tuviera que pensar en cuál te gusta más a ti... creo que te gusta mi lado sumiso más que el dominante... ¿o será al revés?... No estoy seguro XD" },
            { q: "¿Qué tres palabras usaría para describirme?", a: "Esta es fácil: Inmaduro, Egocéntrico y Orgulloso; Soy un maldito desastre, y ambos lo sabemos. Tengo que admitir que mi forma de ser contigo es la parte más vulnerable, patética, real e imperfecta de mi personalidad." },
            { q: "¿Qué rasgo físico o de mi ser me sorprende que te encante?", a: "Neta, aún no me creo el hecho de te guste mi voz. <br>O sea, sé que lo dices a menudo, pero me resulta difícil creer que mi voz (la cual me suena muy aguda y poco masculina) te guste y te parezca grave y maculina; no sé, no lo creeré hasta que la escuches en persona, sin pantallas de por medio." },
            { q: "¿Cómo cambió mi vida al aprender a complementarme contigo?", a: "Aún me falta mucho por aprender y saber cómo tratarte y entenderte en muchas ocasiones; pero por lo poco que hemos pasado juntos y lo que he aprendido sobre ti, puedo decir que esta dinámica que llevamos desde el hace tiempo es simplemente única y especial en todo el mundo. <br>Desde que te conocí he podido ver el mundo con más alegría y felicidad, y disfrutar de las tristezas, los dolores y los momentos de tranquilidad... No sé cómo expresarlo conrrectamente, pero hablo en serio cuando digo que eres lo mejor que me ha pasado." },
            { q: "¿De qué logro personal me siento más orgulloso de compartirte?", a: "De crear este sitio web :3 Es el primero que despliego al internet, y nunca antes se me pasó por la cabeza hacer algo así para nadie. Una vez intenté crear un sitio web para mí, sobre poesía y escritura, pero lo dejé a medias (como la mayoría de cosas que hago). <br>Me siento orgulloso de crear esto y más de que sea para mi futura esposa; sé que el esfuerzo, el estrés y el tiempo invertido han valido la pena... Si es por ti lo vale." },
            { q: "¿Qué duda sobre mí mismo lograste borrar con tu presencia?", a: "Yo, antes de ti, era alguien más o menos inseguro de mi cuerpo y mi físico; pero desde que llegaste me hiciste dar cuenta de que no soy tan feo como pensaba, o que al menos soy lo suficientemente atractivo como para enamorar a una chica tan maravillosa y preciosa como tú." },
            { q: "¿Qué talento mío te regalaría para hacerte la vida más fácil?", a: "Más que regalarte un talento, haría un intercambio biológico :v <br>Me llevaría tu menstruación y te daría mis hormonas... Aunque ahora que lo pienso suena muy raro XDDDDD" },
            { q: "¿Cómo me visualizo creciendo a tu lado estos próximos años?", a: "No estoy muy seguro de lo que nos espera, si te soy sincero; no puedo prometer seguridad cuando el futuro es incierto por más que estemos preparados; pero lo que te puedo prometer es que van a venir problemas y momentos en los que quizás todo esté a punto de acabarse, y que en esos momentos estaré a tu lado, aunque no sepa lo que sucede, o cómo reaccionar, o qué hacer al respecto, o cómo arreglarlo... Permaneceré a tu lado pase lo que pase." },
            { q: "¿Qué es lo más valioso que siento que has aportado a mi identidad?", a: "Me has permitido ser yo mismo, y eso es algo que nunca olvidaré. Gracias a ti conozco lo que es el amor verdadero y completamente real... Gracias por todo, mi niña..." }
        ]
    },
    8: {
        titulo: "Sobre L.U.N.A.", icono: "💻",
        urlFormulario: "https://nanotextutils.com/es/cifrados/cifrado-cesar/",
        preguntas: [
            { q: "¿Cuál fue la inspiración principal para programar L.U.N.A. desde cero?", a: "Al principio pensé en hacer un simple algoritmo como los que ya te he dado, pero, por idea del instructor que me da clases casi todos los días (qué agonía), me propuse crearte un sitio web hecho a la medida tuya; por y para ti única y exclusivamente." },
            { q: "De todos los módulos que creé (poesía, apoyo emocional, Q&A...), ¿cuál tiene más significado para mí?", a: "La verdad, todas las funciones de LUNA tienen un valor muy grande para mí: <br>- El reloj de tiempo juntos es como ver un contador que no acaba, sino que continúa sin fin. <br>- El banco de poemas es una forma de transmitirte mis sentimientos en forma de verso. <br>- El botiquín emocional me permite estar contigo, incluso cuando no lo estoy en realidad. <br>- El test de EQ es como un reto para probar qué tan atentos estamos uno del otro. <br>- Y la sección de Q&A es donde puedo responderte directamente a cualquier duda que tengas, incluso antes de me hagas la pregunta...<br>Sólo espero que te guste tanto como a mí... Porque esto es para ti, no para mí." },
            { q: "¿Cómo logré mantener en secreto todas estas líneas de código y el despliegue del proyecto?", a: "Vale, no pude mantenerlo en secreto, porque, por alguna razón sobrenatural, descubrías la sorpresa una y otra vez. Pero al menos el resultado final no te lo esperabas, o eso creo XD" },
            { q: "¿Qué sentí en el momento exacto en que la página por fin estuvo funcional y en línea para ti?", a: "Fue una completa locura; la emoción de haber creado mi primer sitio web fue inmensa. me sentí tan orgulloso de mi esfuerzo que me tomé un día completo para sólo observar lo que había logrado una y otra vez XDDDDDDDDDD" },
            { q: "¿Este es el diseño definitivo o L.U.N.A. seguirá creciendo con el tiempo?", a: "No, en lo absoluto. LUNA apenas nació; planeo añadirle más opciones, crear más poemas, y darte muchísimos más regalos... <br>Será como un vitrina de recuerdos y obsequios sólo para ti. LUNA es tuya completamente, y me encargaré de que sea lo más hermosa y especial posible." },
            { q: "¿Cuál es la llave numérica final para descifrar tu regalo secreto?", a: "<i>hv od ihfkd hq od txh or klflprv rilfldo</i> - ROT 3<br>" + "Para <b>descifrar</b> la respuesta tendrás que responder las preguntas...<br>" + "El resto lo sabes tú de memoria... ❤️" }
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