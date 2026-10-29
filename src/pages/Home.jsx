import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories.js';
import { products } from '../data/products.js';
import CategoryCard from '../components/CategoryCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Callout from '../components/Callout.jsx';
import ProductVisual from '../components/ProductVisual.jsx';
import { business, getWhatsAppUrl } from '../config/business.js';
import '../styles/home.css';

export default function Home() {
  const featured = products.filter(p => p.featured).slice(0, 4);
  return <>
    <section className="hero"><div className="hero-bg"></div><div className="container hero-layout"><div className="hero-copy"><span className="hero-kicker"><span></span> YOUR LOCAL HARDWARE PARTNER</span><h1>Build better.<br/><em>Fix smarter.</em><br/>Choose right.</h1><p>From pipes and all types of taps to showers, fittings and water tanks manufactured at our own factory — explore our catalogue and ask us about availability.</p><div className="hero-actions"><Link className="button button-primary button-large" to="/products">Explore products <ArrowRight size={18}/></Link><a className="button button-outline button-large" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">Talk to our team</a></div><div className="hero-proof"><div className="proof-avatars"><span>SV</span><span><Wrench size={14}/></span><span><CheckCircle2 size={14}/></span></div><div><strong>Here for your hardware needs</strong><small>Ask us about products and options</small></div></div></div><div className="hero-visual"><div className="hero-photo"><ProductVisual category="water-tanks" title="Factory-made water tanks"/><div className="hero-photo-label"><strong>Water tank manufacturing</strong><span>Made at our own factory</span></div></div><div className="hero-tag"><span className="hero-tag-icon"><ShieldCheck size={22}/></span><span><strong>Everyday essentials</strong><small>For home and work</small></span></div><div className="hero-stamp"><span>SVT</span><small>HARDWARE<br/>SUPPLIES</small></div><div className="hero-dot-pattern"></div></div></div><div className="hero-bottom"><div className="container hero-bottom-inner"><span><CheckCircle2 size={17}/> Plumbing & hardware supplies</span><span><Wrench size={17}/> Product guidance</span><span><Truck size={17}/> Ask about availability</span></div></div></section>

    <section className="section category-section"><div className="container"><SectionHeading eyebrow="WHAT YOU'RE LOOKING FOR" title="Find the right category" description={`Browse the main product categories available at ${business.name}.`}/><div className="category-grid">{categories.map(category => <CategoryCard key={category.id} category={category}/>)}</div><div className="center-action"><Link className="button button-outline" to="/products">View all categories <ArrowRight size={17}/></Link></div></div></section>

    <section className="section featured-section"><div className="container"><div className="section-topline"><SectionHeading eyebrow="POPULAR PICKS" title="Explore our products" description="Browse our product categories. Contact the shop to confirm specifications, stock and pricing." align="left"/><Link className="text-link desktop-link" to="/products">View all products <ArrowRight size={17}/></Link></div><div className="product-grid">{featured.map(product => <ProductCard key={product.id} product={product}/>)}</div><div className="center-action mobile-only"><Link className="button button-outline" to="/products">View all products <ArrowRight size={17}/></Link></div></div></section>

    <section className="about-preview section"><div className="container about-preview-grid"><div className="about-preview-image"><ProductVisual category="hardware" title="Plumbing & hardware essentials"/><div className="image-caption"><span className="caption-icon"><Wrench size={20}/></span><span><strong>From small fixes to big plans</strong><small>Pipes, taps, showers & water tanks</small></span></div></div><div className="about-preview-copy"><span className="eyebrow">ABOUT OUR SHOP</span><h2>Good projects start with the right essentials.</h2><p>{business.name} is a hardware and plumbing supplies shop for people working on home improvements, repairs and construction projects.</p><p>Based in Nawadah, Bihar, the shop also manufactures water tanks at its own factory. Browse the catalogue and ask us about specifications, availability and pricing.</p><ul className="check-list"><li><CheckCircle2 size={19}/> Pipes, all types of taps and showers</li><li><CheckCircle2 size={19}/> Water tanks manufactured at our own factory</li><li><CheckCircle2 size={19}/> Everyday hardware essentials</li><li><CheckCircle2 size={19}/> Direct product enquiries</li></ul><Link className="button button-primary" to="/about">Get to know us <ArrowRight size={17}/></Link></div></div></section>

    <WhyChooseUs/>
    <Callout/>
    <section className="quick-contact section"><div className="container quick-contact-inner"><div><span className="eyebrow">HAVE A QUESTION?</span><h2>Tell us what your project needs.</h2><p>Ask about product sizes, brands, prices and availability.</p></div><Link className="button button-primary" to="/contact">Contact the shop <ArrowRight size={17}/></Link></div></section>
  </>;
}