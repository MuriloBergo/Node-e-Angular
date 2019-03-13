const fs = require('fs');

function processFile(){
    console.log("File processed");
}
// le o arquivo de forma sincrona/blocking
var file = fs.readFileSync('files/f1', 'utf8');

processFile();
console.log(file);