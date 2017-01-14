var fs = require('fs');
fs.readFile('blah.txt', 'utf8', function(err, data) {
  console.log('file read');
});
console.log('hi');
