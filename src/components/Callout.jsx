import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../config/business.js';
export default function Callout() {
  return <section className="container"><div className="callout"><div className="callout-shape"></div><div className="callout-content"><span className="eyebrow eyebrow-light">LET'S GET YOUR PROJECT MOVING</span><h2>Looking for pipes, water tanks, taps or hardware supplies?</h2><p>Tell us what you need. We’ll help you enquire about the right product options.</p></div><div className="callout-actions"><a className="button button-light" href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enquire on WhatsApp</a><Link className="callout-link" to="/products">Browse products <ArrowUpRight size={16}/></Link></div></div></section>;
}