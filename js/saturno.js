let angulo = 0;
let fundoEstrelado, music; 

let saturnoX = 200;
let saturnoY = 200; 
let saturnoR = 70;

function preload(){
    music = loadSound("./audio/saturno.mp3")
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
  for(let cont = 0; cont < 400; cont++){
    fundoEstrelado.point(random(400),random(400));
  }


  music.loop();
}


function draw(){
  image(fundoEstrelado, 0, 0);
  push();
  translate(saturnoX, saturnoY);
  rotate(angulo * 0.2);
  // planeta
  noStroke();
  fill(210, 170, 90);
  ellipse(0, 0, saturnoR * 2, saturnoR * 2);
    
  // faixas do planeta
  fill(190, 140, 70);
  ellipse(0, -15, 120, 10);
  ellipse(0, 10, 130, 12);
  ellipse(0, 30, 100, 8);

  // anéis
  noFill();
  stroke(210, 190, 140, 200);
  strokeWeight(8);
  ellipse(0, 0, 200, 70,30);
  stroke(240, 220, 170, 120,30);
  strokeWeight(3);
  ellipse(0, 0, 230, 80, 30);
  pop();

  // título
  fill(255, 220, 150);
  textAlign(CENTER);
  textSize(16);
  text("🪐 SATURNO", saturnoX, saturnoY + 120);
  angulo += 0.01;
}


function mouseClicked(){
    window.location.href = 'index.html';
}

