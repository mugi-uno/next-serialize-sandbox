import { Suspense } from "react";
import { ErrorClient } from "./ErrorClient";
import { RefreshButton } from "./RefreshButton";
import { SuccessClient } from "./SuccessClient";

export const revalidate = 0;

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const promise = new Promise((resolve) =>
    setTimeout(() => resolve("PROMISE RESOLVED"), 1000)
  );

  const errorPromise = new Promise((_, reject) =>
    setTimeout(() => reject("PROMISE REJECTED"), 2000)
  );

  return (
    <main>
      <Suspense>
        <SuccessClient
          description={"".padStart(2000, "abcde")}
          date={new Date()}
          promise={promise}
        />
      </Suspense>
      <ErrorClient promise={errorPromise} />
      <RefreshButton />
    </main>
  );
}
