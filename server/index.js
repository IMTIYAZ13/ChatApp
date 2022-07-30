const express= require("express");
const bodyParser =require("body-parser");
const app = express()

app.use(bodyParser.json({extended : true }));
app.use(bodyParser.urlencoded({extended:true}))

const PORT =process.env.port || 8000;

app.get("/",function(req,res)
{
    const data={
        "no_user" :25
    };
    res.send(data);
});

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`  )
});