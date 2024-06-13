// Import
import './App.css'
import Title_Rename from "./Title"
import { Description, Description2 } from './Description'
let name= "james"


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

function App(){
  return(
    <>
      <h1>2 x 2 = {2*2}</h1>
      <p>Hello {name.toUpperCase()}</p>
      <h1>3 x 3 = {3*3}</h1>
      <p>Hello {name.toUpperCase()}</p>
      <h1>4 x 4 = {4*4}</h1>
      <p>Hello {name.toUpperCase()}</p>
    </>
  )
}

export default App
