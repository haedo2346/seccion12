import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import useForm from "../../hooks/useForm";
import { act } from "react-dom/test-utils";
import SimpleForm from "../../02-useEffect/SimpleForm";

describe("Pruebas en useForm", () => {
  const initialForm = { name: "Fernando", email: "Fernando@hotmail.com" };
  //   test("Debe de regresar los valores por defecto", () => {
  //     const { result } = renderHook(() => useForm(initialForm));
  //     console.log(result.current);
  //     expect(result.current).toEqual({
  //       name: initialForm.name,
  //       email: initialForm.email,
  //       formState: initialForm,
  //       inputChange: expect.any(Function),
  //       onResetForm: expect.any(Function),
  //     });
  //   });

  test("Debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { inputChange } = result.current;
    const newValue = "Juan";
    act(() => {
      const event = { target: { name: "name", value: newValue } };
      inputChange(event);
    });

    expect(result.current.name).toBe(newValue);
  });

  test("Debe de realizar el reset del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { inputChange, onResetForm } = result.current;
    const newValue = "Juan";
    act(() => {
      const event = { target: { name: "name", value: newValue } };
      inputChange(event);
      onResetForm();
    });

    console.log(result.current);

    expect(result.current.name).toBe(initialForm.name);
  });
});
