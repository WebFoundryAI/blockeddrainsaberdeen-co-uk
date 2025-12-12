import { BRAND } from "./brand";

export interface FAQ {
  question: string;
  answer: string;
}

// Generic FAQs for all pages
export const GENERIC_FAQS: FAQ[] = [
  {
    question: "Do you charge a call-out fee?",
    answer: `No, ${BRAND.brandName} does not charge any call-out fees. You only pay for the work completed.`,
  },
  {
    question: "Are you available for emergencies?",
    answer: `Yes, we offer 24/7 emergency drainage services across ${BRAND.serviceAreaLabel}. Call ${BRAND.phone} for immediate assistance.`,
  },
  {
    question: "Do you provide a guarantee on your work?",
    answer: "Yes, all our work is fully guaranteed. We stand behind the quality of our service and workmanship.",
  },
];

// Service-specific FAQs
export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain?",
      answer: "Most blocked drains can be cleared within 1-2 hours of our arrival. For more complex blockages, we'll provide a clear timeframe after initial assessment.",
    },
    {
      question: "What causes drains to become blocked?",
      answer: "Common causes include fat and grease buildup, hair accumulation, food waste, tree root ingress, and foreign objects. We can identify the exact cause using CCTV inspection.",
    },
    {
      question: "Will clearing a blocked drain damage my pipes?",
      answer: "No, our professional equipment and techniques are designed to clear blockages without damaging your pipes. We use appropriate methods for different pipe materials.",
    },
  ],
  "drain-unblocking": [
    {
      question: "What's the difference between drain unblocking and drain jetting?",
      answer: "Drain unblocking refers to clearing a blockage using various methods, while drain jetting specifically uses high-pressure water. We choose the most appropriate method for each situation.",
    },
    {
      question: "Can you unblock drains in flats and apartments?",
      answer: "Yes, we can unblock drains in all types of properties including flats, apartments, houses, and commercial premises.",
    },
    {
      question: "How do I know if my drain is blocked?",
      answer: "Signs include slow draining water, gurgling sounds, unpleasant odours, and water backing up. If you notice any of these, call us for a professional assessment.",
    },
  ],
  "cctv-drain-surveys": [
    {
      question: "What does a CCTV drain survey show?",
      answer: "A CCTV survey shows the internal condition of your drains, identifying blockages, cracks, root ingress, collapsed sections, and other issues with detailed footage.",
    },
    {
      question: "Do I need a drain survey before buying a house?",
      answer: "We strongly recommend a pre-purchase drain survey. It can reveal hidden issues that could cost thousands to repair, giving you negotiating power or peace of mind.",
    },
    {
      question: "How long does a CCTV drain survey take?",
      answer: "A typical residential survey takes 1-2 hours. You'll receive a detailed report with footage showing the condition of your drainage system.",
    },
  ],
  "drain-jetting": [
    {
      question: "Is high-pressure drain jetting safe for old pipes?",
      answer: "Yes, when performed by professionals. We adjust the water pressure based on the pipe material and condition to ensure safe and effective cleaning.",
    },
    {
      question: "How often should drains be jetted?",
      answer: "For most residential properties, annual or bi-annual jetting helps prevent blockages. Commercial kitchens may require more frequent maintenance due to grease buildup.",
    },
    {
      question: "Can drain jetting remove tree roots?",
      answer: "Yes, high-pressure jetting can cut through and remove tree root ingress. For severe cases, we may recommend additional repair work.",
    },
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to an emergency?",
      answer: `We aim to arrive within 1-2 hours for emergency callouts across ${BRAND.serviceAreaLabel}. Call ${BRAND.phone} for immediate assistance.`,
    },
    {
      question: "Do you charge extra for out-of-hours emergencies?",
      answer: "We offer competitive fixed pricing for all work, including emergency callouts. We'll provide a clear quote before starting any work.",
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Emergencies include sewage backups, flooding, blocked toilets (when it's your only one), and any situation causing property damage or health risks.",
    },
  ],
};

// Location-specific FAQs (generic template that gets customized per location)
export function getLocationFAQs(locationName: string): FAQ[] {
  return [
    {
      question: `Do you cover ${locationName}?`,
      answer: `Yes, ${BRAND.brandName} provides comprehensive drainage services throughout ${locationName} and the surrounding areas of ${BRAND.serviceAreaLabel}.`,
    },
    {
      question: `How quickly can you get to ${locationName}?`,
      answer: `We typically arrive within 1-2 hours for emergency callouts in ${locationName}. For scheduled appointments, we offer flexible booking times.`,
    },
    {
      question: `What drainage services do you offer in ${locationName}?`,
      answer: `We offer all our services in ${locationName} including drain unblocking, CCTV surveys, drain jetting, repairs, and 24/7 emergency callouts.`,
    },
  ];
}

// Combined FAQs for service pages
export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  return [...serviceFaqs, ...GENERIC_FAQS];
}

// Combined FAQs for service-in-location pages
export function getServiceInLocationFAQs(serviceSlug: string, locationName: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  const locationFaqs = getLocationFAQs(locationName);
  // Take first 2 from service, first 2 from location, and 1 generic
  return [
    ...(serviceFaqs.slice(0, 2)),
    ...(locationFaqs.slice(0, 2)),
    GENERIC_FAQS[0],
  ];
}
