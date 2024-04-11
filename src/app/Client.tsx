"use client";

import { use } from "react";

type Props = {
  string: string;
  number: number;
  bigint: BigInt;
  boolean: boolean;
  undefined: undefined;
  null: null;
  symbol: Symbol;
  iter_string: Iterator<string>;
  iter_array: Array<any>;
  iter_map: Map<any, any>;
  iter_set: Set<any>;
  iter_typed_array: Int8Array;
  iter_array_buffer: ArrayBuffer;
  date: Date;
  object: { key1: string; key2: { key3: number; key4: boolean } };
  jsx: JSX.Element;
  action: () => Promise<void>;
  promise: Promise<any>;
};

export function Client(props: Props) {
  use(props.promise);

  return (
    <section>
      <h1>Client</h1>
      <p>Client content</p>
    </section>
  );
}
