// Government Schemes Data for Pakistan
export interface Scheme {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  isNew?: boolean;
  overview: string;
  quickInfo: { label: string; value: string }[];
  eligibility: { criteria: string; requirement: string }[];
  documents: string[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  officialLink: string;
}

export const schemes: Scheme[] = [
  {
    slug: 'ehsaas-program',
    title: 'Ehsaas Program',
    shortDescription: 'Pakistan\'s largest social protection and poverty alleviation initiative providing financial assistance to deserving families.',
    category: 'Social Protection',
    isNew: false,
    overview: 'The Ehsaas Program is Pakistan\'s flagship social protection initiative launched in 2019. It encompasses over 134 policies and programs aimed at reducing inequality, investing in people, and lifting vulnerable segments of society. The program provides unconditional cash transfers to the poorest and most vulnerable families across Pakistan, helping them meet their basic needs and improve their quality of life.',
    quickInfo: [
      { label: 'Launched', value: '2019' },
      { label: 'Ministry', value: 'Poverty Alleviation & Social Safety' },
      { label: 'Cash Amount', value: 'Rs. 10,500 - 14,000 quarterly' },
      { label: 'Beneficiaries', value: '9+ Million Families' },
      { label: 'Coverage', value: 'All Districts of Pakistan' },
    ],
    eligibility: [
      { criteria: 'PMT Score', requirement: 'Below 32 on the Poverty Scorecard' },
      { criteria: 'CNIC', requirement: 'Valid Computerized National Identity Card' },
      { criteria: 'Residence', requirement: 'Pakistani citizen residing in Pakistan' },
      { criteria: 'Income', requirement: 'Below poverty line as per BISP survey' },
      { criteria: 'Registration', requirement: 'Registered in NSER (National Socio-Economic Registry)' },
    ],
    documents: [
      'Original CNIC (Computerized National Identity Card)',
      'CNIC copy of household head',
      'Mobile phone number registered on CNIC',
      'Bank account details (if available)',
      'Proof of residence (utility bill or rental agreement)',
    ],
    steps: [
      { title: 'Check Eligibility', description: 'Send your CNIC number to 8171 to check if you are eligible for the Ehsaas Program.' },
      { title: 'Visit Registration Center', description: 'If not registered, visit your nearest Ehsaas Registration Center with your CNIC.' },
      { title: 'Complete Survey', description: 'Provide accurate household information for the poverty score assessment.' },
      { title: 'Wait for Verification', description: 'Your information will be verified and processed within 2-4 weeks.' },
      { title: 'Collect Payment', description: 'Once approved, collect your quarterly payment from designated ATMs or Ehsaas centers.' },
    ],
    faqs: [
      { question: 'How do I check my Ehsaas eligibility?', answer: 'Send your CNIC number to 8171 via SMS. You will receive a reply indicating your eligibility status and payment details if applicable.' },
      { question: 'How much money will I receive under Ehsaas?', answer: 'Eligible beneficiaries receive Rs. 10,500 to Rs. 14,000 quarterly, depending on their poverty score and family composition.' },
      { question: 'Can I apply if I already receive BISP payments?', answer: 'Yes, BISP (Benazir Income Support Programme) has been integrated into Ehsaas. Existing BISP beneficiaries are automatically included.' },
      { question: 'What should I do if my payment is delayed?', answer: 'Contact the Ehsaas helpline at 0800-26477 or visit your nearest Tehsil Office with your CNIC for assistance.' },
    ],
    officialLink: 'https://www.pass.gov.pk/',
  },
  {
    slug: 'benazir-income-support-programme',
    title: 'Benazir Income Support Programme (BISP)',
    shortDescription: 'Unconditional cash transfer program for the poorest women across Pakistan to reduce poverty and empower families.',
    category: 'Cash Transfer',
    isNew: false,
    overview: 'The Benazir Income Support Programme (BISP) is one of Pakistan\'s largest social safety net programs, providing unconditional cash transfers to the poorest women in the country. Launched in 2008, BISP aims to reduce poverty, empower women, and provide a basic income floor for the most vulnerable households. The program has been integrated into the Ehsaas umbrella while maintaining its distinct identity and beneficiary base.',
    quickInfo: [
      { label: 'Launched', value: '2008' },
      { label: 'Ministry', value: 'Poverty Alleviation & Social Safety' },
      { label: 'Cash Amount', value: 'Rs. 10,500 quarterly' },
      { label: 'Beneficiaries', value: '7+ Million Women' },
      { label: 'Payment Method', value: 'Biometric Verification' },
    ],
    eligibility: [
      { criteria: 'Gender', requirement: 'Female head of household or married woman' },
      { criteria: 'PMT Score', requirement: 'Below poverty threshold on NSER survey' },
      { criteria: 'CNIC', requirement: 'Valid CNIC with biometric registration' },
      { criteria: 'Age', requirement: 'Above 18 years of age' },
      { criteria: 'Bank Account', requirement: 'Not mandatory but preferred' },
    ],
    documents: [
      'Valid CNIC (Computerized National Identity Card)',
      'B-Form of children (for education stipend)',
      'Proof of disability (if applicable)',
      'Marriage certificate (if applying as married woman)',
      'Mobile phone number',
    ],
    steps: [
      { title: 'SMS Eligibility Check', description: 'Send your 13-digit CNIC number to 8171 to verify your eligibility status.' },
      { title: 'Registration', description: 'If not registered, visit a BISP Tehsil Office with your CNIC for new registration.' },
      { title: 'Survey Completion', description: 'Complete the household poverty survey conducted by BISP officials.' },
      { title: 'Approval Notification', description: 'Receive SMS notification once your application is approved.' },
      { title: 'Payment Collection', description: 'Collect payment from designated ATMs, bank branches, or mobile wallets.' },
    ],
    faqs: [
      { question: 'Who is eligible for BISP?', answer: 'Women from households below the poverty line, as determined by the National Socio-Economic Registry survey, are eligible for BISP.' },
      { question: 'How often are BISP payments made?', answer: 'BISP payments are made quarterly (every 3 months). Beneficiaries receive Rs. 10,500 per quarter.' },
      { question: 'Can men receive BISP payments?', answer: 'BISP payments are primarily disbursed to women. However, in exceptional cases (widower with children), men may be considered.' },
      { question: 'What is the Kafaalat program?', answer: 'Kafaalat is the regular cash transfer component of BISP/Ehsaas, providing unconditional quarterly payments to eligible women.' },
    ],
    officialLink: 'https://bisp.gov.pk/',
  },
  {
    slug: 'kamyab-jawan-program',
    title: 'Kamyab Jawan Program',
    shortDescription: 'Youth entrepreneurship and employment initiative providing interest-free loans and skill training to Pakistani youth.',
    category: 'Youth Development',
    isNew: true,
    overview: 'The Kamyab Jawan Program is a comprehensive youth empowerment initiative designed to address unemployment and foster entrepreneurship among Pakistani youth aged 18-45. The program provides subsidized loans, skills training, and entrepreneurship support to help young Pakistanis start their own businesses or enhance their existing enterprises. It aims to create jobs, reduce poverty, and harness the potential of Pakistan\'s youth demographic dividend.',
    quickInfo: [
      { label: 'Launched', value: '2019' },
      { label: 'Age Limit', value: '18-45 years' },
      { label: 'Loan Amount', value: 'Rs. 100,000 - 75,00,000' },
      { label: 'Interest Rate', value: 'Subsidized (4-5%)' },
      { label: 'Loan Term', value: '3-8 years' },
    ],
    eligibility: [
      { criteria: 'Age', requirement: '18 to 45 years old' },
      { criteria: 'Nationality', requirement: 'Pakistani citizen with valid CNIC' },
      { criteria: 'Business Plan', requirement: 'Viable business plan or existing small business' },
      { criteria: 'Education', requirement: 'Minimum Matric (for some tiers)' },
      { criteria: 'Collateral', requirement: 'Personal guarantee or collateral as per loan tier' },
    ],
    documents: [
      'Valid CNIC (front and back)',
      'Passport-sized photographs',
      'Business plan or proposal',
      'Educational certificates',
      'Bank statements (last 6 months)',
      'Proof of business (for existing businesses)',
    ],
    steps: [
      { title: 'Online Registration', description: 'Register on the Kamyab Jawan portal (kamyabjawan.gov.pk) with your CNIC.' },
      { title: 'Choose Loan Tier', description: 'Select the appropriate loan tier based on your business needs and eligibility.' },
      { title: 'Submit Application', description: 'Complete the online application form and upload required documents.' },
      { title: 'Bank Processing', description: 'Your application will be forwarded to participating banks for review.' },
      { title: 'Loan Disbursement', description: 'Upon approval, the loan amount will be disbursed to your bank account.' },
    ],
    faqs: [
      { question: 'What are the loan tiers under Kamyab Jawan?', answer: 'Tier 1: Rs. 100,000 - 500,000 (micro loans), Tier 2: Rs. 500,000 - 25,00,000 (small loans), Tier 3: Rs. 25,00,000 - 75,00,000 (medium loans).' },
      { question: 'Is collateral required for Kamyab Jawan loans?', answer: 'Tier 1 loans (up to Rs. 500,000) do not require collateral. Higher tiers may require collateral or third-party guarantees.' },
      { question: 'Can women apply for Kamyab Jawan loans?', answer: 'Yes, women are encouraged to apply. Special priority is given to women entrepreneurs under this program.' },
      { question: 'What businesses are eligible for funding?', answer: 'Most legitimate businesses are eligible including manufacturing, services, agriculture, IT, and retail sectors.' },
    ],
    officialLink: 'https://kamyabjawan.gov.pk/',
  },
  {
    slug: 'pakistan-bait-ul-mal',
    title: 'Pakistan Bait-ul-Mal',
    shortDescription: 'Government welfare organization providing financial assistance for education, healthcare, and rehabilitation to the poor.',
    category: 'Welfare',
    overview: 'Pakistan Bait-ul-Mal (PBM) is an autonomous government organization established to provide financial assistance to the destitute, widows, orphans, and other vulnerable groups. PBM runs various programs including educational scholarships, individual financial assistance, women empowerment centers, and child support programs. The organization aims to reduce poverty through direct assistance and sustainable livelihood programs.',
    quickInfo: [
      { label: 'Established', value: '1991' },
      { label: 'Governing Law', value: 'Pakistan Bait-ul-Mal Act 1991' },
      { label: 'Head Office', value: 'Islamabad' },
      { label: 'Coverage', value: 'All Districts of Pakistan' },
      { label: 'Focus Areas', value: 'Education, Health, Rehabilitation' },
    ],
    eligibility: [
      { criteria: 'Income', requirement: 'Family income below Rs. 35,000/month' },
      { criteria: 'Nationality', requirement: 'Pakistani citizen' },
      { criteria: 'Category', requirement: 'Widows, orphans, disabled, deserving students' },
      { criteria: 'Documentation', requirement: 'Valid poverty certificate from local authority' },
      { criteria: 'No Govt. Job', requirement: 'Applicant or family not in government employment' },
    ],
    documents: [
      'CNIC of applicant',
      'Poverty/Income certificate from Union Council',
      'Medical reports (for health assistance)',
      'Educational certificates (for scholarships)',
      'Death certificate of husband (for widows)',
      'Photographs',
    ],
    steps: [
      { title: 'Obtain Poverty Certificate', description: 'Get a poverty/income certificate from your local Union Council or Tehsil.' },
      { title: 'Visit PBM Office', description: 'Visit the nearest Pakistan Bait-ul-Mal district office with your documents.' },
      { title: 'Submit Application', description: 'Fill out the application form and submit all required documents.' },
      { title: 'Verification', description: 'PBM officials will verify your application and conduct a home visit if needed.' },
      { title: 'Receive Assistance', description: 'Upon approval, receive financial assistance or enroll in relevant programs.' },
    ],
    faqs: [
      { question: 'What programs does Pakistan Bait-ul-Mal offer?', answer: 'PBM offers Individual Financial Assistance, Child Support Program, Women Empowerment Centers, Dar-ul-Ehsas schools, and medical treatment assistance.' },
      { question: 'How much assistance can I receive from PBM?', answer: 'Individual Financial Assistance can range from Rs. 20,000 to Rs. 100,000 depending on the nature of need (medical, education, livelihood).' },
      { question: 'Can I apply for educational scholarships through PBM?', answer: 'Yes, PBM provides educational stipends through its Child Support Program for orphans and children from poor families.' },
      { question: 'How do I contact Pakistan Bait-ul-Mal?', answer: 'Visit their website at pbm.gov.pk or contact their helpline. You can also visit the district office in your area.' },
    ],
    officialLink: 'https://www.pbm.gov.pk/',
  },
  {
    slug: 'naya-pakistan-housing-program',
    title: 'Naya Pakistan Housing Program',
    shortDescription: 'Affordable housing initiative to provide low-cost homes to Pakistani citizens through subsidized financing.',
    category: 'Housing',
    isNew: true,
    overview: 'The Naya Pakistan Housing Program is an ambitious initiative to construct 5 million affordable housing units across Pakistan. The program provides subsidized mortgage financing with government markup subsidy, making home ownership accessible to low and middle-income families. Partner banks and the Naya Pakistan Housing Authority work together to facilitate applicants in obtaining affordable housing loans.',
    quickInfo: [
      { label: 'Target', value: '5 Million Houses' },
      { label: 'Markup Subsidy', value: 'Up to 5% government subsidy' },
      { label: 'Loan Amount', value: 'Rs. 2.7 Million - 6 Million' },
      { label: 'Loan Term', value: 'Up to 20 years' },
      { label: 'Down Payment', value: '10-20% of house value' },
    ],
    eligibility: [
      { criteria: 'Age', requirement: '18-60 years at time of application' },
      { criteria: 'Income', requirement: 'Verifiable income source' },
      { criteria: 'First-Time Buyer', requirement: 'Priority for first-time home buyers' },
      { criteria: 'CNIC', requirement: 'Valid Pakistani CNIC' },
      { criteria: 'Credit History', requirement: 'No loan defaults or legal cases' },
    ],
    documents: [
      'CNIC (original and copy)',
      'Salary slips or income proof',
      'Bank statements (6 months)',
      'Employment letter',
      'Property documents (if already identified)',
      'Photographs',
    ],
    steps: [
      { title: 'Online Registration', description: 'Register on the Naya Pakistan Housing portal and create your profile.' },
      { title: 'Choose Category', description: 'Select house category (3, 5, or 10 Marla) based on your budget.' },
      { title: 'Bank Application', description: 'Apply for housing loan through partner banks listed on the portal.' },
      { title: 'Loan Approval', description: 'Bank will process your application and approve the loan amount.' },
      { title: 'House Allocation', description: 'Upon loan approval, proceed with house booking and construction.' },
    ],
    faqs: [
      { question: 'What is the markup rate for Naya Pakistan Housing loans?', answer: 'Effective markup rates range from 5-9% after government subsidy, depending on income category and loan tier.' },
      { question: 'Can overseas Pakistanis apply for this program?', answer: 'Yes, overseas Pakistanis with valid NICOP can apply through designated partner banks.' },
      { question: 'What house sizes are available?', answer: 'The program offers 3 Marla, 5 Marla, and 10 Marla housing options at different locations.' },
      { question: 'How is the government subsidy provided?', answer: 'The government pays the markup subsidy directly to banks, reducing your effective interest rate.' },
    ],
    officialLink: 'https://nphp.com.pk/',
  },
];

export const getSchemeBySlug = (slug: string): Scheme | undefined => {
  return schemes.find(s => s.slug === slug);
};
