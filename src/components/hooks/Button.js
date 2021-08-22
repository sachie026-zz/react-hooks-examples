import React, { useMemo } from "react";

const Button = (props) => {
  console.log("Button ", props.children);
  return <button onClick={props.increment}>{props.children}</button>;
};

export default React.memo(Button);
