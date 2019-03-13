//Fazer servidor com a aplicacao dentro
var http = require('http'); // carrega uma dependencia do modulo do servidor node

var server = http.createServer(
    function(request, response){//isso eh uma interfase precisa respeitar essa ordem
      //função assincrona ou seja se 10 pessoas solicitarem essa função ela não irá bloquear para nenhuma

     response.writeHead(200, {"Content-Type": "text/html"});
     response.write("<h1>Hello World</h1>");
     response.end();
     
        //status code = codigos com os significados um codigo de erro ou ok
});
// require.createServer() -> seria bloqueante agora fazendo
// requiere sempre no começo do código porque é onde se está instanciando e pode bloquear

//Precisa colocar tambem alguem para escutar/esperar esse servidor
server.listen(3000, 
      function(){
            console.log("listening on port 3000");
      })