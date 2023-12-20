import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
  const { formState, inputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={inputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary">
        Borrar
      </button>
    </>
  );
};

export default FormWithCustomHook;
