const mysql=require('mysql');
let mysqlPool=mysql.createPool({
    connectionLimit:'20',
    host:'localhost',
    port:'3306',
    user:'root',
    password:'akash@it',
    database:'sapientdb'
});

module.exports=mysqlPool;