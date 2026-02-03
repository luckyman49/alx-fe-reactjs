import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter: {count}</h2>
      <button 
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button 
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button 
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;

