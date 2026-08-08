"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { PepperIcon } from "./icons/PepperIcon";
import { FishIcon } from "./icons/FishIcon";
import { ShrimpIcon } from "./icons/ShrimpIcon";
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
};

function JourneyLine({ index, icon, text }: LineProps) {
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
    </motion.div>
  );
}

const lines = [
  {
    icon: <PepperIcon className="journey-line-icon" />,
    text: `"Free food" hits different when you already know, deep down, it's going to be bland.`,
  },
  {
    icon: <ShrimpIcon className="journey-line-icon" />,
    text: "You ordered out. Paid full price. Ate every bite. Felt nothing.",
  },
  {
    icon: <FishIcon className="journey-line-icon" />,
    text: "Skipped a meal completely, not because there was no food, but because there was no pepper.",
  },
  {
    icon: <PepperIcon className="journey-line-icon" />,
    text: "Looked at a full plate and sighed, because eating bland food to survive isn't the same as eating.",
  },
];

export function Journey() {
  return (
    <div className="journey">
      {lines.map((line, i) => (
        <JourneyLine key={i} index={i + 1} icon={line.icon} text={line.text} />
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
          <PepperIcon className="journey-line-icon" />
          <FishIcon className="journey-line-icon" />
          <ShrimpIcon className="journey-line-icon" />
        </div>
        <p className="journey-line-text">
          You didn&apos;t move continents to eat like this.
        </p>
        <p className="journey-resolution-sub">
          Real pepper. Real fish and shrimp. The taste of home, in a bottle
          small enough for your dorm shelf.
        </p>
        <div className="hero-image-slot photo-frame">
          <Image
            src="/images/about_sauce.png"
            alt="Froches Pepper Sauce"
            fill
            sizes="(max-width: 420px) 100vw, 420px"
          />
        </div>
        <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <WhatsAppIcon className="btn-icon" />
          Order on WhatsApp
        </a>
      </motion.div>
    </div>
  );
}
