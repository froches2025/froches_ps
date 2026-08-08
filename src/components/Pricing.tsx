import Image from "next/image";

const sizes = [
  {
    size: "45ml",
    price: "3,000 RWF",
    desc: "Everyday / grab-and-go size",
    featured: false,
    image: "/images/small.png",
  },
  {
    size: "150ml",
    price: "5,900 RWF",
    desc: "Regular household size",
    featured: true,
    image: "/images/medium.png",
  },
  {
    size: "550ml",
    price: "17,000 RWF",
    desc: "Bulk size — best value per ml",
    featured: false,
    image: "/images/large.png",
  },
];

export function Pricing() {
  return (
    <section className="pricing" id="sizes">
      <h2>Sizes &amp; pricing</h2>
      <p className="pricing-sub">
        Shelf-stable at room temperature for 2 months with regular use — no
        fridge required.
      </p>

      <div className="allergen-note">
        <span className="allergen-icon" aria-hidden="true">
          ⚠️
        </span>
        <span>
          <strong>Contains fish and shrimp.</strong> Please check before
          ordering if you have a seafood allergy.
        </span>
      </div>

      <div className="pricing-table">
        {sizes.map((s) => (
          <div
            key={s.size}
            className={`price-card ${s.featured ? "price-card-featured" : ""}`}
          >
            {s.featured && <p className="price-badge">Most popular</p>}
            <div className="price-image-slot photo-frame">
              <Image
                src={s.image}
                alt={`${s.size} bottle of Froches Pepper Sauce`}
                fill
                sizes="(max-width: 720px) 90vw, 320px"
              />
            </div>
            <h3>{s.size}</h3>
            <p className="price-tag">{s.price}</p>
            <p className="price-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
