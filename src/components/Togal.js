import React,{useState} from "react";

export default function Togal(){
    const [like,setLike]=useState("like");
const togalbtn=()=>{
    if(like==="like"){
    setLike("dislike"); 
    }
else {
    setLike("like");
}
}


    return(
        <div>
            <button className="btn btn-primary" onClick={togalbtn}>{like}</button>
        </div>
    )
}