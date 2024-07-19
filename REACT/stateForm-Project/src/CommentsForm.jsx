import { useState } from "react";

export default function CommentsForm(){
    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating:5
    });
    let handleInpChange =(event)=>{
       setFormData((currData)=>{
        return {...currData,[event.target.name]:event.target.value};
       });
    }

    let handleSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Give a comment</h3>
                <input type="text" placeholder="username" value={formData.username} name="username" onChange={handleInpChange} />
                <br /><br />
                <textarea placeholder="add few remarks" value={formData.remarks} name="remarks" onChange={handleInpChange}></textarea>
                <br /><br />
                <input type="number" min={1} max={5} value={formData.rating} name="rating" onChange={handleInpChange}/>
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}