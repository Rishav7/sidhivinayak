import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories.js';
import { getWhatsAppUrl } from '../config/business.js';
import ProductVisual from './ProductVisual.jsx';
export default function ProductCard({ product }) {
  const category = categories.find(c => c.id === product.category);
  const message = `Hello Sidhi Vinayak Trading, I am interested in ${product.name}. Please share the price and product details.`;
  return <article className="product-card"><Link className="product-image" to={`/products/${product.id}`}><ProductVisual category={product.category} title={product.name}/><span className="image-view"><ArrowUpRight size={18}/></span></Link><div className="product-info"><span className="product-category">{category?.name || 'Hardware'}</span><Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link><p>{product.description}</p><div className="product-card-bottom"><Link className="text-link" to={`/products/${product.id}`}>View details <span>→</span></Link><a className="product-enquire" href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.name}`}><MessageCircle size={17}/></a></div></div></article>;
}
