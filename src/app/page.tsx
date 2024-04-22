import { Suspense } from "react";
import { Client } from "./Client";

export const revalidate = 0;

async function propServerAction() {
  "use server";
  console.log("called propServerAction");
  await Promise.resolve();
}

export default function Page() {
  async function serverAction() {
    "use server";
    console.log("called serverAction");
    await Promise.resolve();
  }
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve("RESOLVED!!");
    }, 1000)
  );

  return (
    <main>
      <h1>Page</h1>

      <Suspense>
        <form action={serverAction}>
          <button type="submit">Submit</button>
        </form>
        <Client
          string="abc"
          number={123}
          // bigint={BigInt(9999999999999999999)}
          boolean={true}
          undefined={undefined}
          null={null}
          symbol={Symbol.for("SYMBOL")}
          iter_string={"abc"[Symbol.iterator]()}
          iter_array={["a", "b", "c"]}
          iter_map={(() => {
            const map = new Map();
            map.set("mapKey1", "mapValue1");
            map.set("mapKey2", "mapValue2");
            map.set("mapKey3", "mapValue3");
            return map;
          })()}
          iter_set={new Set(["set1", "set2", "set3"])}
          iter_typed_array={new Int8Array([1, 2, 3])}
          date={new Date()}
          object={{ key1: "key1value", key2: { key3: 12344, key4: false } }}
          jsx={<span>JSX</span>}
          action={propServerAction}
          promise={promise}
        />
      </Suspense>
    </main>
  );
}
