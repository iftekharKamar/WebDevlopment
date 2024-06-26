const express = require("express");
 const app = express();

 let port = 8080;
 app.listen(port,()=>{
    console.log(`app is listening on port ${port}`); 
 })

//  app.use((req,res)=>{
//      console.log("request received");
//      res.send({
//         name:"apple",
//         color:"orange"
//      });
// })

//routing

// app.get("/",(req,res)=>{
//     res.send("hello, i am root");
// })
// app.get("/apple",(req,res)=>{
//     res.send("you request apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("you request orange path");
// })
// app.get("/grapes",(req,res)=>{
//     res.send("you request garpes path");
// })

// app.get("*",(req,res)=>{
//     res.send("this page doest exist");
// })

//Pathparameter

app.get("/",(req,res)=>{
        res.send("hello, i am root");
    });

app.get("/:username/:id",(req,res)=>{
  console.log(req.params);
    res.send("hello");
})

// query

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>No Result Found<h1>");
    }else{
        res.send(`<h1>Search result for query is ${q} <h1>`);
    }
})