var onClick = function (e) {
  let $el = event.target;
  event.preventDefault();
  $el.style.backgroundColor = "yellow";
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