import useCounter from "../hooks/useCounter";

const CounterWithCustomeHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-warning" onClick={reset}>
        reset
      </button>
      <button className="btn btn-danger" onClick={() => decrement()}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomeHook;
