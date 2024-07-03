const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection sucessfull");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ChitChat');
}

let chat1=new Chat({
    from:"Fuzail",
    to:"Tufail",
    message:"Kab aa raha hai",
    created_at:new Date(),
});

chat1.save().then(()=>{
    console.log("saved");
})
.catch((err)=>{
    console.log(err);
})