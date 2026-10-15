import React from 'react'
import { useState } from 'react';
import "./card.css";
import images from '../../assets/images.jsx';
// import Button from "./components/ui/button/index.jsx";
import Button from './button/index.jsx';

function card({title,url}) {
    const[count,setCount]=useState(0);
  return (
     
     

      <div className="card" >
        <img src={url} alt="" />

        
          
  {/* <Button name = {"Hello mine"} onclick={()=>{alert("Poda venna");
  console.log("hello"); }}/>
  <Button name = {"Increment"} onclick={()=>{setCount(count+1)}}/>
    <Button name = {"Decrement"} onclick={()=>{setCount(count-1)}}/>
    <h1>{count}</h1> */}





        {/* <img src="src\assets\images.jpeg" alt="image" /> */}
        <label >{title}</label>







      </div>
    
  )
}

export default card