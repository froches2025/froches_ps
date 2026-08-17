"use client";

import { useSyncExternalStore } from "react";
import { REGULAR_PRICE_START } from "@/lib/constants";

type Snapshot = "launch" | "regular" | "pending";

function getSnapshot(): Snapshot {
  return Date.now() < new Date(REGULAR_PRICE_START).getTime() ? "launch" : "regular";
}

function subscribe(onChange: () => void) {
  const msUntilCutoff = new Date(REGULAR_PRICE_START).getTime() - Date.now();
  if (msUntilCutoff <= 0) return () => {};
  const id = setTimeout(onChange, msUntilCutoff);
  return () => clearTimeout(id);
}

/**
 * The build/server can't know the visitor's exact clock, so it renders a
 * static "pending" snapshot; the real launch/regular split takes over
 * immediately after mount. Avoids baking in a stale answer that would
 * mismatch on every visit after the cutoff until the next redeploy.
 */
function getServerSnapshot(): Snapshot {
  return "pending";
}

type PriceTagProps = {
  launchPrice: string;
  regularPrice: string;
};

export function PriceTag({ launchPrice, regularPrice }: PriceTagProps) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (snapshot === "pending") {
    return <p className="price-tag" aria-hidden="true">&nbsp;</p>;
  }

  if (snapshot === "regular") {
    return <p className="price-tag">{regularPrice}</p>;
  }

  return (
    <div className="price-tag-group">
      <p className="price-tag">
        {launchPrice} <span className="price-tag-regular">{regularPrice}</span>
      </p>
      <p className="price-tag-launch-note">Launch price, ends Aug 21</p>
    </div>
  );
}
