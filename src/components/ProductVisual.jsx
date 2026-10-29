import React from 'react';
import { Droplets, ShowerHead, Waves, Wrench, Settings, Construction, Pipette, Bath } from 'lucide-react';
const icons = { pipes: Pipette, 'water-tanks': Waves, taps: Droplets, bathroom: ShowerHead, fittings: Settings, hardware: Wrench };
export default function ProductVisual({ category = 'hardware', title = '', compact = false }) {
  const Icon = icons[category] || Construction;
  return <div className={`product-visual tone-${category} ${compact ? 'is-compact' : ''}`} aria-label={`${title || 'Hardware'} illustration`} role="img">
    <div className="visual-grid"/><span className="visual-orbit orbit-one"/><span className="visual-orbit orbit-two"/><div className="visual-icon"><Icon strokeWidth={1.35}/></div><span className="visual-caption">{title || 'Hardware essentials'}</span>
  </div>;
}
