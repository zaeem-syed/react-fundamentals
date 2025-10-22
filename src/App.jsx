import Login, { Profile, Settings, Userkey } from "./components/UserComponent"

function App(){
  return (
    <div>
      <h1>hello react lover's</h1>
       <Login></Login>
       <Profile/>
       <Settings></Settings>
       <h4>the user key is {Userkey}</h4>
    </div>
  )
}

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


export default App