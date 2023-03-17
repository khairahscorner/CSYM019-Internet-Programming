function shiftLeft() {
  let el = document.getElementById("circle");
  var positionLeft = el.offsetLeft;
  el.style.left = positionLeft - 10 + "px";
}

function shiftUp() {
  let el = document.getElementById("circle");
  var positionUp = el.offsetTop;
  el.style.top = positionUp - 10 + "px";
}

function shiftRight() {
  let el = document.getElementById("circle");
  var positionLeft = el.offsetLeft;
  el.style.left = positionLeft + 10 + "px";
}

function shiftDown() {
  let el = document.getElementById("circle");
  var positionUp = el.offsetTop;
  el.style.top = positionUp + 10 + "px";
}

function leftIntervalFunc() {
  setInterval(shiftLeft, 1000);
}

function topIntervalFunc() {
  setInterval(shiftUp, 1000);
}

var timer = 0;

function myKeyDownInterval(e) {
  clearInterval(timer);

  if (e.keyCode == 37) {
    timer = setInterval(shiftLeft, 1000);
  } else if (e.keyCode == 38) {
    timer = setInterval(shiftUp, 1000);
  } else if (e.keyCode == 39) {
    timer = setInterval(shiftRight, 1000);
  } else if (e.keyCode == 40) {
    timer = setInterval(shiftDown, 1000);
  }
}

function myKeyDown(e) {
  let el = document.getElementById("circle");

  if (e.keyCode == 37) {
    var positionLeft = el.offsetLeft;
    el.style.left = positionLeft - 10 + "px";
  } else if (e.keyCode == 38) {
    var positionUp = el.offsetTop;
    el.style.top = positionUp - 10 + "px";
  } else if (e.keyCode == 39) {
    var positionLeft = el.offsetLeft;
    el.style.left = positionLeft + 10 + "px";
  } else if (e.keyCode == 40) {
    var positionUp = el.offsetTop;
    el.style.top = positionUp + 10 + "px";
  }
}

function myLoadEvent() {
  document.addEventListener("keydown", myKeyDownInterval);
}

document.addEventListener("DOMContentLoaded", myLoadEvent);
