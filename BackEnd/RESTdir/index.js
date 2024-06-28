const express =require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let tasks =[
    {
        id:uuidv4(),
        title:"Update Passsword",
        description:"for security purposes",
    },
    {
        id:uuidv4(), 
        title:"Complete Project",
        description:"complete project within due date"
    },
    {
        id:uuidv4(), 
        title:"Iftekhar",
        description:"call him",
    }
];
app.get("/",(req,res)=>{
    res.send("this is root");
})

app.get("/tasks",(req,res)=>{
    res.render("index.ejs",{tasks});
})

app.get("/tasks/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/tasks",(req,res)=>{
    let {title,description} = req.body;
    let id = uuidv4();
    tasks.push({id,title,description});
    res.redirect("/tasks");
})
app.get("/tasks/:id",(req,res)=>{
    let {id} = req.params;
    let task = tasks.find((p)=>id===p.id);
    res.render("show.ejs",{task});
})

app.patch("/tasks/:id",(req,res)=>{
    let {id} = req.params;
    let newDescription = req.body.description;
    let task = tasks.find((p)=>id===p.id);
    task.description = newDescription;
    res.redirect("/tasks");
})
app.get("/tasks/:id/edit",(req,res)=>{
    let {id} = req.params;
    let task = tasks.find((p)=>id===p.id);
    res.render("edit.ejs",{task});
})

app.delete("/tasks/:id",(req,res)=>{
    let {id} = req.params;
     tasks = tasks.filter((p)=>id !== p.id);
    res.redirect("/tasks");
})
app.listen(port,(req,res)=>{
    console.log(`port working ${port}`);
})