import { useLayoutEffect, useRef, useState } from "react";

const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, heigth: 0 });
  useLayoutEffect(() => {
    const { heigth, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ heigth, width });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef}>{quote}</p>
        <footer className="blockquote-footer mt-1 text-end">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

export default Quote;
