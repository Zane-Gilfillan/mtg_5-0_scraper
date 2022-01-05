import './App.css';
import { useState } from 'react';





function App() {

  let counter = 0
  const [count, setCount] = useState(0);

  return (
    < >
      <div>
        { count }
        <button onClick={() => {
          setCount(count + 1)
        }}>go up</button>
        <button onClick={() => {
          setCount(count - 1)
        }}>go down</button>
      </div>
    </>
  );
}

export default App;
