import { screen, render, fireEvent } from "@testing-library/react";
import LoginPage from "../../09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/UserContext";

const setUserMock = jest.fn();

describe("Pruebas en LoginPage", () => {
  const user = { id: 123, name: "Lautaro", email: "123@hotmail.es" };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preValue = screen.getByLabelText("pre");
    expect(preValue.innerHTML).toBe("null");
  });

  //   test("Debe de mostrar el componente con el usuario", () => {
  //     render(
  //       <UserContext.Provider
  //         value={{ user: { id: 123, name: "Lautaro", email: "123@hotmail.es" } }}
  //       >
  //         <LoginPage />
  //       </UserContext.Provider>
  //     );
  //     const preValue = screen.getByLabelText("pre");
  //     const user = { id: 123, name: "Lautaro", email: "123@hotmail.es" };

  //     expect(preValue.innerHTML).toContain(user.name.toString());
  //   });

  test("Debe de llamar el setUser cuando se hace click en el boton", () => {
    render(
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
