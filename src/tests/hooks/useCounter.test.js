import { renderHook } from "@testing-library/react";
import useCounter from "../../hooks/useCounter";
import { act } from "react-dom/test-utils";

// describe("Pruebas en el useCounter", () => {
//   //   test("Debe de retornar los valores por defecto", () => {
//   //     const { result } = renderHook(() => useCounter());
//   //     const { counter, increment, decrement, reset } = result.current;

//   //     expect(counter).toBe(1);
//   //     expect(increment).toEqual(expect.any(Function));
//   //     expect(decrement).toEqual(expect.any(Function));
//   //     expect(reset).toEqual(expect.any(Function));
//   //   });

//   //   test("Debe de generar el counter con el valor de 100", () => {
//   //     const { result } = renderHook(() => useCounter(100));
//   //     const { counter } = result.current;
//   //     expect(counter).toBe(100);
//   //   });

//   test("Debe de incrementar y resetear el contador", () => {
//     const { result } = renderHook(() => useCounter(100));
//     const { counter, increment, decrement, reset } = result.current;

//     act(() => {
//       increment(2);
//       increment(2);
//       reset();
//     });

//     expect(result.current.counter).toBe(100);
//   });
// });
