import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputTodo, setInputTodo] = useState("");
	const [items, setItems] = useState([]);

	const saveTodo = (e) => {
		if (e.key === "Enter") {
			if (inputTodo !== "") {
				setItems([...items, { id: items.length, name: inputTodo }]);
				setInputTodo("");
			}
		}
	};

	const deleteTodo = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

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
			<ul>
				{items.map((item) => (
					<>
						<li key={item.id}>
							<span>
								<i
									className="fa fa-trash"
									onClick={() => deleteTodo(item.id)}></i>
							</span>
							{item.name}
						</li>
					</>
				))}
			</ul>
			<p>{items.length} items left</p>
		</div>
	);
};

export default Home;
