var express = require('express');
var bd = require('./conexaoBD')
var app = express();
var conn = bd()


app.set('view engine', 'ejs')

app.get('/', (req,res)=>{

    conn.query('select * from pagamentos', function(err,rows,fields){
          
        res.render('./index', {dados:rows});
        // console.log(
        //     {dados:rows});
    
    })
    
})


app.listen(3000);
console.log("servidor funcionando")