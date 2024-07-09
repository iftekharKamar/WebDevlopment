import { useState } from "react";

export default function LikeButton(){
   let [isLiked,setIsLiked] = useState(false);
    let Style = {color:"red"};

    let toggle =()=>{
        setIsLiked(!isLiked);
    }

    return(
        <div>
            <p onClick={toggle}>{
                isLiked?<i class="fa-solid fa-heart" style={Style}></i>:
                <i class="fa-regular fa-heart"></i> }</p>
        </div>
    )
}