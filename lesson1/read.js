const fs = require('fs');

 // callbacks alinhadas
 //Callback hell

fs.readFile('files/f1', 'utf8', 
function(err, data){

    if(err){
        console.error("Erro reading file 1: " + err);
    }

    console.log(data);

    fs.readFile('files/f2', 'utf8', 
    function(err, data){
        if(err){
            console.error("Erro reading file 2: " + err);
        }
        console.log(data);
    });

});




