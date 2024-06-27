const express = require("express");
const app = express();
const path = require("path");


const port =  8080;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rollDice",(req,res)=>{
    let num = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal:num});
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
})

app.listen(port,(req,res)=>{
    console.log(`port listining ${port}`);
})

