import React,{useState} from "react";

export default function TogalText(){
    const[visible,setVisible]=useState("hide");
    const togalbtn=()=>{
        if(visible==="hide"){
            setVisible("show")
        }
        else{
            setVisible("hide");
        }
    }
    return(
          <div>
      <button className="btn btn-primary" onClick={togalbtn}>
        {visible === "hide" ? "Show Text" : "Hide Text"}
      </button>

      {/* Show paragraph only when visible is "show" */}
      {visible === "show" && <p>This is the text to show and hide.</p>}
    </div>
    )
}