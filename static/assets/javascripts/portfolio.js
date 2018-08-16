import $ from 'jquery';

require('./modules/Particles');
require('./modules/Lazysizes');

var userAgent = window.navigator.userAgent.toLowerCase();
var ie = document.getElementById("ie__message");
ie.style.display ="none";
if(userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1) {
  ie.classList.add('ie__alert');
  ie.style.display ="block";
};

$(".click__sound").on("click", function() {
  var id = 'sound';
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' ) {
    document.getElementById( id ).currentTime = 0;
  }
  document.getElementById( id ).play();
});

document.addEventListener('lazybeforeunveil', function(e){
  var bg = e.target.getAttribute('data-bg');
  if(bg){
    e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});
