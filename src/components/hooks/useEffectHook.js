import React, { useState, useEffect } from "react";

const useEffectHook = () => {
  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    console.log("Useeffect1 : called on mount as well as update");
  });

  useEffect(() => {
    console.log("Useeffect2 : called on mount as well as update");
    // on every update/unmount clean up function is called first and then the useEffect code
    // clean up function is not called on mount
    return () => {
        console.log("Useeffect2 : clean up");
    }
  });

  useEffect(() => {
    console.log("Useeffect : called on mount");
    return () => {
        console.log("Useeffect : clean up on unmount");
    }
  }, []);

  return (
    <>
      Counter1 value : {counter1}
      <button onClick={() => setCounter1(counter1 + 1)}>Increment1</button>
    </>
  );
};

export default useEffectHook;
