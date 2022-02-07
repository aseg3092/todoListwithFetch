import React, { useState, useEffect } from "react";
import TodoLists from "./TodoLists.jsx";

//create your first component
const Home = () => {
	const [inputTodo, setInputTodo] = useState("");
	const [items, setItems] = useState([]);

	const saveTodo = (e) => {
		if (e.key === "Enter") {
			if (inputTodo !== "") {
				setItems([...items, { label: inputTodo, done: true }]);
				setInputTodo("");
			}
		}
	};

	const actualiazarTodos = async (newTodos) => {
		let response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/gabriel",
			{
				method: "PUT",
				body: JSON.stringify(newTodos),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		let data = await response.json();
		return data;
	};
	const deleteTodo = (id) => {
		const newItems = items.filter((item, index) => index !== id);
		setItems(newItems);
	};

	const getTodos = async () => {
		let response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/gabriel"
		);
		let data = await response.json();
		setItems(data);
	};

	useEffect(() => {
		if (items.length > 0) actualiazarTodos(items);
	}, [items]);
	useEffect(() => {
		getTodos();
	}, []);
	return (
		<div className="container">
			<h1 className="text-center mt-5">TODOS</h1>
			<input
				type="text"
				placeholder="What needs to be done?"
				className="form-control"
				id="inputTodo"
				value={inputTodo}
				onChange={(e) => setInputTodo(e.target.value)}
				onKeyPress={saveTodo}
			/>
			<TodoLists items={items} deleteTodo={deleteTodo} />
			<p>{items.length} items left</p>
		</div>
	);
};

export default Home;
