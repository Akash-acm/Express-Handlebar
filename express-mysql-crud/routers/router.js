const express=require('express');

const controller=require('../controllers/controller');
const router=express.Router();

router.get('/emp',controller.findAll);
router.get('/emp/:id',controller.findOne);
router.post('/emp',(req,res)=>{
    let data = req.body;
    connection.query('INSERT INTO EMPLOYEE VALUES(?,?,?,?)',[data.empno,data.name,data.address,data.salary],(err,result,fields)=>{
        if(err){
            throw err;
        }
         console.log(result);
        res.send(result);
    });
});

module.exports=router;