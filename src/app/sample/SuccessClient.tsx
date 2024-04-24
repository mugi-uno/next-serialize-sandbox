"use client";

import { use } from "react";

type Props = {
  description: string;
  date: Date;
  promise: Promise<any>;
};

console.log(
  <>
    <div>foo</div>
    <span>bar</span>
  </>
);

export function SuccessClient({ description, date, promise }: Props) {
  use(promise);

  return (
    <section>
      <h1>Client</h1>
      <p>{description}</p>
      <p>{date.toString()}</p>
    </section>
  );
}
