import './App.css'

function Title(){
  return(
    <h1>Hello I am Title!</h1>
  )
}

function Description(){
  return(
    <h3>Hello I am Description!</h3>
  )
}

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

function App() {
  return(
    <div>
      {/* <Title></Title> */}
      <Title/>
      <Description></Description>
      <Title/>
      <Description></Description>
      <Title/>
      <Description></Description>
    </div>
  )
}

export default App
