var express=require('express');//recuperando a função
var app=express();//recuperando retorno

var msg= require('./mod_teste');
app.set('view engine','ejs');  //indicar que o ejs vai ser o responsavel pela geração de view

app.get('/', function(req,res)
{
    res.render("home"); // caso exista um arquivo com o nome index na pasta e não seja indicado um arquivo na função render, será buscada a ´página INDEX, caso nao, dará erro
});

/*app.get('/tecnologia', function(req,res)
{
    res.send("<html><body>Tecnologia</body></html>");
});*/ //antes de usar o ejs

app.get('/tecnologia', function(req,res)
{
    res.render("secao/tecnologia");//passar arquivo que será buscado pelo ejs / não preciso indicar que meu arquivo é do tipo ejs, pois o view engine já foi configurado para esse tipo de arquivo
});

app.get('/noticia', function(req,res)
{
    res.render("noticias/noticias");
});

app.get('/add', function(req,res)
{
    res.render("admin/form_add_noticia");
});
app.listen(3000, function()
{
    console.log("Rodando com Express. ");
    console.log(msg());

});