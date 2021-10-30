window.onload=audio() ;
function audio(){document.getElementById("audio").play();}

  var typeWriter = document.getElementById('typ_txt');
//var text = 'Hey ya this is Harshal !!';
var count=-1;
//typeWriter.innerHTML = text;

setInterval(func,3000)
function func(){
  count++;
  if(count==0)
  {text='Hey ya this is Harshal !!';
  typeWriter.innerHTML = text;
  typeWriter.style.setProperty('--characters', text.length);}
  if(count==1)
  {text = 'I am 19 years old .';
  typeWriter.innerHTML = text;
  typeWriter.style.setProperty('--characters', text.length);}
  if(count==2)text= 'I am pursuing Btech in Environmental Engineering at iit ism dhanbad .' ;
  {typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters', text.length);}
  if(count==3)text='Nice to meet you :)'
  {typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters', text.length);}
    if(count==3)
count=-1;
}
//function Alert()
//{
//  alert("mail id : harshalnahta25@gmail.com\nphone no. : 7354257012")
//}
