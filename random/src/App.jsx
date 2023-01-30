import React,{useState} from 'react';
import './App.css';

function App() {
    const[count,setCount] = useState(0)
    const isDisabled = count <= 0 ? true : false
    return(
        <div>
            <p>You clicked {count} time</p>
            <button className="styledButton" onClick={() => setCount(count+1)} >+</button>
            <button className="styledButton" onClick={() => setCount(count-1)} disabled={isDisabled}>-</button>
        </div>
    )
}

export default App;
