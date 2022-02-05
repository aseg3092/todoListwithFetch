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
				//actualiazarTodos();
			}
		}
	};

	const actualiazarTodos = (newTodos) => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/gabriel", {
			method: "PUT",
			body: JSON.stringify(newTodos),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};
	const deleteTodo = (id) => {
		const newItems = items.filter((item, index) => index !== id);
		setItems(newItems);
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/gabriel")
			.then((response) => response.json())
			.then((data) => setItems(data));
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
				aria-describedby="emailHelp"
				onChange={(e) => setInputTodo(e.target.value)}
				onKeyPress={saveTodo}
			/>
			<TodoLists items={items} deleteTodo={deleteTodo} />
			<p>{items.length} items left</p>
		</div>
	);
};

export default Home;
