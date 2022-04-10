$(document).ready( function(){

  menuMovil();

  responsiveDomino();

  addCheckRoadmap();

  ocultarTopScroll();
  sliderFichas();



  
});

function sliderFichas(){
  var slideContainer = $('.slide-fichas-container');
  
  slideContainer.slick();
  
  $('.fma-card__image img').hide();
  $('.slick-active').find('.fma-card img').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.fma-card img').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.fma-card img').fadeIn(200);
  });

  let prevbtn = $(slideContainer).find('.slick-prev');
  let nextbtn = $(slideContainer).find('.slick-next');

  prevbtn.prop('id','prevBtnFicha');
  nextbtn.prop('id','nextBtnFicha');

  prevbtn.hide();
  nextbtn.hide();
}

function esVisible(elem){
    /* Ventana de Visualización*/
    var posTopView = $(window).scrollTop();
    var posButView = posTopView + $(window).height();
    /* Elemento a validar*/
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    /* Comparamos los dos valores tanto del elemento como de la ventana*/
    return ((elemBottom < posButView && elemBottom > posTopView) || (elemTop >posTopView && elemTop< posButView));
}

//cambia el tamaño de los domino dependiendo de las pantallas
function responsiveDomino(){

  if ( $(window).width() <= 1050 ) {
    $('.domino-container .domino').addClass('sm');
  }else{
    $('.domino-container .domino').removeClass('sm');
  }

  $(window).resize(function(event) {
    if ( $(window).width() <= 1050 ) {
      $('.domino-container .domino').addClass('sm');
    }else{
      $('.domino-container .domino').removeClass('sm');
    }

  });
  
}


function menuMovil(){
  /* abrir y cerrar menu*/
  $('.btn-open').click(function() {
    $('nav').removeClass('close');
    $('nav').addClass('open');
  });

  $('.btn-close').click(function() {
    $('nav').removeClass('open');
    $('nav').addClass('close');
  });

  /* cerrar menu cuando pulse una opcion*/

  $('.menu li').click(function() {
    $('nav').removeClass('open');
    $('nav').addClass('close');
  });
}

function addCheckRoadmap(){
  $('.roadmapBox.right .stage-way.marked').append(' <i class="fas fa-check"></i>')
  $('.roadmapBox.txt-right .stage-way.marked').prepend(' <i class="fas fa-check"></i> ')

}

function ocultarTopScroll(){
  //Comprueba el scroll de la pantalla
  //muestra el elemento para hacer top en la pagina
  let topscroll = $('#topscroll');

  $(window).scroll(function() {
    
    if ( $(window).scrollTop() < 1) {
      topscroll.removeClass('visible');
      topscroll.addClass('oculto');
    }else{
      topscroll.removeClass('oculto');
      topscroll.addClass('visible');
    }

  });
}

function copyToClipboard(id_elemento){
  // Crea un campo de texto "oculto"
  let aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);

}

function copied(id_elemento){
  let e = $('#'+id_elemento+' label');
  e.removeClass('oculto')
  setTimeout(function(){
    e.addClass('oculto')
  },2500);

}

function clickBtn(e){
  $(e).addClass('btn-clicked');
  setTimeout(function(){
    $(e).removeClass('btn-clicked')
  },200);
}