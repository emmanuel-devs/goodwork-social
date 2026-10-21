import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main id="top" tabIndex={-1} className="not-found-page">
      <header className="site-header shell">
        <a href="/" className="brand" aria-label="Goodwork Social home">
          <span className="brand-mark">gw<span>•</span></span>
          <span className="brand-name">goodwork<span>social studio</span></span>
        </a>
        <a className="header-cta" href="/#contact">Let’s talk <ArrowUpRight size={15} /></a>
      </header>
      <section className="not-found-main shell">
        <div className="not-found-card">
          <p className="eyebrow">A little off the map</p>
          <div className="not-found-number" aria-label="404">404</div>
          <h1>This page missed the brief.</h1>
          <p>The page you’re looking for may have moved. Let’s get you back to the good stuff.</p>
          <a className="button-primary" href="/">Back to the homepage <ArrowLeft size={16} /></a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>STRATEGY · CONTENT · COMMUNITY</span></div>
      </footer>
    </main>
  );
}
