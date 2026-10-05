'use client';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/data/config';

const waLink = (text?: string) => `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export function Navigation(){
 const [open,setOpen]=useState(false),[compact,setCompact]=useState(false);
 useEffect(()=>{const fn=()=>setCompact(scrollY>40);addEventListener('scroll',fn,{passive:true});return()=>removeEventListener('scroll',fn)},[]);
 const links=['About','Services','Work','Skills','Process','Contact'];
 return <header className={`nav ${compact?'compact':''}`}><a className="logo" href="#home" aria-label="Karim home">KARIM<span>.</span></a><nav className={open?'open':''} aria-label="Primary navigation">{links.map(x=><a onClick={()=>setOpen(false)} key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</nav><a className="button navCta" href="#contact">Start a Project <span>↗</span></a><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><i/><i/></button></header>
}

export function Reveal(){useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('seen')),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));return()=>io.disconnect()},[]);return null}

export function HeroVisual(){
 const basePath=process.env.NEXT_PUBLIC_BASE_PATH||'';
 useEffect(()=>{const el=document.querySelector('.portraitStage') as HTMLElement|null;if(!el)return;const move=(e:PointerEvent)=>{if(innerWidth<900)return;const x=(e.clientX/innerWidth-.5)*5,y=(e.clientY/innerHeight-.5)*-4;el.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`};addEventListener('pointermove',move);return()=>removeEventListener('pointermove',move)},[]);
 return <div className="visual portraitVisual" aria-label="AI-created editorial portrait of Karim"><div className="portraitStage"><div className="portraitFrame"><img src={`${basePath}/karim-ai-portrait.jpg`} alt="AI-created editorial portrait representing Karim"/><div className="portraitAvailability"><i/> Available for work</div></div><div className="portraitCaption"><span>Karim</span><small>Web Developer · Patna, India</small></div></div></div>
}

export function Counters(){useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('[data-count]');const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target as HTMLElement,target=Number(el.dataset.count);let n=0;const timer=setInterval(()=>{n+=Math.max(1,Math.ceil((target-n)/7));if(n>=target){n=target;clearInterval(timer)}el.textContent=n+'+'},35);io.unobserve(el)}));els.forEach(x=>io.observe(x));return()=>io.disconnect()},[]);return null}

/* ---------- WhatsApp floating button ---------- */
export function WhatsAppFloat(){
 return <a className="whatsFloat" href={waLink("Hi Karim! I visited your portfolio and I'd like to discuss a project.")} target="_blank" rel="noreferrer" aria-label="Chat with Karim on WhatsApp">
  <span className="whatsPulse" aria-hidden="true"/>
  <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path fill="#fff" d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.58-1.68a12.74 12.74 0 0 0 6.22 1.6h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.05-3.67zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.02 1.07-3.92-.25-.4a10.55 10.55 0 0 1-1.62-5.65c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.5 1.1 7.51 3.11a10.56 10.56 0 0 1 3.1 7.52c0 5.86-4.77 10.63-10.62 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.25 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z"/></svg>
  <span className="whatsTip">Chat on WhatsApp</span>
 </a>
}

/* ---------- Chatbot ---------- */
type BotAction={label:string;run:()=>void};
type ChatMsg={from:'bot'|'user';text:string;actions?:BotAction[]};

function botReply(raw:string):Omit<ChatMsg,'from'>{
 const t=raw.toLowerCase();
 const waAction:BotAction={label:'📲 Chat on WhatsApp',run:()=>window.open(waLink('Hi Karim! I was talking to your chatbot and I\'d like to discuss a project.'),'_blank')};
 const workAction:BotAction={label:'💼 View my work',run:()=>document.getElementById('work')?.scrollIntoView({behavior:'smooth'})};
 const quoteAction:BotAction={label:'💰 Get a quote',run:()=>{window.open(waLink('Hi Karim! I\'d like a quote. Here\'s my idea:'),'_blank')}};
 if(/(pric|cost|rate|charge|budget|quote|kitna|kharcha|fee)/.test(t))return{text:`Projects start at ${siteConfig.startingPrice} — fixed scope, transparent quotes, no surprises. Tell me what you're building and I'll send a proper estimate.`,actions:[quoteAction,waAction]};
 if(/(wordpress|woocommerce|elementor|shopify|cms)/.test(t))return{text:'Yes! WordPress, Elementor, WooCommerce and Shopify are daily tools — custom themes, ACF, integrations, SEO and performance tuning included.',actions:[waAction,workAction]};
 if(/(seo|rank|google|traffic)/.test(t))return{text:'Technical + on-page SEO, Core Web Vitals, schema and content strategy — baked into every build, not an afterthought.',actions:[workAction,waAction]};
 if(/(app|saas|dashboard|ai|automation)/.test(t))return{text:'Next.js, React, TypeScript, Firebase and AI integrations — I build complete web apps and AI-powered features end to end.',actions:[workAction,waAction]};
 if(/(portfolio|work|project|demo|example)/.test(t))return{text:'My recent work is right on this page — live stores with admin panels, brand sites and agency builds. Scroll to the Selected Work section.',actions:[workAction]};
 if(/(contact|email|phone|number|reach|talk|call|speak)/.test(t))return{text:'Fastest way to reach Karim is WhatsApp — he usually replies within an hour during work hours.',actions:[waAction]};
 if(/(time|days|duration|deliver|kab|kitne din)/.test(t))return{text:'A landing page takes about a week, a full website 2–4 weeks, web apps depend on scope. Exact timelines come with the quote.',actions:[quoteAction,waAction]};
 if(/(hi|hello|hey|namaste|hii)/.test(t))return{text:'Hey! 👋 Tell me what you\'re trying to build — a website, an online store, a web app or automation — and I\'ll point you in the right direction.'};
 if(/(thank|thanks|shukriya|thx)/.test(t))return{text:'Anytime! 🙌 If you want to move forward, WhatsApp is the fastest way to keep things moving.'};
 return{text:'Great question! For the fastest and most accurate answer, ping Karim directly on WhatsApp — I can\'t wait, so let\'s connect you. 📲',actions:[waAction]};
}

export function ChatBot(){
 const [open,setOpen]=useState(false);
 const [msgs,setMsgs]=useState<ChatMsg[]>([{from:'bot',text:'Hey! 👋 I\'m Karim\'s virtual assistant. Looking for a website, online store, web app or AI tool? Tap an option below or just ask me.',actions:[{label:'💰 Pricing',run:()=>send('pricing')},{label:'💼 My work',run:()=>send('my work')},{label:'📲 WhatsApp me',run:()=>window.open(waLink('Hi Karim! I want to start a project.'),'_blank')}]}]);
 const [input,setInput]=useState('');
 const [typing,setTyping]=useState(false);
 const bodyRef=useRef<HTMLDivElement>(null);
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 useEffect(()=>{const b=bodyRef.current;if(b)b.scrollTop=b.scrollHeight},[msgs,typing,open]);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
 const send=(text:string)=>{
  const clean=text.trim();if(!clean)return;
  setMsgs(m=>[...m,{from:'user',text:clean}]);
  setInput('');setTyping(true);
  timer.current=setTimeout(()=>{setTyping(false);setMsgs(m=>[...m,{from:'bot',...botReply(clean)}])},750);
 };
 return <>
  <button className={`chatFloat ${open?'on':''}`} onClick={()=>setOpen(!open)} aria-label="Open chat" aria-expanded={open}>
   {open?<span className="chatClose" aria-hidden="true">✕</span>:<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="#111" d="M12 2C6.48 2 2 5.94 2 10.8c0 2.5 1.15 4.76 3.02 6.4L4 22l4.55-2.18c1.08.33 2.24.51 3.45.51 5.52 0 10-3.94 10-8.8S17.52 2 12 2zm-4.5 8.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>}
   {!open&&<span className="chatDot" aria-hidden="true"/>}
  </button>
  {open&&<div className="chatPanel" role="dialog" aria-label="Chat with Karim">
   <div className="chatHead"><span className="chatAvatar">K</span><div><b>Karim</b><small><i/> Online · replies fast</small></div><button className="chatHeadClose" onClick={()=>setOpen(false)} aria-label="Close chat">✕</button></div>
   <div className="chatBody" ref={bodyRef}>
    {msgs.map((m,i)=>{
     const actions=m.actions&&i===msgs.length-1?m.actions:undefined;
     return <div key={i} className={`chatMsg ${m.from}`}>
      <p>{m.text}</p>
      {actions&&<div className="chatActions">{actions.map(a=><button key={a.label} onClick={a.run}>{a.label}</button>)}</div>}
     </div>})}
    {typing&&<div className="chatMsg bot typing"><span/><span/><span/></div>}
   </div>
   <div className="chatQuick">{['💰 Pricing','💼 My work','🛠 Services','📲 WhatsApp me'].map(q=><button key={q} onClick={()=>{if(q.startsWith('📲'))window.open(waLink('Hi Karim! I want to start a project.'),'_blank');else if(q.startsWith('🛠'))send('what services do you offer');else send(q.slice(3))}}>{q}</button>)}</div>
   <form className="chatInput" onSubmit={e=>{e.preventDefault();send(input)}}>
    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your message…" aria-label="Chat message"/>
    <button type="submit" aria-label="Send message">➤</button>
   </form>
  </div>}
 </>
}

/* ---------- Contact form (FormSubmit + WhatsApp) ---------- */
export function ContactForm(){
 const [sent,setSent]=useState<'idle'|'sending'|'ok'|'error'|'wa'>('idle');
 const [data,setData]=useState<Record<string,string>>({});
 const collect=(e:HTMLFormElement|React.FormEvent<HTMLFormElement>)=>{
  const el='currentTarget' in e?e.currentTarget:(e as HTMLFormElement);
  const fd=new FormData(el);
  const d:Record<string,string>={};fd.forEach((v,k)=>{d[k]=String(v)});setData(d);return d;
 };
 const waText=(d:Record<string,string>)=>`Hi Karim! New enquiry from your portfolio form.\n\nName: ${d.name||'-'}\nEmail: ${d.email||'-'}\nPhone: ${d.phone||'-'}\nCompany: ${d.company||'-'}\nProject: ${d.type||'-'}\nBudget: ${d.budget||'-'}\n\n${d.message||''}`;
 const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const d=collect(e);
  if(!siteConfig.email){window.open(waLink(waText(d)),'_blank');setSent('wa');return}
  setSent('sending');
  fetch(`https://formsubmit.co/ajax/${siteConfig.email}`,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(d)})
   .then(r=>setSent(r.ok?'ok':'error')).catch(()=>setSent('error'));
 };
 return <form className="contactForm" onSubmit={onSubmit}>
  <div className="fieldRow"><label>Name<input required name="name" autoComplete="name"/></label><label>Email<input required type="email" name="email" autoComplete="email"/></label></div>
  <div className="fieldRow"><label>Company / Business<input name="company"/></label><label>Phone / WhatsApp<input name="phone" inputMode="tel" placeholder="+91 …"/></label></div>
  <div className="fieldRow"><label>Project Type<select name="type" defaultValue=""><option value="" disabled>Select a service</option>{['WordPress Website','Elementor Website','E-Commerce','Web Application','SaaS','AI Integration','SEO','Website Redesign','Other'].map(x=><option key={x}>{x}</option>)}</select></label><label>Budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>₹15k–₹30k</option><option>₹30k–₹75k</option><option>₹75k–₹1.5L</option><option>₹1.5L+</option><option>Let's discuss</option></select></label></div>
  <label>Message<textarea required name="message" rows={5} placeholder="Tell me what you're trying to build, improve or automate."/></label>
  <div className="formBtns">
   <button className="button primary" type="submit">{sent==='sending'?'Sending…':siteConfig.email?'Start a Conversation':'Send Enquiry (opens WhatsApp)'} <span>↗</span></button>
   <button className="button secondary waBtn" type="button" onClick={()=>{const f=document.querySelector<HTMLFormElement>('.contactForm');if(!f)return;const d=collect(f);window.open(waLink(waText(d)),'_blank')}}>💬 Send via WhatsApp</button>
  </div>
  {sent==='ok'&&<p className="formOk">Thank you! Your enquiry has been sent — I'll get back within 24 hours.</p>}
  {sent==='wa'&&<p className="formOk">WhatsApp opened with your details — just hit send and we'll talk. 📲</p>}
  {sent==='error'&&<p className="formNote">Couldn't send right now — try the WhatsApp button instead.</p>}
  <p className="formNote">{siteConfig.email?`Or skip the form — WhatsApp me directly: <a href={waLink()} target="_blank" rel="noreferrer">+91 76311 15414</a>.`:`Fastest reply on WhatsApp: <a href={waLink()} target="_blank" rel="noreferrer">+91 76311 15414</a> · Add your email in <code>data/config.ts</code> to receive enquiries by email too.`}</p>
 </form>
}

export function Cursor(){useEffect(()=>{if(matchMedia('(pointer:coarse)').matches)return;const c=document.createElement('div');c.className='cursor';document.body.append(c);const m=(e:PointerEvent)=>{c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`};addEventListener('pointermove',m);document.querySelectorAll('a,button,.projectCard').forEach(el=>{el.addEventListener('mouseenter',()=>c.classList.add('active'));el.addEventListener('mouseleave',()=>c.classList.remove('active'))});return()=>{removeEventListener('pointermove',m);c.remove()}},[]);return null}
