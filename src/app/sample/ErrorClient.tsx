"use client";

import { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  promise: Promise<any>;
};

export function ErrorClient({ promise }: Props) {
  return (
    <ErrorBoundary fallback={<>ERROR!!</>}>
      <Suspense>
        <Child promise={promise} />;
      </Suspense>
    </ErrorBoundary>
  );
}
function Child({ promise }: Props) {
  use(promise);

  return (
    <section>
      <h1>Error Client</h1>
    </section>
  );
}
