export const siteConfig = {
  name: 'Sri Sai Realtors',
  established: '2018',
  contactPerson: 'Nitin Anand',
  phone: '9217328325',
  phoneInternational: '+919217328325',
  whatsapp: '919217328325',
  positioning: 'Integrated Interior Fit-Out & Furniture Solutions',
  promise: 'QUALITY | COMMITMENT | EXECUTION | INTEGRITY',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Why Sri Sai', href: '/why-sri-sai' },
    //  { label: 'Blogs', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    'Interior Fit-Out',
    'Furniture',
    'Civil & MEP',
    'Specialized Projects',
    'Maintenance',
  ],
} as const;

export const heroSlides = [
  {
    eyebrow: 'INTERIOR FIT-OUT',
    headline: 'Spaces Built for Business.',
    description:
      'End-to-end interior fit-out solutions for commercial, corporate, retail and aviation environments.',
    primaryCta: { label: 'Explore Our Work', href: '/work' },
    secondaryCta: { label: 'Discuss Your Project', href: '/contact' },
    image:
      'https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern corporate office interior with open workspace',
  },
  {
    eyebrow: 'IN-HOUSE FURNITURE MANUFACTURING',
    headline: 'Designed. Manufactured. Delivered.',
    description:
      'Customized commercial furniture solutions backed by in-house manufacturing and controlled execution.',
    primaryCta: { label: 'Our Capabilities', href: '/about' },
    secondaryCta: { label: 'Get in Touch', href: '/contact' },
    image:
      'https://images.pexels.com/photos/15016524/pexels-photo-15016524.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Furniture manufacturing workshop with craftspeople at work',
  },
  {
    eyebrow: 'SPECIALIZED PROJECT EXECUTION',
    headline: 'Built for Complex Environments.',
    description:
      'Execution capabilities across airports, aviation facilities, warehouses, fulfilment centres and large-scale infrastructure.',
    primaryCta: { label: 'View Projects', href: '/work' },
    secondaryCta: { label: 'Talk to Our Team', href: '/contact' },
    image:
      'https://images.pexels.com/photos/12940671/pexels-photo-12940671.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Airport terminal interior with modern design',
  },
  {
    eyebrow: 'END-TO-END EXECUTION',
    headline: 'One Partner. Every Stage.',
    description:
      'From planning and procurement to manufacturing, execution, inspection, installation and handover.',
    primaryCta: { label: 'How We Work', href: '/about' },
    secondaryCta: { label: 'Contact Us', href: '/contact' },
    image:
      'https://images.pexels.com/photos/6794970/pexels-photo-6794970.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern office workspace with desks and blue chairs',
  },
] as const;

export const capabilities = [
  {
    id: 'interior-fit-out',
    title: 'Interior Fit-Out',
    description:
      'Comprehensive fit-out solutions for commercial and corporate environments, delivered with precision and project discipline.',
    items: ['Commercial', 'Corporate', 'Retail', 'Aviation'],
    image:
      'https://images.pexels.com/photos/36631701/pexels-photo-36631701.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Open office interior with cubicles and contemporary design',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description:
      'In-house manufacturing, customization, supply and installation of commercial furniture tailored to project specifications.',
    items: ['Manufacturing', 'Customization', 'Supply', 'Installation'],
    image:
      'https://images.pexels.com/photos/5710910/pexels-photo-5710910.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Artisan working with wood in a furniture workshop',
  },
  {
    id: 'civil-mep',
    title: 'Civil & MEP',
    description:
      'Integrated civil works and mechanical, electrical, and plumbing services coordinated under a single project framework.',
    items: ['Civil', 'Electrical', 'HVAC', 'Plumbing', 'Fire & Safety'],
    image:
      'https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Workers reviewing plans on a construction site',
  },
  {
    id: 'specialized-projects',
    title: 'Specialized Projects',
    description:
      'Execution capabilities for airports, warehouses, fulfilment centres and large-scale infrastructure projects.',
    items: [
      'Airports',
      'Warehouses',
      'Fulfilment Centres',
      'Large-Scale Infrastructure',
    ],
    image:
      'https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern warehouse interior with storage racks',
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'Post-completion support covering MAC, renovation, alteration, modification and refurbishment of commercial spaces.',
    items: ['MAC', 'Renovation', 'Alteration', 'Modification', 'Refurbishment'],
    image:
      'https://images.pexels.com/photos/5483188/pexels-photo-5483188.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Office desk with city skyline view through large window',
  },
] as const;

export const machines = [
  {
    id: 'panel-saw',
    name: 'Panel Saw',
    image: 'https://shreeumiya.com/wp-content/uploads/2026/06/3200-A.HV_-1536x960-1.jpg',
    alt: 'Panel saw machine cutting wooden boards',
  },
  {
    id: 'edge-banding',
    name: 'Edge Banding Machine',
    image: 'https://www.homag.com/fileadmin/_processed_/e/0/csm_homag-Kantenanleimmaschinen-edgebanders_ac079dc0b5.jpg',
    alt: 'Edge banding machine finishing panel edges',
  },
  {
    id: 'cnc-router',
    name: 'CNC Router Machine',
    image: 'https://www.woodstar.in/wp-content/uploads/2025/09/3.-Servo-750W-Pure-Servo-wih-Rotary-3.png',
    alt: 'CNC router machine cutting a wooden panel',
  },
  {
    id: 'cold-press',
    name: 'Cold Press',
    image: '/cold-press.jpg',
    alt: 'Cold press machine for laminating panels',
  },
  {
    id: 'wood-working-cold-press',
    name: 'Wood Working Cold Press Machine',
    image: 'https://zicarmachine.com/wp-content/uploads/2024/03/Cold-Press-Machine-JY3248x80-2.jpg',
    alt: 'Wood working cold press machine',
  },
] as const;

export const processSteps = [
  { step: '01', title: 'Plan', description: 'Project scope, scheduling, resource planning and technical drawings.' },
  { step: '02', title: 'Procure', description: 'Material sourcing, vendor coordination and procurement aligned to project specifications.' },
  { step: '03', title: 'Manufacture', description: 'In-house furniture production with quality control at every stage of manufacturing.' },
  { step: '04', title: 'Execute', description: 'On-site civil, interior and MEP works executed by coordinated specialist teams.' },
  { step: '05', title: 'Inspect', description: 'Quality inspection of all works against the original approved drawings.' },
  { step: '06', title: 'Install', description: 'Furniture installation, fixture fitting and final finishing across all scopes.' },
  { step: '07', title: 'Handover', description: 'Final walkthrough, snag resolution and project handover to client.' },
] as const;

// export const processSteps = [
//   { step: '01', title: 'Plan', description: 'Project scope, scheduling, resource planning and technical coordination.' },
//   { step: '02', title: 'Procure', description: 'Material sourcing, vendor coordination and procurement aligned to project specifications.' },
//   { step: '03', title: 'Manufacture', description: 'In-house furniture production with quality control at every stage of manufacturing.' },
//   { step: '04', title: 'Execute', description: 'On-site civil, interior and MEP works executed by coordinated specialist teams.' },
//   { step: '05', title: 'Inspect', description: 'Quality inspection against project standards, specifications and client requirements.' },
//   { step: '06', title: 'Install', description: 'Furniture installation, fixture fitting and final finishing across all scopes.' },
//   { step: '07', title: 'Handover', description: 'Final walkthrough, snag resolution and project handover to client.' },
// ] as const;

export const whyPoints = [
  {
    title: 'Integrated Execution',
    description:
      'Civil, interiors, MEP, furniture and installation coordinated under one project framework.',
  },
  {
    title: 'In-House Manufacturing',
    description:
      'Own furniture manufacturing capability for greater control over quality and customization.',
  },
  {
    title: 'Project Management',
    description:
      'Structured coordination from planning through final handover with defined milestones.',
  },
  {
    title: 'Commercial Expertise',
    description:
      'Experience across corporate, commercial, retail and operational environments.',
  },
  {
    title: 'Specialized Capability',
    description:
      'Experience involving aviation, warehouses, fulfilment centres and large-scale infrastructure.',
  },
  {
    title: 'Quality & Commitment',
    description:
      'Focus on quality, timelines, safety, transparent communication and client requirements.',
  },
] as const;

export const industries = [
  {
    name: 'Corporate',
    description: 'Office fit-outs and workplace solutions for corporate environments.',
    image:
      'https://images.pexels.com/photos/5444186/pexels-photo-5444186.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern open office interior with desks and chairs',
  },
  {
    name: 'Retail',
    description: 'Store fit-outs and retail fixture installation for branded environments.',
    image:
      'https://images.pexels.com/photos/13068364/pexels-photo-13068364.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sleek modern retail store interior',
  },
  {
    name: 'Aviation',
    description: 'Execution within controlled airport environments, subject to security protocols.',
    image:
      'https://images.pexels.com/photos/38706325/pexels-photo-38706325.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Airport seating area with large windows',
  },
  {
    name: 'Warehousing',
    description: 'Warehouse fit-out and infrastructure for logistics and storage operations.',
    image:
      'https://images.pexels.com/photos/27111449/pexels-photo-27111449.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Warehouse interior with stacked boxes on shelves',
  },
  {
    name: 'Fulfilment Centres',
    description: 'Fit-out and execution for quick-commerce and fulfilment operations.',
    image:
      'https://images.pexels.com/photos/4437145/pexels-photo-4437145.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Supermarket aisles with organized shelves',
  },
  {
    name: 'Hospitality',
    description: 'Interior works for hotel and hospitality spaces with attention to finish.',
    image:
      'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Luxurious hotel lobby with decor and chandelier',
  },
  {
    name: 'Museums',
    description: 'Exhibition and museum interior works requiring precision and specialist finishes.',
    image:
      'https://images.pexels.com/photos/7953096/pexels-photo-7953096.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern museum hall with architectural design',
  },
  {
    name: 'Infrastructure',
    description: 'Large-scale infrastructure project support with civil and MEP capabilities.',
    image:
      'https://images.pexels.com/photos/15532135/pexels-photo-15532135.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Construction site with cranes at sunset',
  },
] as const;

export const furnitureProducts = [
  'Workstations',
  'Executive Furniture',
  'Conference Tables',
  'Reception Counters',
  'Storage Systems',
  'Pedestals',
  'Retail Furniture',
  'Customized Project Solutions',
] as const;
