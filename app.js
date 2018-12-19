var express=require('express');//recuperando a função
var app=express();//recuperando retorno
app.get('/', function(req,res)
{
    res.send("<html><body>Inicio</body></html>");
})
app.get('/tecnologia', function(req,res)
{
    res.send("<html><body>Tecnologia</body></html>");
})
app.listen(3000, function()
{
    console.log("Rodando com Express");
})