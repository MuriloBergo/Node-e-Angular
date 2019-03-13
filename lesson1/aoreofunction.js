const api = "http://localhost";

function greet(name){
    return new Promise((resolve, reject) => {

        resolve(`Hello ${name}`);
        if(name === null){
            reject("Name cannot be empty");
        }
        resolve(api);
    });    
}

var gretings = greet("Murilo").then(function(value){
    console.log(value);
}).then(function(){}).then(function(){}).catch();// caso as promises retornem mais coisas
console.log(gretings);



fs.readFile('files/f1', 'utf8', (data)=> console.log("->"+data));