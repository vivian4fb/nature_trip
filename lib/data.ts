// Data for Western Ghats Nature Tours

export interface Trip {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  focus: string[];
  season: string;
  groupSize: string;
  price: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  toBring: string[];
  learningOutcomes: string[];
  suitableFor: string[];
}

export interface Expert {
  id: string;
  name: string;
  qualifications: string;
  specialization: string;
  experience: string;
  bio: string;
  imageUrl?: string;
}

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  category: 'Birds' | 'Mammals' | 'Reptiles' | 'Amphibians' | 'Butterflies' | 'Flora';
  endemic: boolean;
  threatened: boolean;
  habitat: string;
  fieldNote: string;
  imageUrl?: string;
}

export const trips: Trip[] = [
  {
    id: 'shola-endemic-expedition',
    title: 'Shola Forest Endemic Expedition',
    description: 'Explore the unique shola-grassland mosaic ecosystem and discover species found nowhere else on Earth.',
    duration: '7 days / 6 nights',
    difficulty: 'Moderate',
    focus: ['Birds', 'Flora', 'General Ecology'],
    season: 'October to March',
    groupSize: 'Max 10 participants',
    price: '₹45,000 per person',
    highlights: [
      'Explore pristine shola forests and grasslands',
      'Spot endemic birds including Nilgiri Flycatcher and White-bellied Shortwing',
      'Learn about montane ecosystem dynamics',
      'Night walks for amphibians and nocturnal mammals',
      'Botanical walks focusing on endemic flora'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Orientation',
        description: 'Arrive in the Western Ghats, settle into accommodation, and attend evening orientation session on shola ecosystems and trip safety.'
      },
      {
        day: 2,
        title: 'Shola Forest Introduction',
        description: 'Morning bird walk in shola patches. Afternoon session on forest ecology and endemic species. Evening discussion on conservation challenges.'
      },
      {
        day: 3,
        title: 'Grassland Exploration',
        description: 'Full day exploring the grassland-forest interface. Focus on habitat specialization and species adaptations.'
      },
      {
        day: 4,
        title: 'Endemic Birds Focus',
        description: 'Dedicated birding day targeting Western Ghats endemics. Learn bird identification techniques and behavior observation.'
      },
      {
        day: 5,
        title: 'Flora and Invertebrates',
        description: 'Botanical walk with focus on endemic trees and shrubs. Afternoon session on butterflies and other invertebrates.'
      },
      {
        day: 6,
        title: 'Night Ecology',
        description: 'Day for rest or optional activities. Evening amphibian survey and night walk for nocturnal wildlife.'
      },
      {
        day: 7,
        title: 'Synthesis and Departure',
        description: 'Morning wrap-up session synthesizing learning. Departure after lunch.'
      }
    ],
    included: [
      'Accommodation in eco-lodges',
      'All meals (vegetarian)',
      'Expert guide throughout',
      'Field equipment (binoculars, field guides)',
      'Transportation during trip',
      'Entry permits'
    ],
    toBring: [
      'Comfortable walking shoes',
      'Rain jacket and warm layers',
      'Personal water bottle',
      'Sunscreen and hat',
      'Personal medications',
      'Notebook and pen',
      'Camera (optional)'
    ],
    learningOutcomes: [
      'Understand shola-grassland ecosystem dynamics',
      'Identify key endemic bird species',
      'Recognize major plant families of the Western Ghats',
      'Appreciate conservation challenges and solutions',
      'Develop field observation skills'
    ],
    suitableFor: [
      'Nature enthusiasts',
      'Birders',
      'College students',
      'Teachers',
      'Families with teenagers'
    ]
  },
  {
    id: 'herp-diversity-course',
    title: 'Herpetological Diversity Course',
    description: 'An intensive field course focused on the incredible diversity of reptiles and amphibians in the Western Ghats.',
    duration: '5 days / 4 nights',
    difficulty: 'Moderate',
    focus: ['Reptiles', 'Amphibians'],
    season: 'June to September (monsoon)',
    groupSize: 'Max 12 participants',
    price: '₹38,000 per person',
    highlights: [
      'Survey frogs during peak breeding season',
      'Learn safe snake observation techniques',
      'Understand amphibian conservation',
      'Night surveys in streams and forests',
      'Hands-on species identification training'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Introduction to Western Ghats Herpetofauna',
        description: 'Arrival, orientation, and evening presentation on reptile and amphibian diversity.'
      },
      {
        day: 2,
        title: 'Amphibian Survey Techniques',
        description: 'Morning lecture on frog families. Evening stream survey for breeding amphibians.'
      },
      {
        day: 3,
        title: 'Forest Reptiles',
        description: 'Day survey for lizards and snakes. Learn about arboreal and terrestrial species. Night survey.'
      },
      {
        day: 4,
        title: 'Endemic Species Focus',
        description: 'Target endemic and threatened species. Discuss conservation status and threats.'
      },
      {
        day: 5,
        title: 'Wrap-up and Departure',
        description: 'Morning review session. Species checklist compilation. Departure after lunch.'
      }
    ],
    included: [
      'Accommodation',
      'All meals',
      'Expert herpetologist guide',
      'Field equipment',
      'Transportation',
      'Permits'
    ],
    toBring: [
      'Sturdy waterproof boots',
      'Rain gear',
      'Headlamp',
      'Long pants and full sleeves',
      'Insect repellent',
      'Field notebook'
    ],
    learningOutcomes: [
      'Identify major amphibian and reptile families',
      'Understand breeding ecology',
      'Learn safe wildlife observation',
      'Recognize conservation threats',
      'Develop survey skills'
    ],
    suitableFor: [
      'Herpetology students',
      'Wildlife enthusiasts',
      'Researchers',
      'Advanced naturalists'
    ]
  },
  {
    id: 'butterfly-biodiversity-workshop',
    title: 'Butterfly Biodiversity Workshop',
    description: 'Discover the stunning butterfly diversity of the Western Ghats through field observation and photography.',
    duration: '4 days / 3 nights',
    difficulty: 'Easy',
    focus: ['Butterflies', 'Flora'],
    season: 'October to February',
    groupSize: 'Max 10 participants',
    price: '₹28,000 per person',
    highlights: [
      'Learn butterfly identification',
      'Photograph endemic species',
      'Understand plant-butterfly relationships',
      'Visit diverse habitats',
      'Create personal field checklist'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Butterfly Basics',
        description: 'Arrival and introduction to butterfly diversity and identification.'
      },
      {
        day: 2,
        title: 'Forest Butterflies',
        description: 'Morning survey in evergreen forest. Afternoon session on photography techniques.'
      },
      {
        day: 3,
        title: 'Grassland and Edge Species',
        description: 'Explore open habitats. Learn about host plants and butterfly life cycles.'
      },
      {
        day: 4,
        title: 'Review and Departure',
        description: 'Morning wrap-up. Species list review. Departure after lunch.'
      }
    ],
    included: [
      'Accommodation',
      'Meals',
      'Expert lepidopterist',
      'Field guides',
      'Transportation',
      'Permits'
    ],
    toBring: [
      'Light hiking shoes',
      'Hat and sunscreen',
      'Camera with macro capability',
      'Binoculars',
      'Notebook',
      'Water bottle'
    ],
    learningOutcomes: [
      'Identify common butterfly families',
      'Understand butterfly ecology',
      'Learn photography basics',
      'Recognize endemic species',
      'Appreciate biodiversity patterns'
    ],
    suitableFor: [
      'Beginners welcome',
      'Photographers',
      'Families',
      'Nature lovers',
      'Students'
    ]
  }
];

export const experts: Expert[] = [
  {
    id: 'dr-anand-kumar',
    name: 'Dr. Anand Kumar',
    qualifications: 'PhD in Tropical Forest Ecology',
    specialization: 'Forest Ecology and Conservation',
    experience: '25+ years in Western Ghats research and education',
    bio: 'Dr. Kumar has dedicated over two decades to studying and teaching about Western Ghats ecosystems. His research focuses on the ecological relationships within shola forests and the impacts of climate change on montane ecosystems. He has guided hundreds of students and researchers through the forests he calls home.'
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    qualifications: 'PhD in Herpetology',
    specialization: 'Reptiles and Amphibians',
    experience: '15 years studying Western Ghats herpetofauna',
    bio: 'Priya\'s passion for reptiles and amphibians has led to the documentation of several new species in the Western Ghats. She combines rigorous scientific methodology with enthusiastic teaching, making even the most secretive creatures accessible to learners. Her work on frog conservation has informed policy at state and national levels.'
  },
  {
    id: 'ravi-shankar',
    name: 'Ravi Shankar',
    qualifications: 'MSc in Ornithology',
    specialization: 'Bird Ecology and Behavior',
    experience: '20 years of birding and bird research',
    bio: 'Ravi has been birding in the Western Ghats since childhood. His encyclopedic knowledge of bird calls and behaviors makes him an exceptional guide for birders of all levels. He has contributed to numerous bird atlases and conservation assessments, and his patient teaching style has inspired many new birders.'
  },
  {
    id: 'dr-meera-patel',
    name: 'Dr. Meera Patel',
    qualifications: 'PhD in Botany',
    specialization: 'Endemic Flora and Plant Ecology',
    experience: '18 years studying Western Ghats plant diversity',
    bio: 'Dr. Patel\'s research on endemic plants has contributed to our understanding of speciation and adaptation in tropical mountains. She brings plants to life through stories of their evolution, ecology, and cultural significance. Her field courses are known for combining rigorous botany with accessible teaching.'
  }
];

export const species: Species[] = [
  {
    id: 'nilgiri-flycatcher',
    commonName: 'Nilgiri Flycatcher',
    scientificName: 'Eumyias albicaudatus',
    category: 'Birds',
    endemic: true,
    threatened: false,
    habitat: 'Shola forests above 1200m',
    fieldNote: 'Often seen sallying for insects from exposed perches in the canopy.'
  },
  {
    id: 'malabar-trogon',
    commonName: 'Malabar Trogon',
    scientificName: 'Harpactes fasciatus',
    category: 'Birds',
    endemic: true,
    threatened: false,
    habitat: 'Evergreen and semi-evergreen forests',
    fieldNote: 'Look for this stunning bird perched motionless in the mid-canopy.'
  },
  {
    id: 'nilgiri-marten',
    commonName: 'Nilgiri Marten',
    scientificName: 'Martes gwatkinsii',
    category: 'Mammals',
    endemic: true,
    threatened: true,
    habitat: 'Shola forests and adjacent areas',
    fieldNote: 'This elusive carnivore is most active in early morning hours.'
  },
  {
    id: 'malabar-gliding-frog',
    commonName: 'Malabar Gliding Frog',
    scientificName: 'Rhacophorus malabaricus',
    category: 'Amphibians',
    endemic: true,
    threatened: false,
    habitat: 'Forest streams and adjacent vegetation',
    fieldNote: 'Watch for foam nests on leaves overhanging streams during monsoon.'
  },
  {
    id: 'hump-nosed-pit-viper',
    commonName: 'Hump-nosed Pit Viper',
    scientificName: 'Hypnale hypnale',
    category: 'Reptiles',
    endemic: true,
    threatened: false,
    habitat: 'Forest floor and plantation edges',
    fieldNote: 'A small, well-camouflaged viper. Observe from a safe distance.'
  },
  {
    id: 'travancore-tortoise',
    commonName: 'Travancore Tortoise',
    scientificName: 'Indotestudo travancorica',
    category: 'Reptiles',
    endemic: true,
    threatened: true,
    habitat: 'Evergreen forests with bamboo',
    fieldNote: 'This threatened species requires intact forest habitat.'
  },
  {
    id: 'southern-birdwing',
    commonName: 'Southern Birdwing',
    scientificName: 'Troides minos',
    category: 'Butterflies',
    endemic: true,
    threatened: false,
    habitat: 'Forest edges and clearings',
    fieldNote: 'India\'s largest butterfly, often seen flying high along forest edges.'
  },
  {
    id: 'malabar-tree-nymph',
    commonName: 'Malabar Tree Nymph',
    scientificName: 'Idea malabarica',
    category: 'Butterflies',
    endemic: true,
    threatened: false,
    habitat: 'Dense evergreen forests',
    fieldNote: 'This large, graceful butterfly floats slowly through the understory.'
  },
  {
    id: 'nilgiri-rhododendron',
    commonName: 'Nilgiri Rhododendron',
    scientificName: 'Rhododendron arboreum nilagiricum',
    category: 'Flora',
    endemic: true,
    threatened: false,
    habitat: 'Shola forest margins',
    fieldNote: 'Spectacular red blooms in February-March attract sunbirds and other pollinators.'
  },
  {
    id: 'strobilanthes',
    commonName: 'Kurinji (Neelakurinji)',
    scientificName: 'Strobilanthes kunthiana',
    category: 'Flora',
    endemic: true,
    threatened: false,
    habitat: 'Montane grasslands',
    fieldNote: 'Famous for mass flowering once every 12 years, carpeting hillsides in blue.'
  }
];

export const faqs = [
  {
    question: 'What is the best time to visit the Western Ghats?',
    answer: 'The best time depends on your interests. October to March offers pleasant weather and excellent birding. June to September (monsoon) is ideal for amphibian surveys, though travel can be challenging. We tailor our trips to seasonal highlights.'
  },
  {
    question: 'What level of fitness is required?',
    answer: 'Most of our trips involve moderate walking on forest trails. Difficulty levels are clearly marked for each trip. We maintain a comfortable pace with frequent stops for observation and learning. If you have specific concerns, please contact us to discuss options.'
  },
  {
    question: 'Are the trips safe? What about snakes?',
    answer: 'Safety is our top priority. Our guides are trained in wilderness first aid and wildlife safety. While the Western Ghats is home to venomous snakes, incidents are extremely rare when proper precautions are followed. We teach safe observation techniques and maintain appropriate distances from all wildlife.'
  },
  {
    question: 'What accommodation can I expect?',
    answer: 'We use comfortable eco-lodges and guesthouses with clean rooms and basic amenities. Accommodation emphasizes low environmental impact and support for local communities. All locations are chosen for their proximity to quality field sites.'
  },
  {
    question: 'Are meals provided? Can you accommodate dietary restrictions?',
    answer: 'All meals are included and feature fresh, locally sourced vegetarian food. We can accommodate most dietary restrictions with advance notice. Please inform us of any allergies or special requirements when booking.'
  },
  {
    question: 'Do I need previous knowledge or experience?',
    answer: 'No previous experience is required for most trips. Our educational approach is designed for all levels, from complete beginners to experienced naturalists. We tailor explanations to the group\'s knowledge level.'
  },
  {
    question: 'What is your group size?',
    answer: 'We keep groups small (typically 8-12 participants) to minimize environmental impact and maximize learning opportunities. Small groups allow for personal attention and better wildlife observation.'
  },
  {
    question: 'How do I book a trip?',
    answer: 'Use our contact form or email us directly with your preferred dates and trip. We\'ll respond within 24 hours with availability and booking instructions. A deposit is required to confirm your spot.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations more than 30 days before departure receive a full refund minus processing fees. Cancellations 15-30 days before departure receive 50% refund. Within 15 days, no refund is available. We recommend travel insurance.'
  },
  {
    question: 'Can you customize trips for university groups?',
    answer: 'Absolutely. We regularly work with universities to create custom field courses aligned with specific learning objectives. Contact us to discuss your requirements, timeline, and student group size.'
  }
];
