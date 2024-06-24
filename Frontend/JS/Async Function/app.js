// async function greet(){
//     return "hello";
// }

// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("sucess color change");
//         },delay);
//     })
    
// }

// async function demo(){
//     try{
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//     await changeColor("yellow",1000);
//     }
//     catch(err){
//       console.log("error caught");
//       console.log(err);
//     }
// };
// demo();

let url ="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//    return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact)
// })
// .catch((err)=>{
//     console.log("ERROR");
// })

//using asyn and await


// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }
//     catch(err){
//         console.log(err);
//     }
// }


//  Axios

async function getFacts(){
    try{
        let res = await axios.get(url);
    console.log(res.data.fact);
    }catch(e){
        console.log(e);
    }
    
}
getFacts();


