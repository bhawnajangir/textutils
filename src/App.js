import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
// import St from './components/St';
// import UserCard from './components/UserCard';
import TextForm from './components/MyTextForm.js'; 
// import Counter from './components/Counter';
// import Togal from './components/Togal';
// import TogalText from './components/TogalText';
// import Switch from './components/Switch.js';
import Alert from './components/Alert.js';
// import Props from './components/Props.js';s
import About from './components/About.js';
// import {
//    BrowserRouter as Router,
//    Switch,
//    Route,
//    link} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  

  const[mode,setMode]=useState("light");
  
function remove(){
  document.body.classList.remove();
}
  const togalMode=(cls)=>{
    remove();
    console.log(cls)
     document.body.classList.add('bg-'+cls);
if(mode==="light"){
  setMode("dark")
  document.body.style.backgroundColor= "black";
  document.body.style.color="white";
  showAlert("dark mode ennable","success");

}
else{
    setMode("light")
      document.body.style.backgroundColor= "white";
            document.body.style.color= "black";
        showAlert("light mode ennable","success");
}

  }

  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
}
)
  setTimeout(()=>{setAlert(null);},1500);
  }

  return (
  <> 
     <BrowserRouter>
    <Navbar title="textutils5" aboutTxt="about"  cont="contect us" mode={mode} togalMode={togalMode}/>
       <Alert aboutTxt   alert={alert} />

       <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextForm showAlert={showAlert} heading="enter any text" mode={mode} />} />

</Routes>

   
      {/* <div>     */} 
{/* </div>
   
    {/* <Switch/> */}
    {/* <St stname={101} stroll='ram' stper="shyam"/> */}
    {/* < UserCard name={21} age={20} isOnline="true"/> */}
    {/* <div className="container"> */}

    {/* </div> */}

    {/* <div>
    <Counter/>
    </div>
    <Togal/>
    <TogalText/> */}

    {/* <Props/> */}
  

    </BrowserRouter>
</>
  );
}

export default App;



