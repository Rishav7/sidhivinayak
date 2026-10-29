import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import Logo from './Logo.jsx';
import { getWhatsAppUrl } from '../config/business.js';
import '../styles/header.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="top-strip"><div className="container top-strip-inner"><span>Hardware & plumbing essentials for every project</span><span className="top-note">Local service. Helpful guidance.</span></div></div>
      <div className="container nav-wrap">
        <Logo />
        <button className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
          <Link className="nav-mobile-cta" to="/products" onClick={() => setOpen(false)}>Browse products <ChevronDown size={15}/></Link>
        </nav>
        <a className="button button-primary header-cta" href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Enquire on WhatsApp</a>
      </div>
    </header>
  );
}