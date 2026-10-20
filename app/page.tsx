import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CirclePlay, MoveUpRight } from "lucide-react";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "#contact";

const services = [
  { number: "01", title: "Strategy that gives content a job", description: "Audience, positioning and practical content pillars. Every post starts with a reason, not a calendar slot.", label: "PLAN" },
  { number: "02", title: "Production with a point of view", description: "Short-form video, photography and campaign assets that sound and look like the business behind them.", label: "MAKE" },
  { number: "03", title: "Social that stays switched on", description: "Publishing, community management and useful reporting that helps the next round work harder.", label: "GROW" },
];

const projects = [
  { number: "01", category: "Hospitality / Content system", title: "A better seat at the table", description: "A content direction built around the people, rituals and details that make a neighbourhood restaurant memorable.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1500&q=85", alt: "Restaurant dining room set for service", tone: "project-blue", format: "STORY / 01" },
  { number: "02", category: "Wellness / Brand storytelling", title: "Care you can see", description: "Turning a considered wellness experience into a clear story before a customer ever walks through the door.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbece7?auto=format&fit=crop&w=1200&q=85", alt: "Quiet wellness interior with natural materials", tone: "project-orange", format: "STORY / 02" },
  { number: "03", category: "Independent makers / Founder content", title: "Made by real hands", description: "A founder-led content system that puts craft, process and the person behind the product in focus.", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1500&q=85", alt: "Creative maker working at a desk", tone: "project-lilac", format: "STORY / 03" },
];

const principles = [
  ["Useful beats busy", "We choose the work that helps people understand, trust or remember your business."],
  ["Your voice stays yours", "We build from what makes you recognisable, not whatever is trending this week."],
  ["Learning is part of the work", "We look at what connects, what falls flat and what deserves another go."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <a href="#top" className="brand" aria-label="Goodwork Social home">
          <span className="brand-mark">gw<span>•</span></span>
          <span className="brand-name">goodwork<span>social studio</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#work">Work</a>
          <a href="#approach">Our approach</a>
        </nav>
        <a className="header-cta" href={booking}>Start a project <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero shell">
        <div className="hero-topline"><span className="live-dot" /> Independent social studio <span className="topline-rule" /> Strategy / Content / Community</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow blue-label">Good work, properly told.</p>
            <h1>Make people<br /> <span>get</span> your business.</h1>
            <p className="hero-intro">We help ambitious businesses turn the work they do every day into social content people understand, remember and want to come back to.</p>
            <div className="hero-actions">
              <a className="button-primary" href={booking}>Let’s talk about it <ArrowUpRight size={17} /></a>
              <a className="button-quiet" href="#work">See how we think <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-footnote"><span className="footnote-index">01—03</span> Find the story. Make the work. Keep learning.</div>
          </div>
          <div className="hero-art" aria-label="Social content planning board">
            <div className="art-topline"><span>THE CONTENT DESK</span><span>FIELD NOTES / 001</span></div>
            <div className="art-photo-main">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1300&q=85" alt="Creative team discussing work around a table" fetchPriority="high" />
              <span className="image-sticker">REAL PEOPLE<br />REAL POINT OF VIEW</span>
            </div>
            <div className="art-bottom-grid">
              <div className="art-note note-blue"><span className="note-kicker">01 / THE WHY</span><strong>Be clear<br />before clever.</strong><ArrowUpRight size={20} /></div>
              <div className="art-note note-orange"><span className="note-kicker">02 / THE WHAT</span><div className="mini-bars"><i /><i /><i /><i /><i /></div><strong>Make it<br />mean something.</strong></div>
              <div className="art-caption"><span className="caption-symbol">↗</span><span>Good content starts<br />with paying attention.</span></div>
            </div>
            <div className="art-index">GW / 2026</div>
          </div>
        </div>
        <div className="client-strip"><span>MADE FOR BUSINESSES WITH SOMETHING REAL TO SAY</span><div><b>STRATEGY</b><i /> <b>PRODUCTION</b><i /> <b>SOCIAL</b><i /> <b>COMMUNITY</b></div></div>
      </section>

      <section className="services-section" id="services">
        <div className="shell">
          <div className="section-heading services-heading">
            <div><p className="eyebrow">01 / What we do</p><span className="heading-side-note">Less posting for the sake of posting.<br />More content with a clear purpose.</span></div>
            <h2>Good content<br />does <span>a job.</span></h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-title-wrap"><h3>{service.title}</h3><span className="service-label">{service.label}</span></div>
                <p>{service.description}</p>
                <ArrowUpRight className="service-arrow" size={21} />
              </article>
            ))}
          </div>
          <div className="service-bottomline"><span>ONE PARTNER, FROM FIRST IDEA TO THE POST-PUBLISH REVIEW.</span><a href={booking}>Talk through what you need <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="shell approach-grid">
          <div className="approach-heading">
            <p className="eyebrow">02 / The way we work</p>
            <h2>Good work<br />is <span>thought through.</span></h2>
            <p>We keep the process straightforward, collaborative and connected to what your business actually needs.</p>
            <a className="approach-link" href={booking}>Meet your next creative partner <ArrowUpRight size={16} /></a>
          </div>
          <div className="approach-steps">
            <article><span className="step-no">01</span><div><h3>Get close to the business</h3><p>We learn what you do, who it matters to and why people choose you.</p></div><span className="step-tag">LISTEN</span></article>
            <article><span className="step-no">02</span><div><h3>Build a clear content system</h3><p>We turn the strongest stories into a practical plan and make the assets to bring it to life.</p></div><span className="step-tag">MAKE</span></article>
            <article><span className="step-no">03</span><div><h3>Publish, learn, improve</h3><p>We stay curious about the response and use it to make the next round more useful.</p></div><span className="step-tag">REFINE</span></article>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="work-heading">
          <div><p className="eyebrow">03 / Selected thinking</p><h2>Different businesses.<br /><span>Different stories.</span></h2></div>
          <p>We don’t believe every brand needs the same content formula. These concept projects show how the approach can change with the business.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.tone} project-${index + 1}`} key={project.number}>
              <a className="project-image" href="#contact" aria-label={`Discuss a project like ${project.title}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-format">{project.format}</span>
                <span className="project-open"><MoveUpRight size={20} /></span>
              </a>
              <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <div className="concept-note"><span className="concept-mark">i</span><p>These are illustrative portfolio concepts, not commissioned client projects. No client outcomes or performance figures are implied.</p></div>
      </section>

      <section className="beliefs-section">
        <div className="shell beliefs-grid">
          <div><p className="eyebrow">04 / What we believe</p><h2>Never just<br /><span>fill the feed.</span></h2></div>
          <div className="belief-list">
            {principles.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Check size={19} /></article>)}
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-label"><span className="live-dot" /> GOT SOMETHING GOOD GOING?</div>
        <div className="contact-grid"><h2>Let’s make<br />it <span>clear.</span></h2><div className="contact-copy"><p>Tell us about the business, the audience you want to reach and what you want people to understand. We’ll start there.</p><a className="button-primary" href={booking}>Start a conversation <ArrowUpRight size={17} /></a><span className="contact-small">NO BIG PITCH. JUST A GOOD FIRST CONVERSATION.</span></div></div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main"><a href="#top" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a><p>Thoughtful social for businesses doing good work.</p><a className="footer-top" href="#top">Back to top ↑</a></div>
        <div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>PORTFOLIO CONCEPT / 2026</span><span>STRATEGY · CONTENT · COMMUNITY</span></div>
      </footer>
    </main>
  );
}
