$(function () {

$('#header').midnight({defaultClass: 'header-default'});
$('#header').css('visibility', 'visible');
$('#header').headroom({
  classes : {
    // when element is initialised
    initial : "headroom",
    // when scrolling up
    pinned : "header-pinned",
    // when scrolling down
    unpinned : "header-unpinned",
    // when above offset
    top : "header-top",
    // when below offset
    notTop : "header-not-top"
  }
});

/**
 * This is used when a page is loaded via pjax or pushstate, or else the scripts won't run on some occasions.
 */
var runOnLoadScripts = function() {
  var $scripts = $('#content script[type=onload]');
  $scripts.each(function () {
    eval(this.innerHTML);
  });

  WowHandler.init();
  $('#header').midnight('refresh');

  window.scrollBy(0,1);
  window.scrollBy(0,-1);

  $('[data-preload-gif]').each(function(){
    $(this).css('background-image', 'url("'+ $(this).data('preload-gif') +'")');
  });

};


$('body').on('mouseenter', '.animated-hero-trigger', function() {
  $('.hero-animated-gif').addClass('active');
}).on('mouseleave', '.animated-hero-trigger', function() {
  $('.hero-animated-gif').removeClass('active');
});

window.WowHandler = new WOW({
  offset: Math.min($(window).height() * 0.1, 80)
});

// Detect window resizes and update the .full-height class.
// This is to prevent issues with the chrome nav bar disappearing (which causes a reflow)
var lastWindowSize = { width: $(window).width(), height: $(window).height() };
lastWindowSize.ratio = lastWindowSize.width / lastWindowSize.height;
$('.full-height').css('height', lastWindowSize.height +'px');

$(window).resize(function(){
  var newWindowSize = { width: $(window).width(), height: $(window).height() };
  newWindowSize.ratio = lastWindowSize.width / lastWindowSize.height;

  // If the nav disappears (or the screen rotates), update the height of the full-height elements.
  if( Math.abs(lastWindowSize.height - newWindowSize.height) >= 60 ) {
    $('.full-height').css('height', newWindowSize.height +'px');
    lastWindowSize = newWindowSize;
  }
}).trigger('resize');

function updateNavigation() {
  $('#menu a').removeClass('active');

  var path = document.location.pathname;
  if( path === '/xapo' || path === '/mercadolibre' || path === '/lemon' ) {
    path = '/works';
  }

  $('#menu a').filter('[href="'+path+'"]').addClass('active');

}
updateNavigation();


FastClick.attach(document.body);

smoothScroll.init({
  speed: 600,
  easing: 'easeInOutQuart',
  updateURL: false,
  offset: 0
});

runOnLoadScripts();


});
