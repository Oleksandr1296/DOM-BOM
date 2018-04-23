function id(id) {return document.getElementById(id)}
var newForm = document.createElement('form');
newForm.setAttribute('id','form');
newForm.innerHTML =
  " <input class=\"bk\" type=\"text\" id=\"age\" placeholder=\'age\' >\n" +
  "  <input class=\"bk\" type=\"text\" id=\"username\" placeholder=\'username\'>\n" +
  "  <input class=\"bk\" type=\"text\" id=\"date\" value=\'21\/08\/2018\'>\n" +
  "  <button class=\"bk\" id=\"validate\">Send<\/button>";
var parentAppend = document.getElementById('header');
parentAppend.insertAdjacentElement('afterend',newForm);

function valid(e) {
  e.preventDefault();
  var ageEl = id('age');
  var usernameEl = id('username');
  var dateEl = id('date');

  var age = id('age').value;
  var username = id('username').value;
  var date = id('date').value;
  var usernameGet= document.getElementById('getUsername');
  usernameGet.innerText =(","+ username + "!");
  var ddmmyyyy=date;
  ddmmyyyy = ddmmyyyy.split('/');


  var regexAge =/()\d+/;
  var regexAge1 =/[e]/;
  var regexDate =/\d{2}\/\d{2}\/\d{4}/;
  var regexUser = /user_/;
  var nowDate = new Date();
  if(regexAge.test(age) && !regexAge1.test(age)) {
    ageEl.style.border = '1px solid black';
  }
  else  {
    ageEl.style.border = '1px solid red';
  }
   if (regexDate.test(date)&& ddmmyyyy[0]==nowDate.getDate() &&
    ddmmyyyy[1]==(nowDate.getMonth()+1) && ddmmyyyy[2]==nowDate.getFullYear()   ) {
    dateEl.style.border = '1px solid black';
  }
  else{
    dateEl.style.border = '1px solid red';
    alert('your data is invalid');
  }
  if(regexUser.test(username))  {
    usernameEl.style.border = '1px solid black';
  }
  else  {
    usernameEl.style.border = '1px solid red';
  }

  console.log(age,date,username);
}
document.getElementById('form').addEventListener('submit',valid);
