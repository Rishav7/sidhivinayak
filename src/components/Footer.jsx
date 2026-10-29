import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { business, getWhatsAppUrl } from '../config/business.js';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about"><Logo/><p>Your local destination for plumbing supplies, water storage, taps, fittings and everyday hardware essentials.</p><a className="footer-whatsapp" href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat with our shop <ArrowUpRight size={15}/></a></div>
        <div><h3>Explore</h3><Link to="/">Home</Link><Link to="/products">All Products</Link><Link to="/about">About Us</Link><Link to="/contact">Contact Us</Link></div>
        <div><h3>Popular categories</h3><Link to="/products?category=pipes">Pipes & Plumbing</Link><Link to="/products?category=water-tanks">Water Tanks</Link><Link to="/products?category=taps">Taps & Faucets</Link><Link to="/products?category=fittings">Pipe Fittings & Valves</Link></div>
        <div className="footer-contact"><h3>Visit or contact us</h3><p><MapPin size={17}/><span>{business.address}<br/>{business.city}</span></p><p><Phone size={17}/><span><a href={`tel:${business.phoneDigits}`}>{business.phoneDisplay}</a></span></p><p><MessageCircle size={17}/><span>WhatsApp enquiries welcome</span></p><small>Product availability and delivery arrangements are confirmed directly with the shop.</small></div>
      </div>
      <div className="footer-bottom"><div className="container footer-bottom-inner"><span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span><span>Built for better everyday projects.</span></div></div>
    </footer>
  );
}