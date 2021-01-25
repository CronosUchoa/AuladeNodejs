var express = require('express');
var bodyParser = require('body-parser')

var app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
   res.sendFile(__dirname +"/index.html");
})

app.post('/resultado', function(req, res){
 
   if(req.body.mais){
      let a = req.body.number1;
      let b = req.body.number2;
      let c = parseInt(a)+ parseInt(b);
      res.send("<h1>"+ "O resultado X("+ a+ ") + Y("+b+") é : " + c + "</h1>" + "<br><br>" + "<a href='http://localhost:8080'>refazer</a>")
   }
   else{
      let a = req.body.number1;
      let b = req.body.number2;
      let c = parseInt(a) * parseInt(b);
      res.send("<h1>"+ "O resultado X("+ a+ ") * Y("+b+") é : " + c + "</h1>" + "<br><br>" + "<a href='http://localhost:8080'>refazer</a>")
   }
   
})

app.listen(8080);
console.log("servidor ativo!")