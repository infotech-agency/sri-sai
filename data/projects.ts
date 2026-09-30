export interface Project {
  title: string;
  category: string;
  location?: string;
  scope?: string;
  description?: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export const projectCategories = [
  'All',
  'Aviation',
  'Retail',
  'Corporate',
  'Dark Stores',
  'Hospitality',
  'Museums',
  'General Contracting',
] as const;

export const projects: Project[] = [
  {
    title: 'Air India',
    category: 'Aviation',
    scope: 'Aviation interior fit-out',
    image:
      '/projects/air.jpeg',
    alt: 'Airport terminal with modern architecture and lighting',
    featured: true,
  },
  {
    title: 'IndiGo',
    category: 'Aviation',
    scope: 'Aviation interior fit-out',
    image:
      '/projects/indigo.jpeg',
    alt: 'Airport terminal interior with seating and windows',
  },
  {
    title: 'American Airlines',
    category: 'Aviation',
    scope: 'Aviation interior fit-out',
    image:
      '/projects/aa.jpeg',
    alt: 'Airport lounge with modern seating',
  },
  {
    title: 'GMR Immigration Counters — IGI Airport',
    category: 'Aviation',
    location: 'New Delhi',
    scope: 'Immigration counter fit-out at IGI Airport',
    image:
      'https://m.economictimes.com/thumb/msid-61691422,width-1600,height-900,resizemode-4,imgsize-308262/10-additional-immigration-counters-come-up-at-igi-airport.jpg',
    alt: 'Empty airport terminal with glass facade',
    featured: true,
  },
  {
    title: 'Blinkit',
    category: 'Dark Stores',
    scope: 'Dark store fit-out',
    image:
      '/projects/blinkit.jpeg',
    alt: 'Grocery store shelves with organized products',
  },
  {
    title: 'Zepto',
    category: 'Dark Stores',
    scope: 'Dark store fit-out',
    image:
      '/projects/zepto.jpeg',
    alt: 'Store shelves with diverse grocery products',
  },
  {
    title: 'Flipkart Minutes',
    category: 'Dark Stores',
    scope: 'Fulfilment centre fit-out',
    image:
      '/projects/flip.jpg',
    alt: 'Warehouse with workers handling packages',
  },
  {
    title: 'McDonald\u2019s',
    category: 'Retail',
    scope: 'Retail fit-out',
    image:
      'https://www.investopedia.com/thmb/a_tD7rBwlEFRJGL-yuZnbE7lnZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_523483492-mcdonalds-5988b1ffc412440010f2d0b9.jpg',
    alt: 'Modern retail store interior',
  },
  {
    title: 'Asian Shoes',
    category: 'Retail',
    scope: 'Retail fit-out',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtqYXHa9tCh5prNteMlHFToysQszqVLipOnH4PZEZ2uz7hZtOg4WUjVU&s=10',
    alt: 'Boutique with clothing and footwear display',
  },
  {
    title: 'MMTC',
    category: 'Retail',
    scope: 'Commercial fit-out',
    image:
      'https://images.pexels.com/photos/27452443/pexels-photo-27452443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary mall interior with escalator',
  },
  {
    title: 'Rehau Exhibition',
    category: 'Retail',
    scope: 'Exhibition stall and fixtures',
    image:
      '/projects/rehau.jpg',
    alt: 'Elegant fashion boutique interior',
  },
  {
    title: 'Coca-Cola Exhibition',
    category: 'Retail',
    scope: 'Exhibition stall and fixtures',
    image:
      '/projects/cock.jpg',
    alt: 'Contemporary store with stylish lighting',
  },
  {
    title: 'Microsoft Fixtures',
    category: 'Corporate',
    scope: 'Fixture supply and installation',
    image:
      'https://images.pexels.com/photos/7511755/pexels-photo-7511755.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Office hallway with geometric decoration',
  },
  {
    title: 'PMG',
    category: 'General Contracting',
    scope: 'General contracting',
    image:
      'https://images.pexels.com/photos/20390772/pexels-photo-20390772.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern conference room with minimalist design',
  },
  {
    title: 'Moving Pixel',
    category: 'General Contracting',
    scope: 'General contracting',
    image:
      'https://images.pexels.com/photos/5869295/pexels-photo-5869295.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Conference room with black chairs and glass wall',
  },
  {
    title: 'Supreme Court Museum',
    category: 'Museums',
    location: 'New Delhi',
    scope: 'Museum interior works',
    image:
      'https://images.indianexpress.com/2020/01/se7-Copy.jpeg',
    alt: 'Museum hallway with exhibits and modern design',
  },
  {
    title: 'Chhatrapati Sambhaji Maharaj Museum',
    category: 'Museums',
    location: 'Pune',
    scope: 'Museum interior works',
    image:
      'https://aurangabadtourism.in/images/tourist-places/chhatrapati-shivaji-maharaj-museum-aurangabad/chhatrapati-shivaji-maharaj-museum-aurangabad-tourism-opening-time-closing.jpg',
    alt: 'Museum interior with geometric display',
  },
  {
    title: 'Hotel Project',
    category: 'Hospitality',
    location: 'Varanasi',
    scope: 'Hospitality interior fit-out',
    image:
      'https://images.pexels.com/photos/26729556/pexels-photo-26729556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Hotel lobby with armchairs and decor',
  },
];
