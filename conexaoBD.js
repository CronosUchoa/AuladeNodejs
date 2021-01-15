const mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
            host:'localhost', //host pode ser local ou não
            user:'fulano',// root ou seu usuário do bd
            password:'00000',//sua senha 
            database:'blablabla' // seu banco de dados
        }
    )
};


