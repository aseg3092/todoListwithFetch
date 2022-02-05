import React from "react";

const TodoLists = ({ items, deleteTodo }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<>
					<li key={index}>
						<span>
							<i
								className="fa fa-trash"
								onClick={() => deleteTodo(index)}></i>
						</span>
						{item.label}
					</li>
				</>
			))}
		</ul>
	);
};

export default TodoLists;
