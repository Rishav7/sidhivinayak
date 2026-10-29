import React from 'react';
import { useState } from 'react';
import { Clock3, MapPin, MessageCircle, Phone, Send, ExternalLink } from 'lucide-react';
import { business, getWhatsAppUrl } from '../config/business.js';
import '../styles/contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [error, setError] = useState('');
  const submit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Please fill in your name, phone number and message.');
      return;
    }
    setError('');
    const message = `Hello Sidhi Vinayak Trading!\\nName: ${form.name}\\nPhone: ${form.phone}\\nEnquiry: ${form.message}`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };
  return <div className="page-shell"><section className="page-hero"><div className="container page-hero-inner"><div><span className="eyebrow eyebrow-light">GET IN TOUCH</span><h1>Let's talk about what you need.</h1><p>Ask us about product details, available options and current pricing.</p></div></div></section>
    <section className="section"><div className="container contact-layout"><div className="contact-details"><span className="eyebrow">CONTACT DETAILS</span><h2>We’re here to help with your enquiry.</h2><p className="contact-lead">Contact the shop for product options, availability and pricing.</p>
      <div className="contact-detail-card"><span><Phone size={21}/></span><div><small>Call us</small><strong><a href={`tel:${business.phoneDigits}`}>{business.phoneDisplay}</a></strong><p>Contact person: {business.ownerName}. Call for product enquiries.</p></div></div>
      <div className="contact-detail-card"><span><MapPin size={21}/></span><div><small>Visit the shop</small><strong>{business.address}</strong><p>{business.city}</p></div></div>
      <div className="contact-detail-card"><span><Clock3 size={21}/></span><div><small>Business hours</small><strong>{business.hours}</strong><p>Open every day during the listed hours.</p></div></div>
      <a className="button button-outline contact-whatsapp" href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enquire on WhatsApp</a>
      {business.mapUrl && <a className="map-link" href={business.mapUrl} target="_blank" rel="noreferrer">Get directions <ExternalLink size={15}/></a>}
      {!business.whatsappDigits && <p className="contact-hint">The complete shop WhatsApp number has not been provided. WhatsApp opens with your message ready, but you must select the shop contact yourself.</p>}
    </div>
    <div className="contact-form-card"><span className="eyebrow">SEND AN ENQUIRY</span><h2>What are you looking for?</h2><p>Complete the form and it will open a WhatsApp message for you to send to the shop.</p><form onSubmit={submit} noValidate><label>Your name<input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your name" autoComplete="name"/></label><label>Phone number<input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Enter your phone number" inputMode="tel" autoComplete="tel"/></label><label>Your message<textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us which product you need..." rows="5"/></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary button-large form-submit" type="submit">Continue to WhatsApp <Send size={17}/></button><small className="form-note">Your message is not sent automatically. WhatsApp will open so you can review and send it.</small></form></div></div></section>
  </div>;
}