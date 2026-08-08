import Image from "next/image";

type JourneyPhotoProps = {
  /** Real photo path, e.g. "/images/journey-1.jpg". Omit while the asset isn't ready yet. */
  src?: string;
  alt: string;
  /**
   * "muted" = deliberately flat/desaturated (beats 1-4, the bland-food beats).
   * "vivid" = warm and appetizing (beat 5, the resolution/relief beat).
   * The flip from muted to vivid is the section's emotional turn, keep it.
   */
  tone: "muted" | "vivid";
};

/**
 * One journey-beat photo slot. Renders the real image when `src` is
 * supplied; otherwise falls back to a clearly-marked placeholder so an
 * unshot beat is obvious rather than silently blank.
 */
export function JourneyPhoto({ src, alt, tone }: JourneyPhotoProps) {
  return (
    <div className={`journey-photo journey-photo-${tone}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 480px) 80vw, 360px"
          className="journey-photo-img"
        />
      ) : (
        <div className="journey-photo-fallback">
          <span className="journey-photo-fallback-label">🖼️ {alt} (photo pending)</span>
        </div>
      )}
    </div>
  );
}
