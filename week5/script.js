function loadFunc() {
  const el = document.getElementById("circle");
  el.addEventListener("click", showAlert);
}

function showAlert() {
  alert("The button was pressed");
}

document.addEventListener("DOMContentLoaded", loadFunc);
