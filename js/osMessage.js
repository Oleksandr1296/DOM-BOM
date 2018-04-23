var navigatorMessageMap = {
  'macos': 'macos',
  'linux': 'linux',
  'win': 'windows'
};
const $version=$('#version');
$version.on('click',function () {
  var platform = navigator.platform.toLowerCase();
  for (let key in navigatorMessageMap){
      if (platform.includes(key)) {
        var $sowMasseg = $("div[data-version|='"+ key +"']");
        $sowMasseg.show();
        $version.hide();
      }
  }
});
