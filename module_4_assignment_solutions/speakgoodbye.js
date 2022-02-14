(function (window) {
    var speakWord = "Good Bye";
    function Bye(name) {
      console.log(speakWord + " " + name);
    }
    window.Bye = Bye;
  
  })(window);

