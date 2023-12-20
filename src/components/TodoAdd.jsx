import { useRef, useState } from "react";

const TodoAdd = ({ handleNewTodo }) => {
  const [todo, setTodo] = useState();
  const [description, setDescription] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    return setDescription(value);
  };

  const onNewTodo = (description) => {
    if (description.lenght <= 1) {
      return;
    }
    const todo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    return setTodo(todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTodo(todo);
    setDescription("");
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        onChange={onChange}
        name="description"
        value={description}
      />
      <button
        type="submit"
        onClick={() => onNewTodo(description)}
        className="btn btn-outline-primary"
      >
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
