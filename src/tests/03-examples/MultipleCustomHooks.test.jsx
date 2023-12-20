import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../03-examples/MultipleCustomHooks";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas en MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  //   test("Debe de mostrar el componente por defecto", () => {
  //     render(<MultipleCustomHooks />);
  //     expect(screen.getByText("Cargando..."));
  //     expect(screen.getByText("Breaking Bad Quotes"));

  //     const nextButton = screen.getByRole("button", { name: "Next Quote" });
  //     //screen.debug();

  //     expect(nextButton.disabled).toBeTruthy();
  //   });

  //   test("Debe de mostrar un Quote", () => {
  //     useFetch.mockReturnValue({
  //       data: [{ author: "Fernando", quote: "Hola mundo" }],
  //       isLoading: false,
  //       hasError: null,
  //     });
  //     render(<MultipleCustomHooks />);
  //     expect(screen.getByText("Hola mundo")).toBeTruthy();
  //     expect(screen.getByText("Fernando")).toBeTruthy();

  //     const nextButton = screen.getByRole("button", { name: "Next Quote" });
  //     expect(nextButton.disabled).toBeFalsy();
  //   });

  test("Debe de llamar a la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next Quote" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
