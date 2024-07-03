const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>{
    console.log("connection sucessfull");
})
.catch((err)=>{
    console.log(err);
})



async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ChitChat');
}

app.get("/",(req,res)=>{
    res.send("root is working");
})

//Show route
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    res.render("show.ejs",{chats});
})

//New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//Create Route
app.post("/chats",(req,res)=>{
    let {from,message,to} =req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        message:message,
        created_at:new Date(),
    });

    newChat.save().then((result)=>{
        console.log(result);
        res.redirect("/chats");
    }).catch((err)=>{
        console.log(err);
    })
})

app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

app.patch("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let {msg} =req.body;

     Chat.updateOne({_id:id},{message:msg}).then((result)=>{
        console.log(result);
        res.redirect("/chats");
     }).catch((err)=>{
        console.log(err);
     })
})

app.delete("/chats/:id",(req,res)=>{
    let {id} = req.params;
    Chat.findByIdAndDelete(id).then((result)=>{
        res.redirect("/chats");
    }).catch((err)=>{
        console.log(err);
    })
})
app.listen("8080",()=>{
    console.log("port is working 8080");
})