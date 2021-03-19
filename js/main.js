$(document).ready(function (){
  $('#app').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.webm',
    ogv: 'video/video.ogv',
    poster: 'img/cover-image.jpg'
  });
});


$('.button-primary').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});