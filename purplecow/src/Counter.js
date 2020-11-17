import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import './Counter.css';

function CounterComp() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState([]);
  
    useEffect(() => {
        fetch("https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e")
          .then(res => res.json())
          .then((result) => {
            setCount(result.value)
          })
      }, [])
  
      async function updateCount() {
        setCount(count + 1);
        await fetch("https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e")
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
