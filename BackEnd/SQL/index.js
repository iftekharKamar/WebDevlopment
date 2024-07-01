const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'practice_app',
  password:'Kamar@2196724',
});

let getRandomUser =() => {
  return [
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password(),
  ];

}

// let q = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
// let data=[];
// for(let i =0;i<5;i++){
//   data.push(getRandomUser());
// }
//    try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
//     res.send("some error occur in DB");
// }

//Home route
app.get("/",(req,res)=>{
  let q =`SELECT count(*) FROM user`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs",{count})
    });
}catch(err){
    console.log(err);
    res.send("some error occur in DB");
}
})

//Show route

app.get("/user",(req,res)=>{
  let q =`SELECT * FROM user`;
  try{
    connection.query(q,(err,users)=>{
        if(err) throw err;
        res.render("show.ejs",{users});
    });
}catch(err){
    console.log(err);
    res.send("some error occur in DB");
}
})

//Edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs",{user});
    });
}catch(err){
    console.log(err);
    res.send("some error occur in DB");
}
});

//Edit DB

app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password:formPass,username:newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password){
          res.send("Wrong password");
        }else{
          let q2 = `UPDATE user SET username= '${newUsername}' WHERE id = '${id}'`;
          connection.query(q2,(err,result)=>{
            if(err) throw err;
            res.redirect("/user")
          })
        }
    });
      }catch(err){
            console.log(err);
            res.send("some error occur in DB");
        }
})

app.post("/user",(req,res)=>{
 let {username,email,password}=req.body;
 let id = uuidv4();
 let q = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
let data=[id,username,email,password];
connection.query(q,data,(err,result)=>{
  try{
  if(err) throw err;
 res.redirect("/user");
}catch(err){
  console.log(err);
            res.send("some error occur in DB");
  }
})
})
app.get("/user/new",(req,res)=>{
  res.render("new.ejs");
})

app.delete("/user/:id",(req,res)=>{
  let{id} = req.params;
  let q =`DELETE FROM user WHERE id='${id}'`;
  connection.query(q,(err,result)=>{
    try{
      if(err) throw err;
      res.redirect("/user");
    }catch(err){
      console.log(err);
      res.send("some error ocuur in DB");
    }
  })
})
app.listen("8080",()=>{
  console.log("app is working");
})
