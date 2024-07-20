import { useState } from "react";
import CommentsForm from "./CommentsForm";
import './Comments.css'
export default function Comments(){
    let [comments,setComments]  = useState([{
        username:"@ik",
        remarks:"great job",
        rating:5,
    },]);

    let addNewComment=(comment)=>{
        setComments((currComments)=>
            [...currComments,comment]);
            console.log("added new Comments");
    }
    return(
        <>
        <div>
       <h1>All Comments</h1>
       {comments.map((comment) => {
  return (
    <div className="comment" key={comment.id}>
      <h4>{comment.username}</h4>
      <p>
        Rating: {comment.rating}
        <br />
        {comment.remarks}
      </p>
    </div>
  );
})}

        <br /><br />
        <CommentsForm addNewComment={addNewComment}/>
        </div>
        </>
    )
}