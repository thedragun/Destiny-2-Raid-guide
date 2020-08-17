var button = document.getElementById("toTop");

function scrollFunction() {

if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
   button.style.display = "block";
 } else {
   button.style.display = "none";
 }
}

window.onscroll = function() {scrollFunction()};

function upTop() {document.documentElement.scrollTop = 0;}