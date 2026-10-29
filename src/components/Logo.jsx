import React from 'react';
import { Link } from 'react-router-dom';
import { business } from '../config/business.js';

export default function Logo() {
  return (
    <Link className="brand brand-text-only" to="/" aria-label={`${business.name} home`}>
      <span className="brand-copy"><strong>Sidhi Vinayak</strong><small>TRADING</small></span>
    </Link>
  );
}
