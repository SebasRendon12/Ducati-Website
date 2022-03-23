let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

// Barra Menu
btnMenu.addEventListener('click', () => {

  document.querySelector('.btn-menu i').classList.toggle('fa-times');

  if (activador) {
    menu.style.left = "0";
    menu.style.transition = "0.5s"
    activador = false;
  }
  else{
    activador = true;
    menu.style.left = "-100%";
    menu.style.transition = "0.5s"
  }

});

//Intercalar clase activo
let enlaces = document.querySelectorAll('.lists li button');
enlaces.forEach((Element) => {

  Element.addEventListener('click', (evento) => {

    enlaces.forEach((link) => {

      link.classList.remove('activo');

    });

    event.target.classList.add('activo');

  });

});

//Efectos  scroll
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');
window.onscroll = () => {

  let currentScrollPos = window.pageYOffset;
  //Mostrar y ocultar menú
  if (prevScrollPos > currentScrollPos) {
    containerMenu.style.top = "0";
    containerMenu.style.transition = "0.5s";
  }
  else{
    containerMenu.style.top = "-60px";
    containerMenu.style.transition = "0.5s";
  }
  prevScrollPos = currentScrollPos;

  //Mostrar y ocultar scroll Estilos
  let arriba = window.pageYOffset;
  if (arriba<=400) {
    containerMenu.style.borderBottom= "none"
    goTop.style.right = "-100%";
  } else {
    containerMenu.style.borderBottom= "3px solid #ff0101"
    goTop.style.right = "0";
    goTop.style.transition = "0.5s"
  }

};

goTop.addEventListener('click', () => {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});

let verAbajo = document.querySelector('#abajo');
verAbajo.addEventListener('click', () => {

  document.body.scrollTop =750;
  document.documentElement.scrollTop =750;
});

let inicio = document.querySelector('#inicio');
inicio.addEventListener('click', () => {

  document.body.scrollTop =0;
  document.documentElement.scrollTop =0;
});

let nosotros = document.querySelector('#nosotros');
nosotros.addEventListener('click', () => {

  document.body.scrollTop =750;
  document.documentElement.scrollTop =750;
});

let servicios = document.querySelector('#servicios');
servicios.addEventListener('click', () => {

  document.body.scrollTop =1630;
  document.documentElement.scrollTop =1630;
});

let motos = document.querySelector('#motos');
motos.addEventListener('click', () => {

  document.body.scrollTop =2800;
  document.documentElement.scrollTop =2800;
});

let contacto = document.querySelector('#contacto');
contacto.addEventListener('click', () => {

  document.body.scrollTop =5280;
  document.documentElement.scrollTop =5280;
});