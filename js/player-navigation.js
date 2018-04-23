document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';
var   positionTank = 'up';
var battleArena = document.querySelector('.arena-of-battle');


document.body.onkeydown = function (e) {
  var el = document.getElementById('player');
  const KEYCODE_LEFT = 65;
  const KEYCODE_RIGHT = 68;
  const KEYCODE_UP = 87;
  const KEYCODE_DW = 83;
  const KEYCODE_ENTR = 13;
  const WIDHT_ARENA =battleArena.getBoundingClientRect().width;
  const HEIGHT_ARENA =battleArena.getBoundingClientRect().height;

  if (e.keyCode == KEYCODE_LEFT) {
    if (parseInt( el.style.left) >0) {
      el.style.left = (parseInt(el.style.left) - 10) + 'px';
    }
    el.style.transform = 'rotate(270deg)';
    positionTank = 'left';

  }

  else if (e.keyCode == KEYCODE_RIGHT) {
    if (parseInt( el.style.left) <WIDHT_ARENA-30) {
      el.style.left = (parseInt(el.style.left) + 10) + 'px';
    }
    el.style.transform = 'rotate(90deg)';
    positionTank = 'right';
  }
  else if (e.keyCode == KEYCODE_UP ) {
    if (parseInt( el.style.top) >0) {
      el.style.top = (parseInt(el.style.top) - 10) + 'px';
    }
    el.style.transform = 'rotate(0deg)';
    positionTank = 'up';
  }
  else if (e.keyCode == KEYCODE_DW ) {
    if (parseInt( el.style.top) <HEIGHT_ARENA-30) {
      el.style.top = (parseInt(el.style.top) + 10) + 'px';
    }

    el.style.transform = 'rotate(180deg)';
    positionTank = 'dw';
  }

  if (e.keyCode == KEYCODE_ENTR) {

    var newElmBullet = document.createElement('div');
    newElmBullet.setAttribute('class','bullet');
    el.insertAdjacentElement('afterend',newElmBullet);
    if (positionTank === "up") {
      newElmBullet.style.top = (parseInt(el.style.top) - 8) + 'px';
      newElmBullet.style.left = (parseInt(el.style.left) + 5) + 'px';

      let timerInterlav = setInterval(() => {
        newElmBullet.style.top = (parseInt(newElmBullet.style.top) - 3) + 'px';
        if (newElmBullet.getBoundingClientRect().top <= battleArena.getBoundingClientRect().top) {
          clearInterval(timerInterlav);
          newElmBullet.remove();
        }
      }, 1);

    }else if(positionTank === "right"){
      newElmBullet.style.transform = 'rotate(90deg)';
      newElmBullet.style.top = (parseInt(el.style.top) + 5) + 'px';
      newElmBullet.style.left = (parseInt(el.style.left) +18) + 'px';
      let timerInterlav = setInterval(() => {
        newElmBullet.style.left = (parseInt(newElmBullet.style.left) + 3) + 'px';

          if (newElmBullet.getBoundingClientRect().right >= battleArena.getBoundingClientRect().right) {
              clearInterval(timerInterlav);
          newElmBullet.remove();
        }
      }, 1);
    }else if(positionTank === "left"){
      newElmBullet.style.transform = 'rotate(270deg)';
      newElmBullet.style.top = (parseInt(el.style.top) + 6) + 'px';
      newElmBullet.style.left = (parseInt(el.style.left) -8) + 'px';

      let timerInterlav = setInterval(() => {
        newElmBullet.style.left = (parseInt(newElmBullet.style.left) - 3) + 'px';
        if (newElmBullet.getBoundingClientRect().left <= battleArena.getBoundingClientRect().left) {
          clearInterval(timerInterlav);
          newElmBullet.remove();
        }
      }, 1);

    }else if(positionTank === "dw"){
      newElmBullet.style.transform = 'rotate(180deg)';
      newElmBullet.style.top = (parseInt(el.style.top) + 20 ) + 'px';
      newElmBullet.style.left = (parseInt(el.style.left) +6) + 'px';

      let timerInterlav = setInterval(() => {
        newElmBullet.style.top = (parseInt(newElmBullet.style.top) + 3) + 'px';
        if (newElmBullet.getBoundingClientRect().bottom >= battleArena.getBoundingClientRect().bottom) {
          clearInterval(timerInterlav);
          newElmBullet.remove();
        }
      }, 1);
    }

  }
}