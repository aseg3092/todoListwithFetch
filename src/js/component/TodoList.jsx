import React from "react";

const TodoList = ({ todos }) => {
	console.log({ todos });
	return (
		<ul>
			<li>{todos}</li>
		</ul>
	);
};

export default TodoList;
