type ImageSlotProps = {
  label: string;
  className?: string;
};

/**
 * Marks where a real (currently Gemini-generated placeholder) product photo
 * belongs. Swap for a real <Image> once photography exists — the dashed
 * border makes every open slot obvious at a glance.
 */
export function ImageSlot({ label, className }: ImageSlotProps) {
  return (
    <div className={`image-slot ${className ?? ""}`}>
      <span className="image-slot-label">📸 {label}</span>
    </div>
  );
}
