/**
 * Placeholder ingredient icon — inline SVG standing in for a real illustrated
 * asset. Swap the <svg> body for the final artwork; keep the className/props
 * contract (currentColor fill, viewBox 0 0 64 64) so callers don't change.
 */
export function PepperIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M27 10c1-3 4-5 7-4-1 2-2 4-1 6 3-1 6 0 7 3-3 0-5 1-6 3 4 1 7 5 6 10-2 10-13 19-22 19-7 0-12-6-11-13 1-9 9-15 15-19-2-2-2-4 0-5 1 1 3 1 5 0z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M30 9c1-2 3-4 6-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
