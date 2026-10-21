"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import SiteMenu from "./SiteMenu";
import MotionEnhancer from "./MotionEnhancer";
import { caseStudyList } from "./work/projects";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "/contact#enquiry";
const services = [
  { tag: "THINK", icon: "↗", title: "Strategy & direction", text: "Find the clearest story, the right audience and the content pillars worth showing up for." },
  { tag: "MAKE", icon: "✳", title: "Social-first production", text: "Short-form video, photography and campaign creative made to feel native to the platform." },
  { tag: "CONNECT", icon: "◎", title: "Publishing & community", text: "A consistent presence, thoughtful replies and a feedback loop that makes the next month smarter." }
];
const projects = caseStudyList;
const faqs = [
  ["What kind of businesses do you work with?", "Independent and growing businesses with something meaningful to offer. The best work starts with a real story, a clear audience and a willingness to collaborate."],
  ["Do you only create content, or manage social too?", "Both are possible. We can shape strategy and produce assets, or support publishing, community management and learning from the response."],
  ["How does a project begin?", "With a conversation about your business, what you need social to do and what is getting in the way. From there, we can recommend a focused project or ongoing partnership."],
  ["Can you work with our in-house team?", "Absolutely. We can work alongside your team, fill a production gap or help build a repeatable content system."]
];
const objectives = {
 Awareness: {
  signal: "Reach, impressions and video retention",
  question: "Are the right people noticing the work?",
  response: "Sharpen the opening, clarify the message and repeat the creative cues people recognise."
 },
 Consideration: {
  signal: "Saves, shares and profile visits",
  question: "Is the work giving people a reason to come back?",
  response: "Build useful content series, answer real questions and make the next step easier to find."
 },
 Action: {
  signal: "Link clicks, enquiries and bookings",
  question: "Is attention turning into a meaningful next step?",
  response: "Make the offer clearer, remove friction and connect each campaign to one useful action."
 }
};

function CountUpMetric({ label, value, index }: { label: string; value: number; index: number }) {
 const [count,setCount] = useState(0);
 const target = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const node = target.current;
  if (!node) return;
  let frame = 0;
  let timeout: ReturnType<typeof setTimeout> | undefined;
  const observer = new IntersectionObserver((entries) => {
   if (!entries.some((entry) => entry.isIntersecting)) return;
   observer.disconnect();
   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCount(value); return; }
   const startAnimation = () => {
    const start = performance.now();
    const duration = 1450;
    const tick = (now: number) => {
     const progress = Math.min(1,(now-start)/duration);
     const eased = 1-Math.pow(1-progress,4);
     setCount(Math.round(value*eased));
     if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
   };
   timeout = setTimeout(startAnimation,index*140);
  }, { threshold: 0.35 });
  observer.observe(node);
  return () => { observer.disconnect(); cancelAnimationFrame(frame); if(timeout) clearTimeout(timeout); };
 },[value,index]);
 return <div className="proof-counter" ref={target}><span className="proof-counter-label">{label}</span><strong aria-label={label+" "+value.toLocaleString("en-US")}>{count.toLocaleString("en-US")}</strong></div>;
}

function InteractiveProof() {
 const [metric,setMetric] = useState("Reach");
 const [windowSize,setWindowSize] = useState("12");
 const series: Record<string, number[]> = { Reach:[18,24,22,38,34,51,47,62,58,76,72,92], Saves:[12,20,18,31,28,44,40,56,53,68,64,85], "Profile visits":[10,18,16,29,25,39,35,51,48,65,60,82] };
 const values = (series[metric] || series.Reach).slice(windowSize==="4" ? -4 : 0);
 return <div className="results-board proof-dashboard"><div className="results-board-head"><span>INSIGHTS EXPLORER</span><span>ILLUSTRATIVE DATA</span></div><div className="proof-counter-grid"><CountUpMetric label="Reach" value={12840} index={0}/><CountUpMetric label="Saves" value={864} index={1}/><CountUpMetric label="Profile visits" value={2190} index={2}/></div><div className="proof-controls" role="group" aria-label="Choose a metric">{Object.keys(series).map((name)=><button type="button" key={name} className={metric===name?"is-active":""} aria-pressed={metric===name} onClick={()=>setMetric(name)}>{name}</button>)}</div><div className="proof-chart-heading"><span className="result-brand">{metric.toUpperCase()}</span><label>View <select value={windowSize} onChange={(e)=>setWindowSize(e.target.value)} aria-label="Chart time window"><option value="12">12 weeks</option><option value="4">4 weeks</option></select></label></div><div className="proof-bars" role="img" aria-label={metric+" example trend, demonstration data"}>{values.map((value,index)=><div className="proof-bar-column" key={index}><span className="proof-bar-value">{value}</span><i style={{height:(value/100*100)+"%"}}/><small>W{windowSize==="4"?index+9:index+1}</small></div>)}</div><div className="proof-chart-foot"><span><i/> Illustrative trend</span><span>Example reporting data</span></div><p className="concept-note">The figures and trend shown here are illustrative, not reported client results.</p></div>;
}

export default function Home() {
  return <main id="top" tabIndex={-1}>
    <MotionEnhancer />
    <header className="site-header shell">
      <a href="#top" className="brand" aria-label="Goodwork Social home"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a>
      <SiteMenu />
      <a className="header-cta" href={booking}>Book a conversation <ArrowUpRight size={15}/></a>
      
    </header>

    <section className="hero shell">
      <div className="hero-topline"><span className="live-dot"/> Independent social studio <span className="topline-rule"/> Strategy · Content · Community</div>
      <div className="hero-grid">
        <div className="hero-copy"><p className="eyebrow">Good work, properly told.</p><h1>We make your work <em>mean</em> something online.</h1><p className="hero-intro">A social creative partner for businesses with something real to say. We turn what makes you good into content people notice, understand and remember.</p><div className="hero-actions"><a className="button-primary" href={booking}>Let’s talk <ArrowUpRight size={17}/></a><a className="button-quiet" href="#work">Explore the work <ArrowDownRight size={17}/></a></div><div className="hero-proof"><p><strong>Independent by choice.</strong><br/>Close collaboration. Clear creative direction.</p></div></div>
        <div className="hero-art"><div className="art-heading"><span>GOODWORK / CREATIVE OFFICE</span><span>INDEPENDENT STUDIO</span></div><div className="hero-photo"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" alt="Creative team sharing ideas around a table" fetchPriority="high"/><span className="photo-stamp">THE STORY<br/>IS ALREADY THERE.</span></div><div className="hero-art-bottom"><div><span className="micro-label">START WITH</span><strong>What makes<br/>you different.</strong></div><div className="scribble"><Sparkles size={19}/><span>Strategy first.<br/>Good work always.</span></div></div></div>
      </div>
      <div className="hero-ribbon"><span>GOODWORK IS FOR</span><div><b>THE PEOPLE BEHIND THE BUSINESS</b><i/><b>THE DETAILS OTHERS MISS</b><i/><b>THE STORIES WORTH SHARING</b></div></div>
    </section>

    <section className="trust-section"><div className="shell trust-inner"><p className="eyebrow">How we help good businesses grow</p><div className="brand-wall practice-list"><span className="practice-item"><small>01</small><strong>Strategy & direction</strong></span><span className="practice-item"><small>02</small><strong>Social-first production</strong></span><span className="practice-item"><small>03</small><strong>Publishing & community</strong></span><span className="practice-item"><small>04</small><strong>Campaign creative</strong></span></div></div></section>

    <section className="results-section shell story-section"><div className="results-intro"><p className="eyebrow">The work should move something.</p><h2>Not just more posts.<br/><em>More of a point.</em></h2><p>Strong social starts with a clear idea. Then we make it easy to recognise, worth spending time with and useful to the business behind it.</p><div className="proof-guardrail"><span>01</span><p><strong>Start with the goal.</strong><br/>Awareness, engagement and action need different signals.</p></div><div className="proof-guardrail"><span>02</span><p><strong>Learn from real data.</strong><br/>We use platform analytics to understand what deserves more attention.</p></div></div><InteractiveProof /></section>

    <section className="services-section story-section" id="services"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What we bring to the table</p><p className="heading-side-note">One thoughtful partner, from the first useful question to the final edit.</p></div><h2>Make every post<br/>earn its <em>place.</em></h2></div><div className="service-grid">{services.map((s) => <article className="service-card" key={s.title}><span className="service-tag">{s.tag}</span><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><a href={booking}>Let’s talk about it <ArrowUpRight size={15}/></a></article>)}</div></div></section>

    <section className="work-section shell story-section" id="work"><div className="work-heading"><div><p className="eyebrow">Selected work</p><h2>Different businesses.<br/><em>Different stories.</em></h2></div><p>A selection of creative directions showing how strategy, content and visual identity can work together across different industries.</p></div><div className="project-grid">{projects.map((p) => <article className={"project-card " + p.className} key={p.id}><a className="project-card-detail-link" href={"/work/"+p.id} aria-label={"Read the "+p.brand+" case study"}><span className="sr-only">Read the {p.brand} case study</span></a><div className="project-image"><img src={p.image} alt={p.alt} loading="lazy"/><span className="project-brand">{p.brand}</span><span className="project-metric"><strong>{p.type.split(" · ")[0]}</strong><small>CREATIVE FOCUS</small></span></div><div className="project-meta"><span>{p.type}</span><span>CREATIVE DIRECTION</span></div><h3>{p.title}</h3><p>{p.text}</p><a className="text-link" href={booking}>Build a story like this <ArrowUpRight size={15}/></a><a className="project-open-link" href={"/work/"+p.id}>View case study <ArrowUpRight size={14}/></a></article>)}</div></section>

    <section className="approach-section story-section" id="about"><div className="shell approach-grid"><div className="approach-heading"><p className="eyebrow">How we work</p><h2>Clear thinking.<br/><em>Good making.</em></h2><p>We get close to the business before we reach for the camera. That’s how the content feels specific instead of interchangeable.</p><a className="button-light" href={booking}>Meet your creative partner <ArrowUpRight size={16}/></a></div><div className="approach-steps"><article><span className="step-no">01</span><div><h3>Get close to the business</h3><p>Understand the people, the product and the reason customers choose you.</p></div><span className="step-tag">LISTEN</span></article><article><span className="step-no">02</span><div><h3>Find the story worth telling</h3><p>Turn the strongest ideas into a clear direction, then make content with a point of view.</p></div><span className="step-tag">CREATE</span></article><article><span className="step-no">03</span><div><h3>Publish, learn, improve</h3><p>Pay attention to what people respond to and use it to shape the next round.</p></div><span className="step-tag">REFINE</span></article></div></div></section>

    <section className="voices-section shell story-section" id="voices"><div className="voices-heading"><p className="eyebrow">The people behind the process</p><h2>Good work is<br/><em>better together.</em></h2><p>Thoughtful collaboration means asking better questions, sharing clear feedback and making room for the brand’s real personality.</p><span className="quote-mark">“</span></div><div className="testimonial-grid"><article className="testimonial-card process-card"><span className="service-tag">LISTEN</span><h3>Understand the business first.</h3><p>We start with your audience, your offer and what you want the work to change.</p></article><article className="testimonial-card process-card"><span className="service-tag">MAKE</span><h3>Build with intention.</h3><p>Ideas become content with a clear role, a recognisable point of view and a reason to exist.</p></article><article className="testimonial-card process-card"><span className="service-tag">LEARN</span><h3>Improve with evidence.</h3><p>Real audience response helps shape the next round, without chasing every passing trend.</p></article></div></section>

    <section className="packages-section story-section"><div className="shell"><div className="packages-heading"><p className="eyebrow">Ways to work together</p><h2>Start where you are.<br/><em>Build from there.</em></h2><p>Focused support when you need a clear answer, or an ongoing partner to keep the good work moving.</p></div><div className="package-grid"><article className="package-card"><span className="package-type">THE STARTING POINT</span><h3>Clarity Session</h3><p>For a business that needs direction before it needs more content.</p><ul><li><Check size={15}/> Social presence review</li><li><Check size={15}/> Audience and message direction</li><li><Check size={15}/> Practical content roadmap</li></ul><a href={booking}>Talk through the challenge <ArrowUpRight size={15}/></a></article><article className="package-card package-featured"><span className="package-type">THE CREATIVE PARTNER</span><span className="package-pill">ONGOING SUPPORT</span><h3>Content Partnership</h3><p>For teams ready to show up consistently with a recognisable point of view.</p><ul><li><Check size={15}/> Monthly content planning</li><li><Check size={15}/> Creative production and editing</li><li><Check size={15}/> Publishing and learning loop</li></ul><a href={booking}>Build a plan together <ArrowUpRight size={15}/></a></article><article className="package-card"><span className="package-type">THE BIGGER MOMENT</span><h3>Campaign Sprint</h3><p>For a launch, a new offer or a story that deserves a focused push.</p><ul><li><Check size={15}/> Campaign concept and direction</li><li><Check size={15}/> A coordinated content set</li><li><Check size={15}/> Creative review and next steps</li></ul><a href={booking}>Plan a campaign <ArrowUpRight size={15}/></a></article></div><p className="package-note">Each scope is shaped around the business, timeline and work required. We’ll talk through fit before recommending a package.</p></div></section>

    <section className="faq-section shell story-section" id="faq"><div className="faq-heading"><p className="eyebrow">A few useful answers</p><h2>Before we<br/><em>get started.</em></h2><p>Still have a question? Start a conversation and we’ll take it from there.</p><a className="text-link" href={booking}>Ask us directly <ArrowUpRight size={15}/></a></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="contact-section shell story-section" id="contact"><div className="contact-card"><div className="contact-label"><span className="live-dot"/> HAVE A GOOD THING GOING?</div><div className="contact-grid"><h2>Let’s make<br/><em>it matter.</em></h2><div className="contact-copy"><p>Tell us what you’re building, who you want to reach and what you want people to understand. We’ll start with a good conversation.</p><a className="button-primary" href={booking}>Book a free call <ArrowUpRight size={17}/></a><span className="contact-small">NO BIG PITCH. JUST A GOOD FIRST CONVERSATION.</span></div></div></div></section>

    <footer className="site-footer"><div className="shell footer-main"><a href="#top" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a><p>Thoughtful social for businesses doing good work.</p><div className="footer-links"><a href="/services">Services</a><a href="/work">Selected work</a><a href="/about">Our approach</a><a href="#faq">FAQs</a><a href={booking}>Get in touch ↗</a></div></div><div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>INDEPENDENT CREATIVE PARTNER</span><span>STRATEGY · CONTENT · COMMUNITY</span></div></footer>
  </main>;
}
