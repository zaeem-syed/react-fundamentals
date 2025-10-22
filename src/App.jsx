import Login, { Profile, Settings, Userkey } from "./components/UserComponent"

function App(){
  const Name='zaeemsyed';
  let Aliyan='Life hacks';
  let Ahmed= 'Acha Bacha';
  var Box="whats new have a dream";
  var Gangster="Ahmed is king ";
  let Dear="Problem";
  return (
    <div>
      <h1>See how to we justice's</h1>
       <Login></Login>
       <Profile/>
       <Settings></Settings>
       <h4>the user key is {Userkey}</h4>
       <h4>the name is {Name}</h4>
       <h1>Aliyan  {Aliyan}</h1>
       <h3>Ahmed is {Ahmed}</h3>
       <h4>box k andar hai {Box}</h4>
        <p>{Gangster}</p>
      <h9>{Dear}="Customer please verify your account";</h9>

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