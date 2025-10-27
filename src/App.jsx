// import Login, { Profile, Settings, Userkey } from "./components/UserComponent"

import Greetings from "./components/ExampleComponent";

// import Myname from './components/functionComponent';

// function App(){
//   const Name='zaeemsyed';
//   let Aliyan='Life hacks';
//   let Ahmed= 'Acha Bacha';
//   var Box="whats new have a dream";
//   var Gangster="Ahmed is king ";
//   let Dear="Problem";
//   return (
//     <div>
//       <h1>See how to we justice's</h1>
//        <Login></Login>
//        <Profile/>
//        <Settings></Settings>
//        <h4>the user key is {Userkey}</h4>
//        <h4>the name is {Name}</h4>
//        <h1>Aliyan  {Aliyan}</h1>
//        <h3>Ahmed is {Ahmed}</h3>
//        <h4>box k andar hai {Box}</h4>
//         <p>{Gangster}</p>
//       <h9>{Dear}="Customer please verify your account";</h9>

//     </div>
//   )
// }

// function Fruit(){
//   return(
//     <div>
//       <h2>Apple is a fruit</h2>
//     </div>
//   )
// }

// function Color(){
//   return(
//     <div>
//       <h3>the color is red </h3>
//     </div>
//   )
// }

// import image from './assets/images/y-a-SH2EDaghr74-unsplash.jpg';
// import { useState } from 'react';


// function App(){
//   function callfun(){
//     alert("function is called");
//   }
//     const [fruit,setFruit]=useState("apple");
//     const handleFruit=()=>{
//       setFruit("orange");
//     }
//   const [count,setCount]=useState(0);
//   // const handleCount=()=>{
//   //     setCount(count+1);

//   // }
//   function handleCount()
//   {
//     setCount(count+1);
//   }
//   let name ="my react app";
//   function operation(a,b,op){
//     if(op=='-')
//     {
//       return a-b;
//     }else if(op=='+')
//     {
//       return a+b;
//     }else if(op=='*'){
//       return a * b;
//     }else{
//       return a/b;
//     }
  


//   }

//   return(
//     <div>
//       <h1>my todo's list</h1>
//       <img src={image} alt="" width="100" height="100" />
//       <ul>
//         <li>invent new traffic lights </li>
//         <li>research your movie scene
//         </li>
//         <li>improve specturm light </li>
//         <li>{name? name:'My vue app'}</li>
//         <li>{operation(200,2,'')}</li>
//          <li>the name of fruit {fruit}</li>
//          <li>this count is {count}</li>
//          <button onClick={handleFruit}>Change Fruit</button>
//           <button onClick={handleCount}>Start counting</button>

//       </ul>
//       <button onClick={callfun}>click me bastard</button>
//       <div>
//         <input type="text" name="name" id="" onChange={callfun} style={{ marginTop: '10px' }} />
//       </div>

//       <div>
//         <Myname></Myname>
//       </div>
    
//     </div>
//   )
// }



// export default App

// import { useState } from 'react';
// function App(){
//   const [display,setDisplay]=useState(false);
//   function toogle()
//   {
//     setDisplay(!display);
//   }
//   return (
//     <div>
//       <h1>Toogle in React App</h1>
//       {
//         // display? <h2>name is zaeem</h2> :null 
//         display? <Myname></Myname> :null
//       }
//       <button onClick={toogle}>toogle states</button>
//     </div>
//   )
// }

// export default App;


// function App(){
//   let name="zaeem";
//   let age= 35;
//   return (
//     <div>
//       <h1>welcome to my react fundamentals course</h1>
//       <Greetings name={name} age={age}/>

//     </div>
//   )
// }

// export default App;

import { useState } from "react";
import Child from "./components/ChildComponent";


function App(){
  const [message,setMessage]=useState("");
  const handleDatafromChild=(childData)=>{
    setMessage(childData);
  }
  return(
    <div>
      <h1>parent component</h1>
      <p>Message from child :{message}</p>
      <Child sendData={handleDatafromChild}/>
    </div>
  )
}

export default App;