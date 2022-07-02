/** @jsx h */
import { h } from "preact";
import { useState, useContext } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { AppContext } from '../contexts/AppContext.tsx'


interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  // const [count, setCount] = useState(props.start);
  const {
    state: {
      num,
    },
    actions: {
      setNum
    },
  } = useContext(AppContext)


  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{num}</p>
      <button
        class={btn}
        onClick={() => setNum(num - 1)}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        class={btn}
        onClick={() => setNum(num + 1)}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
  );
}
