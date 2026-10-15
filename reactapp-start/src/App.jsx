import React, { useEffect, useState } from "react";
import './App.css';
import images from "./assets/images.jsx";
import Button from "./components/ui/button/index.jsx";
import Card from "./components/ui/card.jsx";
const App =()=>{

  const[data,setData]=useState([]);
  const[cpage,setCpage]=useState(0);
  const[ppage,sePpage]=useState(10);

  useEffect(()=>{
    const fetchdata=async ()=>{
      // const response = await fetch(`https://jsonplaceholder.typicode.com/photos${cpage}&_limit=${ppage}`);
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      const data= await response.json();
      setData(data);

    }
    fetchdata();
  },[]);

  
  return(
  
  <div className="container">




   {/* <Card/> */}
 {
  data?.map((item,key)=>{
    return(
      <div className="mine" key={key}>
        {/* <h2>
          {item.id}
        </h2>
        <p>
          {item.title}
        </p> */}
        <Card  title = {item.title} url={item.url}/>
      </div>
    )
  })
 }


  </div>






















  //   <div className="contain">
  //     {/* <h1 style={{color:'blue'}}>hello world</h1> */}

  //     <div className="card" >
  //       <img src={images.mountain} alt="" />
          
  // <Button name = {"Hello mine"} onclick={()=>{alert("Poda venna");
  // console.log("hello"); }}/>
  // <Button name = {"Increment"} onclick={()=>{setCount(count+1)}}/>
  //   <Button name = {"Decrement"} onclick={()=>{setCount(count-1)}}/>
  //   <h1>{count}</h1>





  //       {/* <img src="src\assets\images.jpeg" alt="image" /> */}
  //       <label htmlFor=""> Himalayas mountains</label>







  //     </div>
  //   </div>
  );

}
export default App;

// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
