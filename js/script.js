//Url dos planetas
const planetas = [
  { nome: "Mercúrio", emoji: "🌕", tamanho: 10, raioX: 35, raioY: 40, veloc: 2.50, fase: 1, url: "../mercurio.html" },
  { nome: "Vênus", emoji: "🟠", tamanho: 10, raioX: 60, raioY: 70, veloc: 1.80, fase: 2, url: "../venus.html" },
  { nome: "Terra", emoji: "🌎", tamanho: 10, raioX: 90, raioY: 100, veloc: 1.00, fase: 3, url: "../terra.html" },
  { nome: "Marte", emoji: "🔴", tamanho: 10, raioX:120, raioY:120, veloc:0.80, fase:4, url:"../marte.html" },
  { nome: "Júpiter", emoji: "🟠", tamanho:15, raioX:150, raioY:150, veloc:0.50, fase:5, url:"../jupiter.html" },
  { nome: "Saturno", emoji: "🪐", tamanho:15, raioX:175, raioY:175, veloc:0.30, fase:6, url:"../saturno.html" },
  { nome: "Urano", emoji: "🔵", tamanho:15, raioX:200, raioY:200, veloc:0.20, fase:7, url:"../urano.html" },
];

let angulo = 0;
let fundoEstrelado, music;

const CANVAS = 400;

const tooltip = document.getElementById("tooltip");

let posPlanetas = [];


function preload(){
   music = loadSound("../audio/solar.mp3");
}


function setup(){

  const cnv = createCanvas(CANVAS, CANVAS);
  cnv.parent(document.querySelector("main"));
  cnv.style("width", "min(90vw, 70vh)");
  cnv.style("height", "min(90vw, 70vh)");
  fundoEstrelado = createGraphics(CANVAS, CANVAS);
  fundoEstrelado.background(0);
  fundoEstrelado.stroke(255);
  fundoEstrelado.strokeWeight(1.9);


  music.loop();


  for(let i=0;i<500;i++){
    fundoEstrelado.point(random(CANVAS), random(CANVAS));
  }

  cnv.elt.addEventListener("click", verificarClique);
  cnv.elt.addEventListener("mousemove", verificarHover);

  cnv.elt.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
}

function draw(){

  image(fundoEstrelado,0,0);

  posPlanetas = [];

  const cx = 200;
  const cy = 200;

  textSize(30);
  text("☀️", cx - 10, cy + 10);

  planetas.forEach((pl, idx) => {

    const px =
      pl.raioX * cos(angulo * pl.veloc + pl.fase) + cx;

    const py =
      pl.raioY * sin(angulo * pl.veloc + pl.fase) + cy;

    textSize(pl.tamanho);

    text(pl.emoji, px, py);

    posPlanetas.push({
      x:px,
      y:py,
      r:pl.tamanho + 4,
      idx
    });
  });

  angulo += 0.01;

}

function coordCanvas(e){

  const rect = e.target.getBoundingClientRect();

  const escala = CANVAS / rect.width;

  return {
    x:(e.clientX - rect.left) * escala,
    y:(e.clientY - rect.top) * escala,
  };
}

function planetaEmPonto(cx, cy){
  return posPlanetas.find(
    p => dist(cx, cy, p.x, p.y) <= p.r
  );
}

function verificarClique(e){

  const {x, y} = coordCanvas(e);

  const hit = planetaEmPonto(x, y);

  if(hit){
    window.location.href = planetas[hit.idx].url;
  }
}

function verificarHover(e){

  const {x, y} = coordCanvas(e);

  const hit = planetaEmPonto(x, y);

  if(hit){

    e.target.style.cursor = "pointer";

    tooltip.textContent =
      planetas[hit.idx].nome;

    tooltip.style.left =
      (e.clientX + 14) + "px";

    tooltip.style.top =
      (e.clientY - 10) + "px";

    tooltip.classList.add("show");

  } else {

    e.target.style.cursor = "default";

    tooltip.classList.remove("show");
  }
}

