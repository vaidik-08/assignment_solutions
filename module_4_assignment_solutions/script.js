(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      var fL = names[i].charAt(0).toLowerCase();
    
      if (fL === 'j') {
        Bye(names[i]);
      }
      else {
        hello(names[i]);
      }
    }
    
    })();
    