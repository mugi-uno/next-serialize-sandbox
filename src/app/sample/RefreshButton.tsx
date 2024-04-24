"use client";

import { useRouter } from "next/navigation";

export function RefreshButton() {
  const router = useRouter();

  return (
    <section>
      <button type="button" onClick={() => router.refresh()}>
        Refresh
      </button>
    </section>
  );
}
