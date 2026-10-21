"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import SiteMenu from "../../SiteMenu";
import MotionEnhancer from "../../MotionEnhancer";
import { notFound } from "next/navigation";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "/contact#enquiry";
const projects = {
  "morrow-house": {
    name:"Morrow House", number:"01", category:"HOSPITALITY / CONTENT SYSTEM", title:"Make a place feel like a plan.",
    intro:"A neighbourhood restaurant should feel memorable before someone ever reaches the door. This concept turns the details around the table into a story people can almost step into.",
    challenge:"Restaurant feeds can become a loop of plated dishes and menu announcements. Morrow House needs a richer point of view: one that communicates atmosphere, people and the small rituals that make a visit worth planning.",
    idea:"Treat the restaurant like a character, not just a location. Build a recognisable story from the first light in the room, the hands finishing a dish and the familiar rhythm of service.",
    art:"Warm light, deep brown, linen and soft shadow. Photography feels observed rather than staged, with close details balanced by frames that let the room breathe.",
    image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=88",
    alt:"Warmly lit restaurant dining room prepared for service",
    gallery:[
      ["https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=85","A restaurant table set for an intimate meal","THE TABLE"],
      ["https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1100&q=85","Chef preparing food in a working kitchen","THE CRAFT"],
      ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85","Restaurant interior in warm evening light","THE ATMOSPHERE"]
    ],
    pillars:[["01","Behind the pass","The craft, decisions and people behind each plate."],["02","A table for the moment","Atmosphere, shared rituals and reasons to gather."],["03","Faces of Morrow","The team, regulars and neighbourhood connections."]],
    formats:["Chef-led short film","Three-frame atmosphere story","Weekly ritual series","A considered menu moment"],
    sample:"A good evening starts before the first bite.", sampleText:"A short-form story built around the small rituals that turn dinner into a reason to get together.", tone:"morrow-case", accent:"#a85f42", surface:"#e9e2d8"
  },
  "forma-wellbeing": {
    name:"Forma Wellbeing", number:"02", category:"WELLNESS / BRAND STORYTELLING", title:"Make the feeling tangible.",
    intro:"Wellbeing can feel personal before it feels familiar. This concept gives people a clearer, calmer picture of what beginning could look like.",
    challenge:"A first visit can come with questions people are unsure how to ask. The content needs to reduce that uncertainty without over-explaining the experience or making wellbeing feel clinical.",
    idea:"Replace abstract promises with helpful, human detail. Show the people, the space and what a first session involves, so the audience can understand the experience at their own pace.",
    art:"Soft daylight, chalk, pale stone, muted green and tactile natural materials. Spacious compositions give each message room to land.",
    image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=88",
    alt:"Calm wellness space with natural materials and soft light",
    gallery:[
      ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85","Quiet wellness retreat interior","THE SPACE"],
      ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85","Wellness professional guiding a movement session","THE GUIDANCE"],
      ["https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1100&q=85","Restful treatment room with natural textures","THE PAUSE"]
    ],
    pillars:[["01","Start here","Simple answers to the questions that come before a first visit."],["02","People who guide you","Practitioner introductions that feel warm, grounded and clear."],["03","Small moments of care","The details that help people feel at ease."]],
    formats:["First-visit walkthrough","Meet your practitioner portraits","Question-led educational reels","Quiet notes from the studio"],
    sample:"Not sure what to expect? Start here.", sampleText:"A welcoming content sequence that answers the first questions before asking someone to take the next step.", tone:"forma-case", accent:"#71856a", surface:"#e4e8df"
  },
  "sunday-objects": {
    name:"Sunday Objects", number:"03", category:"INDEPENDENT MAKERS / FOUNDER-LED", title:"Put the hands back in handmade.",
    intro:"When care goes into making an object, the story should show more than the finished product. This concept makes process, material and the maker part of the reason to care.",
    challenge:"A clean product image can show what something looks like, but not why it exists or what makes it different. Sunday Objects needs content that makes the value of the making visible.",
    idea:"Let the process lead. Build a recurring visual language from the founder's hands, material choices, work in progress and the small decisions that make each object feel considered.",
    art:"Paper, ink, natural wood, honest texture and soft daylight. Tight details meet unhurried studio frames, with enough imperfection to keep the work human.",
    image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=88",
    alt:"Maker's desk with notebook and creative tools",
    gallery:[
      ["https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=85","Notebook and tools on a working desk","THE WORKTABLE"],
      ["https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85","Carefully arranged objects in a quiet interior","THE OBJECT"],
      ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1100&q=85","Artist's hands and creative materials in a studio","THE PROCESS"]
    ],
    pillars:[["01","Made by hand","The gestures, tools and decisions behind the finished object."],["02","Material matters","Texture, sourcing and details you notice when you look closer."],["03","Objects in real life","How a piece earns its place in the everyday."]],
    formats:["Founder-led process film","Material close-up carousel","Studio notes and work in progress","Object-in-use editorial"],
    sample:"The good part is often in the making.", sampleText:"A process-led story that lets the material, the hands and the maker's choices do the talking.", tone:"sunday-case", accent:"#b47743", surface:"#e9dfd1"
  }
} as const;
type Slug = keyof typeof projects;
export function generateStaticParams(){return Object.keys(projects).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:{slug:string}}):Promise<Metadata>{
 const p=projects[params.slug as Slug]; return p?{title:p.name+" | Creative Case Study",description:p.intro,alternates:{canonical:"/work/"+params.slug},openGraph:{title:p.name+" | Goodwork Social",description:p.intro,images:[p.image]}}:{title:"Case Study | Goodwork Social"};
}
export default function CaseStudyPage({params}:{params:{slug:string}}){
 const p=projects[params.slug as Slug]; if(!p)notFound();
 return <main id="top" tabIndex={-1} className={"inner-page case-study-page "+p.tone} style={{"--case-accent":p.accent,"--case-surface":p.surface} as React.CSSProperties}>
 <MotionEnhancer/>
 <header className="site-header shell"><Link href="/" className="brand" aria-label="Goodwork Social home"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></Link><SiteMenu/><a className="header-cta" href={booking}>Book a conversation <ArrowUpRight size={15}/></a></header>
 <section className="case-hero shell">
  <div className="case-breadcrumb"><Link href="/work"><ArrowLeft size={14}/> Selected work</Link><span>{p.number} / 03</span></div>
  <div className="case-hero-copy"><p className="eyebrow">{p.category}</p><h1>{p.title}</h1><p className="case-intro">{p.intro}</p></div>
  <div className="case-hero-image"><img src={p.image} alt={p.alt} fetchPriority="high"/><span className="case-image-stamp">GOODWORK / FIELD NOTES<br/>CONCEPT {p.number}</span></div>
  <div className="case-meta-strip"><span>CREATIVE DIRECTION</span><span>CONTENT STRATEGY</span><span>CAMPAIGN SYSTEM</span><span>GOODWORK SOCIAL / 2026</span></div>
 </section>
 <section className="case-thinking shell"><div className="case-section-marker"><span>01</span><span>THE BRIEF</span></div><div className="case-thinking-grid"><h2>Find the thing<br/>that makes it <em>different.</em></h2><div className="case-thinking-copy"><p className="case-lead">{p.challenge}</p><div className="case-rule"/><p>{p.idea}</p></div></div></section>
 <section className="case-art-direction"><div className="shell case-art-grid"><div className="case-art-copy"><p className="eyebrow">The visual language</p><h2>Make the feeling<br/><em>recognisable.</em></h2><p>{p.art}</p><div className="case-art-tags"><span>ART DIRECTION</span><span>VISUAL RHYTHM</span><span>PLATFORM-NATIVE</span></div></div><div className="case-gallery">{p.gallery.map((item,i)=><figure className={"case-gallery-item case-gallery-item-"+(i+1)} key={item[2]}><img src={item[0]} alt={item[1]} loading="lazy"/><figcaption><span>{item[2]}</span><span>0{i+1}</span></figcaption></figure>)}</div></div></section>
 <section className="case-system shell"><div className="case-section-marker"><span>02</span><span>THE CONTENT SYSTEM</span></div><div className="case-system-heading"><h2>One point of view.<br/><em>Room to explore.</em></h2><p>A recognisable system makes each post feel connected without making every post feel the same.</p></div><div className="case-pillar-grid">{p.pillars.map(item=><article key={item[0]} className="case-pillar"><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div><div className="case-format-wrap"><p className="eyebrow">Built to become content</p><div className="case-format-list">{p.formats.map((format,i)=><div key={format}><span>0{i+1}</span><p>{format}</p><ArrowUpRight size={16}/></div>)}</div></div></section>
 <section className="case-sample"><div className="shell case-sample-grid"><div className="case-sample-visual"><img src={p.gallery[1][0]} alt={p.gallery[1][1]} loading="lazy"/><span className="case-sample-label">SAMPLE CREATIVE DIRECTION</span><div className="case-sample-overprint"><span>GOODWORK SOCIAL</span><p>{p.sample}</p></div></div><div className="case-sample-copy"><p className="eyebrow">A content idea, brought to life</p><h2>{p.sample}</h2><p>{p.sampleText}</p><div className="case-sample-caption"><span>FORMAT / SHORT-FORM STORY</span><span>ROLE / BUILD RECOGNITION</span></div></div></div></section>
 <section className="case-close shell"><div><p className="eyebrow">The point of the work</p><h2>Specific to the business.<br/><em>Built to be remembered.</em></h2><p>This concept explores how a clear creative idea can shape a useful, repeatable social presence.</p></div><div className="case-close-actions"><a className="button-primary" href={booking}>Build a story like this <MoveUpRight size={16}/></a><Link className="text-link" href="/work">Explore the other projects <ArrowRight size={15}/></Link></div></section>
 <footer className="site-footer"><div className="shell footer-main"><Link href="/" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></Link><p>Thoughtful social for businesses doing good work.</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/work">Selected work</Link><Link href="/about">Our approach</Link><Link href="/#faq">FAQs</Link><Link href="/contact">Contact</Link><a href={booking}>Get in touch ↗</a></div></div><div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>INDEPENDENT CREATIVE PARTNER</span><span>STRATEGY · CONTENT · COMMUNITY</span></div></footer>
 </main>;
}
