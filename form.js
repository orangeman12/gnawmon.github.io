
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);  
  
  
  function dostuff(){
    
   
    sendMessage( $('form').serialize() )
  }
  function sendMessage() {

    window.location.replace("saul.html");

  }