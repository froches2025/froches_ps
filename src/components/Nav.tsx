import { CountdownBar } from "./CountdownBar";

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <span className="nav-brand">
            Froches <span className="nav-brand-accent">Pepper Sauce</span>
          </span>
          <CountdownBar />
        </div>
        <a className="nav-cta" href="#order">
          Order
        </a>
      </div>
    </header>
  );
}
