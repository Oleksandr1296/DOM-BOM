const $version=$('#version');
$version.on('click',function () {
  var platform = navigator.platform;
  let setPlatform = document.getElementById('platform');
  setPlatform.innerText = platform;
  $('.download-message').show();
  $version.hide();
});
