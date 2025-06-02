import React from "react";
export default function Alert(props){
    const capt=(word)=>{

   return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return(
 props.alert &&<div className="alert alert-warning alert-dismissible fade show d-flex align-items-center alert"  role="alert">{capt(props.alert.type)}:{props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" area-label="Close"></button>
        

</div>
    )
}

