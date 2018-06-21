window.onload = function(){
  document.getElementsByTagName('select')[0].addEventListener('change', function(event){
    if(this.value === 'phone-number'){
      document.getElementById('contact-list-emails').className = 'hidden';
      document.getElementById('contact-list-phones').className = 'contact-list-items';
    }else if(this.value === 'email-address'){
      document.getElementById('contact-list-emails').className = 'contact-list-items';
      document.getElementById('contact-list-phones').className = 'hidden';
    }
  });

}

