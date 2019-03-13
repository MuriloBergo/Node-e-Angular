function greet(name){
    console.log("Hello, "+name); //console.log("hello, "+ ${name});
}

function greetWithCallback(name, callback){
    var retorno = 'Hello, $(name)';
}

greet('Vinicius');
greetWithCallback('Murilo', function(retorno){
    console.log(retorno);
});


