import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function Footer() {
  return (
    <>
      <section className="order-cta" id="order">
        <h2>Ready to try it?</h2>
        <p>
          Message me on WhatsApp, tell me your size, and I&apos;ll sort out
          delivery or pickup.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
            <WhatsAppIcon className="btn-icon" />
            Order on WhatsApp
          </a>
          <a className="btn btn-secondary" href={INSTAGRAM_URL} target="_blank" rel="noopener">
            Follow {INSTAGRAM_HANDLE}
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <p>&copy; 2026 Froches Pepper Sauce · Kigali, Rwanda</p>
      </footer>
    </>
  );
}
