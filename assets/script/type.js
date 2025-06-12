document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
    var dataText = [ "Curriculum vitæ","Hippolyte Delarue"];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      // add next character to h2
     document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100); //typing speed
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
    
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 200000); // timeout between each animation
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

