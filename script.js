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
    <p>Desde ese primer momento supe que esto no sería pasajero. Había una intensidad en el aire, una electricidad estática que nos advertía que, una vez que empezáramos, no habría vuelta atrás. Y bendito sea el día en que decidimos saltar.</p>`,
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
  // ... (Aquí irían el resto de los capítulos extendidos siguiendo este formato)
  // Para no hacer el código infinito aquí, asumo que copiarás el estilo de arriba para los 24.
  // He dejado los primeros 6 como ejemplo de LONGITUD.
  // EL RESTO SE GENERARÁ CON TEXTO GENÉRICO LARGO SI NO LO MODIFICAS, O PUEDES COPIAR Y PEGAR TUS TEXTOS.
];

// Rellenamos el resto de los 24 caps con texto placeholder LARGO para probar el scroll
while (chaptersData.length < 24) {
  chaptersData.push({
    title: `Capítulo ${chaptersData.length + 1}: Una historia que continúa`,
    text: `<p>Este es un capítulo más de nuestra maravillosa historia. Cada día a tu lado es una nueva página que escribimos juntos con tinta indeleble. No importa cuántos obstáculos aparezcan en el camino, siempre encontramos la manera de superarlos.</p>
    <p>Quiero llenar este libro con memorias, con risas, con viajes y con esos momentos de silencio cómodo donde no hace falta decir nada para entenderlo todo. Eres mi compañera de vida, mi mejor amiga y el amor que siempre soñé.</p>
    <p>Sigamos construyendo este futuro, paso a paso, ladrillo a ladrillo. Porque lo que tenemos no se encuentra dos veces en la vida. Te amo hoy más que ayer, y estoy seguro de que mañana te amaré aún más.</p>`,
    caption: "Nosotros"
  });
}

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