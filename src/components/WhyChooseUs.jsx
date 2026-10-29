import React from 'react';
import { Boxes, Handshake, MessageCircle, House } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
const reasons = [
  { icon: Boxes, title: 'A range of essentials', text: 'Explore plumbing, water storage, taps, fittings and general hardware in one place.' },
  { icon: House, title: 'For homes and projects', text: 'Find product options for household repairs, renovations and building work.' },
  { icon: Handshake, title: 'Helpful product guidance', text: 'Tell us what you need and ask questions before choosing a product.' },
  { icon: MessageCircle, title: 'Easy enquiries', text: 'Contact the shop to ask about pricing, sizes, brands and availability.' }
];
export default function WhyChooseUs() {
  return <section className="section why-section"><div className="container"><SectionHeading eyebrow="WHY SHOP WITH US" title="Hardware shopping, made simpler" description="A helpful place to start for everyday plumbing and hardware requirements."/><div className="why-grid">{reasons.map(({icon: Icon, title, text}, i) => <div className="why-card" key={title}><span className="why-icon"><Icon size={23}/></span><span className="why-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>;
}