window.onload = function(){
  const emailList = document.getElementsByClassName('contact-list-emails');
  const phoneList = document.getElementsByClassName('contact-list-phone');
  console.log(phoneList);
  
  emailList.onclick = function(){
    console.log("emailList clicked");
    
    emailList.removeAttribute('class', 'hidden');
    phoneList.setAttribute('class', 'hidden');
  }
  phoneList.onclick = function(){
    console.log("phoneList clicked");
    emailList.setAttribute('class', 'hidden');
    phoneList.removeAttribute('class', 'hidden');
  }
}