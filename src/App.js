import React, { useEffect, useState } from 'react';
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
	const [values, handleChange] = useForm({
		email: '',
		password: '',
		firstName: 
	''});
	const [showHello, setShowHello] = useState(true);
	
	// useEffect(() => { // useEffect is called one time on initial render, and every time it's changed
	// 	console.log('render');
	// 	return () => {
	// 		console.log("unmount");
	// 	}
	// }, [values.password, values.email]);	// optional dependency array- only changes to the properties listed will trigger useEffect, empty array will call useEffect only on initial render)
	
	return (
		<div>
			<>
				<button onClick={() => setShowHello(!showHello)}>toggle</button>
				{showHello && <Hello />}
					<input name="email" value={values.email} onChange={handleChange} />
					<input name="firstName" placeholder="bobby" value={values.firstName} onChange={handleChange} />
					<input type="password" name="password" value={values.password} onChange={handleChange} />
			</>
		</div>
	);
};

export default App;
