const { urlencoded } = require('express');
const express=require('express');
const app=express();

const a={name:'abc',age:20,city:'Karachi'};
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(urlencoded({extended:true}));
app.use(express.json());
app.get("/",logger,(req,res)=>{
    res.render("index",{text:"World, your doom is coming!"});
    
})

const userRouter=require('./routes/users');
app.use("/users",userRouter);

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}


app.listen(3000)


