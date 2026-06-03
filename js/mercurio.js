let fundoEstrelado;
let music;
let angulo = 0;

const mercurioX = 200;
const mercurioY = 200;
const mercurioR = 55;

function preload(){
  music = loadSound("../audio/mercurio.mp3");
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

  music.play();
  music.loop();
}

function draw(){

  image(fundoEstrelado, 0, 0);
  push();
  translate(mercurioX, mercurioY);
  rotate(angulo * 0.25);

  // brilho quente do Sol
  noStroke();
  fill(255, 180, 80, 18);
  ellipse(0, 0, 190);
  fill(255, 140, 60, 25);
  ellipse(0, 0, 160);

  // planeta
  fill(150, 140, 135);
  ellipse(0,0,mercurioR * 2);

  // sombra lateral
  fill(70, 60, 60, 90);
  arc( 0,0,mercurioR * 2,mercurioR * 2,-HALF_PI, HALF_PI);

  // crateras
  fill(100, 95, 90);
  ellipse(-18, -10, 18);
  ellipse(22, 15, 14);
  ellipse(8, -25, 10);
  ellipse(-25, 25, 12);
  ellipse(0, 10, 8);

  // pequenas crateras
  fill(80, 75, 70, 100);
  ellipse(-10, 5, 5);
  ellipse(20, -8, 4);
  ellipse(-5, -20, 3);

  // brilho da luz solar
  fill(255, 255, 255, 25);

  arc(-10,-10, 80, 80, PI, TWO_PI);
  pop();

  // nome
  noStroke();
  fill(220);
  textAlign(CENTER);
  textSize(16);
  text("🟤 MERCÚRIO", mercurioX, mercurioY + 100);

  angulo += 0.01;
}

function mouseClicked(){
  music.stop();
  window.location.href = "index.html";
}
