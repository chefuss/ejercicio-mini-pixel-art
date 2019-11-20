//cargar nuestro jquery solamente cuando el DOM esté cargado.

$(document).ready(function() {
  //seleccionamos nuestros elementos del dom.
  var $grilla = $('#grilla');
  var $color = $('#color');
  var $ancho = $('#ancho');
  var $alto = $('#alto');
  var mouseApretado = false;

  $('.grid-form').submit(function(event) {
    event.preventDefault();

    var $anchoGrilla = $ancho.val();
    var $altoGrilla = $alto.val();

    $grilla.html(''); //limpiamos la grilla para no tener que recargar.

    crearGrilla($anchoGrilla, $altoGrilla);
    escuchamosClickEnLaGrilla();
  })
  function crearGrilla(ancho, alto) {
    $grilla.css('max-width', ancho * 30)
    for (var i = 0; i < ancho; i++) {
      var pixel = $('<div>');
      pixel.addClass('pixel');
      $grilla.append(pixel);
    }
    for (var j = 0; j < alto * (alto - 1); j++) {
      var pixel = $("<div>");
      pixel.addClass("pixel");
      $grilla.append(pixel);
    }
  }

  function escuchamosClickEnLaGrilla() {
    $('.pixel').click(function(event) {
      var color = $color.val();
      $(event.currentTarget).css("background-color", color);
    })
    $('.pixel').mousedown(mouseActivo);
    $('.pixel').mouseup(mouseInactivo);
    $('.pixel').mousemove(pintar);
    $grilla.mouseleave(mouseInactivo);
  }
  function mouseActivo() {
    mouseApretado = true;
  }
  function mouseInactivo() {
    mouseApretado = false;
  }
  function pintar() {
    if (mouseApretado) {
      //console.log($(this));
      $(this).css("background-color", $color.val());
    }
  }
});