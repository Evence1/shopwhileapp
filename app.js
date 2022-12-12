const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app=express();
const viewPath= path.join(__dirname, "..views")



app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static("partial"));
app.use("/images", express.static(__dirname+"images"));

app.get("/",function(req,res){
  res.render('home');
});
app.get("/about",function(req,res){
  res.render('about');
});
app.get("/signup",function(req,res){
  res.render('signup');
});
app.get("/sign",function(req,res){
  res.render('sign');
});
app.get("/signin",function(req,res){
  res.render('signin');
});
app.get("/veg",function(req,res){
  res.render('veg');
});
app.get("/pveg",function(req,res){
  res.render('pveg');
});
app.get("/pick",function(req,res){
  res.render('pick');
});
app.get("/pfruits",function(req,res){
  res.render('pfruits');
});
app.get("/successful",function(req,res){
  res.render('successful');
});
app.get("/shoprite",function(req,res){
  res.render('shoprite');
});
app.get("/slip",function(req,res){
  res.render('slip');
});
app.get("/pslip",function(req,res){
  res.render('pslip');
});
app.get("/choose",function(req,res){
  res.render('choose');
});
app.get("/fruits",function(req,res){
  res.render('fruits');
});


app.post("/sign", function(req,res){
  res.render('succesful');
});
app.post("/succesful", function(req,res){
  res.render('signin');
});
app.post("/veg", function(req,res){
  res.render('slip');
});
app.post("/pveg", function(req,res){
  res.render('slip');
});
app.post("/pfruits", function(req,res){
  res.render('pick');
});
app.post("/signin", function(req,res){
  res.render('choose');
});
app.post("/slip", function(req,res){
  res.render('home');
});






app.listen(3000, function(){
  console.log("Server is running on port "+3000);
});
