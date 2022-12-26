import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("")
  const validator = (number) => {
    return (number.trim() !== '') && !isNaN(number)
  }
  const isValidNumber = useMemo(()=>validator(text), [text])
  
  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(t) => {
            setText(t.target.value)
          }}

        />
        <span className="icon is-small is-right">
          <i className={`fas ${isValidNumber ? "fa-check":"fa-times"}`}/>
        </span> 
      </div>
    </div>
  );
}

export default App;
