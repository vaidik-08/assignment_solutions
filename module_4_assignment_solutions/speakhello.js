(function (window) {
  var speakWord = "Hello";
  function hello(name) {
    console.log(speakWord + " " + name);
  }
  window.hello = hello;

})(window);