const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User = mongoose.model("User",userSchema);

// User.insertMany([
//     {name:"Tufail",email:"tufail@gmail.com",age:21},
//     {name:"Fuzail",email:"fuzail@gmail.com",age:19},
//     {name:"Safiur",email:"safiur@gmail.com",age:19},
// ]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

User.findOne({name:"Tufail"}).then((res)=>{
    console.log(res.email);
})
.catch((err)=>{
    console.log(err);
})
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));