var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");

app.get("/",function(req,res){
    console.log("landing page");
    res.send("landing page");
});

app.listen(3000,function(){
    console.log("Server started!!")
});