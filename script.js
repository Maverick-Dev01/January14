const music = document.getElementById("bg-music");
const scene = document.getElementById("scene");
const book = document.getElementById("book");
const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

// Elementos UI
const chapterBadge = document.getElementById("chapterBadge");
const chapterSubtitle = document.getElementById("chapterSubtitle");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const chapterIndex = document.getElementById("chapterIndex");
const chapterImage = document.getElementById("chapterImage");
const imageCaption = document.getElementById("imageCaption");
const coverSubtitle = document.getElementById("coverSubtitle"); // Agregado para actualizar portada al cerrar

// === DATOS EXTENDIDOS (Textos más largos y profundos) ===
const chaptersData = [
  {
    title: "Cuando el tiempo no sabía pronunciar tu nombre",
    text: `<p>Antes de que aparecieras, mis días transcurrían con una calma sospechosa, como un mar sin mareas. El reloj marcaba las horas, pero el tiempo parecía no tener propósito más allá de avanzar. No sabía que me faltaba algo hasta que llegaste tú para demostrarme que vivir es mucho más que simplemente existir.</p>
    <p>Recuerdo caminar por lugares que hoy tienen tu huella, sin saber que pronto dejarían de ser escenarios vacíos para convertirse en nuestros recuerdos. Como diría Bécquer: <em>"El alma que hablar puede con los ojos, también puede besar con la mirada"</em>. Yo aún no conocía tus ojos, pero mi alma ya te estaba buscando en cada esquina.</p>
    <p>Era una espera silenciosa, una preparación inconsciente para el huracán de emociones que estabas a punto de desatar en mí. Hoy agradezco a ese tiempo vacío, porque me enseñó a valorar cada segundo que ahora paso a tu lado.</p>`,
    caption: "La Espera"
  },
  {
    title: "Cuando el amor aprendió a encontrarme",
    text: `<p>Dicen que las mejores cosas de la vida suceden cuando no las planeas, y tú eres la prueba viviente de esa teoría. No hubo avisos previos, ni señales de neón; solo un giro del destino que decidió cruzar nuestros caminos en el momento exacto.</p>
    <p>Hicimos honor a Cortázar cuando escribió: <em>"Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos"</em>. Fue como si el universo hubiera conspirado para que coincidiéramos, ajustando cada variable para ese instante preciso.</p>
    <p>A veces pienso en la improbabilidad de coincidir en este planeta enorme, en este tiempo específico, y me da vértigo. Pero luego te veo y entiendo que no fue suerte; era inevitable. Teníamos que encontrarnos para que todo lo demás cobrara sentido.</p>`,
    caption: "El Encuentro"
  },
  {
    title: "Donde todo comenzó sin pedir permiso",
    text: `<p>El amor real no toca la puerta con timidez; la derriba. Llegaste a mi vida de golpe, desordenando mi paz meticulosamente construida para llenarla de un caos hermoso y vibrante. No pediste permiso para entrar, simplemente tomaste tu lugar.</p>
    <p>Como en <em>Diario de una Pasión</em>, nuestra historia no empezó siendo fácil ni tranquila. Hubo retos, dudas y miedos, pero había algo innegable debajo de todo eso: una conexión que gritaba más fuerte que cualquier lógica.</p>
    <p>Desde ese primer momento supe que esto no sería pasajero. known Había una intensidad en el aire, una electricidad estática que nos advertía que, una vez que empezáramos, no habría vuelta atrás. Y bendito sea el día en que decidimos saltar.</p>`,
    caption: "El Inicio"
  },
  {
    title: "La primera conversación que no quiso terminar",
    text: `<p>Hay charlas que deberían durar una vida entera, y la nuestra fue una de esas. Recuerdo perder la noción del tiempo, saltando de un tema a otro con una fluidez que asustaba. Sentí que conocía tu alma de antes, como si hubiéramos hablado en otra vida y solo estuviéramos poniéndonos al día.</p>
    <p>Nos perdimos en las horas como los protagonistas de <em>Before Sunrise</em>, deseando secretamente que el amanecer nunca llegara para no tener que despedirnos. Cada palabra tuya era una pieza de un rompecabezas que yo no sabía que estaba armando.</p>
    <p>Me di cuenta de que no solo me atraía tu físico, sino tu mente. La forma en que ves el mundo, tus ideas, tus pausas y tus risas. Esa conversación fue el cimiento de todo lo que somos hoy: dos almas que nunca se cansan de escucharse.</p>`,
    caption: "Conexión"
  },
  {
    title: "El día en que nuestras pasiones se reconocieron",
    text: `<p>No solo coincidimos en gustos superficiales; coincidimos en intensidades. Ver cómo te brillan los ojos al hablar de lo que amas, de tus sueños y tus metas, fue el momento en que me enamoré un poco más. No hay nada más atractivo que verte apasionada.</p>
    <p>Fue el instante exacto en que mi caos reconoció a tu caos y decidieron que podían bailar juntos. No intentaste apagar mi fuego ni yo el tuyo; al contrario, aprendimos a arder juntos sin quemarnos.</p>
    <p>Entendí que contigo no tendría que fingir ser menos intenso o más cuerdo. Encontré a alguien que no solo tolera mi locura, sino que la comprende y la comparte. Y eso, mi amor, es el regalo más grande.</p>`,
    caption: "Química"
  },
  {
    title: "Cuando la tecnología dejó de ser fría",
    text: `<p>Antes de ti, mi teléfono era solo una herramienta. Contigo, una pantalla se convirtió en mi ventana favorita al mundo. Cada notificación con tu nombre era un pequeño vuelco al corazón, una dosis de dopamina que alegraba mis días grises.</p>
    <p>Demostramos que la distancia física es irrelevante cuando la conexión mental es sólida. Aprendimos a abrazarnos con palabras, a besarnos con emojis y a acompañarnos en silencio a través de una videollamada.</p>
    <p>La tecnología dejó de ser fría porque tú estabas al otro lado, llenando de calidez cada pixel. Esas noches hablando hasta tarde, luchando contra el sueño solo para estar un ratito más juntos, son tesoros que guardo con cariño.</p>`,
    caption: "Digital"
  },

  // === NUEVOS CAPÍTULOS (7 - 24) ===

  {
    title: "Un mes bastó para cambiar el calendario",
    text: `<p>El primer mes contigo no fue un “mes”. Fue una revolución discreta. Todo siguió pareciendo normal para el mundo, pero por dentro yo ya caminaba distinto: más atento a los detalles, más vivo, más consciente de que el día podía ser bonito solo porque tú existías en él.</p>
    <p>Me sorprendió cómo empezamos a tener rutinas sin sentirlas pesadas: ese “buenos días” que no era costumbre sino promesa, esas conversaciones que se extendían porque nadie quería ser el primero en colgar, esa sensación ridícula y preciosa de que la distancia se volvía pequeña cuando tu voz aparecía.</p>
    <p>Y entendí algo que no enseñan en ningún lado: cuando alguien te importa de verdad, el tiempo deja de ser cifra y se vuelve significado. El calendario cambió porque tú le diste un motivo para existir.</p>`,
    caption: "Primer Mes"
  },
  {
    title: "La palabra que no volvió a ser ligera",
    text: `<p>Hay palabras que se dicen como quien lanza una moneda al aire, esperando suerte. Y luego está esa palabra. La que no se pronuncia por impulso, sino por certeza. La que te cambia el cuerpo por dentro, como si el corazón entendiera antes que la boca.</p>
    <p>Cuando dije “te amo”, lo sentí como un punto sin retorno. No por miedo, sino por respeto. Porque amar no es decorar el lenguaje: es asumir un compromiso invisible. Es elegirte incluso cuando nadie mira, incluso cuando el mundo insiste en cansarte.</p>
    <p>Desde ese día, esa palabra dejó de ser ligera. Se volvió casa. Se volvió verdad. Y lo más bonito es que en ti no sonó grande por drama, sonó grande por destino.</p>`,
    caption: "Te Amo"
  },
  {
    title: "Sueños que coincidieron sin ensayar",
    text: `<p>Lo raro no fue que nos gustaran cosas parecidas. Lo raro fue que nuestros sueños parecían hablar el mismo idioma sin haberse conocido. Como si tu futuro y el mío se hubieran visto de lejos y hubieran decidido caminar hacia el mismo punto.</p>
    <p>Te escuchaba hablar de lo que querías, y yo sentía esa paz extraña que solo aparece cuando algo encaja de verdad. No era dependencia, era compatibilidad real: la clase de coincidencia que no se fuerza, que no se negocia, que simplemente sucede.</p>
    <p>Y ahí supe que lo nuestro no era un accidente bonito. Era una construcción posible. Un “sí” silencioso entre tus planes y los míos. Un lugar donde los sueños no chocan, se acompañan.</p>`,
    caption: "Compatibles"
  },
  {
    title: "Cuando la luz decidió vivir en tus ojos",
    text: `<p>Yo antes creía que la luz era cosa del sol, de focos, de pantallas, de cosas medibles. Luego te miré. Y entendí que hay luces que no iluminan objetos, iluminan vidas. Tus ojos no brillan porque sí. Brillan porque tú estás viva por dentro, porque sientes con fuerza, porque miras con intención.</p>
    <p>Hay una manera tuya de ver el mundo que vuelve importante lo que antes era ruido. Me haces notar detalles, me haces pausar. Me haces volver a lo simple. Y en esa simpleza tu mirada se vuelve hogar, como si me dijera: “Aquí puedes respirar.”</p>
    <p>Si alguien me preguntara qué es lo más bonito que he visto, yo no hablaría de paisajes. Hablaría de esa luz que aparece en tus ojos cuando te ríes, cuando te emocionas, cuando confías.</p>`,
    caption: "Tu Mirada"
  },
  {
    title: "El primer encuentro con la realidad temblando",
    text: `<p>Hay cosas que por mensaje se sienten grandes, pero cara a cara se vuelven infinitas. El primer encuentro contigo fue eso: la realidad poniéndose nerviosa. Yo iba preparado para verte, pero no existe preparación real para cuando algo que amas se vuelve tangible.</p>
    <p>El mundo alrededor seguía funcionando como siempre, pero a mí me fallaba el sistema. Las manos no sabían dónde ir, la voz se hacía tímida, el corazón se ponía imprudente. Y tú… tú estabas ahí, real, hermosa, presente. Más de lo que cualquier imaginación puede fabricar.</p>
    <p>Ese día entendí que el amor también tiene cuerpo. Que no solo se piensa o se siente: también se sostiene. Y yo quería sostenerte, no por posesión, sino por cuidado. Porque por fin estabas aquí.</p>`,
    caption: "Primer Encuentro"
  },
  {
    title: "Un amor que no cabía en los besos",
    text: `<p>Los besos son hermosos, sí. Pero lo nuestro siempre fue más grande que eso. Lo nuestro vive en lo cotidiano, en lo que no se presume. Vive en la forma en que nos entendemos cuando el mundo pesa, en la manera en que nos calmamos sin necesidad de tener todas las respuestas.</p>
    <p>Me enamora cómo te vuelves refugio sin darte cuenta. Cómo tu presencia ordena mis pensamientos. Cómo tu risa hace que cualquier día mediocre se vuelva digno de recordarse. Eso no cabe en un beso, aunque un beso lo intente.</p>
    <p>Conocí contigo una ternura adulta: la que no necesita espectáculo, la que se sostiene en la lealtad, en el respeto, en la paciencia. Es un amor que se nota incluso cuando no estamos tocándonos.</p>`,
    caption: "Más Allá"
  },
  {
    title: "San Valentín dejó de ser un día triste",
    text: `<p>Hay días que para algunos son fiesta y para otros son espejo. San Valentín solía ser uno de esos días raros: te hace preguntarte por qué el amor parece existir siempre para los demás. Pero contigo, ese día dejó de doler. Se volvió celebración y, más importante, se volvió verdad.</p>
    <p>No porque el mundo lo marcara en rojo, sino porque por primera vez tenía sentido. No era una fecha obligatoria, era un recordatorio: alguien me eligió. Y yo elegí a alguien. Y esa elección no se agota cuando termina el día.</p>
    <p>Ese San Valentín no fue perfecto por regalos o fotos. Fue perfecto porque ya no estaba solo. Porque el amor ya tenía nombre, voz, y forma de mirarme como si yo también fuera hogar.</p>`,
    caption: "14 de Febrero"
  },
  {
    title: "Enamorarse otra vez de lo mismo",
    text: `<p>Lo más extraño del amor real es que no ocurre una sola vez. Ocurre muchas. Te enamoras cuando te conocen, te enamoras cuando te descubren, te enamoras cuando te vuelven a elegir en un día difícil. Y yo me enamoré otra vez de ti en pequeñas escenas: en tu forma de cuidar, en tu forma de hablar, en tu forma de ser fuerte sin perder la ternura.</p>
    <p>Me di cuenta de que no te amo solo por lo bonito. Te amo por lo humano. Por tus miedos, tus dudas, tus silencios, tus batallas internas que nadie ve. Te amo porque sigues avanzando incluso cuando te cansas.</p>
    <p>Y así, sin necesidad de nuevas historias, me enamoro de lo mismo: de ti siendo tú. De ti existiendo, insistiendo, brillando.</p>`,
    caption: "Otra Vez"
  },
  {
    title: "Cuando cruzamos lo que juramos no cruzar",
    text: `<p>En algún punto de la historia, todos hacemos promesas por miedo. “Yo no me voy a involucrar tanto.” “Yo no voy a sentir tan fuerte.” “Yo no voy a depender.” Promesas que no son orgullo, son defensa. Y aun así, llegas tú, y el corazón se ríe de mis barreras.</p>
    <p>Cruzamos esa línea sin drama, sin grandes discursos, como quien se rinde ante lo inevitable. Fue más un acuerdo silencioso que una decisión: ya no estábamos jugando a estar cerca, estábamos construyendo algo.</p>
    <p>Y lo curioso es que al cruzarla no sentí pérdida. Sentí alivio. Como si por fin dejara de pelear contra lo que ya era cierto: que contigo quiero quedarme de verdad.</p>`,
    caption: "La Línea"
  },
  {
    title: "La memoria de nuestra piel",
    text: `<p>Hay un lenguaje que no se aprende en libros: el de la cercanía. Ese idioma donde el cuidado se expresa en la suavidad, donde la confianza se mide en la calma. La primera vez que nuestra piel se reconoció, no fue solo deseo. Fue confirmación.</p>
    <p>No se trataba de prisa, sino de presencia. De estar ahí, con respeto, con intención, con esa delicadeza que solo existe cuando alguien te importa más que tu impulso. A veces el amor se nota en cómo se toca: sin invadir, sin exigir, como quien agradece.</p>
    <p>Desde ese día entendí que tu cuerpo no es un lugar para conquistar, es un lugar para honrar. Y que la memoria de la piel guarda lo que el mundo olvida: que fuimos cuidado, que fuimos verdad.</p>`,
    caption: "Cercanía"
  },
  {
    title: "El deseo también aprende a amar",
    text: `<p>El deseo sin amor es ruido. El amor sin deseo a veces se queda corto. Pero cuando ambos se encuentran con respeto, se vuelven una fuerza bonita: una energía que no destruye, que construye. Contigo, el deseo no fue hambre. Fue lenguaje.</p>
    <p>Me enseñaste que la pasión no es solo intensidad. También es confianza. También es reír a media noche, también es mirarnos y entender sin hablar, también es saber parar si hace falta, también es cuidar incluso en lo más vulnerable.</p>
    <p>Y así, lo que pudo ser solo impulso se volvió algo más fino: una manera de decirte “te elijo” con el cuerpo, pero también con el alma.</p>`,
    caption: "Deseo"
  },
  {
    title: "Celebrarte fue aprender a agradecer",
    text: `<p>Tu cumpleaños no es una fecha. Es un recordatorio de que el mundo tuvo suerte cuando llegaste. Celebrarte fue descubrir que mi gratitud tiene forma: se parece a ti sonriendo, se parece a ti emocionada, se parece a ti siendo feliz de verdad.</p>
    <p>Yo quería darte un regalo que no se guardara en una caja. Quería darte algo que te acompañara: palabras, memoria, un pedacito de eternidad en páginas. Porque tú mereces lo que no se rompe: lo que se siente.</p>
    <p>Ese día entendí que amar también es esto: alegrarse de que existas. Agradecer tus años. Pedirle al tiempo que te trate con suavidad. Y prometer, aunque sea en silencio, que yo voy a intentarlo también.</p>`,
    caption: "Tu Día"
  },
  {
    title: "Nuestra primera órbita compartida",
    text: `<p>Viajar contigo fue ver el mundo con otro color. No porque el lugar fuera perfecto, sino porque íbamos juntos. La primera “traslación” a tu lado se sintió como inaugurar un universo: mapas, calles, cielos, todo parecía nuevo aunque ya hubiera existido antes.</p>
    <p>Me gustó descubrir cómo eres cuando sales de tu rutina. Cómo te emocionas. Cómo te adaptas. Cómo te vuelves valiente en lo desconocido. Me gustó sentir que la aventura no era el destino, sino tu mano junto a la mía.</p>
    <p>Desde entonces entendí que quiero eso contigo: caminos. No para huir, sino para construir recuerdos. Porque contigo, incluso perderse se vuelve una forma de encontrarnos.</p>`,
    caption: "Viaje"
  },
  {
    title: "La idea peligrosa de tenernos siempre",
    text: `<p>Hay una idea que da miedo porque es demasiado bonita: imaginarte en mi futuro sin condición. No como fantasía, sino como plan. No como sueño, sino como decisión. Tenernos “siempre” es peligroso porque obliga a ser serio, a crecer, a cuidar.</p>
    <p>Y aun así, cuando pienso en ese “siempre”, no siento carga. Siento paz. Porque contigo el futuro no se ve como presión, se ve como proyecto. No se ve como jaula, se ve como hogar.</p>
    <p>Quiero que el tiempo nos encuentre juntos muchas veces más. Quiero que la vida nos ponga retos y que nosotros nos pongamos de acuerdo. Quiero que el “siempre” deje de ser una palabra grande y se vuelva una rutina bonita.</p>`,
    caption: "Siempre"
  },
  {
    title: "Cuando la llama decidió arder sin miedo",
    text: `<p>Hubo un punto exacto en nuestra historia donde ya no fingimos prudencia. No fue un momento ruidoso. Fue silencioso, intenso, inevitable. Como si por fin dejáramos de negociar con lo que ya era cierto.</p>
    <p>Entendí que no toda llama destruye. Algunas existen para iluminar lo que ya no puede ocultarse. Y ahí estábamos, tú y yo, aceptando que arder juntos también era una forma de cuidarnos. Una forma de decir “aquí”, “así”, “ahora”.</p>
    <p>Si el mundo nos hubiera visto, habría pensado que era pasión. Pero yo lo sentí distinto: era pertenencia sin posesión, era deseo con ternura, era amor dejando de tener miedo a su propio tamaño.</p>`,
    caption: "Fuego"
  },
  {
    title: "Cuando el tiempo ya sabía tu nombre",
    text: `<p>Hubo un día en que dejé de preguntarme “qué será de nosotros” y empecé a decir “cuando estemos”. Parece pequeño, pero cambia todo. Porque el futuro dejó de ser una niebla y empezó a tener dirección. Y esa dirección, sin exagerar, te apuntaba a ti.</p>
    <p>El tiempo, que antes caminaba sin sentido, ahora parece trabajar para nosotros. Como si cada día fuera un paso que nos acerca, como si el universo por fin se alineara con una idea: que lo nuestro merece continuidad.</p>
    <p>Y es raro… ya no le pido al tiempo que pase rápido. Ahora le pido lo contrario: que se quede. Que nos deje saborearlo. Que nos regale mañanas, tardes y noches donde tu nombre siga siendo el centro.</p>`,
    caption: "Destino"
  },
  {
    title: "El día que entendí que el amor no basta",
    text: `<p>Amar es esencial, pero no basta. Porque el amor sin cuidado se desgasta, el amor sin comunicación se confunde, el amor sin paciencia se rompe. Y entender eso no me asustó. Me volvió más consciente. Me volvió mejor.</p>
    <p>Ese día entendí que quiero amarte con acciones, no solo con intensidad. Quiero aprender a escucharte sin interrumpir, a estar cuando te falte fuerza, a darte espacio cuando lo necesites, a ser refugio y no tormenta.</p>
    <p>Si el amor no basta, entonces lo completamos con respeto. Con compromiso. Con la decisión diaria de tratarnos bonito, incluso cuando el mundo esté feo.</p>`,
    caption: "Madurez"
  },
  {
    title: "Y aun así, el camino apenas empieza",
    text: `<p>Lo más hermoso de nosotros es que no se siente “final feliz”. Se siente “inicio verdadero”. Como si todo lo vivido hasta ahora fuera apenas el prólogo de algo más grande, más estable, más nuestro.</p>
    <p>Quiero escribir contigo capítulos donde la vida sea real: con días fáciles y días pesados, con planes que salgan bien y otros que se improvisen. Quiero estar en tu crecimiento, no como espectador, sino como compañero.</p>
    <p>Si esta historia fuera un libro, yo no querría cerrarlo. Querría seguirlo escribiendo contigo. Porque hay amores que terminan. Y hay amores como el nuestro que, por fin, empiezan.</p>
    <p>Felices 24 años amor de mi vida. TE AMO!!!</p>`,
    caption: "Continuar"
  },
];




// === CONFIGURACIÓN DE CAPÍTULOS ===
const chapters = chaptersData.map((data, i) => {
  const n = i + 1;
  return {
    n,
    title: data.title,
    subtitle: "Nuestra Historia",
    text: data.text,
    image: `img/capitulo${n}.jpg`,
    caption: data.caption
  };
});

// === ESTADO Y NAVEGACIÓN ===
// IMPORTANTE: Siempre empieza en 1 al recargar, ignorando URL anterior para evitar confusiones
let current = 1; 

function roman(num) {
  const map = [["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
  let out = "";
  for (const [r,v] of map) { while (num >= v) { out += r; num -= v; } }
  return out;
}

function setChapter(n){
  // Validar límites
  if (n < 1) n = 1;
  if (n > chapters.length) n = chapters.length;
  current = n;

  const ch = chapters[current - 1];

  // Actualizar UI Texto
  chapterBadge.textContent = `Capítulo ${roman(ch.n)}`;
  chapterSubtitle.textContent = ch.subtitle;
  chapterTitle.textContent = ch.title;
  chapterText.innerHTML = ch.text; // Inyecta HTML con párrafos
  chapterIndex.textContent = `${current} / ${chapters.length}`;

  // Actualizar UI Foto
  chapterImage.src = ch.image;
  chapterImage.onerror = function() { this.src = 'https://via.placeholder.com/400x400/eee/999?text=Foto+Pendiente'; };
  imageCaption.textContent = ch.caption;

  // Actualizar Portada (para cuando se cierre)
  coverSubtitle.textContent = `Capítulo ${roman(ch.n)}`;

  // Estado Botones
  btnPrev.disabled = current === 1;
  btnNext.disabled = current === chapters.length;
  
  // Resetear scroll del texto al cambiar capítulo
  chapterText.scrollTop = 0;
}

// === CONTROL DE AUDIO Y LIBRO ===
function openBook(){
  // Reproducir música suavemente
  music.volume = 0.5;
  music.currentTime = 0; // Reiniciar canción si se desea
  const playPromise = music.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log("Auto-play bloqueado por navegador. Interactuar primero.");
    });
  }

  scene.classList.add("reading");
  book.classList.add("open");

  btnOpen.disabled = true;
  btnClose.disabled = false;
  
  // Asegurar que empezamos donde dijimos (cap 1 o el que sea)
  setChapter(current);
}

function closeBook(){
  scene.classList.remove("reading");
  book.classList.remove("open");

  btnOpen.disabled = false;
  btnClose.disabled = true;

  // Efecto fade-out para la música
  let fadeAudio = setInterval(function () {
      if (music.volume > 0.05) {
          music.volume -= 0.05;
      } else {
          music.pause();
          music.volume = 0.5; // Reset volumen para la próxima
          clearInterval(fadeAudio);
      }
  }, 200);
}

// === EVENT LISTENERS ===
btnOpen.addEventListener("click", openBook);
btnClose.addEventListener("click", closeBook);

btnPrev.addEventListener("click", () => setChapter(current - 1));
btnNext.addEventListener("click", () => setChapter(current + 1));

// Teclado
window.addEventListener("keydown", (e) => {
  // Solo si el libro está abierto
  if (book.classList.contains("open")) {
    if (e.key === "ArrowLeft") btnPrev.click();
    if (e.key === "ArrowRight") btnNext.click();
    if (e.key === "Escape") closeBook();
  }
});

// Inicialización
setChapter(1);