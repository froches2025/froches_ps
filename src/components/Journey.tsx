"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { IngredientBadge } from "./IngredientBadge";
import { JourneyPhoto } from "./JourneyPhoto";
import { WHATSAPP_URL } from "@/lib/constants";

const revealVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type LineProps = {
  index: number;
  icon: ReactNode;
  text: string;
  photoAlt: string;
  photoSrc?: string;
};

function JourneyLine({ index, icon, text, photoAlt, photoSrc }: LineProps) {
  return (
    <motion.div
      className="journey-line"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={revealVariants}
    >
      <span className="journey-line-index">
        {String(index).padStart(2, "0")} / 05
      </span>
      {icon}
      <p className="journey-line-text">{text}</p>
      <JourneyPhoto src={photoSrc} alt={photoAlt} tone="muted" />
    </motion.div>
  );
}

const lines = [
  {
    icon: <IngredientBadge src="/images/fresh-chili.jpg" alt="Fresh chili pepper" />,
    text: `"Free food" hits different when you already know, deep down, it's going to be bland.`,
    photoAlt: "Bland cafeteria tray",
    photoSrc: "/images/free-food.jpg",
  },
  {
    icon: <IngredientBadge src="/images/seasoning.jpg" alt="Seasoning cube" />,
    text: "You ordered out. Paid full price. Ate every bite. Felt nothing.",
    photoAlt: "Flavorless takeout meal",
    photoSrc: "/images/takeout.jpg",
  },
  {
    icon: <IngredientBadge src="/images/dripping-sauce.jpg" alt="Drop of pepper sauce" />,
    text: "Skipped a meal completely, not because there was no food, but because there was no flavour.",
    photoAlt: "Untouched plate of food",
    photoSrc: "/images/skipped-meal.jpg",
  },
  {
    icon: <IngredientBadge src="/images/fresh-chili.jpg" alt="Fresh chili pepper" />,
    text: "Looked at a full plate and sighed, because eating bland food to survive isn't the same as eating.",
    photoAlt: "Full plate, unappetizing",
    photoSrc: "/images/untouched-food.jpg",
  },
];

export function Journey() {
  return (
    <div className="journey">
      {lines.map((line, i) => (
        <JourneyLine
          key={i}
          index={i + 1}
          icon={line.icon}
          text={line.text}
          photoAlt={line.photoAlt}
          photoSrc={line.photoSrc}
        />
      ))}

      <motion.div
        className="journey-line journey-resolution"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={revealVariants}
      >
        <span className="journey-line-index">05 / 05</span>
        <div className="journey-icon-row">
          <IngredientBadge src="/images/fresh-chili.jpg" alt="Fresh chili pepper" />
          <IngredientBadge src="/images/seasoning.jpg" alt="Seasoning cube" />
          <IngredientBadge src="/images/dripping-sauce.jpg" alt="Drop of pepper sauce" />
        </div>
        <p className="journey-line-text">
          You didn&apos;t move countries to eat like this.
        </p>
        <p className="journey-resolution-sub">
          Real pepper. Real flavor. The taste of home, in a 45ml bottle
          small enough to slip in your backpack.
        </p>
        <JourneyPhoto
          src="/images/appetizing-food.jpg"
          alt="Froches Pepper Sauce, warm and vivid"
          tone="vivid"
        />
        <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <WhatsAppIcon className="btn-icon" />
          Order on WhatsApp
        </a>
      </motion.div>
    </div>
  );
}
