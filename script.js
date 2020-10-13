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

function element() {
  document.getelementbyid("dropButton")
}

function dropMenu() {
  element.classlist.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    var dropdowns = document.getElementsByClassName("dropMenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
