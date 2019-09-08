var strength;
function lightbutton(){
  strength = 0.5;
  var url = "https://mit-blueprit-2019--veerg24.repl.co/last.html";
  window.location.href=url;
  console.log(strength)
}
function mediumbutton(){
  strength = 0.8;
  var url = "https://mit-blueprit-2019--veerg24.repl.co/last.html";
  window.location.href=url;
  console.log(strength)
}
function hardbutton(){
  strength = 1;
  var url = "https://mit-blueprit-2019--veerg24.repl.co/last.html";
  window.location.href=url;
  console.log(strength)
}

function move() {
  var x = document.getElementById("startbutton");
  x.style.display="none";
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 300);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
