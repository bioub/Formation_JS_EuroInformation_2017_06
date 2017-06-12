const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const jouer = function() {
  rl.question('What do you think of Node.js? ', function onEnter(answer) {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    jouer();
    //rl.close();
  });
};

jouer();

