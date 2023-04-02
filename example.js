const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

const message = "Hi";

fs.writeFile('example.txt', message, 'utf8', function(err) {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('Student data saved to students.json');
    }
});