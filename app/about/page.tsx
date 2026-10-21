import type { Metadata } from "next";
import SiteMenu from "./SiteMenu";
import { ArrowDownRight, ArrowUpRight, Check, Eye, HeartHandshake, Lightbulb, MessageCircle, ScanSearch } from "lucide-react";
import MotionEnhancer from "../MotionEnhancer";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "/contact#enquiry";

export const metadata: Metadata = {
  title: "About Goodwork Social | Thoughtful Creative Partnership",
  description: "Meet the thinking behind Goodwork Social, an independent social studio built around clear strategy, distinctive content and close creative collaboration.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Goodwork Social",
    description: "Good work starts with paying attention. Discover the principles behind our approach to social strategy and creative partnership.",
    url: "/about",
    type: "website",
  },
};

const principles = [
  { no: "01", icon: Eye, title: "Specific beats loud.", text: "The most memorable content is not always the biggest or the busiest. It notices the details that make your business different, then gives those details room to matter." },
  { no: "02", icon: Lightbulb, title: "Make it useful.", text: "Every idea needs a reason to exist. It might help someone understand, feel something, make a decision or see your business in a new light." },
  { no: "03", icon: ScanSearch, title: "Consistency needs a system.", text: "Showing up should not depend on a last-minute burst of inspiration. A clear direction makes good creative easier to repeat without making it predictable." },
];

const partnership = [
  { no: "01", title: "We ask better questions.", text: "Before we plan the content, we learn what you do, who it is for and what people need to understand." },
  { no: "02", title: "We make the thinking visible.", text: "You should know why an idea fits, what it is meant to do and how the pieces work together." },
  { no: "03", title: "We stay open to learning.", text: "Creative work is not set in stone. We pay attention to the response and use it to make the next round stronger." },
];

export default function AboutPage() {
  return <main id="top" className="inner-page about-page">
    <MotionEnhancer />
    <header className="site-header shell">
      <a href="/" className="brand" aria-label="Goodwork Social home"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a>
      <SiteMenu />
      <a className="header-cta" href={booking}>Book a conversation <ArrowUpRight size={15}/></a>
      
    </header>

    <section className="about-hero shell">
      <div className="about-hero-topline"><span className="live-dot"/> INDEPENDENT SOCIAL STUDIO <span className="about-hero-rule"/> A POINT OF VIEW, NOT A TEMPLATE</div>
      <div className="about-hero-grid">
        <div className="about-hero-copy">
          <p className="eyebrow">A small studio. A close working relationship.</p>
          <h1>Good work starts with <em>paying attention.</em></h1>
          <p className="about-hero-intro">We help businesses find the story only they can tell, then turn it into thoughtful social content with a clear reason to exist.</p>
          <div className="hero-actions"><a className="button-primary" href={booking}>Let’s talk <ArrowUpRight size={17}/></a><a className="button-quiet" href="#point-of-view">Our point of view <ArrowDownRight size={17}/></a></div>
        </div>
        <aside className="about-hero-note"><span className="about-note-label">THE GOODWORK PRINCIPLE</span><span className="about-note-mark">“</span><p>The content should sound like <em>you,</em> not the internet.</p><div className="about-note-foot"><span>OUR STARTING POINT</span><span>GW / 01</span></div></aside>
      </div>
      <div className="about-hero-bottom"><span>STRATEGY BEFORE THE SCROLL</span><span>CHARACTER OVER COPY-PASTE</span><span>GOOD CREATIVE, BUILT WITH CARE</span></div>
    </section>

    <section className="about-manifesto" id="point-of-view"><div className="shell about-manifesto-grid">
      <div className="about-manifesto-visual"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" alt="People gathered around a table, sharing ideas and working together" loading="lazy"/><span className="about-image-caption">GOOD IDEAS COME FROM GETTING CLOSER.</span><span className="about-image-index">FIELD NOTES / 001</span></div>
      <div className="about-manifesto-copy"><p className="eyebrow">Our point of view</p><h2>Before the content, there is <em>the business.</em></h2><p>There is a reason someone started it. A way the team does things. A detail customers notice. A question people keep asking. Those things are more useful than chasing every trend.</p><p>Our job is to get close enough to find them, make sense of them and build a creative direction around what is genuinely there.</p><div className="about-manifesto-signoff"><span className="about-signoff-mark">gw<span>•</span></span><span><strong>Less noise. More meaning.</strong><small>THE WAY WE LIKE TO WORK</small></span></div></div>
    </div></section>

    <section className="about-principles shell"><div className="about-section-heading"><div><p className="eyebrow">Three things we believe</p><h2>Good work has<br/><em>good reasons.</em></h2></div><p>These are the ideas we return to when deciding what to say, what to make and what is better left out.</p></div><div className="about-principle-grid">{principles.map((item) => { const Icon = item.icon; return <article className="about-principle-card" key={item.no}><div className="about-principle-top"><span>{item.no} / PRINCIPLE</span><Icon size={20} strokeWidth={1.5}/></div><h3>{item.title}</h3><p>{item.text}</p><span className="about-principle-end">GOODWORK SOCIAL <span>↗</span></span></article>; })}</div></section>

    <section className="about-partnership"><div className="shell about-partnership-grid"><div className="about-partnership-heading"><p className="eyebrow">What working together looks like</p><h2>Thoughtful from the first <em>question.</em></h2><p>We want the process to feel clear, collaborative and connected to the real needs of your business. No mystery process. No creative for creative’s sake.</p><a className="button-light" href="/services">Explore our services <ArrowUpRight size={16}/></a></div><div className="about-partnership-list">{partnership.map((step) => <article className="about-partnership-step" key={step.no}><span className="about-step-no">{step.no}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><Check size={17}/></article>)}</div></div></section>

    <section className="about-fit shell"><div className="about-fit-intro"><p className="eyebrow">Who this works best for</p><h2>Good people doing work they <em>care about.</em></h2><p>We are a good fit for independent and growing businesses that value clarity, collaboration and creative work with a purpose.</p></div><div className="about-fit-grid"><article className="about-fit-card"><HeartHandshake size={21}/><h3>You value a real partnership.</h3><p>You want someone who listens, asks questions and works with your team, not just hands over assets.</p></article><article className="about-fit-card"><MessageCircle size={21}/><h3>You have something to say.</h3><p>You know your business has a point of view, even if you need help finding the clearest way to express it.</p></article></div></section>

    <section className="about-cta shell"><div className="about-cta-card"><div className="contact-label"><span className="live-dot"/> START WITH A CONVERSATION</div><div className="about-cta-grid"><h2>Let’s find the story <em>worth telling.</em></h2><div><p>Tell us what you are building, what you want people to understand and where you would like a hand. We will start there.</p><a className="button-primary" href={booking}>Book a conversation <ArrowUpRight size={17}/></a><span className="contact-small">NO BIG PITCH. JUST A GOOD FIRST CONVERSATION.</span></div></div></div></section>

    <footer className="site-footer"><div className="shell footer-main"><a href="/" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a><p>Thoughtful social for businesses doing good work.</p><div className="footer-links"><a href="/services">Services</a><a href="/work">Selected work</a><a href="/about">Our approach</a><a href="/#faq">FAQs</a><a href="/contact">Contact</a><a href={booking}>Get in touch ↗</a></div></div><div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>INDEPENDENT CREATIVE PARTNER</span><span>STRATEGY · CONTENT · COMMUNITY</span></div></footer>
  </main>;
}
