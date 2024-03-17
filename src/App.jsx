import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("")
  const [value, setValue] = useState("")

  function handleChange(event) {
  
   
    setState(event.target.value)
    console.log(state);
   
  }

  function handleSubmit(e) {
    e.preventDefault()
   setValue(state)
   console.log(value)
  }


  return (

    <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={state}  onChange={handleChange} />
    <button type="submit">Submit</button>

   <h1>{value}</h1>
   </form>
  </>
  )

}

export default App;
