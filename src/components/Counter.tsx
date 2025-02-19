import {useState} from "react";

function Counter(){
  let [count, setCount] = useState(0);
  let [decrementEnabled, setDecrementEnabled] = useState(false);

  let style = {
    padding: '10px',
    backgroundColor: 'lightBlue',
    marginRight: '10px',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  }

  return <>
    <button style={style} onClick={() => {
      setCount(count + 1);
      if (!decrementEnabled) {
        setDecrementEnabled(true);
      }
    }}>Increment</button>
    {decrementEnabled && <button style={style} onClick={() => {
      setCount(count - 1);
      if(count < 2){
        setDecrementEnabled(false);
      }
    }}>Decrement</button> }
    <button style={style} onClick={() => {
      setCount(0);
      setDecrementEnabled(false);
    }}>Reset</button>
    <p style={{marginLeft: 20, fontSize: 24}}>{count}</p>
  </>
}

export default Counter;