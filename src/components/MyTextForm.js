import React,{useState} from "react";

export default function TextForm(props){
          const [text,setText]=useState('enter text here');
    const handleOnClick=()=>{
console.log("covertin ot upercase")
    // setText("you have click on click buttton")
    let textval=text.toUpperCase();
 setText(textval)
     }


         const handleLower=()=>{

    let textval=text.toLowerCase();
 setText(textval)
     }
        const handleOnChange=(event)=>{
console.log("onChange");
  setText(event.target.value)
     }
    const dlt=()=>{
    let textval=text.slice(0,-1);
 setText(textval)
     }
      const clear=()=>{
    let textval=text.slice(0,0);
 setText(textval)
     }
const space=()=>{
    let textval=text.split(/\s+/).join("  ");
 setText(textval)
     }

    return(
        <>
        <div className="container">
            
            <h1>{props.heading}</h1>
            <div className="mb-3">
       
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="btn btn-primary"  onClick={handleOnClick}>convert to  uper case</div>
              <div className="btn btn-primary mx-3"  onClick={handleLower}>convert to  lower case</div>
               <div className="btn btn-primary mx-3"  onClick={dlt}>delete</div>
                       <div className="btn btn-primary mx-3"  onClick={clear}>clear</div>
                         <div className="btn btn-primary mx-3"  onClick={space}>remove space</div>
              
        </div>
        <div className="container">
            
            <h1>Enter your text summaery</h1>
            <p>{text.split(" ").length-1} wrod,{text.length} charecters </p>
            <p>{0.008*text.split(" ").length}  minutes read</p>
            <h3>preview</h3>
            <p>{text}</p>
            
        </div>
        </>
    )
}