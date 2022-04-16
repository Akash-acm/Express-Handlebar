const express=require('express');
const handlebars=require('express-handlebars');
const router=require('./routers/router');
const PORT =8081;
const app=express();//server created

app.use(express.json());//
app.use(express.urlencoded({extended:true}))
app.use(express.static('/public'))
app.set('view engine','hbs');//view engine name is hbs
app.set('views',__dirname+'/views');

app.engine('hbs',handlebars.engine({   //configuring view engine
        layoutsDir:__dirname+'/views/layouts',
        partialsDir:__dirname+'/views/partials',
        extname:'hbs',
        defaultLayout:'main',      
}));
//custom middleware

app.use('/',router);

app.listen(PORT,()=>{ //.listen to run the server
    console.log(`The server is running on port ${PORT}`);
});
