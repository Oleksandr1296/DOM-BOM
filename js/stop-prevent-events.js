var onClick = function (e) {
  var $el = e.target;
  event.preventDefault();

  e.stopPropagation();

  $el.style.backgroundColor = 'yellow';
  alert('CLICK!');
  $el.style.backgroundColor = '';
}

box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;
$('a').click(function(event){
  event.preventDefault();
  console.log('You have clicked the link.');
});

$('#demo').click(function(event){
  $('a').css("color", "red");
  console.log('You have clicked the demo div.');
});