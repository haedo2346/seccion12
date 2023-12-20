import { useState } from "react";

const CounterApp = () => {
  const initialState = { counter1: 10, counter2: 20, counter3: 30 };
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    ...initialState,
  });

  const updateChange = () => {
    setCounter({ ...initialState, counter1: counter1 + 1 });
  };

  return (
    <>
      <h1>
        Counter1:{counter1}
        Counter2:{counter2}
        Counter3:{counter3}
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={updateChange}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
