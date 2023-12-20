import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "John",
    email: "john@hotmail.es",
  });

  const { username, email } = formState;

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log("Use effect");
  }, []);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={inputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="haedo2346hotmail.es"
        name="email"
        value={email}
        onChange={inputChange}
      />

      {username === "John2" && <Message />}
    </>
  );
};

export default SimpleForm;
