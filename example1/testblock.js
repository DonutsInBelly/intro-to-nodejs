var fs = require('fs');

var data = fs.readFileSync('blah.txt', 'utf8');
console.log(data);
console.log('hi');
