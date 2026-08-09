"use client";

import { useSyncExternalStore } from "react";
import { FlipUnit } from "./FlipUnit";
import { LAUNCH_DATE, PREORDER_WHATSAPP_URL } from "@/lib/constants";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };
type Snapshot = TimeLeft | "live" | "pending";

function getTimeLeft(): TimeLeft | null {
  const diff = new Date(LAUNCH_DATE).getTime() - Date.now();
  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

// getSnapshot must return a referentially stable value when nothing has
// actually changed, otherwise useSyncExternalStore re-renders forever.
// getTimeLeft() allocates a fresh object every call, so cache it and only
// replace the reference when a field genuinely differs.
let cachedSnapshot: Snapshot = "pending";

function getSnapshot(): Snapshot {
  const next = getTimeLeft() ?? "live";

  if (next === "live") {
    if (cachedSnapshot !== "live") cachedSnapshot = "live";
    return cachedSnapshot;
  }

  const prev = cachedSnapshot;
  if (
    typeof prev === "object" &&
    prev.days === next.days &&
    prev.hours === next.hours &&
    prev.minutes === next.minutes &&
    prev.seconds === next.seconds
  ) {
    return prev;
  }

  cachedSnapshot = next;
  return next;
}

/**
 * The server has no way to know the visitor's exact clock, so it renders a
 * static "pending" snapshot; the real countdown takes over immediately
 * after mount. Avoids a server/client text mismatch on the seconds digit.
 */
function getServerSnapshot(): Snapshot {
  return "pending";
}

export function CountdownBar() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (snapshot === "pending") {
    return <div className="countdown-bar" aria-hidden="true" />;
  }

  return (
    <div className="countdown-bar" role="status">
      {snapshot === "live" ? (
        <span className="countdown-live">We&apos;re live!</span>
      ) : (
        <div className="countdown-inner">
          <span className="countdown-copy">Official launch in</span>
          <div className="flip-clock">
            <FlipUnit value={snapshot.days} />
            <span className="flip-separator">:</span>
            <FlipUnit value={snapshot.hours} />
            <span className="flip-separator">:</span>
            <FlipUnit value={snapshot.minutes} />
            <span className="flip-separator">:</span>
            <FlipUnit value={snapshot.seconds} />
          </div>
          <span className="countdown-copy">.</span>
          <a
            className="countdown-preorder"
            href={PREORDER_WHATSAPP_URL}
            target="_blank"
            rel="noopener"
          >
            Preorder now!
          </a>
        </div>
      )}
    </div>
  );
}
