const mysqlPool=require('../config/db.pool.config');
const Emp=require('../models/employee.model');
const Logger=require('../helpers/logging');

let logger=new Logger();
logger.on('log',function(logMsg){
    console.log("Logging : "+new Date()+": "+logMsg);
});
let getForm=(req,res)=>{
    res.sendFile('./form.html');
}
let findAll= (req,res)=>{
    Emp.getAllEmps((err,result,fields)=>{
        if(err)
        throw err;
        
        res.send(result);
    });
};
let findOne=(req,res)=>{ 
    let empid=req.params.id;
    
    mysqlPool.getConnection((err,connection)=>{
        if(err)
         throw err;
    connection.query('SELECT * FROM employee where empno=?',[empid],(err,result,fields)=>{
        let flag=true;
        if(err) throw err;
   // console.log(result); 
        if(req.get("Accept")=='application/json'){
            res.type('application/json');
            res.send(result[0]);
        }
        else{
            let data=result[0];
            if(data==undefined)
            flag=false;
            res.render('one-emp',{
                layout:'emp_1',
                data:data,
                flag:flag
            });
        }
     
   // let data=result[0];
   // if(data==undefined) flag=false;
        });    //   res.render('one-emp',{layout:'emp_1',data:data,flag:flag});
}); //  res.send("Result done");
}
let create=(req,res)=>{
    console.log(req.body);
    let{empno,name,address,salary}=req.body;
    let empData=new Emp({empno,name,address,salary});
    console.log(empData);
    Emp.save(empData,(err,result,fields)=>{
        if(err)
        throw err;
    })

}
module.exports={
    findAll,findOne
}