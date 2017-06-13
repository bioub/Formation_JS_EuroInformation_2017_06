const logClosure = function(msg) {
  // Portée de closure
  return function() {
    console.log(msg);
  };
};

const logHello = logClosure('Hello');
logHello();

const asyncClosure = function(msg) {
  setTimeout(function onTimeout() {
    console.log(msg);
  }, 1000);
};
asyncClosure('Hello');

/*
const createButton = function(options) {
  const btn = document.createElement('button');
  btn.addEventListener('click', function onClick() {
    // value et btn sont sauvegardés dans la portée
    // de closure
    console.log(value)
    console.log(btn.innerHTML);
  });
};
*/
