const express=require('express');
const handlebars=require('express-handlebars');

const PORT=8081;
const app=express();
app.set('view engine','hbs');//view engine name is hbs
app.set('views',__dirname+'/views');

app.engine('hbs',handlebars.engine({   //configuring view engine
        layoutsDir:__dirname+'/views/layouts',
        partialsDir:__dirname+'/views/partials',
        extname:'hbs',
        defaultLayout:'main',      
}));

app.get('/',(req,res)=>{
    let data={
        id:100,
        name:"John",
        city:"GZB"
    }
    res.render('index',data);
});
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});