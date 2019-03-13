function getN(n,msg){
    console.log("Mensagem: #" + n);
    console.log("Mensagem: #"+ msg);
}

//rodando blocking/sequencial

setTimeout(function(){
    getN(10, "Teste msg 10");
    console.log("setimeout");
},100);

var i = 1;
getN(i,"Teste1");
getN(i++, "Teste2");
getN(i+2, "Teste4");
getN(3, "Teste3");