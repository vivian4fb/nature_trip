// Data for Wildora Expeditions

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
  priceUSD?: string;
  nextDeparture?: string;
  spotsLeft?: number;
  targetSpecies?: string;
  region?: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  toBring: string[];
  learningOutcomes: string[];
  suitableFor: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  forWho: string;
  icon: 'guide' | 'camera' | 'moon' | 'map' | 'family' | 'leaf' | 'groups' | 'school';
}

export interface Review {
  name: string;
  country: string;
  rating: number;
  text: string;
  trip: string;
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
    id: 'central-india-big-cats',
    title: 'Central India Big Cats & Forest Safari',
    description: 'A wildlife holiday through tiger country, dry forests, river edges, meadows, and bird-rich buffer zones.',
    duration: '7 days / 6 nights',
    difficulty: 'Easy',
    focus: ['Tigers', 'Leopards', 'Forest birds'],
    season: 'October to June',
    groupSize: 'Max 10 guests',
    price: 'Rs 58,000 per person',
    priceUSD: 'approx. US$695 / GBP 550',
    nextDeparture: '15 November 2026',
    spotsLeft: 4,
    targetSpecies: 'Tigers, leopards, wild dogs, owls, raptors',
    region: 'Central India forests',
    highlights: [
      'Jeep safaris in prime tiger and leopard habitat',
      'Birding and nature walks in lodge grounds and buffer forests',
      'Evening sessions for owls, nightjars, civets, and forest sounds',
      'Comfortable lodges, local food, and relaxed downtime between drives',
      'Ethical viewing with guides who understand animal behaviour and park rules'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tiger Country',
        description: 'Arrive, settle into your lodge, meet your naturalist, and take a short birding walk near the property.'
      },
      {
        day: 2,
        title: 'First Safari Drives',
        description: 'Morning and afternoon jeep safaris focused on tracks, calls, habitat signs, and patient big-cat viewing.'
      },
      {
        day: 3,
        title: 'Birds, Meadows, and Waterholes',
        description: 'Explore different safari zones with time for raptors, woodland birds, deer, wild boar, and possible predator movement near water.'
      },
      {
        day: 4,
        title: 'Slow Wildlife Day',
        description: 'A lighter day with optional village, river, or lodge-ground birding between safari sessions.'
      },
      {
        day: 5,
        title: 'Leopards and Forest Edges',
        description: 'Search rocky edges, dry forest, and grassland mosaics for leopards, sloth bears, owls, and smaller mammals.'
      },
      {
        day: 6,
        title: 'Final Full Safari Day',
        description: 'Use the final full day to revisit the most productive habitats and refine the group checklist.'
      },
      {
        day: 7,
        title: 'Breakfast Review and Departure',
        description: 'Review sightings, photographs, and route notes before departure after breakfast.'
      }
    ],
    included: [
      'Wildlife lodge accommodation',
      'All meals, with vegetarian-friendly options',
      'Expert naturalist guide throughout',
      'Safari vehicle coordination where included in the plan',
      'Transportation during the trip',
      'Park entry and permit guidance'
    ],
    toBring: [
      'Neutral-coloured comfortable clothing',
      'Light jacket for early morning drives',
      'Hat, sunglasses, and sunscreen',
      'Personal medications',
      'Binoculars if you have them',
      'Camera or phone for photography'
    ],
    learningOutcomes: [
      'Enjoy ethical big-cat viewing across varied forest habitats',
      'Understand animal tracks, alarm calls, and safari fieldcraft',
      'Leave with a personal wildlife checklist and route notes',
      'Balance safari intensity with rest, food, and comfortable travel',
      'See India beyond a single habitat or species'
    ],
    suitableFor: [
      'International visitors',
      'Families',
      'First-time safari guests',
      'Photographers',
      'Wildlife enthusiasts'
    ]
  },
  {
    id: 'monsoon-rainforest-nights',
    title: 'Monsoon Rainforest Nights & Endemics',
    description: 'A guided rainforest experience for frogs, reptiles, endemic birds, butterflies, waterfalls, spice country, and forest nights.',
    duration: '5 days / 4 nights',
    difficulty: 'Moderate',
    focus: ['Frogs', 'Reptiles', 'Rainforest birds'],
    season: 'June to September (monsoon)',
    groupSize: 'Max 12 guests',
    price: 'Rs 38,000 per person',
    priceUSD: 'approx. US$460 / GBP 365',
    nextDeparture: '22 August 2026',
    spotsLeft: 6,
    targetSpecies: 'Frogs, geckos, pit vipers, hornbills, forest butterflies',
    region: 'Indian rainforests',
    highlights: [
      'Guided night walks for frogs, geckos, snakes, owls, moths, and rainforest soundscapes',
      'Stream and forest-edge visits during peak amphibian activity',
      'Waterfall, viewpoint, spice, and plantation stops between wildlife sessions',
      'Safe snake observation from respectful distances',
      'Monsoon photography support for low light, rain, and macro subjects'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Rainforest Welcome',
        description: 'Arrive, settle in, meet your guide, and take a short evening walk if weather allows.'
      },
      {
        day: 2,
        title: 'Rainforest Streams After Dark',
        description: 'A slower morning, forest-edge exploration after lunch, and a guided night walk along frog-rich stream habitat.'
      },
      {
        day: 3,
        title: 'Reptiles, Waterfalls, and Viewpoints',
        description: 'Daytime search for lizards and forest birds, followed by a waterfall or viewpoint visit and another optional night session.'
      },
      {
        day: 4,
        title: 'Endemic Wildlife Focus',
        description: 'Target locally special frogs, birds, butterflies, and reptiles, with a relaxed evening checklist session.'
      },
      {
        day: 5,
        title: 'Breakfast Review and Departure',
        description: 'Review sightings and photo highlights over breakfast before departure after lunch.'
      }
    ],
    included: [
      'Accommodation',
      'All meals',
      'Expert naturalist guide',
      'Shared torches and field references',
      'Transportation during the trip',
      'Permits and local coordination'
    ],
    toBring: [
      'Sturdy waterproof boots',
      'Reliable rain gear',
      'Headlamp',
      'Long pants and full-sleeve shirts',
      'Insect repellent',
      'Dry bag for electronics'
    ],
    learningOutcomes: [
      'Experience tropical rainforest at its most alive',
      'Observe frogs, reptiles, birds, and insects safely with a specialist guide',
      'Build a personal list of monsoon species and photo subjects',
      'Understand the rainforest by walking it, listening to it, and watching it after dark',
      'Balance adventurous night walks with enough rest between sessions'
    ],
    suitableFor: [
      'Wildlife enthusiasts',
      'Adventure travellers',
      'Photographers',
      'Advanced naturalists',
      'Small private groups'
    ]
  },
  {
    id: 'himalaya-birds-mountain-wildlife',
    title: 'Himalaya Birds & Mountain Wildlife',
    description: 'A scenic Himalayan nature break combining pheasants, high-altitude birds, forest mammals, village landscapes, and mountain views.',
    duration: '6 days / 5 nights',
    difficulty: 'Moderate',
    focus: ['Himalayan birds', 'Mountain mammals', 'Forest walks'],
    season: 'March to May and October to November',
    groupSize: 'Max 10 guests',
    price: 'Rs 52,000 per person',
    priceUSD: 'approx. US$625 / GBP 495',
    nextDeparture: '18 April 2027',
    spotsLeft: 8,
    targetSpecies: 'Pheasants, laughingthrushes, woodpeckers, deer, martens',
    region: 'Indian Himalaya',
    highlights: [
      'Dawn birding for Himalayan specialities in oak, pine, and rhododendron forests',
      'Scenic village trails, viewpoints, and mountain photography stops',
      'Flexible walking pace with warm meals and rest breaks built in',
      'Search for mammals, raptors, woodpeckers, and mixed feeding flocks',
      'Custom extensions possible for snow leopard country, red panda habitat, or higher passes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in the Foothills',
        description: 'Arrive, settle in, and enjoy a short acclimatisation walk for common mountain birds.'
      },
      {
        day: 2,
        title: 'Oak Forest Birding',
        description: 'Early walk through oak and mixed forest, with time for woodpeckers, laughingthrushes, flycatchers, and raptors.'
      },
      {
        day: 3,
        title: 'Ridge Trails and Viewpoints',
        description: 'Follow a scenic ridge route with stops for birds, landscapes, tea, and local village life.'
      },
      {
        day: 4,
        title: 'Pheasant and Mammal Search',
        description: 'Target shy forest birds and mammals during the most active hours, with a slower afternoon for rest or photography.'
      },
      {
        day: 5,
        title: 'High Forest Day',
        description: 'Visit a higher forest belt if conditions allow, focusing on mixed flocks, raptors, and mountain plant life.'
      },
      {
        day: 6,
        title: 'Final Walk and Departure',
        description: 'Short morning walk, checklist review, and departure after breakfast.'
      }
    ],
    included: [
      'Mountain lodge or guesthouse accommodation',
      'Meals',
      'Expert bird and wildlife guide',
      'Field guides',
      'Transportation during the trip',
      'Local access coordination'
    ],
    toBring: [
      'Comfortable walking shoes',
      'Warm layers',
      'Hat and sunscreen',
      'Binoculars',
      'Camera or phone',
      'Water bottle'
    ],
    learningOutcomes: [
      'Enjoy Himalayan birds and mammals at a comfortable travel pace',
      'Recognize key mountain habitats and seasonal wildlife patterns',
      'Improve birding and wildlife observation in forested terrain',
      'Experience local culture and scenery alongside wildlife',
      'Take home a personal checklist and practical viewing tips'
    ],
    suitableFor: [
      'Birders',
      'Nature lovers',
      'Couples and friends',
      'Photographers',
      'Slow travellers'
    ]
  },
  {
    id: 'western-ghats-endemics',
    title: 'Western Ghats Endemics Expedition',
    description: 'A 10-day journey through the UNESCO-listed Western Ghats — rainforest bird sanctuaries, shola grasslands, and tiger country — focused on species found nowhere else on Earth.',
    duration: '10 days / 9 nights',
    difficulty: 'Moderate',
    focus: ['Endemic birds', 'Endemic mammals', 'Shola & rainforest habitats'],
    season: 'October to March (post-monsoon)',
    groupSize: 'Max 10 guests',
    price: 'Price on request',
    targetSpecies: 'Lion-tailed Macaque, Nilgiri Tahr, Malabar Grey Hornbill, Sri Lanka Frogmouth',
    region: 'Western Ghats (Kerala, Tamil Nadu & Karnataka)',
    highlights: [
      'Explore a UNESCO World Heritage Site and one of the world\'s eight hottest biodiversity hotspots, home to over 7,400 species',
      'Search for 20+ endemic bird possibilities including Malabar Grey Hornbill, Sri Lanka Frogmouth, Nilgiri Laughingthrush, and sholakilis',
      'Track endemic mammals: Lion-tailed Macaque, Nilgiri Tahr, Nilgiri Langur, and Malabar Giant Squirrel',
      'Walk shola-grassland mosaics, montane forests, and lowland rainforest across Kerala, Tamil Nadu, and Karnataka',
      'Finish in Bandipur Tiger Reserve with a chance of Bengal Tiger, Asian Elephant, Leopard, and Dhole'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Thattekad Bird Sanctuary (Kerala)',
        description: 'Visit the Salim Ali Bird Interpretation Centre, Thattekad Bird Sanctuary, and the Periyar River. Targets: Malabar Grey Hornbill, Sri Lanka Frogmouth, Malabar Trogon, White-bellied Treepie, and Rufous Babbler. Night at Thattekad.'
      },
      {
        day: 2,
        title: 'Thattekad Bird Sanctuary',
        description: 'A full day focused on the endemic birds of the Western Ghats in one of South India\'s richest lowland forests. Night at Thattekad.'
      },
      {
        day: 3,
        title: 'Pampadum Shola National Park',
        description: 'Explore Pampadum Shola National Park and the Vattavada region for Nilgiri Pipit, Nilgiri Wood Pigeon, endemic orchids, rhododendrons — and, if fortunate, the elusive Nilgiri Marten. Night at Munnar.'
      },
      {
        day: 4,
        title: 'Eravikulam National Park',
        description: 'Visit Rajamalai and the interpretation centre in the heartland of the Nilgiri Tahr. Also watch for Nilgiri Pipit, Black-and-orange Flycatcher, and Nilgiri Flycatcher. Night at Munnar.'
      },
      {
        day: 5,
        title: 'Chinnar Wildlife Sanctuary',
        description: 'Cross into the rain-shadow forests of Chinnar for Grizzled Giant Squirrel, Indian Star Tortoise, Mugger Crocodile, and Indian Giant Flying Squirrel. Night at Chinnar.'
      },
      {
        day: 6,
        title: 'Anamalai Tiger Reserve (Top Slip – Valparai)',
        description: 'Travel through Top Slip, the Parambikulam border, and on to Valparai. Targets: Lion-tailed Macaque, Nilgiri Langur, Malabar Giant Squirrel, and Great Hornbill. Night at Valparai.'
      },
      {
        day: 7,
        title: 'Valparai Rainforests',
        description: 'Explore Nallamudi, Sholayar, and the tea-estate edges where rainforest fragments hold Lion-tailed Macaque and Nilgiri Langur, alongside Asian Elephant and Gaur. Night at Valparai.'
      },
      {
        day: 8,
        title: 'Nilgiri Biosphere Reserve (Ooty)',
        description: 'Visit the Government Botanical Garden, Doddabetta, and Wenlock Downs for Nilgiri Laughingthrush, Nilgiri Flycatcher, and classic shola vegetation. Night at Ooty.'
      },
      {
        day: 9,
        title: 'Mukurthi National Park',
        description: 'Walk the high shola-grassland country of Mukurthi, Avalanche, and Emerald for Nilgiri Tahr, Black-and-orange Flycatcher, and a rare chance of Nilgiri Marten. Night at Ooty.'
      },
      {
        day: 10,
        title: 'Bandipur Tiger Reserve (Karnataka) & Departure',
        description: 'A finale in Bandipur National Park with its interpretation centre. Chances of Bengal Tiger, Asian Elephant, Leopard, Dhole, Gaur, Sambar Deer, and Crested Hawk-Eagle before departure.'
      }
    ],
    included: [
      'Accommodation throughout (lodges and guesthouses)',
      'Meals',
      'Expert naturalist guide',
      'Park entry fees and access coordination',
      'Transportation during the trip',
      'Field guides and checklists'
    ],
    toBring: [
      'Comfortable walking shoes',
      'Warm layers for high-altitude mornings',
      'Rain protection',
      'Binoculars',
      'Camera or phone',
      'Water bottle'
    ],
    learningOutcomes: [
      'Understand why the Western Ghats hold such extraordinary endemism',
      'Identify key endemic birds, mammals, and plants in the field',
      'Recognize shola-grassland, montane, and lowland rainforest habitats',
      'Learn how the Southwest Monsoon shapes these ecosystems',
      'Take home a personal species checklist from a world biodiversity hotspot'
    ],
    suitableFor: [
      'Birders',
      'Mammal watchers',
      'Photographers',
      'Nature lovers',
      'Endemic species enthusiasts'
    ]
  }
];

export const experts: Expert[] = [
  {
    id: 'dr-a-relton',
    name: 'Dr. A. Relton',
    qualifications: 'Former Vice-Principal & Controller of Examinations, Bishop Heber College (Autonomous), Tiruchirappalli',
    specialization: 'Birds, butterflies, wetland ecology and wildlife interpretation',
    experience: '30+ years in biodiversity research and nature education; author of "Birds of Bishop Heber College" and "Butterflies of Bishop Heber College"',
    bio: 'A wildlife naturalist, educator, and conservationist with over three decades in the field, Dr. Relton has spent years documenting the flora and fauna of the Western and Eastern Ghats, Ramsar wetlands, and protected areas across India. His research focuses on butterfly diversity and conservation in the Eastern Ghats, and his expertise spans birds, butterflies, amphibians, reptiles, mammals, and tropical ecosystems. Through Nature Expeditions he leads eco-tours, birdwatching expeditions, butterfly walks, biodiversity camps, and photography tours that pair scientific interpretation with engaging storytelling. He believes meaningful conservation begins with meaningful experiences in nature.'
  },
  {
    id: 'a-daisy-caroline-mary',
    name: 'Dr. A. Daisy Caroline Mary',
    qualifications: 'Former Associate Professor of Environmental Sciences, Bishop Heber College (Autonomous), Tiruchirappalli',
    specialization: 'Environmental science, biodiversity conservation, and sustainability education',
    experience: 'Decades of university teaching, research supervision, and community environmental outreach',
    bio: 'An accomplished environmental scientist, educator, and researcher, Dr. Daisy has dedicated her career to inspiring students and communities to understand and protect the natural world. Her expertise spans environmental management, biodiversity conservation, ecosystem restoration, climate change, and sustainable development. She regularly leads environmental workshops, nature camps, and field-based learning programmes for schools, colleges, NGOs, and organizations, with a focus on connecting participants directly with nature. Her guiding conviction: "Protecting nature begins with understanding it, and education is the first step towards lasting conservation."'
  },
  {
    id: 'r-carlton',
    name: 'Dr. Carlton Relton',
    qualifications: 'Assistant Professor of Environmental Sciences, Bishop Heber College; Ph.D. in Environmental Sciences',
    specialization: 'Butterflies, birds, and tropical ecosystems of the Western and Eastern Ghats',
    experience: '10+ years in biodiversity research; advanced training in Ecology of Indian Tropics and Ornithology at the Au Sable Institute, USA',
    bio: 'An environmental scientist, wildlife naturalist, and conservation communicator, Carlton connects people with nature through immersive learning experiences. His research centres on butterflies, birds, and the protected landscapes of the Western and Eastern Ghats, combining science with citizen science and environmental awareness. An avid wildlife photographer, he has explored many of India\'s biodiversity hotspots and authored and co-authored books on biodiversity. He leads curated birdwatching tours, butterfly walks, photography tours, and rainforest explorations designed to go beyond sightseeing — helping guests understand ecosystems and become ambassadors for conservation.'
  },
  {
    id: 'dr-griffith-michael',
    name: 'Dr. Griffith Michael',
    qualifications: 'Ph.D. in Zoology; postgraduate qualifications in Wildlife Biology and Zoology',
    specialization: 'Mammal ecology and conservation, with a focus on the lesser-known mammals of South India',
    experience: 'Striped Hyena research in Sanjay Dubri Tiger Reserve; bird, butterfly, mammal, and tiger monitoring at Karaivetti, Point Calimere, and Anamalai Tiger Reserve',
    bio: 'A wildlife biologist and zoologist, Dr. Griffith\'s doctoral research explored the diversity and ecology of the lesser-known small mammals of Tiruchirappalli. He has taken part in biodiversity surveys across India\'s protected areas and trained in Ecology of the Indian Tropics at the Au Sable Institute, Michigan, USA. He leads birdwatching programmes, mammal tracking sessions, and wildlife interpretation walks that combine scientific accuracy with hands-on field craft. His belief: every species, large or small, common or elusive, plays a vital role in healthy ecosystems — and conservation begins with curiosity.'
  }
];

export const species: Species[] = [
  {
    id: 'bengal-tiger',
    commonName: 'Bengal Tiger',
    scientificName: 'Panthera tigris tigris',
    category: 'Mammals',
    endemic: false,
    threatened: true,
    habitat: 'Forests, grasslands, mangroves, and riverine habitats',
    fieldNote: 'Best observed through patient safari drives, track reading, and listening for alarm calls.'
  },
  {
    id: 'asiatic-lion',
    commonName: 'Asiatic Lion',
    scientificName: 'Panthera leo persica',
    category: 'Mammals',
    endemic: true,
    threatened: true,
    habitat: 'Dry deciduous forest and scrubland',
    fieldNote: 'A rare Indian big cat best seen with regulated local guiding in its native landscape.'
  },
  {
    id: 'snow-leopard',
    commonName: 'Snow Leopard',
    scientificName: 'Panthera uncia',
    category: 'Mammals',
    endemic: false,
    threatened: true,
    habitat: 'High Himalayan cold desert and rocky slopes',
    fieldNote: 'Winter tracking requires patience, optics, local spotters, and a tolerance for cold conditions.'
  },
  {
    id: 'great-hornbill',
    commonName: 'Great Hornbill',
    scientificName: 'Buceros bicornis',
    category: 'Birds',
    endemic: false,
    threatened: true,
    habitat: 'Mature evergreen and moist forests',
    fieldNote: 'Listen for heavy wingbeats and watch fruiting trees in the early morning.'
  },
  {
    id: 'himalayan-monal',
    commonName: 'Himalayan Monal',
    scientificName: 'Lophophorus impejanus',
    category: 'Birds',
    endemic: false,
    threatened: false,
    habitat: 'Himalayan forests and alpine edges',
    fieldNote: 'Dawn and quiet ridge walks give the best chance of seeing this iridescent pheasant.'
  },
  {
    id: 'king-cobra',
    commonName: 'King Cobra',
    scientificName: 'Ophiophagus hannah',
    category: 'Reptiles',
    endemic: false,
    threatened: true,
    habitat: 'Rainforests, plantations, and forest edges',
    fieldNote: 'Observed only from a safe distance with expert local guidance and no disturbance.'
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
    id: 'southern-birdwing',
    commonName: 'Southern Birdwing',
    scientificName: 'Troides minos',
    category: 'Butterflies',
    endemic: true,
    threatened: false,
    habitat: 'Forest edges and clearings',
    fieldNote: "India's largest butterfly, often seen flying high along forest edges."
  },
  {
    id: 'red-panda',
    commonName: 'Red Panda',
    scientificName: 'Ailurus fulgens',
    category: 'Mammals',
    endemic: false,
    threatened: true,
    habitat: 'Eastern Himalayan temperate forest and bamboo understory',
    fieldNote: 'Requires quiet walking, local trackers, and careful timing in high-elevation forest.'
  },
  {
    id: 'rhododendron',
    commonName: 'Rhododendron',
    scientificName: 'Rhododendron spp.',
    category: 'Flora',
    endemic: false,
    threatened: false,
    habitat: 'Himalayan and highland forests',
    fieldNote: 'Spectacular blooms in spring attract birds, insects, and photographers.'
  }
];

export const faqs = [
  {
    question: 'Do you cover wildlife regions across India?',
    answer: 'Yes. Wildora Expeditions can plan guided wildlife experiences across India, including central Indian tiger reserves, Himalayan forests, deserts, wetlands, mangroves, rainforests, grasslands, and coastal habitats.'
  },
  {
    question: 'What is the best time to visit India for wildlife?',
    answer: 'The best time depends on the region and target species. October to March is comfortable for many birding, wetland, desert, and family trips. March to June is strong for many tiger safaris. June to September is ideal for monsoon rainforest life, frogs, reptiles, waterfalls, and lush landscapes.'
  },
  {
    question: 'Do I need previous wildlife knowledge?',
    answer: 'No. Most tours are beginner-friendly. Our guides help you see, identify, and enjoy wildlife at your level. Experienced naturalists can still request target species, specialist routes, and deeper interpretation.'
  },
  {
    question: 'How academic are the tours?',
    answer: 'The tours are experience-led, not lecture-led. Guides explain what you are seeing in the field, but the emphasis is on wildlife watching, photography, local landscapes, food, rest, and comfortable travel.'
  },
  {
    question: 'What level of fitness is required?',
    answer: 'It depends on the region. Many safari and wetland trips are easy. Rainforest, desert, and Himalayan routes may involve more walking or weather exposure. We mark difficulty clearly and can tailor the pace.'
  },
  {
    question: 'Can you provide guided day tours?',
    answer: 'Yes. Where local logistics allow, we offer half-day and full-day guiding for birds, butterflies, safaris, forest trails, wetlands, night walks, and target species.'
  },
  {
    question: 'Can you customize a programme for our group?',
    answer: 'Yes. We design custom programmes for families, private groups, international visitors, photographers, companies, schools, universities, and special-interest clubs. Share your dates, region, group size, comfort level, and target interests.'
  },
  {
    question: 'Do you cater to international visitors?',
    answer: 'Yes. Many guests travel from the UK, Europe, North America, Australia, and elsewhere. We can help plan around major gateways such as Delhi, Mumbai, Bengaluru, Kochi, Chennai, Kolkata, Jaipur, Guwahati, and Nagpur, depending on the route.'
  },
  {
    question: 'Are the trips safe? What about snakes and large mammals?',
    answer: 'Safety is central to every route. Our guides explain safe wildlife observation, maintain distance from animals, follow park rules, and avoid risky handling or disturbance. Wildlife encounters are planned with local expertise and appropriate caution.'
  },
  {
    question: 'What accommodation can I expect?',
    answer: 'We use comfortable wildlife lodges, eco-lodges, guesthouses, camps, and nature-friendly stays with clean rooms and practical amenities. Locations are chosen for comfort, field access, and support for local communities.'
  },
  {
    question: 'Are meals provided? Can you accommodate dietary restrictions?',
    answer: 'All multi-day trips include meals, usually fresh and locally sourced with vegetarian-friendly options. We can accommodate most dietary restrictions with advance notice.'
  },
  {
    question: 'How do I book a trip?',
    answer: 'Use the contact form, email, or WhatsApp with your preferred dates, group size, target region, interests, and comfort level. We will respond with availability, a suggested route, and booking instructions.'
  }
];

export const services: Service[] = [
  {
    id: 'guided-day-tours',
    title: 'Guided Day Tours',
    tagline: 'Birding, safaris, trails, and wetlands',
    description: 'Half-day and full-day guiding for guests already in a region, with routes matched to the season, local wildlife, and your pace.',
    forWho: 'Travellers, resort guests, families',
    icon: 'guide'
  },
  {
    id: 'private-custom',
    title: 'Private & Tailor-Made Tours',
    tagline: 'Your dates, your region, your comfort level',
    description: 'A bespoke India itinerary built around your interests, fitness, wish-list species, preferred accommodation, and available travel window.',
    forWho: 'Couples, friends, solo travellers',
    icon: 'map'
  },
  {
    id: 'target-species',
    title: 'Target Species Routes',
    tagline: 'Wildlife with a clear purpose',
    description: 'Plan routes for tigers, leopards, elephants, hornbills, pheasants, red pandas, snow leopards, frogs, butterflies, and other India wildlife highlights.',
    forWho: 'Birders, naturalists, photographers',
    icon: 'leaf'
  },
  {
    id: 'photography',
    title: 'Wildlife Photography Walks',
    tagline: 'Big cats, birds, macro, and fieldcraft',
    description: 'Patient field support for ethical photography of mammals, birds, frogs, butterflies, forest details, landscapes, and safari subjects.',
    forWho: 'Photographers of all levels',
    icon: 'camera'
  },
  {
    id: 'night-safari',
    title: 'Night Walks & Spotlighting',
    tagline: 'The wild after dark',
    description: 'Guided night sessions for frogs, geckos, owls, moths, civets, insects, and forest soundscapes, run only where conditions and rules allow.',
    forWho: 'Add-on for suitable routes',
    icon: 'moon'
  },
  {
    id: 'culture-landscape',
    title: 'Culture & Landscape Trails',
    tagline: 'People, places, and wild country',
    description: 'Add villages, tea, coffee, spice, desert, river, craft, coastal, or mountain experiences between wildlife sessions.',
    forWho: 'Families and slow travellers',
    icon: 'family'
  },
  {
    id: 'custom-groups',
    title: 'Custom Group Programmes',
    tagline: 'Made for your group',
    description: 'Flexible programmes for private groups, clubs, companies, families, schools, universities, and international travel groups.',
    forWho: 'Groups of 6 or more',
    icon: 'groups'
  },
  {
    id: 'school-camps',
    title: 'School & University Options',
    tagline: 'Academic when you need it',
    description: 'Field courses, student camps, and curriculum-linked modules remain available on request, but they are built as custom programmes.',
    forWho: 'Schools and universities',
    icon: 'school'
  }
];

export const reviews: Review[] = [
  {
    name: 'Michael & Anne Petersen',
    country: 'Denmark',
    rating: 5,
    text: 'We wanted more than one park and Wildora built a route that made sense: forests, birds, big mammals, and enough rest between drives.',
    trip: 'Central India Big Cats & Forest Safari'
  },
  {
    name: 'Laura Bianchi',
    country: 'Italy',
    rating: 5,
    text: 'The monsoon rainforest nights were unforgettable. Safe, expertly led, and the photography guidance was worth the trip on its own.',
    trip: 'Monsoon Rainforest Nights & Endemics'
  },
  {
    name: 'James Carter',
    country: 'United States',
    rating: 5,
    text: 'Seamless from the first email. Clear routing, airport pickup, a realistic species list, and guides who knew exactly where to slow down.',
    trip: 'Custom India Wildlife Tour'
  },
  {
    name: 'Priya Sharma',
    country: 'India',
    rating: 5,
    text: 'Our family wanted nature without a classroom feel. The team balanced birds, mammals, local food, and downtime beautifully.',
    trip: 'Private Family Tour'
  },
  {
    name: 'Rajesh Menon',
    country: 'India',
    rating: 5,
    text: 'The small group size made all the difference. We could ask questions, take our time observing, and still feel like we were on holiday.',
    trip: 'Himalaya Birds & Mountain Wildlife'
  },
  {
    name: 'Dr. Sarah Williams',
    country: 'United Kingdom',
    rating: 5,
    text: 'A rich India wildlife experience without heavy lectures. The guide brought habitats, behaviour, and conservation stories alive in the field.',
    trip: 'Custom Naturalist Tour'
  }
];

export const trustSignals = [
  'Guided tours across India',
  'Forests, deserts, wetlands, mountains, coasts',
  'Target species by region and season',
  'Small groups, max 10-12',
  'International visitor planning',
  'Leisure-first nature holidays',
  'Custom programmes on request',
  'Ethical, low-impact fieldcraft'
];
