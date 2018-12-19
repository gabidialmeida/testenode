//  testando 1: console.log('Criando um site de noticias com NodeJS B)');
var http=require('http'); //permite importar bibliotecas. Nesse caso, estamos incorporando a biblioteca http
http.createServer(function(req,res) //função que vai receber uma requisição e resposta
{
    var categoria=req.url;
    console.log(categoria);
    if(categoria =='/tecnologia')
{   
    res.end("<html><body>Tecnologia</body></html>");
}
else if(categoria =='/moda')
{   
    res.end("<html><body>Moda</body></html>");
}
else if(categoria =='/beleza')
{   
    res.end("<html><body>Beleza</body></html>");
}
else
{
    res.end("<html><body>Inicio</body></html>");
}
}).listen(3000);