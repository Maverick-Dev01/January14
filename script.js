const music = document.getElementById("bg-music");

const scene = document.getElementById("scene");
const book = document.getElementById("book");

const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

const chapterBadge = document.getElementById("chapterBadge");
const coverSubtitle = document.getElementById("coverSubtitle");
const chapterSubtitle = document.getElementById("chapterSubtitle");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const chapterIndex = document.getElementById("chapterIndex");
// Referencias a los elementos de la imagen
const chapterImage = document.getElementById("chapterImage");
const imageCaption = document.getElementById("imageCaption");

// Lista de títulos proporcionada por el usuario
const chapterTitles = [
  "Cuando el tiempo no sabía pronunciar tu nombre",
  "Cuando el amor aprendió a encontrarme",
  "Donde todo comenzó sin pedir permiso",
  "La primera conversación que no quiso terminar",
  "El día en que nuestras pasiones se reconocieron",
  "Cuando la tecnología dejó de ser fría",
  "Un mes bastó para cambiar el calendario",
  "La palabra que no volvió a ser ligera",
  "Sueños que coincidieron sin ensayar",
  "Cuando la luz decidió vivir en tus ojos",
  "El primer encuentro con la realidad temblando",
  "Un amor que no cabía en los besos",
  "San Valentín dejó de ser un día triste",
  "Enamorarse otra vez de lo mismo",
  "Cuando cruzamos lo que juramos no cruzar",
  "La memoria de nuestra piel",
  "El deseo también aprende a amar",
  "Celebrarte fue aprender a agradecer",
  "Nuestra primera órbita compartida",
  "La idea peligrosa de tenernos siempre",
  "Cuando la llama decidió arder sin miedo",
  "Cuando el tiempo ya sabía tu nombre",
  "El día que entendí que el amor no basta",
  "Y aun así, el camino apenas empieza"
];

// Generar los 24 capítulos con títulos e imágenes
const chapters = chapterTitles.map((title, i) => {
  const n = i + 1;
  return {
    n,
    title: title,
    subtitle: "24 capítulos, 24 años", // Puedes personalizar esto por capítulo si quieres
    text: `<p>Contenido pendiente del capítulo ${n}.</p>`,
    image: `img/capitulo${n}.jpg`, // Ruta de la imagen
    caption: `Momento ${n}` // Subtítulo para la foto
  };
});

// Capítulo 21 con texto real (manteniendo el ejemplo que tenías)
chapters[20] = {
  ...chapters[20], // Mantiene las otras propiedades (imagen, título, etc.)
  text: `
    <p>Hubo un punto exacto en nuestra historia donde ya no fingimos prudencia.</p>
    <p>No fue un momento ruidoso. Fue silencioso, intenso, inevitable.</p>
    <p>Entendí que no toda llama destruye. Algunas existen para iluminar lo que ya no puede ocultarse.</p>
    <p>Y ahí estábamos, tú y yo, aceptando que arder juntos también era una forma de cuidarnos.</p>
    <p><em>— Desde mi perspectiva, siempre fuiste fuego.</em></p>
  `
};

let current = getChapterFromURL() ?? 1; // Empezar en el capítulo 1 por defecto

function roman(num) {
  const map = [
    ["M",1000],["CM",900],["D",500],["CD",400],
    ["C",100],["XC",90],["L",50],["XL",40],
    ["X",10],["IX",9],["V",5],["IV",4],["I",1],
  ];
  let out = "";
  for (const [r,v] of map) {
    while (num >= v) { out += r; num -= v; }
  }
  return out;
}

function clampChapter(n){
  return Math.min(Math.max(n, 1), chapters.length);
}

function setChapter(n){
  current = clampChapter(n);
  const ch = chapters[current - 1];

  chapterBadge.textContent = `Capítulo ${roman(ch.n)}`;
  // El coverSubtitle está en la portada, se actualiza al cerrar el libro
  // pero podemos actualizarlo aquí también para consistencia
  // coverSubtitle.textContent = `Capítulo ${roman(ch.n)}`;

  chapterSubtitle.textContent = ch.subtitle || " ";
  chapterTitle.textContent = ch.title;
  chapterText.innerHTML = ch.text;
  
  // Actualizar la imagen y su pie de foto
  chapterImage.src = ch.image;
  chapterImage.onerror = function() { this.src = 'https://via.placeholder.com/300?text=Foto+Pendiente'; }; // Imagen por defecto si falla la carga
  imageCaption.textContent = ch.caption;

  chapterIndex.textContent = `${current} / ${chapters.length}`;

  btnPrev.disabled = current === 1;
  btnNext.disabled = current === chapters.length;

  setURLChapter(current);
}

function openBook(){
  // música (si el navegador deja)
  music.play().catch(() => {});
  scene.classList.add("reading");
  book.classList.add("open");

  btnOpen.disabled = true;
  btnClose.disabled = false;
}

function closeBook(){
  scene.classList.remove("reading");
  book.classList.remove("open");

  btnOpen.disabled = false;
  btnClose.disabled = true;
}

// URL helpers: /?c=21
function getChapterFromURL(){
  const params = new URLSearchParams(window.location.search);
  const c = parseInt(params.get("c"), 10);
  return Number.isFinite(c) ? clampChapter(c) : null;
}

function setURLChapter(n){
  const url = new URL(window.location.href);
  url.searchParams.set("c", String(n));
  window.history.replaceState({}, "", url);
}

// Eventos
btnOpen.addEventListener("click", openBook);
btnClose.addEventListener("click", closeBook);

btnPrev.addEventListener("click", () => setChapter(current - 1));
btnNext.addEventListener("click", () => setChapter(current + 1));

// Bonus: flechas del teclado
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") btnPrev.click();
  if (e.key === "ArrowRight") btnNext.click();
  if (e.key === "Escape" && !btnClose.disabled) closeBook();
});

// init
setChapter(current);