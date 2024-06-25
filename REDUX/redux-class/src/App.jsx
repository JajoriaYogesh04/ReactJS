
import './App.css'
import Todo from './components/todo'
import { Provider } from "react-redux"
import { store } from "./app/store"

function App() {

  return (
    <div style={{backgroundColor:"black", padding:"5rem", color:"white", border:"5px solid #3366ff"}}>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  )
}

export default App
