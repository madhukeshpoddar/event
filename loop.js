//console.log('2');

//var fs = require('fs'){

//fs.readfile("foo.txt" 'utf8',  function(err,data));

//console.log(data);

//};

//

(function () {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('this is a msg from call back');
  });

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('this is a msg from call back1');
  }, 0);

  console.log('this is the  end');

})();