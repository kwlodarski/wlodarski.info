$(document).ready( function() {
  $('.left-black, .right-black').addClass('open');
  $('.container').fadeIn(1000);
  setTimeout(function(){
    $('.svg-wrapper').addClass('active');
  }, 2000);
  setTimeout(function(){
    $('.container').addClass('move');
  }, 4000);
  setTimeout(function(){
    $('.logo span').addClass('visible');
  }, 6000);
});