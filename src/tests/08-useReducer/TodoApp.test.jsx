import { render, screen } from "@testing-library/react";
import TodoApp from "../../08-useReducer/TodoApp";
import useTodos from "../../hooks/useTodos";

jest.mock("../../hooks/useTodos");

describe("Pruebas en TodoApp", () => {
  useTodos.mockReturnValue({
    todos: [{ id: 1, description: "Todo #1", done: false }],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
  });
  test("Debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    screen.debug();
    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeFalsy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
