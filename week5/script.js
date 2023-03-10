function loadFunc() {
  const el = document.getElementById("circle");
  el.addEventListener("click", showAlert);
  el.style.backgroundColor = "blue";
  el.style.opacity = 0.5;
}

function showAlert() {
  alert("The button was pressed");
}

document.addEventListener("DOMContentLoaded", loadFunc);
