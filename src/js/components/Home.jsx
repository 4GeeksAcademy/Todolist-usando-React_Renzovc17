import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import FormDinamico from "./formDinamico";
import TodoList from "./todoList";

//create your first component
const Home = () => {

	const [formData, setFormData] = useState('pepe')

	console.log("Home se ha cargado")
			
	const handleSubmit = e => {
		e.preventDefault();
		console.log(e)
	}

	const handleChange = e => {
				console.log(e)

				setFormData(e.target.value)
	}

	return (
		<div className="text-center">		

			{/*<form onSubmit={handleSubmit}> 
				<input onChange={handleChange} value={formData} name="email" type="email" />
				<input onChange={handleChange} type="password" />
				<input type="submit" />
			</form>     
			<hr />
			<FormDinamico />*/}
			<hr />
			<TodoList />
		</div>
	);
};

export default Home;