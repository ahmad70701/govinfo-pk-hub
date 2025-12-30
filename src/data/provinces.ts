// Provinces Data for Pakistan
export interface Province {
  slug: string;
  name: string;
  capital: string;
  description: string;
  population: string;
  area: string;
  keySchemes: string[];
  keyServices: string[];
  officialPortal: string;
}

export const provinces: Province[] = [
  {
    slug: 'punjab',
    name: 'Punjab',
    capital: 'Lahore',
    description: 'Punjab is the most populous province of Pakistan, known as the land of five rivers. It is the economic and industrial hub of the country with a rich cultural heritage and historical significance.',
    population: '110+ Million',
    area: '205,344 km²',
    keySchemes: ['Punjab Social Protection Authority', 'Ehsaas Punjab', 'Punjab Skills Development Fund', 'Kissan Package'],
    keyServices: ['Punjab Portal', 'e-Khidmat Centers', 'Punjab Land Records Authority', 'e-Stamping'],
    officialPortal: 'https://punjab.gov.pk/',
  },
  {
    slug: 'sindh',
    name: 'Sindh',
    capital: 'Karachi',
    description: 'Sindh is home to Karachi, Pakistan\'s largest city and economic capital. The province has a rich history dating back to the Indus Valley Civilization and is known for its diverse culture and heritage.',
    population: '50+ Million',
    area: '140,914 km²',
    keySchemes: ['Sindh Peoples Support Programme', 'Benazir Bhutto Shaheed Youth Development', 'Sindh Education Foundation Scholarships'],
    keyServices: ['Sindh Excise & Taxation', 'Sindh Investment Department', 'Nadra Facilitation Centers'],
    officialPortal: 'https://sindh.gov.pk/',
  },
  {
    slug: 'khyber-pakhtunkhwa',
    name: 'Khyber Pakhtunkhwa',
    capital: 'Peshawar',
    description: 'Khyber Pakhtunkhwa (KP), formerly known as NWFP, is known for its rich Pashtun culture, historical sites, and natural beauty including valleys and mountains in the north.',
    population: '40+ Million',
    area: '101,741 km²',
    keySchemes: ['Insaf Rozgar Scheme', 'Sehat Sahulat Program KP', 'KP Youth Employment Program', 'Ehsaas KP'],
    keyServices: ['KP Excise & Taxation', 'KP Land Records', 'Citizen Facilitation Centers'],
    officialPortal: 'https://www.kp.gov.pk/',
  },
  {
    slug: 'balochistan',
    name: 'Balochistan',
    capital: 'Quetta',
    description: 'Balochistan is the largest province by area, covering nearly 44% of Pakistan\'s total land. Rich in natural resources, it shares borders with Iran and Afghanistan.',
    population: '15+ Million',
    area: '347,190 km²',
    keySchemes: ['Balochistan Social Protection', 'Chief Minister Merit Scholarships', 'Balochistan Youth Policy'],
    keyServices: ['Balochistan Revenue Authority', 'Balochistan Excise & Taxation', 'One Window Operations'],
    officialPortal: 'https://balochistan.gov.pk/',
  },
  {
    slug: 'islamabad',
    name: 'Islamabad Capital Territory',
    capital: 'Islamabad',
    description: 'Islamabad is the federal capital of Pakistan, a planned city known for its high standards of living, greenery, and modern infrastructure. It houses the federal government and diplomatic missions.',
    population: '2+ Million',
    area: '906 km²',
    keySchemes: ['Federal Government Schemes', 'PM Youth Program', 'Ehsaas Federal', 'HEC Scholarships'],
    keyServices: ['ICT Administration', 'CDA Services', 'Nadra Head Office', 'Passport Office'],
    officialPortal: 'https://ictadministration.gov.pk/',
  },
  {
    slug: 'gilgit-baltistan',
    name: 'Gilgit-Baltistan',
    capital: 'Gilgit',
    description: 'Gilgit-Baltistan is a mountainous region in northern Pakistan, home to some of the world\'s highest peaks including K2. Known for stunning natural beauty and adventure tourism.',
    population: '2+ Million',
    area: '72,971 km²',
    keySchemes: ['GB Youth Development', 'Chief Minister Self-Employment Scheme', 'GB Education Endowment'],
    keyServices: ['GB Administration Portal', 'GB Revenue Services', 'Tourism Department GB'],
    officialPortal: 'https://www.gilgitbaltistan.gov.pk/',
  },
  {
    slug: 'azad-kashmir',
    name: 'Azad Jammu & Kashmir',
    capital: 'Muzaffarabad',
    description: 'Azad Jammu and Kashmir (AJK) is a self-governing administrative territory known for its scenic valleys, rivers, and natural beauty. It maintains its own government and constitution.',
    population: '5+ Million',
    area: '13,297 km²',
    keySchemes: ['AJK Social Protection', 'Kashmir Welfare Fund', 'AJK Scholarships Program'],
    keyServices: ['AJK Administration', 'AJK Revenue Department', 'Tourism AJK'],
    officialPortal: 'https://ajk.gov.pk/',
  },
];

export const getProvinceBySlug = (slug: string): Province | undefined => {
  return provinces.find(p => p.slug === slug);
};
