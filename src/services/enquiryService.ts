export interface CustomerEnquiryPayload {
  id?: string;
  name: string;
  companyName?: string;
  designation?: string;
  businessEmail: string;
  contactNumber?: string;
  industrySegment?: string;
  applicationOfInterest?: string;
  ingredientCategoriesOfInterest?: string[];
  requirementDetails?: string;
  message?: string;
  timestamp?: string;
  honeypot?: string; // Bot spam mitigation
}

export interface EnquirySubmissionResult {
  success: boolean;
  referenceNumber: string;
  statusNote: string;
  timestamp: string;
  payload: CustomerEnquiryPayload;
  integrationTarget: string;
}

const STORAGE_KEY = 'ingrelia_customer_enquiries';

export function getStoredCustomerEnquiries(): EnquirySubmissionResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function submitCustomerEnquiry(
  payload: CustomerEnquiryPayload
): Promise<EnquirySubmissionResult> {
  // 1. Bot spam protection check
  if (payload.honeypot && payload.honeypot.trim() !== '') {
    throw new Error('Automated bot submission detected.');
  }

  // 2. Streamlined validations for simple & fast customer enquiry
  if (!payload.name?.trim()) {
    throw new Error('Please enter your name.');
  }
  if (!payload.businessEmail?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.businessEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  const queryText = (payload.requirementDetails || payload.message || '').trim();
  if (queryText.length < 3) {
    throw new Error('Please share a brief note about your requirement.');
  }

  // 3. Fallbacks for optional fields
  const normalizedPayload: CustomerEnquiryPayload = {
    ...payload,
    name: payload.name.trim(),
    businessEmail: payload.businessEmail.trim(),
    companyName: payload.companyName?.trim() || 'Not specified',
    contactNumber: payload.contactNumber?.trim() || '-',
    designation: payload.designation?.trim() || 'Formulator / Brand Representative',
    industrySegment: payload.industrySegment?.trim() || 'Personal Care & Cosmetics',
    applicationOfInterest: payload.applicationOfInterest?.trim() || 'General Formulation Support',
    ingredientCategoriesOfInterest:
      payload.ingredientCategoriesOfInterest && payload.ingredientCategoriesOfInterest.length > 0
        ? payload.ingredientCategoriesOfInterest
        : ['Speciality Ingredients'],
    requirementDetails: queryText,
    message: payload.message?.trim() || '',
  };

  // 4. Generate enterprise business reference number
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceNumber = `ING-REQ-${new Date().getFullYear()}-${randomSuffix}`;
  const timestamp = new Date().toISOString();

  const record: EnquirySubmissionResult = {
    success: true,
    referenceNumber,
    statusNote:
      'Enquiry recorded in local business queue. Integration-ready for CRM / ERP webhook dispatch.',
    timestamp,
    payload: {
      ...normalizedPayload,
      id: referenceNumber,
      timestamp,
    },
    integrationTarget: 'POST /api/enquiries/customer',
  };

  // 5. Save to client business queue
  try {
    const existing = getStoredCustomerEnquiries();
    existing.unshift(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.warn('Unable to persist enquiry to localStorage:', err);
  }

  // Brief latency simulation for realistic response
  await new Promise((resolve) => setTimeout(resolve, 350));

  return record;
}

export function generateEnquiryReceiptText(result: EnquirySubmissionResult): string {
  const p = result.payload;
  return `=====================================================
INGRELIA INGREDIENTS PVT. LTD.
B2B Speciality Personal Care Ingredients Distribution
Thane, Maharashtra, 400607, India
Official Email: sales@ingrelia.in
Website: www.ingrelia.in
=====================================================
CUSTOMER ENQUIRY ACKNOWLEDGEMENT
Reference Number: ${result.referenceNumber}
Date & Time: ${new Date(result.timestamp).toUTCString()}
Status: Captured in Business Development Queue (Integration-Ready)
=====================================================
CUSTOMER & COMPANY DETAILS:
Contact Name: ${p.name}
Company Name: ${p.companyName}
Designation: ${p.designation}
Business Email: ${p.businessEmail}
Contact Number: ${p.contactNumber}
Industry Segment: ${p.industrySegment}

FORMULATION REQUIREMENT:
Application of Interest: ${p.applicationOfInterest}
Ingredient Categories: ${p.ingredientCategoriesOfInterest?.join(', ') || 'Speciality Ingredients'}

REQUIREMENT DETAILS:
${p.requirementDetails}

MESSAGE / COMMENTS:
${p.message || 'None provided'}
=====================================================
NEXT STEPS:
1. Our technical & commercial team reviews your requirement.
2. A representative will connect with you directly.
3. For prompt coordination, cite Reference #${result.referenceNumber}.
=====================================================`;
}
