// Business information supplied by the owner. Unknown details are intentionally not invented.
export const business = {
  name: 'Sidhi Vinayak Trading',
  ownerName: 'Guddu Sahu',
  tagline: 'Pipes • Taps • Showers • Water Tanks',
  phoneDisplay: '7259232381',
  phoneDigits: '+917259232381',
  // WhatsApp number was supplied only as '+91'; do not assume the phone number is also WhatsApp.
  whatsappDigits: '',
  address: 'Sidhi Vinayak Trading, Nawadah, Bihar',
  city: 'Nawadah, Bihar',
  hours: 'Monday – Sunday, 9:00 AM – 9:00 PM',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sidhi%20Vinayak%20Trading%2C%20Nawadah%2C%20Bihar',
  email: ''
};
export function getWhatsAppUrl(message = 'Hello Sidhi Vinayak Trading, I would like to enquire about your products.') {
  const number = business.whatsappDigits.replace(/\D/g, '');
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}
