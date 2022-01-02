$(document).ready( function(){

  menuMovil();

  responsiveDomino();

  addCheckRoadmap();

  ocultarTopScroll();


  
});

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