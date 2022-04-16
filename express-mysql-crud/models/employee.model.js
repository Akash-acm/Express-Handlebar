const mysqlPool=require('../config/db.pool.config');

let getAllEmps=(callback)=>{
    mysqlPool.getConnection((err,connection)=>{
        if(err)
         throw err;
    console.log("From Model "+connection.threadId);
    connection.query('SELECT * FROM employee',callback);
    connection.release();
    console.log("From Model 2 "+connection.threadId);
 });
}
module.exports={
    getAllEmps
}
