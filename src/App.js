import React, { useState } from 'react';

const App = () => {
	// const [{count, count2}, setCount] = useState({ count: 10, count2: 20});
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
	return (
		<div>
			<button onClick={() => {
        setCount(c => c + 1)
        setCount2(c => c + 1)  
      }
      // if calling useState with objects instead of a value, it must be passed an object that has all keys (or use ... to prepopulate with the existing state and only update the terms needed)
      }>+</button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
		</div>
	);
};

export default App;
