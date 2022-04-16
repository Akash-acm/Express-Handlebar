const chai=require('chai');
const server=require('../app');
const chaiHttp=require('chai-http');

var should=chai.should();

chai.use(chaiHttp);

describe("testing of router endpoints",()=>{
    
    it("should return all employees",(done)=>{
        chai.request('http://localhost:8081').get('/emp/').end((err,res)=>{
            res.should.have.status(200);
           res.body.length.should.be.eql(9);
        done();
        });
        
});
        it("should return one employees",(done)=>{
            chai.request('http://localhost:8081').get('/emp/100').set('Accept','application/json').end((err,res)=>{
                res.should.have.status(200);
               res.body.should.be.a("object");
               res.body.should.have.property('name').eql('raja');
            done();
            }); 
    });
});