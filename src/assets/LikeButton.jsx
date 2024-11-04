import { useState } from "react";

export default function LikeButton() {
    const[isLiked,setIsliked]=useState(false);
    function toggle(){
        setIsliked(!isLiked);  
    

    };
    let likestyle={color:"red"};
    
    return (
        <div>
            <p onClick={toggle}> 
            <b>Like Button  </b>    
            {isLiked ? (<i className="fa-regular fa-heart" ></i>):
            (<i className="fa-solid fa-heart" style={likestyle}></i>)
            }
           
        </p>
        </div>
    );
}
