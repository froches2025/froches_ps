/**
 * Placeholder ingredient icon — inline SVG standing in for a real illustrated
 * asset. Swap the <svg> body for the final artwork; keep the className/props
 * contract (currentColor fill, viewBox 0 0 64 64) so callers don't change.
 */
export function ShrimpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M46 12c8 4 12 13 8 22-3 7-9 12-16 15-6 2-13 1-18-3 4-1 8-3 10-7-4 0-8-2-10-6 4 0 7-1 9-4-3-1-5-3-6-6 3 0 6 0 8-2-2-2-3-5-2-8 3 1 6 3 7 6 1-3 3-6 6-7z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="47" cy="15" r="1.6" fill="var(--burgundy-950, #22050a)" />
    </svg>
  );
}
