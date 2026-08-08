import Image from "next/image";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <p className="eyebrow">Handmade in Kigali 🇷🇼</p>
        <h1>Froches Pepper Sauce</h1>
        <p className="shitto-note">also known as shitto, if you already know, you know</p>
        <p className="hero-tagline">
          A bold, smoky West African pepper sauce, vegetarian-friendly by
          default. Spoon it over rice, eggs, grilled anything, or just eat
          it with a spoon when no one&apos;s looking. Want it with shrimp,
          fish, or beef? Custom orders welcome.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon className="btn-icon" />
            Order on WhatsApp
          </a>
          <a className="btn btn-secondary" href={INSTAGRAM_URL} target="_blank" rel="noopener">
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
      <div className="hero-image-slot photo-frame">
        <Image
          src="/images/hero.jpg"
          alt="Froches Pepper Sauce bottle"
          fill
          sizes="(max-width: 420px) 100vw, 420px"
          priority
        />
      </div>
    </section>
  );
}
