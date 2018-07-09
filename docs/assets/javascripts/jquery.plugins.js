var isMSIE = /*@cc_on!@*/false;
if (isMSIE) {
  if(confirm('このポートフォリオサイトはInternet Explorerに対応しておりません。本サイトを閲覧するためにはGoogle Chrome,Mozilla Firefox等のモダンなブラウザをご利用ください(無料)。対応ブラウザのダウンロードページに移動しますか？')==true) {
    location.href="http://www.google.co.jp/chrome/intl/ja/landing_ff.html";
  } else {
  }
}

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
