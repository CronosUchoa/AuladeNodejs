var http = require('http');
var bd = require('./conexaoBD');
var express = require('express');
var conn = bd();


var server = http.createServer(function(req, res){

   if(req.url == '/'){
      
      

    res.end("servidor em HTTP usando nodejs")
    
      
      

    } 
    else{
       res.end("<h1>erro: pagina nao encontrada<h1>")
   }

})

// 

server.listen(8080);
console.log("servidor ativo!")