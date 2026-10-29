import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { products } from '../data/products.js';
import { categories } from '../data/categories.js';
import { getWhatsAppUrl } from '../config/business.js';
import ProductCard from '../components/ProductCard.jsx';
import ProductVisual from '../components/ProductVisual.jsx';
import '../styles/product-details.css';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  if (!product) return <div className="container not-found"><h1>Product not found</h1><p>This product may have been removed from the demo catalogue.</p><Link className="button button-primary" to="/products">Back to products</Link></div>;
  const category = categories.find(c => c.id === product.category);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const message = `Hello Sidhi Vinayak Trading, I am interested in ${product.name}. Please share the price, available brands, specifications, and product details.`;
  return <div className="page-shell"><div className="container detail-breadcrumb"><Link to="/products"><ArrowLeft size={16}/> Back to products</Link><span>/</span><span>{category?.name}</span></div><section className="container product-detail"><div className="detail-image"><ProductVisual category={product.category} title={product.name}/><span>Illustrative catalogue graphic — actual product may vary</span></div><div className="detail-copy"><span className="eyebrow">{category?.name || 'Hardware'}</span><h1>{product.name}</h1><p className="detail-description">{product.description}</p><div className="detail-enquiry-note"><MessageCircle size={20}/><div><strong>Need pricing or specifications?</strong><p>Contact the shop to confirm current brands, sizes, prices and availability.</p></div></div><ul className="detail-checks"><li><CheckCircle2 size={18}/> Ask for product options</li><li><CheckCircle2 size={18}/> Confirm fit and specifications</li><li><CheckCircle2 size={18}/> Request current pricing</li></ul><a className="button button-primary button-large" href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enquire about this product</a><p className="detail-disclaimer">Product options, specifications, stock and pricing must be confirmed with the shop.</p></div></section>{related.length > 0 && <section className="section related-section"><div className="container"><div className="section-topline"><div><span className="eyebrow">YOU MAY ALSO NEED</span><h2>Related products</h2></div><Link className="text-link" to="/products">Browse all <ArrowRight size={17}/></Link></div><div className="product-grid">{related.map(p => <ProductCard key={p.id} product={p}/>)}</div></div></section>}</div>;
}