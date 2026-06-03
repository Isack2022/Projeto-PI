let angulo = 0;
let fundoEstrelado;
let music;
let marteX = 200;
let marteY = 200;
let marteR = 80;

function preload() {
  music = loadSound("../audio/marte.mp3")
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
    fundoEstrelado.point(random(400),random(400));
  }
  music.loop();
}



function draw() {
  image(fundoEstrelado, 0, 0);

  // rotação do planeta
  push();
  translate(marteX, marteY);
  rotate(angulo * 0.3);

  // brilho externo
  noStroke();
  fill(255, 80, 40, 30);
  ellipse(0, 0, marteR * 2.6);

  // corpo principal
  fill(180, 50, 20);
  ellipse(0, 0, marteR * 2);

  // sombra lateral
  fill(90, 20, 10, 90);

  arc(0, 0,  marteR * 2,marteR * 2, TWO_PI, TWO_PI);

  // manchas/crateras
  fill(140, 30, 10);
  ellipse(-20, 10, 30, 25);
  ellipse(25, -15, 20, 18);
  ellipse(10, 30, 15, 12);
  ellipse(-30, -25, 12, 10);

  // crateras menores
  fill(100, 20, 10, 120);
  ellipse(-10, -5, 8, 8);
  ellipse(35, 15, 6, 6);
  ellipse(-25, 28, 5, 5);

  // tempestade de areia
  fill(255, 120, 60, 40);
  ellipse(10, -10, 90, 25);

  // calota polar
  fill(255, 240, 230, 180);
  ellipse(0, -marteR * 0.78, 35,14);

  // brilho da luz
  fill(255, 180, 120, 50);
  ellipse(-25, -25, 40);
  pop();

  // título
  fill(233, 68, 88);
  textSize(16);
  text("🔴 Marte", 175, 200 + 120);

  angulo += 0.01;
}





function mouseClicked(){
  music.stop();
  window.location.href = 'index.html';
}

