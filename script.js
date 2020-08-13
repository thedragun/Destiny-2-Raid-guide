var scrollButton = document.getelementbyid("toTop");

window.onscroll = function() {scrollFunction()};

function scrollfunction() {

if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
   scrollButton.style.display: = "block";
 } else {
   scrollButton.style.display = "none";
 }
}

function upTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}