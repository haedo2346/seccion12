import { useState } from "react";
import useCounter from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setshow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
        <hr />
        <button className="btn btn-primary" onClick={() => increment()}>
          +1
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setshow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </h1>
    </>
  );
};

export default Memorize;
