let url ="https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let image = document.querySelector("img");
let btn = document.querySelector("button");
let btn2 = document.querySelector(".dog");
let p = document.querySelector("p");

async function getfacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error - ",e);
        return "No image found";
    }
    // let res = await axios.get(url);
    // p.innerText = res.data.fact;
}
async function getImages(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e){
        console.log("error - ",e);
        return "No image found";
    }
    // let res = await axios.get(url2);
    // image.src = res.data.message;
    // console.log(res.data.message);
}

// getImages();
btn.addEventListener("click", async()=>{
    let fact = await getfacts();
    p.innerText =fact;
});
btn2.addEventListener("click",async()=>{
    let source = await getImages();
    image.src = source;
});