function printHello(){
    console.log("HELLO !");
}

function printHey(){
    console.log("hey");
}
function Button(){
    return(
        <div>
        <button onClick={printHello}>Click me </button>
        <br />
        <br />

    <button onClick={()=>{
        console.log("Bye");
    }}>Click me</button>
    <br />
    <br />

    <button onMouseOver={printHey}>click me</button>
    </div>);
}

export default Button;