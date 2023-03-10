function loadFunc() {
  let el = document.getElementById("circle");
  el.addEventListener("click", showAlert);
  el.style.backgroundColor = "blue";
  el.style.opacity = 1.0;
}

function showAlert() {
  // alert("The button was pressed");
  let el = document.getElementById("circle");
  var circleOpacity = parseFloat(el.style.opacity);

  el.style.opacity = circleOpacity - 0.2;
}

document.addEventListener("DOMContentLoaded", loadFunc);
