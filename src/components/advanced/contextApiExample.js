import React, { createContext, useContext } from "react";

// Context is used to share the data between different components
// Context related code could be moved to separate file
const defaultContextValue = {
  id: "1",
  name: "user1",
};
const Context = createContext(defaultContextValue);
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;

const ChildComponent = () => {
  const cnt = useContext(Context);
  return <> test : {cnt.name}</>;
};

const ContextApiExample = () => {
  return (
    <h1>
      {/* If you have to pass small value through provider you can do it in following manner    */}
      {/* <Context.Provider value = "test"> */}
      <ChildComponent />
      {/* </Context.Provider> */}
    </h1>
  );
};

export default ContextApiExample;
