import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/business.js';
export default function WhatsAppFloat() {
  return <a className="whatsapp-float" href={getWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"><MessageCircle size={24}/><span>Chat with us</span></a>;
}