function formSubmit(){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return(
        <form action="">
            <input placeholder="write someThing" />
            <button onClick={formSubmit}>Submit</button>
        </form>
    )
}