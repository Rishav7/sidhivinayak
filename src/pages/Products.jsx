import React from 'react';
import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products.js';
import { categories } from '../data/categories.js';
import ProductCard from '../components/ProductCard.jsx';
import '../styles/products.css';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const activeCategory = params.get('category') || 'all';
  const filtered = useMemo(() => {
    let list = products.filter(p => (activeCategory === 'all' || p.category === activeCategory) && `${p.name} ${p.description}`.toLowerCase().includes(search.toLowerCase()));
    if (sort === 'az') list = [...list].sort((a,b) => a.name.localeCompare(b.name));
    if (sort === 'za') list = [...list].sort((a,b) => b.name.localeCompare(a.name));
    if (sort === 'featured') list = [...list].sort((a,b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [activeCategory, search, sort]);
  const changeCategory = value => { const next = new URLSearchParams(params); value === 'all' ? next.delete('category') : next.set('category', value); setParams(next); };
  return <div className="page-shell"><section className="page-hero"><div className="container page-hero-inner"><div><span className="eyebrow eyebrow-light">THE PRODUCT CATALOGUE</span><h1>Find what your project needs.</h1><p>Search pipes, taps, showers, water tanks and hardware. Confirm product details and pricing with the shop.</p></div><div className="page-hero-badge"><SlidersHorizontal size={24}/><span>Browse by category<br/><small>Search • Filter • Enquire</small></span></div></div></section>
    <section className="section"><div className="container"><div className="catalogue-tools"><div className="catalogue-intro"><span className="eyebrow">PRODUCTS</span><h2>Browse the catalogue</h2><p>{filtered.length} {filtered.length === 1 ? 'item' : 'items'} shown</p></div><div className="catalogue-controls"><label className="search-box"><Search size={19}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." aria-label="Search products"/>{search && <button onClick={() => setSearch('')} aria-label="Clear search"><X size={16}/></button>}</label><label className="sort-box"><ArrowUpDown size={17}/><select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort products"><option value="featured">Featured first</option><option value="az">Name: A to Z</option><option value="za">Name: Z to A</option></select></label></div></div>
      <div className="filter-pills"><button className={activeCategory === 'all' ? 'active' : ''} onClick={() => changeCategory('all')}>All products</button>{categories.map(category => <button key={category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => changeCategory(category.id)}>{category.name}</button>)}</div>
      {filtered.length ? <div className="product-grid catalogue-grid">{filtered.map(product => <ProductCard key={product.id} product={product}/>)}</div> : <div className="empty-state"><Search size={32}/><h3>No products found</h3><p>Try another search or select a different category.</p><button className="button button-primary" onClick={() => { setSearch(''); changeCategory('all'); }}>Clear filters</button></div>}
      <p className="catalogue-note">Catalogue listings are illustrative categories, not a live stock list. Confirm product options, specifications, prices and availability with the shop.</p>
    </div></section></div>;
}