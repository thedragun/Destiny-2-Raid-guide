
function scrollFunction() {
var topPage = document.documentElement.scrollTop;
var button = document.getElementById("toTop");
if (topPage > 30 || topPage > 30) {
   button.style.display = "block";
 } else {
   button.style.display = "none";
 }
}

document.body.onscroll = scrollFunction();

function upTop() {document.documentElement.scrollTop = 0;}

function itWorks() {
  var x2 = document.getElementById("dropMenu");
  if (x2.style.display === "none") {
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
  }
}
