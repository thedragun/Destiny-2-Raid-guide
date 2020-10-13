var button = document.getElementById("toTop");

function scrollFunction() {

if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
   button.style.display = "block";
 } else {
   button.style.display = "none";
 }
}

document.body.onscroll = scrollFunction();

function upTop() {document.documentElement.scrollTop = 0;}

function change() {
  var x = document.getElementById("dropMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
