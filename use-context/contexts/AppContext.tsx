/** @jsx h */
import { h, createContext } from "preact";
import { useState } from "preact/hooks";

export const AppContext = createContext({});

export default function AppContextProvider({
  children,
}) 
{
  const [num, setNum] = useState(42)

  const debugFunction = (msg: string) => {
    console.log("debugFunction()", msg)
  }

  const context = {
      state: {
          num,
      },
      actions: {
          setNum,
          debugFunction,
      },
  }
  return (
      <AppContext.Provider value={context}>
        {children}
      </AppContext.Provider>
    );
};
