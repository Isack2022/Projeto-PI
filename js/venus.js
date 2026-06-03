let fundoEstrelado;
let imgVenus, music;

function preload() {
  imgVenus = loadImage("../img/venus.png");
  music =  loadSound("../audio/venus.mp3")
}

function setup() {
    const cnv = createCanvas(400, 400);
    cnv.parent(document.querySelector("main"));
    cnv.style("width", "min(90vw, 70vh)");
    cnv.style("height", "min(90vw, 70vh)");
    fundoEstrelado = createGraphics(400, 400);
    fundoEstrelado.background(0);
    fundoEstrelado.stroke(255);
    fundoEstrelado.strokeWeight(1.5);
    music.loop();

    for (let i = 0; i < 400; i++) {
        fundoEstrelado.point(random(400), random(400));
    }
}


function draw() {
  image(fundoEstrelado, 0, 0);

  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.002);
  imageMode(CENTER);

  // brilho/coloração do planeta
  noStroke();

  fill(255, 140, 0, 25);
  ellipse(0, 0, 340);
  fill(255, 180, 50, 35);
  ellipse(0, 0, 320);
  fill(255, 220, 120, 20);
  ellipse(0, 0, 300);

  // planeta
  image(imgVenus, 0, 0, 300, 300);

  pop();
}

function mouseClicked(){
  music.stop();
  window.location.href = 'index.html';
}

