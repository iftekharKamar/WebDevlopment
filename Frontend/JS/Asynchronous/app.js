let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("sucess color change");
        },delay);
    })
    
}

changeColor("red",1000)
.then(()=>{
    console.log("red color change");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color change");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color change");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color change");
})
.catch(()=>{
    console.log("rejected");
})
//callback hell

// function savetoDb(data,sucess,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;

//     if(internetSpeed>4){
//         sucess();
//     }else{
//         failure();
//     }
// }


// function savetoDb(){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("sucess");
//         }else{
//             reject("failure");
//         }
//         });

//     }
// let request =savetoDb("apna College");

// request.then((result)=>{
//     console.log("promise accepted");
//     console.log(result);
//     return savetoDb("helloWorld");
// })
// .then((result)=>{
//     console.log("promise accepted");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise rejected");
//     console.log(error);
// })