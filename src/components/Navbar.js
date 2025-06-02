import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import App from '../App'
import PropTypes from 'prop-types'

export default function Navbar(props){
  const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white',
     });
const[btnTxt,setBtnTxt]=useState("enable dark mode")
const switchMode=()=>{
    if(myStyle.color==='black'){
        setMyStyle({
            color:'white',
            backgroundColor:'black',
        })
    }
    else{
            setMyStyle({
            color:'black',
            backgroundColor:'white',
        })
    
    }
setBtnTxt("enable light mode")

}


    return(
      
     <nav className={`navbar navbar-expand-lg bg-${props.mode} `}>
  <div className="container-fluid ">
    <Link className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} to="/" >{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='dark'?'light':'dark'} `} aria-current="page" href="/">{props.cont}</a>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} to="/about" onClick={props.para}>{props.aboutTxt}</Link>
        </li>
       
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px'}}onClick={()=>{props.togalMode('primary')}}></div>
        <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px'}}onClick={()=>{props.togalMode('success')}}></div>
        <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px'}}onClick={()=>{props.togalMode('danger')}}></div>
        <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px'}}onClick={()=>{props.togalMode('warning')}}></div>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    
    </div>
  </div>

<div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" onClick={()=>{props.togalMode('null')}} role="switch" id="switchCheckDefault" />
  <label className={"form-check-label"} htmlFor="switchCheckDefault">Enable to {props.mode==='dark'?'light':'dark'} mode</label>
</div>

</nav>
        
    )
}

Navbar.propTypes={title : PropTypes.string}