
function greet(name){
    return new Promise(function(resolve, reject){

        resolve(`Hello ${name}`);
        if(name === null){
            reject("Name cannot be empty");
        }

    });    
}

var gretings = greet("Murilo").then(function(value){
    console.log(value);
}).then(function(){}).then(function(){}).catch();// caso as promises retornem mais coisas
console.log(gretings);
