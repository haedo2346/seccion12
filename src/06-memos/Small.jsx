import { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Me volvi a dibujar");
  return <small>{value}</small>;
});

Small.displayName = "Small";

export default Small;
