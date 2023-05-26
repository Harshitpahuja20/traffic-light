let container = document.createElement("div");
container.className = "container";
document.body.append(container);
let lights = document.createElement("div");
lights.className = "lights";
let box1 = document.createElement("div");
box1.className = "box1 box";
let box2 = document.createElement("div");
box2.className = "box2 box";
let box3 = document.createElement("div");
box3.className = "box3 box";
let timer = document.createElement("div");
timer.className = "timer box";
lights.append(box1, box2, box3);
container.append(timer, lights);

let redlight, yellowlight, greenlight;~

function check() {
  if (redlight) {
    (yellowlight = false), (greenlight = false);
    box1.style.filter = "brightness(100%)";
    box2.style.filter = "brightness(30%)";
    box3.style.filter = "brightness(40%)";
  }
  if (yellowlight) {
    (redlight = false), (greenlight = false);
    box2.style.filter = "brightness(100%)";
    box1.style.filter = "brightness(40%)";
    box3.style.filter = "brightness(40%)";
  }
  if (greenlight) {
    (yellowlight = false), (redlight = false);
    box3.style.filter = "brightness(100%)";
    box2.style.filter = "brightness(40%)";
    box1.style.filter = "brightness(40%)";
  }
}

function redF() {
  redlight = true;
  check();
  let i = 31;
  const run = setInterval(() => {
    i--;
    timer.innerHTML = i;
    if (i == 0) {
      clearInterval(run);
      redlight = false;
      yellowlight = true;
      yellowF();
    }}, 1000)};

function yellowF() {
  yellowlight = true;
  check();
  let i = 6;
  const run = setInterval(() => {
    i--;
    timer.innerHTML = i;
    if (i == 0) {
      clearInterval(run);
      yellowlight = false;
      greenlight = true;
      greenF();
    }}, 1000)};

function greenF() {
  greenlight = true;
  check();
  let i = 31;
  const run = setInterval(() => {
    i--;
    timer.innerHTML = i;
    if (i == 0) {
      clearInterval(run);
      greenlight = false;
      redlight = true;
      redF();
    }
  }, 1000);
}
redF();