import Image from "next/image";

type IngredientBadgeProps = {
  src: string;
  alt: string;
};

/** Small circular ingredient photo (chili, seasoning cube, sauce drop). */
export function IngredientBadge({ src, alt }: IngredientBadgeProps) {
  return (
    <div className="ingredient-badge">
      <Image src={src} alt={alt} fill sizes="64px" />
    </div>
  );
}
