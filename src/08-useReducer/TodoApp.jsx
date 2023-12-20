import TodoList from "../components/TodoList";
import TodoAdd from "../components/TodoAdd";
import useTodos from "../hooks/useTodos";

const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
  } = useTodos();

  return (
    <>
      <h1>
        Todo App ({todosCount}) ,
        <small>Pendientes: ({pendingTodosCount})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
