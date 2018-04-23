function id(id) {return document.getElementById(id)}
var newForm = document.createElement('form');
newForm.setAttribute('id','form');
var parentAppend = document.getElementById('header');
parentAppend.insertAdjacentElement('afterend',newForm);

let newInput1 = document.createElement("input");
newInput1.setAttribute('class','bk');
newInput1.setAttribute('type','text');
newInput1.setAttribute('id','age');
newInput1.setAttribute('placeholder','age');
parentAppend =document.getElementById('form');
parentAppend.insertAdjacentElement('afterbegin',newInput1);

let newInput2 = document.createElement("input");
newInput2.setAttribute('class','bk');
newInput2.setAttribute('type','text');
newInput2.setAttribute('id','username');
newInput2.setAttribute('placeholder','username');
parentAppend =document.getElementById('age');
parentAppend.insertAdjacentElement('afterend',newInput2);

let newInput3 = document.createElement("input");
newInput3.setAttribute('class','bk');
newInput3.setAttribute('type','text');
newInput3.setAttribute('id','date');
newInput3.setAttribute('value','23/04/2018');
parentAppend =document.getElementById('username');
parentAppend.insertAdjacentElement('afterend',newInput3);

let newButton = document.createElement("button");
newButton.setAttribute('class','bk');
newButton.setAttribute('id','validate');
newButton.innerText= 'Send';
parentAppend =document.getElementById('date');
parentAppend.insertAdjacentElement('afterend',newButton);
function valid(e) {
  e.preventDefault();
  var ageEl = id('age');
  var usernameEl = id('username');
  var dateEl = id('date');
  var  goToGogle=0;
  var age = id('age').value;
  var username = id('username').value;
  var date = id('date').value;
  var usernameGet= document.getElementById('getUsername');
  usernameGet.innerText =(","+ username + "!");
  var ddmmyyyy=date;
  ddmmyyyy = ddmmyyyy.split('/');


  var regexAge =/()\d+/;
  var regexAge1 =/[a-z]/;
  var regexDate =/\d{2}\/\d{2}\/\d{4}/;
  var regexUser = username.substring(0,5);
  var nowDate = new Date();
  if(regexAge.test(age) && !regexAge1.test(age)&& parseInt(age)>=0 && age[0]!==' ' ) {
    ageEl.style.border = '1px solid black';
    goToGogle++;
  }
  else  {
    ageEl.style.border = '1px solid red';
  }
   if (regexDate.test(date)&& ddmmyyyy[0]==nowDate.getDate() &&
    ddmmyyyy[1]==(nowDate.getMonth()+1) && ddmmyyyy[2]==nowDate.getFullYear()   ) {
    dateEl.style.border = '1px solid black';
     goToGogle++;
  }
  else{
    dateEl.style.border = '1px solid red';
    alert('your data is invalid');
  }
  if( regexUser === 'user_')  {
    usernameEl.style.border = '1px solid black';
    goToGogle++;
  }
  else  {
    usernameEl.style.border = '1px solid red';
  }
  if (goToGogle ===3) {
    window.open('https://www.google.com/');
  }
  console.log(age,date,username);
}
document.getElementById('form').addEventListener('submit',valid);
