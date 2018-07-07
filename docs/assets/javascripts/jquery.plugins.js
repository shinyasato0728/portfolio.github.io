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
