import { screen, render } from "@testing-library/react";
import HomePage from "../../09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe("Name of the group", () => {
  const user = { id: 1, name: "Fernando" };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de mostrar el componente CON el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).not.toBe("null");
  });
});
