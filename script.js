/*
function yasmin(e) {
    e.stopPropagation()
    let myElement = document.createElement('img');
    document.getElementById('yasminBox').appendChild(myElement);
    myElement.src = 'yasmin.gif';
}

let yasminButton = document.getElementById('yasmin');
yasminButton.addEventListener('click', yasmin);


  function moveCircle(e) {
    let circle = document.getElementById('circle');
    circle.style.top = e.clientY + 'px';
    circle.style.left = e.clientX + 'px';
}

window.addEventListener('mousemove', moveCircle);

*/

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
