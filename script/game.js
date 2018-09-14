


var canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

canvas.style.display = "none";

var context = canvas.getContext("2d");

var fox = new Image(); //белка

var bg = new Image(); //земля

var pipe = new Image(); // копья снизу деревянные

var pipeIron = new Image(); //копья снизу железные

var pipeUp = new Image(); //копья сверху

var foxZerkal = new Image(); // белка отраженная в другую сторону

var foxDown = new Image(); //белка, опущенная вниз без огня

var fire = new Image(); //спрайт огня


fox.src = "img/squirrel.png";
bg.src = "img/fon_bg.gif";
pipe.src = "img/PipeSpears.gif";
pipeIron.src = "img/PipeSpearsIron.gif"
pipeUp.src = "img/pipeUp.gif";
foxZerkal.src = "img/squirrelZerkal.png";
foxDown.src = "img/squirrel.gif";
fire.src="img/fire.gif";

var xPosFox = 10;
var yPoxFox = canvas.height - bg.height;
function draw() {
  context.drawImage(bg, 0, canvas.height - bg.height);

}
pipe.onload = draw;
window.onresize = function (event) {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  context.drawImage(bg, 0, canvas.height - bg.height);

};





var mass = {
  foxSpeed: 0,
  tickCount: 0,
  stepFox: 0,
  stepFire:0,
  foxSpeedOnMap: 320,
  JumpFox: canvas.height - bg.height,
  counterJumpFox: 0,
 
}


//тач события
if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  var leftTouch = document.getElementById("touchLeft");
  var topTouch = document.getElementById("touchTop");
  var RightTouch = document.getElementById("touchRight");




  leftTouch.ontouchstart = function (e) {

    e = event || window.event;
    mass.foxSpeed = 1;
  }

  leftTouch.ontouchend = function (e) {

    e = event || window.event;
    mass.foxSpeed = 0;
  }
  RightTouch.ontouchstart = function (e) {

    e = event || window.event;
    mass.foxSpeed = 2;
  }
  RightTouch.ontouchend = function (e) {

    e = event || window.event;
    mass.foxSpeed = 0;
  }

  topTouch.ontouchstart = function (e) {

    e = event || window.event;
    mass.foxSpeed = 3;
  }
  topTouch.ontouchend = function (e) {

    e = event || window.event;
    mass.foxSpeed = 4;
  }
}





//1-бег в лево 2-бег в право 3- прыжок вверх 4-опускание вниз
document.body.onkeydown = function (e) { //событие нажатия кнопок
  e = event || window.event;

  if (e.keyCode == 37 || e.keyCode == 65) {
    if (mass.foxSpeed == 3) { }
    else if (mass.foxSpeed == 4) { }
    else {
      mass.foxSpeed = 1;
    }
  }
  if (e.keyCode == 39 || e.keyCode == 68) {
    //проверка летил ли сечас белка
    if (mass.foxSpeed == 3) { }
    else if (mass.foxSpeed == 4) { }
    else {
      mass.foxSpeed = 2;
    }
  }
  if (e.keyCode == 38 || e.keyCode == 87) {

    mass.foxSpeed = 3;

  }
  if (e.keyCode == 83 || e.keyCode == 40) {
    // mass.foxSpeed = 1111;
  }

};


document.body.onkeyup = function (e) { //событие отпускания кнопок
  e = event || window.event;

  if (e.keyCode == 37 || e.keyCode == 65) {
    if (mass.foxSpeed == 3) { }
    else if (mass.foxSpeed == 4) { }
    else {
      mass.foxSpeed = 0;
    }
  }
  if (e.keyCode == 39 || e.keyCode == 68) {
    if (mass.foxSpeed == 3) { }
    else if (mass.foxSpeed == 4) { }
    else {
      mass.foxSpeed = 0;
    }
  }
  if (e.keyCode == 38 || e.keyCode == 87) {
    mass.foxSpeed = 4;
  }
  if (e.keyCode == 83 || e.keyCode == 40) {
    mass.foxSpeed = 0;
  }

};
window.onbeforeunload = function () {
  return "Данные не сохранены. Точно перейти?";
};

