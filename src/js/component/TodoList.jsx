import React from "react";

const TodoList = ({ inputTodo }) => {
	return (
		<ul>
			<li>{inputTodo}</li>
		</ul>
	);
};

export default TodoList;
