import React, { useState } from "react";
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {
	const [inputTodo, setInputTodo] = useState("");
	const [items, setItems] = useState([]);

	const saveTodo = (e) => {
		e.preventDedault();
		if (e.key === "Enter") {
			setItems([...items, { id: items.length, name: inputTodo }]);
			setInputTodo("");
			console.log("un funciona");
		}
	};

	return (
		<div>
			<h1 className="text-center mt-5">TODOS</h1>
			<input
				type="text"
				placeholder="Add to do here"
				className="form-control"
				id="inputTodo"
				aria-describedby="emailHelp"
				onChange={(e) => setInputTodo(e.target.value)}
				onKeyPress={saveTodo}
			/>

			<ul>
				{items.map((item) => (
					<>
						<li key={item.id}>{item.name}</li>
						<i className="fa fa-trash"></i>
					</>
				))}
			</ul>
			{/* <TodoList inputTodo={todos} /> */}
		</div>
	);
};

export default Home;
