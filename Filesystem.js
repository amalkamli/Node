const fs = require('fs');
 
// creating files
fs.writeFile('welcome.txt', 'Hello Node', () => {
 console.log('file was written')
})
// Reading files
fs.readFile('hello.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})