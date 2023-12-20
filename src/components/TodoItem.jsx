const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        aria-label="span"
        onClick={() => handleToggleTodo(todo.id)}
      >
        {todo.description}{" "}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
