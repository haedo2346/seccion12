import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a generar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        return increment();
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.displayName = "ShowIncrement";

export default ShowIncrement;
