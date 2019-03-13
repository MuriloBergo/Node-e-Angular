const fs = require('fs');

function processFile(){
    console.log("File processed");
}
// le o arquivo de forma assincrona/Non-blocking
fs.readFile('files/f1', 'utf8', 
    //eh um call back
    function(error, data){
        console.log(data);
    });

processFile();