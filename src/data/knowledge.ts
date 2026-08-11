export const knowledgeCategories = [
  {
    label: 'Sourcing Basics',
    slug: 'sourcing-basics',
    description: 'Requirements, RFQs, samples, quotations, MOQs, and purchase planning.',
    icon: 'compass',
  },
  {
    label: 'Supplier Verification',
    slug: 'supplier-verification',
    description: 'Business records, capability checks, audits, and commercial due diligence.',
    icon: 'shield',
  },
  {
    label: 'Quality Control',
    slug: 'quality-control',
    description: 'Specifications, inspections, defect limits, and corrective actions.',
    icon: 'check',
  },
  {
    label: 'Manufacturing',
    slug: 'manufacturing',
    description: 'Production planning, tooling, capacity, lead times, and change control.',
    icon: 'wrench',
  },
  {
    label: 'Logistics & Incoterms',
    slug: 'logistics-and-incoterms',
    description: 'Freight responsibilities, shipping documents, risk transfer, and landed cost.',
    icon: 'truck',
  },
  {
    label: 'Compliance',
    slug: 'compliance',
    description: 'A research workflow for standards, testing, labeling, and importer duties.',
    icon: 'file-check',
  },
  {
    label: 'Product Sourcing Guides',
    slug: 'product-sourcing-guides',
    description: 'Category-specific questions, specifications, risks, and inspection points.',
    icon: 'package',
  },
] as const;

export const practicalTools = [
  {
    title: 'China Landed Cost Calculator',
    description: 'Estimate product, freight, duty, tax, brokerage, and last-mile cost per unit.',
    href: '/tools/landed-cost-calculator/',
    status: 'Calculator',
  },
  {
    title: 'Supplier Evaluation Checklist',
    description: 'Score identity, capability, quality, and commercial-risk evidence.',
    href: '/tools/supplier-evaluation-checklist/',
    status: 'Checklist',
  },
  {
    title: 'Incoterms Responsibility Matrix',
    description: 'Compare common terms by delivery point, cost allocation, and risk transfer.',
    href: '/tools/incoterms-responsibility-matrix/',
    status: 'Reference',
  },
  {
    title: 'MOQ & Unit Cost Calculator',
    description:
      'Model how fixed costs, defects, packaging, and freight affect effective unit cost.',
    href: '/tools/moq-unit-cost-calculator/',
    status: 'Calculator',
  },
] as const;

export const resourceGroups = [
  'Sourcing Guides',
  'Industry Reports',
  'Import Tools',
  'Supplier Resources',
] as const;

export const trustLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Editorial Policy', href: '/editorial-policy/' },
  { label: 'Corrections', href: '/corrections/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Contact', href: '/contact/' },
] as const;
