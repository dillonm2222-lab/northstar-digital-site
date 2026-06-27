export const siteConfig = {
  name: 'North Star Digital',
  legalName: 'North Star Digital LLC',
  baseUrl: 'https://northstardigital.services',
  email: 'marketing@northstardigital.services',
  phone: '(262) 254-0128',
  phoneHref: 'tel:+12622540128',
  location: 'Pewaukee, Wisconsin',
  city: 'Pewaukee',
  region: 'WI',
  postalCode: '53072',
  serviceArea: 'Serving Pewaukee, Waukesha, Milwaukee & all of Wisconsin',
  tagline: 'We handle the tech. You focus on growth.',
  // Google Business Profile links (verified listing, set 2026-06-20).
  googleMapsUrl: 'https://maps.google.com/?cid=15454189059490509463',
  googleReviewUrl: 'https://g.page/r/CZfyqN4RT3jWEBM/review'
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

// Single source of truth for pricing. Locked 2026-06-22, confirmed by Guy 2026-06-23.
// NEVER quote: $299/$499/$999 retainers or any old tier.
export const plans = [
  {
    name: 'Starter',
    price: '$147',
    period: '/mo',
    popular: false,
    summary: 'A professional GHL website that captures leads and looks great on any device.',
    features: [
      'GHL website (mobile-ready)',
      'Contact form → email alerts',
      'Fast hosting included',
      'Basic SEO setup',
      'Monthly performance report'
    ]
  },
  {
    name: 'Core',
    price: '$297',
    period: '/mo',
    popular: true,
    summary: 'The full local marketing system — website, automations, and lead follow-up working 24/7.',
    features: [
      'Everything in Starter',
      'Missed-call text-back (never lose a lead)',
      'Instant lead alerts to your phone',
      'Automated lead follow-up sequences',
      'Google review request system',
      'Monthly strategy call'
    ]
  },
  {
    name: 'Core + SEO',
    price: '$797',
    period: '/mo',
    popular: false,
    summary: 'The Core system plus fully managed local SEO — so you rank when people search.',
    features: [
      'Everything in Core',
      'Fully managed local SEO',
      'Google Business Profile optimization',
      'Local citation building',
      'Monthly ranking report'
    ]
  }
];

export const services = [
  {
    id: 'website',
    title: 'Website Design & Development',
    shortDescription: 'High-converting, fast websites built to earn trust and drive leads.',
    whatItIs:
      'A modern website strategy and build process focused on performance, clear messaging, and conversion-ready layouts.',
    whoItsFor:
      'Small and mid-sized businesses that need a stronger online presence and a site that supports sales.',
    included: [
      'Messaging and page structure guidance',
      'Responsive design and development',
      'Technical SEO foundations',
      'Analytics and conversion tracking setup'
    ],
    outcomes: [
      'More qualified inquiries',
      'Better first impressions',
      'Faster page loads and improved UX'
    ]
  },
  {
    id: 'crm',
    title: 'CRM Systems',
    shortDescription: 'Organized pipelines and follow-up systems so opportunities stop slipping through.',
    whatItIs:
      'CRM architecture and implementation tailored to your sales cycle, team workflow, and reporting needs.',
    whoItsFor:
      'Businesses handling inbound leads, repeat clients, or referral pipelines that need clear process visibility.',
    included: [
      'Pipeline and lifecycle mapping',
      'Contact and deal data structure',
      'Automation triggers and reminders',
      'Dashboard and reporting setup'
    ],
    outcomes: [
      'Improved lead response times',
      'Higher follow-up consistency',
      'Clearer revenue forecasting'
    ]
  },
  {
    id: 'seo',
    title: 'SEO Strategy',
    shortDescription: 'Search strategies that compound over time and attract the right local and niche traffic.',
    whatItIs:
      'A practical SEO roadmap covering content, technical priorities, and on-page improvements aligned to business goals.',
    whoItsFor:
      'Companies that want to increase organic visibility without relying entirely on ads.',
    included: [
      'Keyword and intent research',
      'On-page optimization plan',
      'Technical issue prioritization',
      'Content strategy recommendations'
    ],
    outcomes: [
      'More discoverability in search',
      'Higher-intent website traffic',
      'Long-term lead generation growth'
    ]
  },
  {
    id: 'automation',
    title: 'Marketing Automations',
    shortDescription: 'Smart automations that nurture leads, streamline handoffs, and save team time.',
    whatItIs:
      'Connected automation workflows for lead intake, segmentation, follow-up, and client communication.',
    whoItsFor:
      'Teams that want to reduce manual tasks and maintain a consistent customer experience.',
    included: [
      'Workflow mapping and automation logic',
      'Email/SMS follow-up sequences',
      'Lead routing and assignment rules',
      'QA and optimization checkpoints'
    ],
    outcomes: [
      'Less manual admin work',
      'Faster lead nurturing',
      'More reliable customer follow-through'
    ]
  }
];
