import React, { useState, useMemo } from "react";

const useMemoHook = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // Without useMemo getCounter1 is re-rendered when setCounter2 is called
  //   const getCounter1 = () => {
  //     console.log("getCounter1 defined");
  //     return counter1;
  //   };

  const getCounter1 = useMemo(() => {
    console.log("getCounter1 defined");
    return counter1;
  }, [counter1]);

  const normalConsoleFunction = () => {
    console.log("normalConsoleFunction defined", counter1);
  };

  return (
    <>
      Counter1 value : {getCounter1}
      <button onClick={() => setCounter1(counter1 + 1)}>Increment1</button>
      Counter2 value : {counter2}
      <button onClick={() => setCounter2(counter2 + 1)}>Increment2</button>
      <button onClick={normalConsoleFunction}>Console log</button>
    </>
  );
};

export default useMemoHook;
