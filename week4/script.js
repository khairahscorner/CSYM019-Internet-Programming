function print5() {
  for (let i = 0; i < 5; i++) {
    // alert(i);
    console.log(i);
  }
}

print5();
print5();

function myLoadFunction() {
  var element = document.getElementById("pageheading");
  element.firstChild.nodeValue = "New Heading";

  var el2 = document.getElementById("paragraph");

  el2.addEventListener("click", myClickFunction);
}
function myClickFunction() {
  var element = document.getElementById("paragraph");
  element.firstChild.nodeValue = "New Paragraph";
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
