import { render, screen } from "@testing-library/react";
import MainApp from "../../09-useContext/MainApp";
import { UserContext } from "../../09-useContext/context/UserContext";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en MainApp", () => {
  //   test("Debe de mostrar el HomePage ", () => {
  //     render(
  //       <MemoryRouter>
  //         <MainApp />
  //       </MemoryRouter>
  //     );
  //     expect(screen.getByText("Home Page")).toBeTruthy();
  //   });

  test("Debe de mostrar el LoginPage ", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("Login Page")).toBeTruthy();
  });
});
