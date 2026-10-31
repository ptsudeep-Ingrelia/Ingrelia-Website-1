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
}

export const COMPANY_DETAILS = {
  name: 'INGRELIA Ingredients Pvt. Ltd.',
  legalName: 'INGRELIA Ingredients Private Limited',
  positioning: 'Your Personal Care Ingredients Partner',
  tagline: 'Ingredients that inspire better formulations.',
  heroHeadline: 'INGREDIENTS THAT INSPIRE BETTER FORMULATIONS.',
  heroSupportingStatement:
    'Your trusted partner for personal-care ingredient solutions, connecting market needs with the right formulation possibilities.',
  aboutPositioningStatement:
    'At INGRELIA, we believe that successful formulations begin with understanding the right ingredients and the needs behind every formulation. We aim to bridge customer requirements with relevant ingredient solutions through market understanding, focused engagement and dependable business relationships.',
  vision:
    'To become a trusted, knowledgeable and customer-focused personal-care ingredients partner, recognized for understanding formulation requirements and connecting customers with relevant ingredient possibilities.',
  mission:
    'To support personal-care and cosmetic manufacturers through deep customer understanding, reliable ingredient sourcing, responsive business coordination and dependable long-term relationships.',
  email: 'sales@ingrelia.in',
  phone: '+91 9820300401',
  address: 'Corporate Centre, Andheri East, Mumbai, Maharashtra 400069, India',
  linkedin: 'https://linkedin.com/company/ingrelia-ingredients',
  whatsapp: '919820300401',
};

// EXACT SIX APPROVED INGREDIENT CATEGORIES (CATEGORY-LEVEL REFERENCE ONLY)
export const INGREDIENT_CATEGORIES: IngredientCategoryReference[] = [
  {
    id: 'emollients-emulsifiers',
    title: 'Emollients and Emulsifiers',
    role: 'Sensory texture design & emulsion structural stability',
    description:
      'High-performance ester bases, natural and synthetic emulsifying systems, and sensory modifiers providing targeted skin feel, spreadability, and emulsion stability.',
    commonApplications: ['Skin Care', 'Body Care', 'Sun Care', 'Colour Cosmetics'],
    image: '/src/assets/images/category_emollients_1793457538734.jpg',
  },
  {
    id: 'surfactants',
    title: 'Surfactants',
    role: 'Mild cleansing, foam density & rinse dynamics',
    description:
      'Mild, sulfate-free, bio-derived, and amphoteric surfactant architectures delivering rich foam quality, gentle dermatological compatibility, and rinse-off performance.',
    commonApplications: ['Hair Care', 'Toiletries', 'Personal Hygiene', 'Skin Care'],
    image: '/src/assets/images/category_surfactants_1793457559534.jpg',
  },
  {
    id: 'actives',
    title: 'Actives',
    role: 'Targeted biological efficacy & substantiated benefits',
    description:
      'Substantiated botanical extracts, peptide complexes, biotechnological actives, and cellular nutrients delivering verifiable claims for contemporary personal care.',
    commonApplications: ['Skin Care', 'Hair Care', 'Sun Care', 'Body Care'],
    image: '/src/assets/images/category_actives_1793457539811.jpg',
  },
  {
    id: 'uv-filters',
    title: 'UV Filters',
    role: 'Broad-spectrum photoprotection & photostability',
    description:
      'Broad-spectrum organic and inorganic photoprotective technologies engineered for high UVA/UVB absorption efficiency, photostability, and cosmetic elegance.',
    commonApplications: ['Sun Care', 'Skin Care', 'Colour Cosmetics'],
    image: '/src/assets/images/category_uv_filters_1793457560329.jpg',
  },
  {
    id: 'preservatives',
    title: 'Preservatives',
    role: 'Microbiological integrity & formulation longevity',
    description:
      'Modern, globally compliant antimicrobial systems, multifunctional preservation boosters, and clean-beauty preservation solutions ensuring product safety and stability.',
    commonApplications: ['Skin Care', 'Hair Care', 'Toiletries', 'Personal Hygiene'],
    image: '/src/assets/images/category_preservatives_1793457560148.jpg',
  },
  {
    id: 'functional-ingredients',
    title: 'Functional Ingredients',
    role: 'Rheology control, suspension & tactile modulation',
    description:
      'Rheology modifiers, polymeric thickeners, sensory texturizers, solubilizers, and formulation stabilizers that define product viscosity, crystal clarity, and touch.',
    commonApplications: ['Skin Care', 'Hair Care', 'Colour Cosmetics', 'Body Care'],
    image: '/src/assets/images/category_functional_1793457561489.jpg',
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
    image: '/src/assets/images/application_skincare_1793457539721.jpg',
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
    image: '/src/assets/images/app_haircare_authentic_1793460095247.jpg',
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
    image: '/src/assets/images/app_suncare_authentic_1793459785927.jpg',
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
    image: '/src/assets/images/category_emollients_1793457538734.jpg',
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
    image: '/src/assets/images/app_cosmetics_authentic_1793459786221.jpg',
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
    image: '/src/assets/images/app_toiletries_authentic_1793459787330.jpg',
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
    image: '/src/assets/images/app_hygiene_authentic_1793459786687.jpg',
  },
];

// CUSTOMER SOLUTIONS - FIVE CORE DIFFERENTIATING PILLARS
export const CUSTOMER_SOLUTIONS_PILLARS: SolutionPillar[] = [
  {
    id: 'ingredient-sourcing',
    stepNumber: '01',
    title: 'Ingredient Sourcing',
    subtitle: 'Understanding needs & identifying relevant sourcing opportunities',
    description:
      'We work closely with procurement and product teams to understand their exact benchmark needs, performance criteria, regulatory compliance targets, and volume scale, mapping them to dependable ingredient sourcing options.',
    keyAspects: [
      'Clarification of sensory, chemical, and physical ingredient specifications',
      'Alignment with target regulatory and clean-label standards',
      'Evaluation of dependable supply continuity for Indian manufacturing batches',
    ],
  },
  {
    id: 'formulation-requirements',
    stepNumber: '02',
    title: 'Formulation Requirements',
    subtitle: 'Exploring formulation possibilities & application fit',
    description:
      'Every personal-care category comes with nuanced technical constraints. We help R&D and formulators navigate compatibility, phase solubility, pH stability, and dosage levels to achieve target benchmark outcomes.',
    keyAspects: [
      'Translating product concept briefs into concrete ingredient choices',
      'Addressing emulsion stability, viscosity, and sensory texture hurdles',
      'Advising on optimal usage percentages and phase incorporation methods',
    ],
  },
  {
    id: 'product-evaluation',
    stepNumber: '03',
    title: 'Product Evaluation',
    subtitle: 'Supporting customer evaluation and lab coordination',
    description:
      'From lab bench trials to stability chambers, ingredient evaluation takes time and coordination. INGRELIA supports your development pipeline with responsive sample dispatch, technical data alignment, and testing feedback.',
    keyAspects: [
      'Prompt sample dispatch for laboratory bench trials and stability tests',
      'Technical documentation including Certificates of Analysis (COA) and specifications',
      'Responsive coordination during sensory and performance trials',
    ],
  },
  {
    id: 'business-coordination',
    stepNumber: '04',
    title: 'Business Coordination',
    subtitle: 'Responsive communication throughout customer engagement',
    description:
      'Agile commercial coordination is at the heart of our service. We ensure transparent lead times, proactive commercial communication, and attentive operational support from initial inquiry to recurring orders.',
    keyAspects: [
      'Dedicated point of contact for commercial and technical queries',
      'Proactive order tracking and delivery schedule coordination',
      'Structured communication that respects launch deadlines and production schedules',
    ],
  },
  {
    id: 'long-term-partnership',
    stepNumber: '05',
    title: 'Long-Term Customer Partnership',
    subtitle: 'Building enduring relationships with a customer-first approach',
    description:
      'We view our customer relationships as long-range partnerships. As your portfolio expands and trends shift, INGRELIA remains your consistent, knowledgeable ally, sharing relevant market insights and new ingredient opportunities.',
    keyAspects: [
      'Consistent engagement across multiple formulation cycles and brand expansions',
      'Market-aware suggestions tailored to evolving consumer trends in India',
      'A customer-first philosophy centered on mutual trust and dependable execution',
    ],
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
