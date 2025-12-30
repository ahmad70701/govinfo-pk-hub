// Government Services Data for Pakistan
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  department: string;
  overview: string;
  quickInfo: { label: string; value: string }[];
  eligibility: { criteria: string; requirement: string }[];
  documents: string[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  officialLink: string;
}

export const services: Service[] = [
  {
    slug: 'cnic-application',
    title: 'CNIC Application & Renewal',
    shortDescription: 'Apply for new Computerized National Identity Card or renew your existing CNIC through NADRA.',
    department: 'NADRA',
    overview: 'The Computerized National Identity Card (CNIC) is the primary identity document for Pakistani citizens. Issued by the National Database and Registration Authority (NADRA), the CNIC is required for various government services, banking, voting, and official transactions. Citizens can apply for a new CNIC at age 18 or renew expired cards through NADRA Registration Centers (NRCs) or online via the NADRA website.',
    quickInfo: [
      { label: 'Issuing Authority', value: 'NADRA' },
      { label: 'Normal Fee', value: 'Rs. 400' },
      { label: 'Urgent Fee', value: 'Rs. 700-3000' },
      { label: 'Processing Time', value: '15-30 days (normal)' },
      { label: 'Validity', value: '10 years (5 years for 18-year-olds)' },
    ],
    eligibility: [
      { criteria: 'Age', requirement: '18 years or above for adult CNIC' },
      { criteria: 'Citizenship', requirement: 'Pakistani citizen by birth or naturalization' },
      { criteria: 'Documentation', requirement: 'Valid B-Form, old CNIC, or birth certificate' },
      { criteria: 'Biometrics', requirement: 'Fingerprints and photograph required' },
      { criteria: 'Residence', requirement: 'Permanent address in Pakistan' },
    ],
    documents: [
      'Original B-Form (for first-time applicants)',
      'Expired CNIC (for renewal)',
      'Birth certificate',
      'Educational certificates',
      'Parent\'s CNIC copies',
      'Proof of address (utility bill)',
    ],
    steps: [
      { title: 'Book Appointment', description: 'Book an appointment online at id.nadra.gov.pk or visit NRC directly.' },
      { title: 'Visit NADRA Center', description: 'Visit the NADRA Registration Center with your documents and appointment token.' },
      { title: 'Biometric Capture', description: 'Provide biometrics (fingerprints, photo, signature) at the center.' },
      { title: 'Pay Fee', description: 'Pay the applicable fee (normal Rs. 400, urgent Rs. 700-3000).' },
      { title: 'Collect CNIC', description: 'Receive your CNIC by mail or collect from the center after processing.' },
    ],
    faqs: [
      { question: 'How long does it take to get a new CNIC?', answer: 'Normal processing takes 15-30 days. Urgent processing (3-5 days) and executive (same day) options are available at higher fees.' },
      { question: 'Can I renew my CNIC online?', answer: 'Yes, existing CNIC holders can apply for renewal online at id.nadra.gov.pk and receive the new card by mail.' },
      { question: 'What if my CNIC is lost or stolen?', answer: 'Report the loss to the nearest police station, obtain an FIR, and apply for a duplicate CNIC at any NADRA center.' },
      { question: 'Can I update my address on CNIC?', answer: 'Yes, address modification can be done at NADRA centers with proof of new address (utility bill, rental agreement).' },
    ],
    officialLink: 'https://id.nadra.gov.pk/',
  },
  {
    slug: 'passport-application',
    title: 'Pakistan Passport Application',
    shortDescription: 'Apply for new passport, renew existing passport, or get Machine Readable Passport through Directorate General Immigration & Passports.',
    department: 'Directorate of Immigration & Passports',
    overview: 'The Pakistan passport is issued by the Directorate General of Immigration and Passports and serves as an official travel document for Pakistani citizens. The current Machine Readable Passport (MRP) complies with international ICAO standards. Citizens can apply for new passports, renewals, or emergency travel documents through Regional Passport Offices or online through the official passport portal.',
    quickInfo: [
      { label: 'Issuing Authority', value: 'DGIP' },
      { label: 'Normal Fee (36 pages)', value: 'Rs. 3,400' },
      { label: 'Urgent Fee', value: 'Rs. 5,400-13,400' },
      { label: 'Processing Time', value: '21-30 days (normal)' },
      { label: 'Validity', value: '5 or 10 years' },
    ],
    eligibility: [
      { criteria: 'Citizenship', requirement: 'Pakistani citizen with valid CNIC' },
      { criteria: 'CNIC Status', requirement: 'CNIC must not be blocked or expired' },
      { criteria: 'Age', requirement: 'No age limit (minors need parent consent)' },
      { criteria: 'No Travel Ban', requirement: 'Must not be on Exit Control List (ECL)' },
      { criteria: 'Previous Passport', requirement: 'Old passport (for renewal/modification)' },
    ],
    documents: [
      'Original CNIC',
      'Old passport (for renewal)',
      'Passport-sized photographs',
      'Government employee NOC (if applicable)',
      'Parent CNIC (for minors)',
      'B-Form (for minors)',
    ],
    steps: [
      { title: 'Online Application', description: 'Fill the application form on onlinemrp.dgip.gov.pk and select your passport office.' },
      { title: 'Pay Fee', description: 'Pay the passport fee through bank challan or online payment.' },
      { title: 'Visit Passport Office', description: 'Visit the selected passport office with documents and payment receipt.' },
      { title: 'Biometric Verification', description: 'Complete biometric verification (fingerprints, photo) at the office.' },
      { title: 'Collect Passport', description: 'Receive your passport by courier or collect from the office.' },
    ],
    faqs: [
      { question: 'How much does a Pakistani passport cost?', answer: '36 pages: Rs. 3,400 (normal), 72 pages: Rs. 5,400 (normal). Urgent and executive options cost more with faster processing.' },
      { question: 'Can I apply for a passport online?', answer: 'Yes, you can complete the application form online at onlinemrp.dgip.gov.pk, then visit a passport office for biometrics.' },
      { question: 'How long is a Pakistani passport valid?', answer: 'Passports are issued with 5-year or 10-year validity. Children under 18 typically receive 5-year passports.' },
      { question: 'What is urgent passport processing?', answer: 'Urgent processing delivers your passport in 7-10 days. Executive processing takes 2-3 days at premium fees.' },
    ],
    officialLink: 'https://onlinemrp.dgip.gov.pk/',
  },
  {
    slug: 'vehicle-registration',
    title: 'Vehicle Registration & Transfer',
    shortDescription: 'Register new vehicles or transfer ownership of used vehicles through provincial Excise & Taxation departments.',
    department: 'Excise & Taxation',
    overview: 'Vehicle registration in Pakistan is handled by provincial Excise and Taxation departments. All motor vehicles must be registered to legally operate on Pakistani roads. The registration process includes verification of ownership documents, payment of applicable taxes, and issuance of number plates. Vehicle transfer requires both buyer and seller to complete the ownership transfer process at the Excise office.',
    quickInfo: [
      { label: 'Authority', value: 'Provincial Excise & Taxation' },
      { label: 'New Registration', value: '3-7 working days' },
      { label: 'Token Tax', value: 'Based on engine capacity' },
      { label: 'Transfer Fee', value: 'Varies by vehicle value' },
      { label: 'Validity', value: 'Lifetime (annual token renewal)' },
    ],
    eligibility: [
      { criteria: 'Ownership', requirement: 'Valid purchase documents or transfer letter' },
      { criteria: 'CNIC', requirement: 'Valid CNIC of owner' },
      { criteria: 'Vehicle Status', requirement: 'Vehicle must clear verification' },
      { criteria: 'Tax Clearance', requirement: 'All previous taxes must be paid' },
      { criteria: 'Insurance', requirement: 'Third-party insurance (some provinces)' },
    ],
    documents: [
      'CNIC (original and copy)',
      'Vehicle purchase invoice/sale deed',
      'Previous registration book (for used vehicles)',
      'Customs duty papers (for imported vehicles)',
      'No Objection Certificate (for inter-provincial transfer)',
      'Photographs',
    ],
    steps: [
      { title: 'Document Preparation', description: 'Gather all required documents including sale deed, CNIC, and previous registration.' },
      { title: 'Physical Verification', description: 'Get the vehicle physically verified at the Excise office or designated center.' },
      { title: 'Tax Payment', description: 'Pay applicable token tax, registration fee, and transfer fee at the Excise office.' },
      { title: 'File Submission', description: 'Submit all documents and verification report to the Registration Desk.' },
      { title: 'Number Plate Issuance', description: 'Receive your registration book and number plates after processing.' },
    ],
    faqs: [
      { question: 'How much is the vehicle registration fee?', answer: 'Registration fees vary by province and vehicle type. Token tax is based on engine capacity (cc) and vehicle age.' },
      { question: 'Can I transfer a vehicle registered in another province?', answer: 'Yes, you need an NOC from the original province, then register in your province with applicable transfer taxes.' },
      { question: 'What is vehicle verification?', answer: 'Physical verification confirms the vehicle\'s chassis and engine numbers match the documents and checks if the vehicle is stolen.' },
      { question: 'How do I renew my vehicle token?', answer: 'Token tax can be paid annually at Excise offices, designated banks, or online through provincial e-payment portals.' },
    ],
    officialLink: 'https://excise.punjab.gov.pk/',
  },
  {
    slug: 'driving-license',
    title: 'Driving License Application',
    shortDescription: 'Apply for new driving license, renew expired license, or get an international driving permit.',
    department: 'Traffic Police / Licensing Authority',
    overview: 'Driving licenses in Pakistan are issued by provincial licensing authorities under the traffic police departments. A valid driving license is required to operate motor vehicles on public roads. The process involves a written test, practical driving test, and biometric enrollment. Different categories exist for motorcycles, cars, and commercial vehicles.',
    quickInfo: [
      { label: 'Authority', value: 'Provincial Traffic Police' },
      { label: 'License Fee', value: 'Rs. 600-2000' },
      { label: 'Validity', value: '5 years' },
      { label: 'Learner Permit', value: '42 days validity' },
      { label: 'Age Requirement', value: '18 years (car), 16 years (motorcycle)' },
    ],
    eligibility: [
      { criteria: 'Age', requirement: '18 years for car/commercial, 16 for motorcycle' },
      { criteria: 'CNIC', requirement: 'Valid CNIC required' },
      { criteria: 'Medical Fitness', requirement: 'No disqualifying medical conditions' },
      { criteria: 'Learner Period', requirement: 'Must complete 42-day learner permit period' },
      { criteria: 'Tests', requirement: 'Pass written and practical driving tests' },
    ],
    documents: [
      'Original CNIC',
      'Photographs (passport size)',
      'Medical certificate (for commercial license)',
      'Existing license (for renewal)',
      'Application form',
    ],
    steps: [
      { title: 'Apply for Learner Permit', description: 'Visit the licensing authority and apply for a 42-day learner permit.' },
      { title: 'Practice Driving', description: 'Practice driving with a licensed driver during the learner period.' },
      { title: 'Written Test', description: 'Pass the computerized written test on traffic rules and signs.' },
      { title: 'Practical Test', description: 'Demonstrate driving skills in the practical driving test.' },
      { title: 'License Issuance', description: 'Upon passing both tests, receive your driving license card.' },
    ],
    faqs: [
      { question: 'How much does a driving license cost?', answer: 'Fees vary by province and license type. Typical car license costs Rs. 600-1500. Commercial licenses are higher.' },
      { question: 'How do I renew an expired license?', answer: 'Visit the licensing authority with your old license and CNIC. No tests required if renewing within 2 years of expiry.' },
      { question: 'What is an International Driving Permit?', answer: 'The IDP is a translation of your license valid in 150+ countries. Apply at NRTC offices or designated centers.' },
      { question: 'Can I convert a foreign license to Pakistani?', answer: 'Yes, foreign license holders can convert their license by showing proof of validity and passing a basic test.' },
    ],
    officialLink: 'https://www.punjabpolice.gov.pk/',
  },
  {
    slug: 'birth-certificate',
    title: 'Birth Certificate Registration',
    shortDescription: 'Register births and obtain birth certificates from Union Council or NADRA for official documentation.',
    department: 'Union Council / NADRA',
    overview: 'Birth registration is the official recording of a child\'s birth by the government. In Pakistan, births should be registered with the local Union Council within specified time limits. NADRA also issues computerized birth certificates (B-Form) which are required for school admission, passport application, and CNIC issuance at age 18.',
    quickInfo: [
      { label: 'Authority', value: 'Union Council / NADRA' },
      { label: 'Time Limit', value: '60 days (free), after charges apply' },
      { label: 'NADRA B-Form Fee', value: 'Rs. 200' },
      { label: 'Late Registration', value: 'Affidavit required after 1 year' },
      { label: 'Validity', value: 'Lifetime' },
    ],
    eligibility: [
      { criteria: 'Application', requirement: 'Parent or guardian must apply' },
      { criteria: 'Location', requirement: 'Birth registered where birth occurred' },
      { criteria: 'Documentation', requirement: 'Hospital birth certificate or witnesses' },
      { criteria: 'Parent CNIC', requirement: 'Both parents\' CNICs required' },
      { criteria: 'Timing', requirement: 'Within 60 days for free registration' },
    ],
    documents: [
      'Hospital birth certificate/delivery slip',
      'Father\'s CNIC (original and copy)',
      'Mother\'s CNIC (original and copy)',
      'Nikah Nama (marriage certificate)',
      'Affidavit (for late registration)',
      'Witnesses (if no hospital record)',
    ],
    steps: [
      { title: 'Obtain Hospital Certificate', description: 'Get the birth certificate or delivery slip from the hospital/clinic.' },
      { title: 'Visit Union Council', description: 'Go to your local Union Council office within 60 days of birth.' },
      { title: 'Submit Application', description: 'Submit the birth registration form with supporting documents.' },
      { title: 'Receive Certificate', description: 'Collect the birth certificate from Union Council.' },
      { title: 'Apply for B-Form', description: 'Visit NADRA to get the computerized B-Form for the child.' },
    ],
    faqs: [
      { question: 'Is birth registration mandatory in Pakistan?', answer: 'Yes, birth registration is legally required and essential for obtaining official documents like B-Form, passport, and CNIC.' },
      { question: 'What if my child\'s birth was not registered?', answer: 'Late registration requires an affidavit and may involve a penalty. After 1 year, a court order may be needed.' },
      { question: 'What is the difference between Union Council certificate and NADRA B-Form?', answer: 'Union Council issues the basic birth certificate. NADRA B-Form is the computerized version required for school and passport.' },
      { question: 'Can I register a home birth?', answer: 'Yes, home births can be registered with an affidavit from the midwife/parents and two witnesses.' },
    ],
    officialLink: 'https://id.nadra.gov.pk/',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};
