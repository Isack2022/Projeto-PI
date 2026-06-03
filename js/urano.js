let fundoEstrelado;
let music;
let angulo = 0;

const uranoX = 200;
const uranoY = 200;
const uranoR = 75;

function preload(){
  music = loadSound("../audio/urano.mp3");
}

function setup(){

  const cnv = createCanvas(400, 400);
  cnv.parent(document.querySelector("main"));
  cnv.style("width", "min(90vw, 70vh)");
  cnv.style("height", "min(90vw, 70vh)");
  fundoEstrelado = createGraphics(400, 400);
  fundoEstrelado.background(0);

  for(let i = 0; i < 500; i++){
    fundoEstrelado.stroke(random(180,255));
    fundoEstrelado.strokeWeight(random(1,3));

    fundoEstrelado.point(random(400),random(400));
  }

  music.loop();
}

function draw(){

  image(fundoEstrelado, 0, 0);

  push();
  translate(uranoX, uranoY);
  rotate(angulo * 0.15);

  // brilho atmosférico
  noStroke();

  fill(100, 255, 255, 20);

  ellipse(0, 0, 260);

  fill(120, 220, 255, 30);

  ellipse(0, 0, 230);

  // planeta
  fill(120, 220, 255);
  ellipse(0,0,uranoR * 2);

  // sombras
  fill(40, 120, 180, 80);

  arc(0,0,uranoR * 2,uranoR * 2,-HALF_PI,HALF_PI);

  // faixas atmosféricas
  fill(180, 255, 255, 40);
  ellipse(0, -20, 120, 12);
  ellipse(0, 10, 140, 10);
  ellipse(0, 30, 110, 8);

  // brilho superior
  fill(255, 255, 255, 35);
  arc(-15,-15,110,110,PI,TWO_PI);

  // anel fino
  noFill();
  stroke(180, 255, 255, 70);
  strokeWeight(3);
  ellipse(0, 0, 190, 45);
  pop();

  // título
  noStroke();
  fill(180, 255, 255);
  textAlign(CENTER);
  textSize(16);
  text("🌀 URANO", uranoX, uranoY + 120);
  angulo += 0.01;
}

function mouseClicked(){
  music.stop();
  window.location.href = "index.html";
}

