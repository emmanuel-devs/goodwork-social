import type { Metadata } from "next";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import MotionEnhancer from "../MotionEnhancer";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "https://your-ghl-booking-link.example";

export const metadata: Metadata = {
  title: "Selected Work & Creative Case Studies",
  description: "Explore Goodwork Social concept projects across hospitality, wellbeing and independent makers, with the strategy and creative thinking behind each story.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work | Goodwork Social",
    description: "Different businesses, different stories. Explore the thinking behind Goodwork Social's creative work.",
    url: "/work",
    type: "website",
  },
};

const projects = [
  {
    id: "morrow-house", number: "01", name: "Morrow House", category: "HOSPITALITY / CONTENT SYSTEM",
    descriptor: "Make a place feel like a plan.",
    summary: "A neighbourhood restaurant with a point of view beyond the menu. The opportunity is to make the people, rituals and atmosphere as memorable as the food.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1700&q=85",
    alt: "Warm restaurant dining room set for an intimate dinner service", tone: "morrow",
    challenge: "A restaurant can have beautiful food and still look like every other restaurant in the feed. Morrow House needs a story that makes people feel the place before they book a table.",
    direction: "Bring the room to life through its people and rituals: the first plate leaving the pass, a familiar face behind the bar, the quiet details before service begins.",
    formats: ["Chef and team portraits", "Short-form kitchen stories", "Atmosphere-led photo essays", "A repeatable weekly content rhythm"],
    note: "A lived-in, low-light visual language. Warm tones, considered framing and human moments rather than polished food catalogue imagery."
  },
  {
    id: "forma-wellbeing", number: "02", name: "Forma Wellbeing", category: "WELLNESS / BRAND STORYTELLING",
    descriptor: "Make the feeling tangible.",
    summary: "A thoughtful wellbeing brand that needs to make the first visit feel less unfamiliar. Clear, calm content answers the questions people might not know how to ask.",
    image: "https://images.unsplash.com/photo-1772616748530-7cd73053f326?auto=format&fit=crop&w=1700&q=85",
    alt: "Serene wellbeing studio with natural textures and soft daylight", tone: "forma",
    challenge: "People often hesitate when they do not know what to expect. The content should lower that uncertainty without making the experience feel clinical or over-explained.",
    direction: "Build trust through gentle introductions, simple explanations and real details of the experience. Show what happens, who is there and how it feels to begin.",
    formats: ["First-visit walkthroughs", "Practitioner introductions", "Helpful question-led reels", "Quiet visual notes from the space"],
    note: "A softer visual rhythm with daylight, tactile surfaces and calm compositions. Helpful before aspirational, reassuring without making promises."
  },
  {
    id: "sunday-objects", number: "03", name: "Sunday Objects", category: "INDEPENDENT MAKERS / FOUNDER-LED",
    descriptor: "Put the hands back in handmade.",
    summary: "A small maker-led brand with care built into every detail. The story lives in the process, the material and the person doing the work.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1700&q=85",
    alt: "Creative maker's desk with notebook, paper and working tools", tone: "sunday",
    challenge: "When a product is made with care, a standard product shot rarely tells the whole story. The work needs to show why the object is worth noticing and keeping.",
    direction: "Make the process part of the product story. Let the founder's hands, material choices and small decisions become recurring content people can recognise.",
    formats: ["Founder-led process films", "Material and detail photography", "Studio notes and work-in-progress", "Product stories rooted in use"],
    note: "Close crops, honest texture and a hands-on editorial feel. Each asset should feel made, not manufactured for the algorithm."
  }
];

export default function WorkPage() {
  return <main id="top" className="inner-page work-page">
    <MotionEnhancer />
    <header className="site-header shell">
      <a href="/" className="brand" aria-label="Goodwork Social home"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="/services">Services</a><a href="/work" aria-current="page">Selected work</a><a href="/about">Our approach</a><a href="/#faq">FAQs</a></nav>
      <a className="header-cta" href={booking}>Book a conversation <ArrowUpRight size={15}/></a>
      <details className="mobile-nav"><summary aria-label="Open navigation"><span></span><span></span></summary><nav aria-label="Mobile navigation"><a href="/services">Services</a><a href="/work">Selected work</a><a href="/about">Our approach</a><a href="/#voices">Client voices</a><a href="/#faq">FAQs</a><a href={booking}>Book a conversation ↗</a></nav></details>
    </header>

    <section className="work-hero shell">
      <div className="work-hero-topline"><span className="live-dot"/> SELECTED WORK <span className="work-hero-rule"/> STRATEGY / CONTENT / CAMPAIGNS</div>
      <div className="work-hero-grid">
        <div className="work-hero-copy"><p className="eyebrow">Every business has its own story.</p><h1>Different businesses.<br/><em>Different stories.</em></h1><p className="work-hero-intro">We start by paying attention. The details that make one business different should shape the way its story looks, sounds and shows up online.</p><a className="button-primary" href="#project-index">Explore the projects <ArrowDownRight size={17}/></a></div>
        <aside className="work-hero-note"><span className="micro-label">A NOTE ON THE WORK</span><p>These concept projects show how we approach a brief: understand the business, find the story, then build a content system around it.</p><div className="work-hero-note-foot"><span>GOODWORK / FIELD NOTES</span><span>VOL. 01</span></div></aside>
      </div>
      <div className="work-index-strip"><span>01 / HOSPITALITY</span><span>02 / WELLBEING</span><span>03 / INDEPENDENT MAKERS</span><span>ONE STUDIO, DISTINCT STORIES</span></div>
    </section>

    <section className="work-index shell" id="project-index">
      <div className="work-index-heading"><div><p className="eyebrow">A closer look</p><h2>Good work starts<br/>with <em>good questions.</em></h2></div><p>Three different worlds, three different content challenges. Explore the thinking behind each one.</p></div>
      <div className="work-project-list">
        {projects.map((project) => <a className={"work-project-card " + project.tone} href={"#"+project.id} key={project.id}>
          <div className="work-project-image"><img src={project.image} alt={project.alt} loading="lazy"/><span className="work-project-number">{project.number} / 03</span><span className="work-project-open"><ArrowUpRight size={18}/></span></div>
          <div className="work-project-copy"><span className="work-project-category">{project.category}</span><h3>{project.name}</h3><p className="work-project-descriptor">{project.descriptor}</p><p className="work-project-summary">{project.summary}</p><span className="work-project-link">Explore the thinking <ArrowRight size={15}/></span></div>
        </a>)}
      </div>
    </section>

    {projects.map((project) => <section className={"work-case-section " + project.tone} id={project.id} key={project.id}>
      <div className="shell work-case-shell">
        <div className="work-case-topline"><span>{project.number} / CASE NOTES</span><span>{project.category}</span></div>
        <div className="work-case-grid">
          <div className="work-case-copy"><p className="eyebrow">The thinking behind it</p><h2>{project.descriptor}</h2><p className="work-case-summary">{project.summary}</p><div className="work-case-rule"/><div className="work-case-block"><span className="micro-label">THE CHALLENGE</span><p>{project.challenge}</p></div><div className="work-case-block"><span className="micro-label">THE CREATIVE DIRECTION</span><p>{project.direction}</p></div></div>
          <div className="work-case-visual"><img src={project.image} alt={project.alt} loading="lazy"/><div className="work-case-caption"><span>CREATIVE NOTE / {project.number}</span><p>{project.note}</p></div></div>
        </div>
        <div className="work-case-bottom"><div><span className="micro-label">CONTENT SYSTEM</span><ul>{project.formats.map((format) => <li key={format}><Check size={14}/>{format}</li>)}</ul></div><a className="text-link" href={booking}>Build a story for your business <MoveUpRight size={15}/></a></div>
      </div>
    </section>)}

    <section className="work-end shell"><div className="work-end-card"><div className="contact-label"><span className="live-dot"/> YOUR BUSINESS IS ITS OWN STORY</div><div className="work-end-grid"><h2>Let’s find<br/><em>your point of view.</em></h2><div><p>Tell us what you do, who you want to reach and what you want people to remember. We’ll find a useful place to begin.</p><a className="button-primary" href={booking}>Start a conversation <ArrowUpRight size={17}/></a><span className="contact-small">GOOD THINKING FIRST. GOOD CONTENT NEXT.</span></div></div></div></section>

    <footer className="site-footer"><div className="shell footer-main"><a href="/" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a><p>Thoughtful social for businesses doing good work.</p><div className="footer-links"><a href="/services">Services</a><a href="/work">Selected work</a><a href="/about">Our approach</a><a href="/#faq">FAQs</a><a href="/contact">Contact</a><a href={booking}>Get in touch ↗</a></div></div><div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>INDEPENDENT CREATIVE PARTNER</span><span>STRATEGY · CONTENT · COMMUNITY</span></div></footer>
  </main>;
}
