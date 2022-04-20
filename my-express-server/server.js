const express = require("express");

const app = express();

app.get("/" , function(req , res){
    res.send("<h1>Hello World</h1>");
})

app.get("/contact", function(req ,res){
    res.send("Contact me at : mehtasparsh777@gmail.com"); 
})

app.get("/about", function(req, res){
    res.send("<center><h1>Hi, I am Sparsh Mehta , Block Chain Developer + DeVops Engineer + App Developer + ML</h1></center>");
})

app.get("/hobbies" , function(req, res){
    res.send("<ul><li>Gaming</li><li>Coffee</li><li>Travelling</li><li>Coffee</li></ul>")
})
app.listen(3000 , function(){
    console.log("Server stared on port 3000");
});
