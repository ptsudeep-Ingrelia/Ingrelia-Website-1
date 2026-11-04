export interface ApplicationArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  formulationRequirements: string[];
  categoryOpportunities: string[];
  image: string;
}

export interface IngredientCategoryReference {
  id: string;
  title: string;
  role: string;
  description: string;
  commonApplications: string[];
  image: string;
}

export interface SolutionPillar {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyAspects: string[];
  image: string;
}

export const COMPANY_DETAILS = {
  name: 'INGRELIA',
  legalName: 'INGRELIA Ingredients Private Limited',
  positioning: 'Ingredients That Inspire Better Formulations',
  tagline: 'Ingredients that inspire better formulations.',
  heroHeadline: 'INGREDIENTS THAT INSPIRE BETTER FORMULATIONS.',
  heroSupportingStatement:
    "Connecting India's personal care industry with quality specialty ingredients, global sourcing expertise, and reliable supply solutions.",
  aboutPositioningStatement:
    "At Ingrelia Ingredients Pvt. Ltd., we believe that the right ingredients can make a meaningful difference to the way personal-care products are developed and experienced. We are building a specialty ingredients distribution business focused on serving India's personal-care industry with a carefully selected portfolio of ingredients, responsive service and a strong understanding of customer needs.",
  vision:
    'To be recognized as a trusted and knowledgeable partner, known for industry understanding, quality ingredient solutions and lasting customer relationships.',
  mission:
    'To connect customers with the right specialty ingredients through reliable sourcing, technical understanding, responsive service and a commitment to long-term partnerships.',
  email: 'sales@ingrelia.in',
  phone: '+91 9820300401',
  website: 'www.ingrelia.in',
  websiteUrl: 'https://www.ingrelia.in',
  address: '1st Floor, 53, Cine Wonder Complex, Thane, Maharashtra, 400607, India',
  linkedin: 'https://linkedin.com/company/ingrelia-ingredients',
  whatsapp: '919820300401',
};

// EXACT SIX APPROVED INGREDIENT CATEGORIES (CATEGORY-LEVEL REFERENCE ONLY)
export const INGREDIENT_CATEGORIES: IngredientCategoryReference[] = [
  {
    id: 'emollients-emulsifiers',
    title: 'Emollients and Emulsifiers',
    role: 'Sensory texture design & emulsion stability',
    description:
      'Esters, natural and synthetic emulsifying systems delivering targeted skin feel, spreadability, and emulsion stability.',
    commonApplications: ['Skin Care', 'Body Care', 'Sun Care', 'Colour Cosmetics'],
    image: '/assets/images/category_emollients_1793457538734.jpg',
  },
  {
    id: 'surfactants',
    title: 'Surfactants',
    role: 'Mild cleansing & foam dynamics',
    description:
      'Mild, sulfate-free and bio-derived surfactants providing gentle cleansing, rich foam quality, and rinse-off performance.',
    commonApplications: ['Hair Care', 'Toiletries', 'Personal Hygiene', 'Skin Care'],
    image: '/assets/images/cat_surfactants_authentic_1793520849739.jpg',
  },
  {
    id: 'actives',
    title: 'Actives',
    role: 'Substantiated biological efficacy',
    description:
      'Botanical extracts, peptides, and biotech actives delivering verifiable performance and substantiated consumer claims.',
    commonApplications: ['Skin Care', 'Hair Care', 'Sun Care', 'Body Care'],
    image: '/assets/images/cat_actives_authentic_1793520861940.jpg',
  },
  {
    id: 'uv-filters',
    title: 'UV Filters',
    role: 'Broad-spectrum photoprotection',
    description:
      'Broad-spectrum organic and mineral UV filters engineered for high photostability and cosmetic elegance.',
    commonApplications: ['Sun Care', 'Skin Care', 'Colour Cosmetics'],
    image: '/assets/images/cat_uv_filters_authentic_1793520874381.jpg',
  },
  {
    id: 'preservatives',
    title: 'Preservatives',
    role: 'Microbiological integrity & safety',
    description:
      'Modern antimicrobial systems and multifunctional preservation boosters ensuring formula longevity and product safety.',
    commonApplications: ['Skin Care', 'Hair Care', 'Toiletries', 'Personal Hygiene'],
    image: '/assets/images/cat_preservatives_authentic_1793520886708.jpg',
  },
  {
    id: 'functional-ingredients',
    title: 'Functional Ingredients',
    role: 'Rheology control & tactile modulation',
    description:
      'Polymeric thickeners, sensory texturizers, and stabilizers that define formulation viscosity, clarity, and touch.',
    commonApplications: ['Skin Care', 'Hair Care', 'Colour Cosmetics', 'Body Care'],
    image: '/assets/images/cat_functional_authentic_1793520899158.jpg',
  },
];

// EXACT SEVEN APPLICATIONS WE SERVE
export const APPLICATION_AREAS: ApplicationArea[] = [
  {
    id: 'skin-care',
    title: 'Skin Care',
    tagline: 'Moisturisers, serums, creams, lotions and advanced skincare formulations.',
    description:
      'From lightweight daily hydrating fluids and barrier-repair creams to concentrated active treatment serums and soothing balms.',
    formulationRequirements: [
      'Rapid absorption with zero tacky or greasy after-feel in humid Indian weather',
      'Stable active delivery systems across wide pH and temperature conditions',
      'Non-comedogenic emollient cascades matching diverse skin types',
      'Barrier lipid mimicry and long-lasting stratum corneum hydration',
    ],
    categoryOpportunities: [
      'Speciality Emollients for silky, dry skin-feel',
      'Biomimetic Actives & botanical extracts for hydration and brightness',
      'Subtle Rheology Modifiers for fast-break sensory textures',
      'Gentle Preservative boosters aligned with clean skincare benchmarks',
    ],
    image: '/assets/images/application_skincare_1793457539721.jpg',
  },
  {
    id: 'hair-care',
    title: 'Hair Care',
    tagline: 'Shampoos, conditioners, hair treatments and styling formulations.',
    description:
      'Gentle scalp-clarifying cleansers, rich conditioning masks, leave-in serums, and high-performance styling solutions.',
    formulationRequirements: [
      'Gentle foaming action that cleanses without stripping natural scalp sebum',
      'Superior wet and dry combability with anti-frizz humidity resistance',
      'Thermal protection and cuticle surface smoothing for chemically treated hair',
      'Viscosity building in sulfate-free cleansing architectures',
    ],
    categoryOpportunities: [
      'Mild, Sulfate-Free Surfactants with rich creaminess',
      'Cationic-compatible Conditioning Emollients and gloss agents',
      'Scalp Wellness Actives promoting follicle vitality',
      'Polymeric Thickeners for crystal-clear shampoo formulations',
    ],
    image: '/assets/images/app_haircare_authentic_1793460095247.jpg',
  },
  {
    id: 'sun-care',
    title: 'Sun Care',
    tagline: 'Sunscreens and sun-protection formulations.',
    description:
      'Daily ultra-light SPF fluids, broad-spectrum sun lotions, water-resistant outdoor gels, and hybrid daily primers.',
    formulationRequirements: [
      'High photostability against intense UVA and UVB solar degradation',
      'Zero white-cast transparency and ultra-lightweight, matte skin-feel',
      'Water- and sweat-resistance without film breakdown or greasiness',
      'Even filter solubilization and non-irritating eye-area tolerance',
    ],
    categoryOpportunities: [
      'Broad-Spectrum Organic & Inorganic UV Filters',
      'High-polarity Solubilizing Esters for efficient filter dissolution',
      'Waterproof Film Formers providing lasting outdoor resistance',
      'Soothing Botanical Actives for post-exposure antioxidant defence',
    ],
    image: '/assets/images/app_suncare_authentic_1793459785927.jpg',
  },
  {
    id: 'body-care',
    title: 'Body Care',
    tagline: 'Body lotions, body washes, creams and daily personal-care formulations.',
    description:
      'Fast-absorbing daily body milks, deeply nourishing body butters, hydrating shower gels, and smoothing body treatments.',
    formulationRequirements: [
      'Effortless spreadability over large surface areas with quick skin absorption',
      'Prolonged barrier nourishment and moisture retention in varying climates',
      'Creamy lather and luxurious skin soft-afterfeel in body cleansers',
      'Cost-performance balance suitable for high-volume commercial production',
    ],
    categoryOpportunities: [
      'Spreadable Ester Blends and natural lipid emollients',
      'Mild Body Wash Surfactant blends with dense foam quality',
      'Firming and smoothing body actives',
      'Broad-spectrum preservatives and sensory texturizers',
    ],
    image: '/assets/images/category_emollients_1793457538734.jpg',
  },
  {
    id: 'colour-cosmetics',
    title: 'Colour Cosmetics',
    tagline: 'Make-up formulations and speciality cosmetic applications.',
    description:
      'Hybrid skin-caring liquid foundations, weightless matte lipsticks, primers, tinted creams, and luminous makeup products.',
    formulationRequirements: [
      'Homogeneous pigment wetting, dispersion, and long-term suspension stability',
      'Flexible, transfer-resistant film formation that moves naturally with skin',
      'Weightless, non-cakey sensory finish with light-diffusing optical effects',
      'Compatibility between mineral pigments, oils, and aqueous active phases',
    ],
    categoryOpportunities: [
      'Pigment Dispersing Emollients and volatile ester carriers',
      'High-refractive index gloss modifiers and film formers',
      'Skincare actives tailored for hybrid cosmetic formulations',
      'Mineral and transparent UV filter dispersions for tinted SPF primers',
    ],
    image: '/assets/images/app_cosmetics_authentic_1793459786221.jpg',
  },
  {
    id: 'toiletries',
    title: 'Toiletries',
    tagline: 'Daily-use cleansing and personal-care formulations.',
    description:
      'Hand washes, cleansing liquid soaps, gentle foaming bath cleansers, and essential daily care hygiene products.',
    formulationRequirements: [
      'Frequent-use skin gentleness preventing epidermal barrier disruption',
      'Immediate, rich flash-foaming with clean, easy rinse-off characteristics',
      'Optimal viscosity and clear appearance across seasonal temperature shifts',
      'Dependable microbial safety in high-water content systems',
    ],
    categoryOpportunities: [
      'Dermatologically mild Surfactant concentrates',
      'Skin-replenishing refatting agents and gentle emollients',
      'Broad-spectrum, cost-effective preservative systems',
      'Efficient salt-responsive and polymeric rheology modifiers',
    ],
    image: '/assets/images/app_toiletries_authentic_1793459787330.jpg',
  },
  {
    id: 'personal-hygiene',
    title: 'Personal Hygiene',
    tagline: 'Personal hygiene and cleansing applications.',
    description:
      'Physiological-pH intimate cleansers, refreshing deodorizing formulations, antimicrobial gels, and sensitive hygiene cleansers.',
    formulationRequirements: [
      'Strict adherence to delicate physiological pH balance (pH 3.8 - 4.5)',
      'High mucosal tolerance with zero irritating fragrance or harsh sulfates',
      'Effective active odor control through enzymatic or antimicrobial pathways',
      'Hypoallergenic ingredient profiles backed by comprehensive safety data',
    ],
    categoryOpportunities: [
      'Ultra-mild Amphoteric and Non-ionic Surfactant systems',
      'Physiological lactic-acid compatible functional buffers',
      'Microbiome-friendly soothing actives and botanical extracts',
      'Clean-label, gentle preservative boosters',
    ],
    image: '/assets/images/app_hygiene_authentic_1793459786687.jpg',
  },
];

// CUSTOMER SOLUTIONS - FIVE CORE SERVICE MODEL PILLARS
export const CUSTOMER_SOLUTIONS_PILLARS: SolutionPillar[] = [
  {
    id: 'understanding-requirements',
    stepNumber: '01',
    title: 'Understanding Your Requirements',
    subtitle: 'Objectives, technical specifications & commercial criteria',
    description:
      'Understanding your product objectives, technical specifications, performance expectations and commercial requirements to identify the right ingredient solutions.',
    keyAspects: [
      'Target performance benchmarks and skin-feel criteria',
      'Technical specifications, pH and stability goals',
      'Commercial parameters and launch timelines',
    ],
    image: '/assets/images/ing_sourcing_nature_1793520263299.jpg',
  },
  {
    id: 'ingredient-selection-sourcing',
    stepNumber: '02',
    title: 'Ingredient Selection & Sourcing',
    subtitle: 'Specialty ingredients & dependable sourcing options',
    description:
      'Identifying suitable specialty ingredients and sourcing options aligned with your formulation needs, quality expectations and commercial objectives.',
    keyAspects: [
      'Identification of suitable specialty chemistries',
      'Global sourcing expertise and quality compliance',
      'Reliable supply continuity for Indian manufacturing',
    ],
    image: '/assets/images/formulation_texture_1793520264573.jpg',
  },
  {
    id: 'sampling-technical-evaluation',
    stepNumber: '03',
    title: 'Sampling & Technical Evaluation',
    subtitle: 'Bench samples, technical documentation & application support',
    description:
      'Facilitating product samples, technical documentation and application support to help evaluate ingredient suitability and formulation performance.',
    keyAspects: [
      'Prompt sample dispatch for bench trials and testing',
      'Complete documentation including TDS, COA and dossiers',
      'Application guidance during formulation trials',
    ],
    image: '/assets/images/product_eval_skin_1793520265999.jpg',
  },
  {
    id: 'commercial-supply-coordination',
    stepNumber: '04',
    title: 'Commercial & Supply Coordination',
    subtitle: 'Quotations, order processing & reliable logistics',
    description:
      'Coordinating quotations, order processing, delivery schedules and supply requirements with clear communication throughout the process.',
    keyAspects: [
      'Transparent commercial pricing and realistic lead times',
      'Order processing with proactive delivery tracking',
      'Clear, responsive communication at every step',
    ],
    image: '/assets/images/biz_coordination_desk_1793680610555.jpg',
  },
  {
    id: 'long-term-partnership',
    stepNumber: '05',
    title: 'Long-Term Partnership',
    subtitle: 'Consistent engagement, dependable execution & mutual growth',
    description:
      'Building lasting relationships through consistent engagement, dependable supply, responsive service and support as your business requirements evolve.',
    keyAspects: [
      'Ongoing engagement across product cycles and refreshes',
      'Dependable supply continuity for long-term production',
      'Customer-first approach centered on mutual growth',
    ],
    image: '/assets/images/longterm_partnership_growth_1793680610336.jpg',
  },
];

// WHY INGRELIA (FIVE CORE STRENGTHS)
export const WHY_INGRELIA_STRENGTHS = [
  {
    number: '01',
    title: 'Customer-Focused Approach',
    description:
      'We start with your formulation objective, benchmark, and timeline, tailoring ingredient solutions to your specific product vision rather than pushing generic catalog commodities.',
  },
  {
    number: '02',
    title: 'Market Understanding',
    description:
      'Deep appreciation of India’s personal-care landscape—from high-humidity sensory expectations to price-performance dynamics across mass, masstige, and derma segments.',
  },
  {
    number: '03',
    title: 'Focused Ingredient Categories',
    description:
      'Specialized focus on six key functional and active categories for personal care, allowing deep technical familiarity and application understanding.',
  },
  {
    number: '04',
    title: 'Responsive Engagement',
    description:
      'Agile communication, prompt sample coordination, dependable technical documentation, and proactive support throughout your development cycle.',
  },
  {
    number: '05',
    title: 'Long-Term Partnerships',
    description:
      'We build enduring relationships rooted in trust, technical honesty, and consistent business coordination through every stage of your brand’s growth.',
  },
];

export const INDUSTRY_SEGMENTS = [
  'Skincare & Derma Brands',
  'Haircare & Scalp Brands',
  'Cosmetics & Colour Makeup',
  'Personal Care & Toiletries',
  'Contract Manufacturers (OEM / ODM)',
  'FMCG & Consumer Goods',
  'Emerging Beauty & D2C Brands',
];
