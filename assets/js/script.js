$(document).ready(function() {
  function slide(num){
    if( $('.container2').css('marginLeft') == '-2400px' )
      $('.container2').css('marginLeft', '0px');
      else
      $('.container2').animate({marginLeft: num});
    }
  var autoslide = setInterval(function(){
    slide('-=400px')
  }, 1000);
});
