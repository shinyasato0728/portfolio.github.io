import $ from 'jquery';
import objectFitImages from 'object-fit-images';

$(function () {
  objectFitImages( 'img.ofi' );
});

function sound() {
  var id = 'sound';
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' ) {
    document.getElementById( id ).currentTime = 0;
  }
  document.getElementById( id ).play();
}

var userAgent = window.navigator.userAgent.toLowerCase();
var ie = document.getElementById("ie__message");
ie.style.display ="none";

if(userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1) {
  ie.classList.add('ie__alert');
  ie.style.display ="block";
}
