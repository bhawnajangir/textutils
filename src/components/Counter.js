import React,{useState} from "react";


export default function Counter(){
    const [count,setCount ]=useState(0)
    const increment=()=>{
console.log("you click increment buttonn")
  setCount(count+1);

    }
      const dobl=()=>{
    // console.log("Before doubling, count is:", count);
    setCount(count * 2);
    // console.log("After doubling, expected count is:", count * 2);
    }
      const reset=()=>{
       console.log("you was clicked reset button ") 
         setCount(0);
    }
    return(
        <div>
            <p>Count: {count}</p>

            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-primary" onClick={dobl}>Double</button>
            <button className="btn btn-primary"onClick={reset}>Reset</button>
        </div>
    )
}
