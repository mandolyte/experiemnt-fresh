// routes/greet/[name].tsx

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  console.log("PageProps:", props);
  const { name } = props.params;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  );
}