import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../components/TodoItem";

describe("Pruebas TodoItem", () => {
  const todo = { id: 1, description: "Piedra del alma", done: false };
  const handleDeleteTodo = jest.fn();
  const handleToggleTodo = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  //   test("Debe de mostrar el todo Pendiente de completar", () => {
  //     render(
  //       <TodoItem
  //         todo={todo}
  //         onToggleTodoMock={onToggleTodoMock}
  //         onDeleteTodoMock={onDeleteTodoMock}
  //       />
  //     );

  //     const liElement = screen.getByRole("listitem");
  //     screen.debug();

  //     expect(liElement.className).toBe(
  //       "list-group-item d-flex justify-content-between"
  //     );

  //     const spanElement = screen.getByLabelText("span");
  //     expect(spanElement.className).toContain("align-self-center");
  //   });

  //   test("Debe de mostrar el todo completado", () => {
  //     todo.done = true;
  //     render(
  //       <TodoItem
  //         todo={todo}
  //         onToggleTodoMock={onToggleTodoMock}
  //         onDeleteTodoMock={onDeleteTodoMock}
  //       />
  //     );

  //     const liElement = screen.getByRole("listitem");
  //     screen.debug();

  //     expect(liElement.className).toBe(
  //       "list-group-item d-flex justify-content-between"
  //     );

  //     const spanElement = screen.getByLabelText("span");
  //     expect(spanElement.className).toContain("align-self-center");
  //     expect(spanElement.className).toContain("text-decoration-line-through");
  //   });

  test("Span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(handleToggleTodo).toHaveBeenCalledWith(todo.id);
  });

  test("Span debe de llamar el deleteTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(handleDeleteTodo).toHaveBeenCalledWith(todo.id);
  });
});
