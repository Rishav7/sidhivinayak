import React from 'react';
export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return <div className={`section-heading align-${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}