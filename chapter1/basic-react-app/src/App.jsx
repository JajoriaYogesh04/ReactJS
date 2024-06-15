// Import
import './App.css'
import Title_Rename from "./Title"
import { Description, Description2 } from './Description'
let name= "james"
import ProductTab from './ProductTab'
import Message from './Message'


// function App() {
//   return(
//     // <h1>Hello World</h1>
//     // <p>Hello World</p>
//     <button>HelloReactJS</button>
//   )
// }

// function App() {
//   return(
//     <div>
//       <h1>Hello World</h1>
//       <p>Hello World</p>
//       <button>HelloReactJS</button>
//     </div>
//   )
// }

// function App() {
//   return(
//     <div>
//       {/* <Title></Title> */}
//       <Title_Rename/>
//       <Description></Description>
//       <Title_Rename/>
//       <Description></Description>
//       <Title_Rename/>
//       <Description2></Description2>
//     </div>
//   )
// }

// function App() {
//   return(
//     <>
//       {/* <Title></Title> */}
//       <Title_Rename/>
//       <Description></Description>
//       <Title_Rename/>
//       <Description></Description>
//       <Title_Rename/>
//       <Description2></Description2>
//     </>
//   )
// }

// function App(){
//   return(
//     <>
//       <h1>2 x 2 = {2*2}</h1>
//       <p>Hello {name.toUpperCase()}</p>
//       <h1>3 x 3 = {3*3}</h1>
//       <p>Hello {name.toUpperCase()}</p>
//       <h1>4 x 4 = {4*4}</h1>
//       <p>Hello {name.toUpperCase()}</p>
//     </>
//   )
// }

// function App(){
//   return(
//     <>
//       <ProductTab></ProductTab>
//     </>
//   )
// }

// ACTIVITY 1

// function App(){
//   return(
//     <>
//       <Message Name="YOGESH" Color="violet"></Message>
//       <Message Name="ANUBHAV" Color="indigo"></Message>
//       <Message Name="RAHUL" Color="blue"></Message>
//       <Message Name="SUSHRUT" Color="green"></Message>
//       <Message Name="ADITYA" Color="yellow"></Message>
//       <Message Name="SHANU" Color="orange"></Message>
//       <Message Name="SACHIN" Color="red"></Message>
//     </>
//   )
// }

// ACTIVITY 2

function App(){
  return(
    <>
      <h2 >Blockbuster Deals on Computer Accessories | Shop Now</h2  >
      <ProductTab></ProductTab>
    </>
  )
}

export default App
