const $version=$('#version');

function osMassege () {
  var inf = navigator.platform;

  if (inf.search("Win") != -1) {
    return "Windows";
  }

  else if (inf.search("Mac") != -1){
    return "MacOS";
  }

  else if (inf.search("Lin") != -1){
    return "LinuxOS";
  }
}
$version.on('click',function () {
  let setPlatform = document.getElementById('platform');
  setPlatform.innerText = osMassege ();
  $('.download-message').show();
  $version.hide();
});
