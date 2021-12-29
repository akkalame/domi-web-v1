$(document).ready( function(){
  //Comprueba el scroll de la pantalla
  //muestra el elemento para hacer top en la pagina
  window.onscroll = function() {
    let header = $('#mainheader');
    let r = esVisible(header);

    if (r){
      $('#topscroll').hide();
    }else{
      $('#topscroll').show();
    }
  };

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