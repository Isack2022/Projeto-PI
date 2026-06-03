let angulo = 0;
let fundoEstrelado;
let imgJupiter;
let imgIo;
let imgEuropa;
let imgGanimedes;
let imgCalisto, music;

function preload() {
  imgJupiter = loadImage("./img/Jupiter.png");
  imgIo = loadImage("./img/Io.png");
  imgEuropa = loadImage("./img/Europa.png");
  imgGanimedes = loadImage("./img/Ganimedes.png");
  imgCalisto = loadImage("./img/Calisto.png");
  music = loadSound("./audio/jupiter.mp3")
}

function setup() {
  const cnv = createCanvas(400, 400);
  cnv.parent(document.querySelector("main"));
  cnv.style("width", "min(90vw, 70vh)");
  cnv.style("height", "min(90vw, 70vh)");
  fundoEstrelado = createGraphics(400, 400);
  fundoEstrelado.background(0);
  fundoEstrelado.stroke(255);
  fundoEstrelado.strokeWeight(1.9);

  for (let i = 0; i < 400; i++) {
    fundoEstrelado.point(random(400), random(400));
  }
  music.loop();
}

function draw() {
  image(fundoEstrelado, 0, 0);

  let centroX = 200;
  let centroY = 200;

  imageMode(CENTER);
  image(imgJupiter, centroX, centroY, 200, 200);

  let ioX = 115 * cos(angulo * 1.5) + centroX;
  let ioY = 115 * sin(angulo * 1.5) + centroY;
  image(imgIo, ioX, ioY, 12, 12);

  let europaX = 135 * cos(angulo * 1.1) + centroX;
  let europaY = 135 * sin(angulo * 1.1) + centroY;
  image(imgEuropa, europaX, europaY, 10, 10);

  let ganimedX = 155 * cos(angulo * 0.8) + centroX;
  let ganimedY = 155 * sin(angulo * 0.8) + centroY;
  image(imgGanimedes, ganimedX, ganimedY, 18, 18);

  let calistoX = 180 * cos(angulo * 0.5) + centroX;
  let calistoY = 180 * sin(angulo * 0.5) + centroY;
  image(imgCalisto, calistoX, calistoY, 15, 15);

  imageMode(CORNER);

  // título
  fill(227, 151, 100);
  textSize(16);
  text("🟠 Júpiter", 175, 200 + 120);
  angulo += 0.02;
}

function mouseClicked(){
    window.location.href = 'index.html';
}
