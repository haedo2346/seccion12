import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], handleDeleteTodo, handleToggleTodo }) => {
  if (Object.keys(todos).length === 0) {
    return;
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
