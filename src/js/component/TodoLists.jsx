import React from "react";

const TodoLists = ({ items, deleteTodo }) => {
	return (
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
	);
};

export default TodoLists;
