function loadFunc() {
  let el = document.getElementById("circle");
  // el.addEventListener("click", intervalFunc);
  el.addEventListener("click", intervalFunc);
  el.style.backgroundColor = "blue";
  el.style.opacity = 1.0;
}

function showAlert() {
  alert("The button was pressed");
}

function decreaseOpacity() {
  let el = document.getElementById("circle");
  var circleOpacity = parseFloat(el.style.opacity);

  el.style.opacity = circleOpacity - 0.2;
}

function intervalFunc() {
  // setInterval(decreaseOpacity, 1000);
  setInterval(shiftLeft, 1000);
}

function shiftLeft() {
  let el = document.getElementById("circle");
  var positionLeft = el.offsetLeft;
  el.style.left = positionLeft - 10 + "px";
}


document.addEventListener("DOMContentLoaded", loadFunc);
