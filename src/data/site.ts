export const siteConfig = {
  name: 'North Star Digital',
  legalName: 'North Star Digital LLC',
  baseUrl: 'https://northstardigital.services',
  email: 'marketing@northstardigital.services',
  phone: '(262) 254-0128',
  phoneHref: 'tel:+12622540128',
  location: 'Pewaukee, Wisconsin',
  tagline: 'We handle the tech. You focus on growth.'
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
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
