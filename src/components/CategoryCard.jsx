import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductVisual from './ProductVisual.jsx';
export default function CategoryCard({ category }) {
  return <Link className="category-card" to={`/products?category=${category.id}`}><div className="category-image"><ProductVisual category={category.id} title={category.name} compact/><span className="category-arrow"><ArrowUpRight size={19}/></span></div><div className="category-info"><h3>{category.name}</h3><p>{category.description}</p><span className="text-link">Explore category <span>→</span></span></div></Link>;
}
