


$(document).ready(function(){
  $(window).scroll(function(){
    var prueba = $(this).scrollTop();
    
    if (prueba > 100) {
      $(".menubar").addClass("navegacion");
      $(".mostrar-modal").addClass("navegacion");
    }
      else if (prueba < 100) {
      $(".menubar").removeClass("navegacion");
      $(".mostrar-modal").removeClass("navegacion");
    }
  });

  $('.mostrar-modal').click(function(){
    $('.mostrar-modal').hide();
    $('.cerrar-modal').show(500);
  });
  
  $('.cerrar-modal').click(function(){
    $('.mostrar-modal').show(600);
    $('.cerrar-modal').hide(400);
  });
  

});




$(document).ready(function() {
    $('.grid_boton').click(function() {
            $('.hide_grid').show("fast");
            $('.hidden_grid').hide("fast");

    });
    $('.one_boton').click(function() {
            $('.hidden_grid').show("fast");
            $('.hide_grid').hide("fast");
    });
});