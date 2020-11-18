import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import './Counter.css';

function CounterComp() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState([]);
    const key = process.env.REACT_APP_COUNTAPI
    if (key === undefined ) {
    throw new Error("Missing API KEY ")
    }
    useEffect(() => {
        fetch(`https://api.countapi.xyz/get/${key}`)
          .then(res => res.json())
          .then((result) => {
            setCount(result.value)
          })
      }, [])
  
      async function updateCount() {
        setCount(count + 1);
        await fetch(`https://api.countapi.xyz/hit/${key}`)
    };
  
    return (
      <div className='Count-Body'>
        <div className='Count-Col1'>
          <Button className='Count-Incre' variant="secondary" size="lg" onClick={() => updateCount()}>
            Hit
        </Button>
        </div>
        <div className='Count-Col2'></div>
        <div className='Count-Col3'><span className='Count-Counter'>{count}</span></div>
      </div>
    );
  }

  export default CounterComp;
