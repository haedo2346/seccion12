import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import LoadingQuote from "../03-examples/LoadingQuote";
import Quote from "../03-examples/Quote";

const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter();

  const { state, data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  console.log(counter);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next Quote
      </button>
      <button className="btn btn-primary" onClick={() => decrement(1)}>
        last Quote
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
    </>
  );
};

export default Layout;
