export const bookingUrl = 'https://portal.sked.life';

export const contactInfo = {
  phone: '(908) 653-0000',
  phoneHref: 'tel:+19086530000',
  address: '68 Washington Street, Clark, NJ 07066',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=68%20Washington%20Street%2C%20Clark%2C%20NJ%2007066',
  hours: 'Mon 9:00a-1:00p & 3:00p-7:00p; Tue closed; Wed 3:00p-6:30p; Thu 9:00a-1:00p & 3:00p-6:00p; Fri 8:00a-12:00p; Sat 8:00a-11:30a; Sun closed',
  serviceArea: 'Serving Clark, Westfield, Cranford, Scotch Plains, and nearby families.',
};

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/flourishingfamilywellness',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/flourishingfamilywellness/',
    icon: 'instagram',
  },
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/flourishing-family-chiropractic-clark',
    icon: 'yelp',
  },
  {
    label: 'Nextdoor',
    href: 'https://nextdoor.com/pages/flourishing-family-chiropractic-clark-nj/',
    icon: 'nextdoor',
  },
] as const;

export const doctors = [
  {
    name: 'Dr. Shelley',
    role: 'Founder · Chiropractor',
    image: '/assets/opt/doctor-shelley.jpg',
    bio: 'Started Flourishing Family in 2010 to practice from a place of abundance: gentle, low-force care for the smallest patients and the tenderest stages.',
  },
  {
    name: 'Dr. Ila Clemente',
    role: 'Chiropractor',
    image: '/assets/opt/doctor-ila.jpg',
    bio: 'Joined in 2021 to reach more families with perinatal and pediatric care, and a calm presence that helps people feel understood quickly.',
  },
  {
    name: 'Dr. Alexandra',
    role: 'Acupuncturist',
    image: '/assets/opt/doctor-alex.jpg',
    bio: 'Completed the picture with fertility and pregnancy acupuncture: the quiet, steadying half of the journey.',
  },
];

export const testimonials = [
  {
    quote: 'They support you like family — and they are the best chiropractor I have seen in twenty years.',
    source: 'A Flourishing Family patient, Westfield',
  },
  {
    quote: 'Not just chiropractors — so much more.',
    source: 'A Flourishing Family patient',
  },
  {
    quote: 'I finally felt like someone was looking at the whole picture, not just the one symptom I came in with.',
    source: 'A new patient, Clark',
  },
];

export const locations = [
  {
    slug: 'clark',
    town: 'Clark',
    title: 'Family wellness care in Clark, NJ',
    summary:
      'One-on-one chiropractic, acupuncture, pregnancy, fertility, postpartum, and family wellness care from our Clark studio.',
  },
  {
    slug: 'westfield',
    town: 'Westfield',
    title: 'Pregnancy and family wellness care near Westfield',
    summary:
      'A warm, doctor-led care home for Westfield families looking for pregnancy support, pediatric care, and whole-family wellness.',
  },
  {
    slug: 'cranford',
    town: 'Cranford',
    title: 'Prenatal, postpartum, and family care near Cranford',
    summary:
      'Support for Cranford families who want thorough, calm care through pregnancy, postpartum, fertility, and the everyday body.',
  },
  {
    slug: 'scotch-plains',
    town: 'Scotch Plains',
    title: 'Family chiropractic and acupuncture near Scotch Plains',
    summary:
      'A one-on-one wellness studio for Scotch Plains families who want care that is personal, measured, and easy to understand.',
  },
];

export type Location = (typeof locations)[number];
