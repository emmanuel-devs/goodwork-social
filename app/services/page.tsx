import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Clapperboard, Compass, MessageCircle, Sparkles, Target } from "lucide-react";
import MotionEnhancer from "../MotionEnhancer";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "https://your-ghl-booking-link.example";

const services = [
  { no: "01", label: "THINK", title: "Social strategy & direction", icon: Compass, intro: "A clearer point of view, before another post goes live.", body: "We get under the surface of your business, understand the people you need to reach and turn that into a direction your content can actually follow.", items: ["Audience and channel review", "Content pillars and creative direction", "Tone of voice and messaging cues", "A practical content roadmap"], outcome: "A plan that helps your team make better decisions, not a document that sits in a folder." },
  { no: "02", label: "MAKE", title: "Social-first content production", icon: Clapperboard, intro: "Distinctive content made for the way people scroll.", body: "From short-form video and photography to campaign assets, we build considered creative that feels native to the platform and recognisable as your brand.", items: ["Short-form video concepts and edits", "Photography and visual storytelling", "Campaign creative and content series", "Platform-ready asset delivery"], outcome: "A library of strong creative with a consistent look, a clear idea and a reason to exist." },
  { no: "03", label: "CONNECT", title: "Publishing & community", icon: MessageCircle, intro: "A steady presence that makes room for real conversation.", body: "We help keep your channels active and considered, with thoughtful publishing, community care and a feedback loop that turns audience response into useful learning.", items: ["Publishing plans and scheduling support", "Caption writing and content adaptation", "Community response guidance", "Monthly learning and next-step recommendations"], outcome: "A more consistent presence, with less last-minute scrambling and more attention to what people tell you." },
  { no: "04", label: "FOCUS", title: "Campaigns & launches", icon: Target, intro: "A connected story for the moments that matter.", body: "For a launch, a new offer or a timely business moment, we bring the idea, content and rollout together so every part feels like it belongs to the same story.", items: ["Campaign concept and message", "Creative direction and rollout plan", "Coordinated social content set", "Post-campaign review and recommendations"], outcome: "A focused campaign with a clear message, a recognisable creative thread and a next step." }
];

const principles = [
  { no: "01", title: "Understand before making", text: "We start with the business, not a trend. The best content comes from knowing what makes you worth choosing." },
  { no: "02", title: "Make it feel like you", text: "Your content should be recognisable without needing a logo in every frame. We build consistency without sanding off your character." },
  { no: "03", title: "Learn from the response", text: "We look beyond the posting schedule. What people watch, save, share and ask helps us decide what to make next." }
];

export default function ServicesPage() {
  return <main id="top" className="inner-page services-page">
    <MotionEnhancer />
    <header className="site-header shell">
      <a href="/" className="brand" aria-label="Goodwork Social home"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="/services" aria-current="page">Services</a><a href="/#work">Selected work</a><a href="/#about">Our approach</a><a href="/#faq">FAQs</a></nav>
      <a className="header-cta" href={booking}>Book a conversation <ArrowUpRight size={15}/></a>
      <details className="mobile-nav"><summary aria-label="Open navigation"><span></span><span></span></summary><nav aria-label="Mobile navigation"><a href="/services">Services</a><a href="/#work">Selected work</a><a href="/#about">Our approach</a><a href="/#voices">Client voices</a><a href="/#faq">FAQs</a><a href={booking}>Book a conversation ↗</a></nav></details>
    </header>

    <section className="services-hero shell">
      <div className="services-hero-kicker"><span className="live-dot"/> WHAT WE DO <span className="services-kicker-rule"/> STRATEGY · CONTENT · COMMUNITY</div>
      <div className="services-hero-grid">
        <div className="services-hero-copy"><p className="eyebrow">Good work deserves good storytelling.</p><h1>Make your social feel <em>like you.</em></h1><p className="services-hero-intro">We bring strategy, creative production and thoughtful publishing together, so your social presence feels clear, consistent and worth paying attention to.</p><div className="hero-actions"><a className="button-primary" href={booking}>Find your starting point <ArrowUpRight size={17}/></a><a className="button-quiet" href="#services-list">Explore our services <ArrowDownRight size={16}/></a></div></div>
        <div className="services-hero-visual"><div className="services-visual-top"><span>GOODWORK / FIELD NOTES</span><span>NO. 01—04</span></div><div className="services-visual-image"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85" alt="Sunlit creative studio workspace with a desk and plants" fetchPriority="high"/><span className="services-image-note">A GOOD IDEA<br/>NEEDS A GOOD PLAN.</span></div><div className="services-visual-foot"><span>FROM FIRST THOUGHT</span><span className="visual-arrow"><ArrowRight size={16}/></span><span>TO THE FEED</span></div></div>
      </div>
      <div className="services-manifesto"><span>OUR POINT OF VIEW</span><p>Not content for content’s sake. <em>Good work, properly told.</em></p><span>GWS / 001</span></div>
    </section>

    <section className="services-offerings" id="services-list"><div className="shell">
      <div className="services-section-heading"><div><p className="eyebrow">The things we do well</p><h2>One studio.<br/><em>A few good ways in.</em></h2></div><p>Some businesses need a sharper direction. Others need the hands and headspace to make it happen. We can help with one part or bring the whole system together.</p></div>
      <div className="services-offering-list">{services.map((service) => { const Icon = service.icon; return <article className="service-detail" key={service.no}>
        <div className="service-detail-index"><span>{service.no}</span><span className="service-detail-icon"><Icon size={20} strokeWidth={1.5}/></span></div>
        <div className="service-detail-main"><p className="service-tagline">{service.label}</p><h3>{service.title}</h3><p className="service-detail-intro">{service.intro}</p><p className="service-detail-copy">{service.body}</p><div className="service-deliverables"><span className="micro-label">WHAT THIS CAN INCLUDE</span><ul>{service.items.map((item) => <li key={item}><Check size={14}/>{item}</li>)}</ul></div></div>
        <div className="service-detail-outcome"><span className="micro-label">THE USEFUL PART</span><p>{service.outcome}</p><a href={booking}>Talk about this <ArrowUpRight size={15}/></a></div>
      </article>; })}</div>
    </div></section>

    <section className="services-approach"><div className="shell services-approach-grid"><div className="services-approach-heading"><p className="eyebrow">How it comes together</p><h2>Less guesswork.<br/><em>More good work.</em></h2><p>Our process stays collaborative and practical. You know what we are doing, why we are doing it and what comes next.</p><a className="button-light" href={booking}>Start a conversation <ArrowUpRight size={16}/></a></div><div className="services-principles">{principles.map((item) => <article key={item.no}><span>{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={17}/></article>)}</div></div></section>

    <section className="services-fit shell"><div className="services-fit-label"><Sparkles size={16}/> A GOOD FIT LOOKS LIKE</div><div className="services-fit-grid"><h2>Good people.<br/><em>Something real to say.</em></h2><div><p>We work best with independent and growing businesses that care about what they make, how they treat people and the story they put into the world.</p><ul><li><Check size={15}/> You want your social to feel more recognisable.</li><li><Check size={15}/> You need a clearer plan or a creative partner.</li><li><Check size={15}/> You are ready to make space for consistency.</li></ul><p className="services-fit-note">Not sure which service fits? That is a good reason to talk.</p><a className="text-link" href={booking}>Let’s work it out together <ArrowUpRight size={15}/></a></div></div></section>

    <section className="services-cta shell"><div className="services-cta-card"><div className="contact-label"><span className="live-dot"/> YOUR NEXT GOOD STEP</div><div className="services-cta-grid"><h2>Let’s find<br/><em>your way in.</em></h2><div><p>Tell us what is working, what feels stuck and what you want your social to do better. We will start with a thoughtful conversation, then recommend a sensible next step.</p><a className="button-primary" href={booking}>Book a conversation <ArrowUpRight size={17}/></a><span className="contact-small">NO BIG PITCH. JUST A GOOD FIRST CONVERSATION.</span></div></div></div></section>

    <footer className="site-footer"><div className="shell footer-main"><a href="/" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a><p>Thoughtful social for businesses doing good work.</p><div className="footer-links"><a href="/services">Services</a><a href="/#work">Selected work</a><a href="/#about">Our approach</a><a href="/#faq">FAQs</a><a href={booking}>Get in touch ↗</a></div></div><div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>INDEPENDENT CREATIVE PARTNER</span><span>STRATEGY · CONTENT · COMMUNITY</span></div></footer>
  </main>;
}
