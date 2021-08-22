import React, { useState, useCallback, useMemo } from "react";
import Button from "./Button";

// const Button = (props) => {
//   console.log("Button ", props.children);
//   return <button onClick={props.increment}>{props.children}</button>;
// };

const useCallbackHook = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // When we create a callback function, it is re-rendered when there is a state change
  // here react thinks that the function has been modified too.
  // This is the issue when we create a callback function

  // To overcome this issue, we use useCallback hook to memoized the callback function

  // const updateCounter1 = () => {
  //   setCounter1(counter1 + 1);
  // };

  // const updateCounter2 = () => {
  //   setCounter2(counter2 + 1);
  // };

  // without usecallbackk updateCounter2 and updateCounter1 re-renders

  const updateCounter1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  const updateCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  return (
    <>
      Counter1 value : {counter1}
      <Button increment={updateCounter1}>Increment1</Button>
      Counter2 value : {counter2}
      <Button increment={updateCounter2}>Increment2</Button>
    </>
  );
};

export default useCallbackHook;
