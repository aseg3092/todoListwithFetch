import React, { useState } from "react";
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {
	const [inputTodo, setInputTodo] = useState("");
	const todos = [];

	const saveTodo = (e) => {
		if (e.key === "Enter") {
			//console.log({ inputTodo }.inputTodo);
			todos.push({ inputTodo }.inputTodo);
			console.log(todos[0]);
			document.getElementById("inputTodo").value = "";
		}
	};

	return (
		<div>
			<h1 className="text-center mt-5">TODOS</h1>
			{/* <form>
				<div className="mb-3">
					<input
						type="text"
						placeholder="Add to do here"
						className="form-control"
						id="inputTodo"
						aria-describedby="emailHelp"
						onChange={(e) => setInputTodo(e.target.value)}
					/>
				</div>
			</form> */}
			<input
				type="text"
				placeholder="Add to do here"
				className="form-control"
				id="inputTodo"
				aria-describedby="emailHelp"
				onChange={(e) => setInputTodo(e.target.value)}
				onKeyPress={saveTodo}
			/>
			<TodoList inputTodo={todos} />
		</div>
	);
};

export default Home;
