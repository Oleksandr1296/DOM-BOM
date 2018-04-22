document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
  var el = document.getElementById('player');

  const KEYCODE_LEFT = 65;
  const KEYCODE_RIGHT = 68;
  const KEYCODE_UP = 87;
  const KEYCODE_DW = 83;
  const KEYCODE_SPASE = 32;

  if (e.keyCode == KEYCODE_LEFT) {
    if (parseInt( el.style.left) >0) {

      el.style.left = (parseInt(el.style.left) - 10) + 'px';
    }
    el.style.transform = 'rotate(-90deg)';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
     if (parseInt( el.style.left) <660) {
      el.style.left = (parseInt(el.style.left) + 10) + 'px';
    }
    el.style.transform = 'rotate(90deg)';
    }
  else if (e.keyCode == KEYCODE_UP ) {
    if (parseInt( el.style.top) >0) {
      el.style.top = (parseInt(el.style.top) - 10) + 'px';
    }
    el.style.transform = 'rotate(0deg)';
  }
  else if (e.keyCode == KEYCODE_DW ) {
    if (parseInt( el.style.top) <360) {
      el.style.top = (parseInt(el.style.top) + 10) + 'px';
    }
    el.style.transform = 'rotate(180deg)';

  }
}