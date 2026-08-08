/**
 * Placeholder ingredient icon — inline SVG standing in for a real illustrated
 * asset. Swap the <svg> body for the final artwork; keep the className/props
 * contract (currentColor fill, viewBox 0 0 64 64) so callers don't change.
 */
export function FishIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 32c8-10 20-15 32-13-2-4-2-8 0-12 6 4 10 10 11 17-1 7-5 13-11 17-2-4-2-8 0-12-12 2-24-3-32-13z"
        fill="currentColor"
        opacity="0.9"
        transform="scale(-1,1) translate(-64,0)"
      />
      <circle cx="44" cy="28" r="2" fill="var(--burgundy-950, #22050a)" />
    </svg>
  );
}
