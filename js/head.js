/**
 * Insert some extra styles so non-js renderers can see the site by default and be unaffected by wow.js (which uses visibility: hidden on everything)
 * This also prevents flickering before document ready.
 */
(function(){
  var hiddenStyles = document.createElement('style'); 
  var head = document.head || document.getElementsByTagName('head')[0];
  var css = '.wow { visibility: hidden; }'+
            '#header { visibility: hidden; }';

  hiddenStyles.type = 'text/css';
  if( hiddenStyles.styleSheet ) {
    hiddenStyles.styleSheet.cssText = css;
  } else {
    hiddenStyles.appendChild(document.createTextNode(css));
  }
  head.appendChild(hiddenStyles);
})();