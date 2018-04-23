var getCurrentLanguage = function () {
  if (localStorage.getItem("language") === null) {
    var defaultLanguage = 'ua';
    localStorage.setItem("language",defaultLanguage);
  }else
  {
    defaultLanguage = localStorage.getItem('language');
  }
  return defaultLanguage;
};
let currentLang = getCurrentLanguage().toLowerCase();
var langEls = document.getElementsByClassName('lang-' + currentLang);

for (var i=0; i<langEls.length; i++) {
  let langEl = langEls[i];
  langEl.classList.add('visible');
}
document.getElementById(currentLang).checked = true;
// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')
$save.addEventListener('click', function() {
  let lastLangEls = document.getElementsByClassName('lang-' + localStorage.getItem("language"));
  for (var i=0; i<lastLangEls.length; i++) {
    let langEl = lastLangEls[i];
    langEl.classList.remove('visible');
  }
  alert("Поточна мова сторінки: "+ $("input:radio:checked").val().toUpperCase());
  let newlangEls = document.getElementsByClassName('lang-' + $("input:radio:checked").val());
  for (var i=0; i<newlangEls.length; i++) {
    var langEl = newlangEls[i];
    langEl.classList.add('visible');
  }
  localStorage.setItem("language",$("input:radio:checked").val());
});

$('#languages input').on('change', function() {
  let lastLangEls = document.getElementsByClassName('lang');
  for (var i=0; i<lastLangEls.length; i++) {
    let langEl = lastLangEls[i];
    langEl.classList.remove('visible');
  }
  let newlangEls = document.getElementsByClassName('lang-' + $("input:radio:checked").val());
  for (var i=0; i<newlangEls.length; i++) {
    var langEl = newlangEls[i];
    langEl.classList.add('visible');
  }
});