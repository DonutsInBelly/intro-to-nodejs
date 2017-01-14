var fs = require('fs');

fs.readFile('blah.txt', 'utf8', function(err, data) {
  console.log(data);
});
console.log('hi');
