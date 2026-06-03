let angulo = 0;
let fundoEstrelado, music; 

function preload(){
    music = loadSound("./audio/terra.mp3")
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

  music.play();
}

function draw() {
  image(fundoEstrelado, 0, 0);
  
  let cx = 200; // Centro X
  let cy = 200; // Centro y

  textSize(100);
  text("🌎", cx - 60, cy + 50);
  
  textSize(40);
  let ç = 150 * cos(angulo * 0.5 + 5) + cx;
  let v = 150 * sin(angulo * 0.5 + 5) + cy;
  text("🌕", ç, v);
  

   // título
  fill(120, 220, 255);
  textSize(16);
  text("🌍 Terra", 175, 200 + 120);
  angulo += 0.05;
}


function mouseClicked(){
    window.location.href = 'index.html';
}

