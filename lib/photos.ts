export interface Photo {
  category: string;
  categoryLabel: string;
  slug: string;
  name: string;
  src: string;
  thumb: string;
  w: number;
  h: number;
}

export const photos: Photo[] = [
  { category: 'amphibians', categoryLabel: 'Amphibians', slug: 'common-indian-toad', name: "Common Indian Toad", src: '/photos/amphibians/common-indian-toad.webp', thumb: '/photos/amphibians/thumb/common-indian-toad.webp', w: 1600, h: 1063 },
  { category: 'amphibians', categoryLabel: 'Amphibians', slug: 'green-frog', name: "Green Frog", src: '/photos/amphibians/green-frog.webp', thumb: '/photos/amphibians/thumb/green-frog.webp', w: 1600, h: 1200 },
  { category: 'amphibians', categoryLabel: 'Amphibians', slug: 'painted-frog', name: "Painted Frog", src: '/photos/amphibians/painted-frog.webp', thumb: '/photos/amphibians/thumb/painted-frog.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'bar-headed-goose', name: "Bar-headed Goose", src: '/photos/birds/bar-headed-goose.webp', thumb: '/photos/birds/thumb/bar-headed-goose.webp', w: 1600, h: 1063 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'waterbird-flock', name: "Waterbird Flock", src: '/photos/birds/waterbird-flock.webp', thumb: '/photos/birds/thumb/waterbird-flock.webp', w: 1600, h: 1071 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'birds-in-flight', name: "Birds in Flight", src: '/photos/birds/birds-in-flight.webp', thumb: '/photos/birds/thumb/birds-in-flight.webp', w: 1401, h: 560 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'blue-bearded-bee-eater', name: "Blue-bearded Bee-eater", src: '/photos/birds/blue-bearded-bee-eater.webp', thumb: '/photos/birds/thumb/blue-bearded-bee-eater.webp', w: 1600, h: 1063 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'blue-tailed-bee-eater', name: "Blue-tailed Bee-eater", src: '/photos/birds/blue-tailed-bee-eater.webp', thumb: '/photos/birds/thumb/blue-tailed-bee-eater.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'collared-dove', name: "Collared Dove", src: '/photos/birds/collared-dove.webp', thumb: '/photos/birds/thumb/collared-dove.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'dusky-eagle-owl', name: "Dusky Eagle-Owl", src: '/photos/birds/dusky-eagle-owl.webp', thumb: '/photos/birds/thumb/dusky-eagle-owl.webp', w: 1067, h: 1600 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'great-indian-bustard', name: "Great Indian Bustard", src: '/photos/birds/great-indian-bustard.webp', thumb: '/photos/birds/thumb/great-indian-bustard.webp', w: 1600, h: 1081 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'himalayan-whistling-thrush', name: "Himalayan Whistling-Thrush", src: '/photos/birds/himalayan-whistling-thrush.webp', thumb: '/photos/birds/thumb/himalayan-whistling-thrush.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'hoopoe', name: "Hoopoe", src: '/photos/birds/hoopoe.webp', thumb: '/photos/birds/thumb/hoopoe.webp', w: 1587, h: 1058 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'indian-roller', name: "Indian Roller", src: '/photos/birds/indian-roller.webp', thumb: '/photos/birds/thumb/indian-roller.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'white-throated-kingfisher', name: "White-throated Kingfisher", src: '/photos/birds/white-throated-kingfisher.webp', thumb: '/photos/birds/thumb/white-throated-kingfisher.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'legge-s-hawk-eagle', name: "Legge's Hawk-Eagle", src: '/photos/birds/legge-s-hawk-eagle.webp', thumb: '/photos/birds/thumb/legge-s-hawk-eagle.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'lesser-yellownape-woodpecker', name: "Lesser Yellownape Woodpecker", src: '/photos/birds/lesser-yellownape-woodpecker.webp', thumb: '/photos/birds/thumb/lesser-yellownape-woodpecker.webp', w: 1600, h: 1063 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'montagu-s-harrier', name: "Montagu's Harrier", src: '/photos/birds/montagu-s-harrier.webp', thumb: '/photos/birds/thumb/montagu-s-harrier.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'mottled-wood-owl', name: "Mottled Wood-Owl", src: '/photos/birds/mottled-wood-owl.webp', thumb: '/photos/birds/thumb/mottled-wood-owl.webp', w: 1067, h: 1600 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'osprey', name: "Osprey", src: '/photos/birds/osprey.webp', thumb: '/photos/birds/thumb/osprey.webp', w: 1600, h: 1067 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'indian-paradise-flycatcher', name: "Indian Paradise Flycatcher", src: '/photos/birds/indian-paradise-flycatcher.webp', thumb: '/photos/birds/thumb/indian-paradise-flycatcher.webp', w: 800, h: 651 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'indian-peafowl', name: "Indian Peafowl", src: '/photos/birds/indian-peafowl.webp', thumb: '/photos/birds/thumb/indian-peafowl.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'pied-cuckoo', name: "Pied Cuckoo", src: '/photos/birds/pied-cuckoo.webp', thumb: '/photos/birds/thumb/pied-cuckoo.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'plain-prinia', name: "Plain Prinia", src: '/photos/birds/plain-prinia.webp', thumb: '/photos/birds/thumb/plain-prinia.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'purple-heron', name: "Purple Heron", src: '/photos/birds/purple-heron.webp', thumb: '/photos/birds/thumb/purple-heron.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'red-whiskered-bulbul', name: "Red-whiskered Bulbul", src: '/photos/birds/red-whiskered-bulbul.webp', thumb: '/photos/birds/thumb/red-whiskered-bulbul.webp', w: 1600, h: 1200 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'indian-rock-eagle-owl', name: "Indian Rock Eagle-Owl", src: '/photos/birds/indian-rock-eagle-owl.webp', thumb: '/photos/birds/thumb/indian-rock-eagle-owl.webp', w: 1600, h: 1063 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'northern-shoveler', name: "Northern Shoveler", src: '/photos/birds/northern-shoveler.webp', thumb: '/photos/birds/thumb/northern-shoveler.webp', w: 1600, h: 1062 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'sri-lanka-bay-owl', name: "Sri Lanka Bay Owl", src: '/photos/birds/sri-lanka-bay-owl.webp', thumb: '/photos/birds/thumb/sri-lanka-bay-owl.webp', w: 1067, h: 1600 },
  { category: 'birds', categoryLabel: 'Birds', slug: 'woolly-necked-stork', name: "Woolly-necked Stork", src: '/photos/birds/woolly-necked-stork.webp', thumb: '/photos/birds/thumb/woolly-necked-stork.webp', w: 1600, h: 1065 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'baronet', name: "Baronet", src: '/photos/butterflies/baronet.webp', thumb: '/photos/butterflies/thumb/baronet.webp', w: 1600, h: 1200 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'common-map', name: "Common Map", src: '/photos/butterflies/common-map.webp', thumb: '/photos/butterflies/thumb/common-map.webp', w: 1600, h: 1065 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'crimson-tip', name: "Crimson Tip", src: '/photos/butterflies/crimson-tip.webp', thumb: '/photos/butterflies/thumb/crimson-tip.webp', w: 1600, h: 1200 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'large-salmon-arab', name: "Large Salmon Arab", src: '/photos/butterflies/large-salmon-arab.webp', thumb: '/photos/butterflies/thumb/large-salmon-arab.webp', w: 1600, h: 1142 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'common-leopard-butterfly', name: "Common Leopard Butterfly", src: '/photos/butterflies/common-leopard-butterfly.webp', thumb: '/photos/butterflies/thumb/common-leopard-butterfly.webp', w: 1600, h: 1143 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'southern-birdwing', name: "Southern Birdwing", src: '/photos/butterflies/southern-birdwing.webp', thumb: '/photos/butterflies/thumb/southern-birdwing.webp', w: 1280, h: 960 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'tawny-coster', name: "Tawny Coster", src: '/photos/butterflies/tawny-coster.webp', thumb: '/photos/butterflies/thumb/tawny-coster.webp', w: 1600, h: 1200 },
  { category: 'butterflies', categoryLabel: 'Butterflies', slug: 'yellow-pansy', name: "Yellow Pansy", src: '/photos/butterflies/yellow-pansy.webp', thumb: '/photos/butterflies/thumb/yellow-pansy.webp', w: 1464, h: 976 },
  { category: 'invertebrates', categoryLabel: 'Invertebrates', slug: 'man-faced-stink-bug', name: "Man-faced Stink Bug", src: '/photos/invertebrates/man-faced-stink-bug.webp', thumb: '/photos/invertebrates/thumb/man-faced-stink-bug.webp', w: 1600, h: 1200 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'black-faced-langur', name: "Black-faced Langur", src: '/photos/mammals/black-faced-langur.webp', thumb: '/photos/mammals/thumb/black-faced-langur.webp', w: 1600, h: 1200 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'blackbuck', name: "Blackbuck", src: '/photos/mammals/blackbuck.webp', thumb: '/photos/mammals/thumb/blackbuck.webp', w: 1600, h: 1065 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'chital-herd', name: "Chital Herd", src: '/photos/mammals/chital-herd.webp', thumb: '/photos/mammals/thumb/chital-herd.webp', w: 1600, h: 1063 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'asian-elephant', name: "Asian Elephant", src: '/photos/mammals/asian-elephant.webp', thumb: '/photos/mammals/thumb/asian-elephant.webp', w: 1600, h: 1200 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'asian-elephant-tusker', name: "Asian Elephant Tusker", src: '/photos/mammals/asian-elephant-tusker.webp', thumb: '/photos/mammals/thumb/asian-elephant-tusker.webp', w: 1600, h: 1063 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'nilgiri-tahr', name: "Nilgiri Tahr", src: '/photos/mammals/nilgiri-tahr.webp', thumb: '/photos/mammals/thumb/nilgiri-tahr.webp', w: 1600, h: 1040 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'indian-gaur', name: "Indian Gaur", src: '/photos/mammals/indian-gaur.webp', thumb: '/photos/mammals/thumb/indian-gaur.webp', w: 1600, h: 1200 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'indian-giant-squirrel', name: "Indian Giant Squirrel", src: '/photos/mammals/indian-giant-squirrel.webp', thumb: '/photos/mammals/thumb/indian-giant-squirrel.webp', w: 1600, h: 1067 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'indian-leopard', name: "Indian Leopard", src: '/photos/mammals/indian-leopard.webp', thumb: '/photos/mammals/thumb/indian-leopard.webp', w: 1600, h: 1200 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'lion-tailed-macaque', name: "Lion-tailed Macaque", src: '/photos/mammals/lion-tailed-macaque.webp', thumb: '/photos/mammals/thumb/lion-tailed-macaque.webp', w: 1067, h: 1600 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'asiatic-lion', name: "Asiatic Lion", src: '/photos/mammals/asiatic-lion.webp', thumb: '/photos/mammals/thumb/asiatic-lion.webp', w: 1600, h: 1067 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'one-horned-rhinoceros', name: "One-horned Rhinoceros", src: '/photos/mammals/one-horned-rhinoceros.webp', thumb: '/photos/mammals/thumb/one-horned-rhinoceros.webp', w: 1600, h: 1200 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'slender-loris', name: "Slender Loris", src: '/photos/mammals/slender-loris.webp', thumb: '/photos/mammals/thumb/slender-loris.webp', w: 1600, h: 1025 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'sloth-bear', name: "Sloth Bear", src: '/photos/mammals/sloth-bear.webp', thumb: '/photos/mammals/thumb/sloth-bear.webp', w: 720, h: 456 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'smooth-coated-otter', name: "Smooth-coated Otter", src: '/photos/mammals/smooth-coated-otter.webp', thumb: '/photos/mammals/thumb/smooth-coated-otter.webp', w: 1600, h: 1063 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'stripe-necked-mongoose', name: "Stripe-necked Mongoose", src: '/photos/mammals/stripe-necked-mongoose.webp', thumb: '/photos/mammals/thumb/stripe-necked-mongoose.webp', w: 1600, h: 1065 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'bengal-tiger-on-the-move', name: "Bengal Tiger on the Move", src: '/photos/mammals/bengal-tiger-on-the-move.webp', thumb: '/photos/mammals/thumb/bengal-tiger-on-the-move.webp', w: 1600, h: 1067 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'tiger-cub-resting', name: "Tiger Cub Resting", src: '/photos/mammals/tiger-cub-resting.webp', thumb: '/photos/mammals/thumb/tiger-cub-resting.webp', w: 1600, h: 1067 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'tiger-cub', name: "Tiger Cub", src: '/photos/mammals/tiger-cub.webp', thumb: '/photos/mammals/thumb/tiger-cub.webp', w: 1600, h: 1067 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'tigress-with-cubs', name: "Tigress with Cubs", src: '/photos/mammals/tigress-with-cubs.webp', thumb: '/photos/mammals/thumb/tigress-with-cubs.webp', w: 1600, h: 1067 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'bengal-tiger', name: "Bengal Tiger", src: '/photos/mammals/bengal-tiger.webp', thumb: '/photos/mammals/thumb/bengal-tiger.webp', w: 1063, h: 1600 },
  { category: 'mammals', categoryLabel: 'Mammals', slug: 'wild-buffalo', name: "Wild Buffalo", src: '/photos/mammals/wild-buffalo.webp', thumb: '/photos/mammals/thumb/wild-buffalo.webp', w: 1600, h: 1200 },
  { category: 'moths', categoryLabel: 'Moths', slug: 'atlas-moth', name: "Atlas Moth", src: '/photos/moths/atlas-moth.webp', thumb: '/photos/moths/thumb/atlas-moth.webp', w: 1600, h: 1067 },
  { category: 'moths', categoryLabel: 'Moths', slug: 'indian-moon-moth', name: "Indian Moon Moth", src: '/photos/moths/indian-moon-moth.webp', thumb: '/photos/moths/thumb/indian-moon-moth.webp', w: 1502, h: 1127 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'avicennia-mangrove', name: "Avicennia Mangrove", src: '/photos/plants-habitats/avicennia-mangrove.webp', thumb: '/photos/plants-habitats/thumb/avicennia-mangrove.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'bamboo-forest', name: "Bamboo Forest", src: '/photos/plants-habitats/bamboo-forest.webp', thumb: '/photos/plants-habitats/thumb/bamboo-forest.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'dry-deciduous-forest', name: "Dry Deciduous Forest", src: '/photos/plants-habitats/dry-deciduous-forest.webp', thumb: '/photos/plants-habitats/thumb/dry-deciduous-forest.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'indian-coral-tree', name: "Indian Coral Tree", src: '/photos/plants-habitats/indian-coral-tree.webp', thumb: '/photos/plants-habitats/thumb/indian-coral-tree.webp', w: 1280, h: 960 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'evergreen-forest', name: "Evergreen Forest", src: '/photos/plants-habitats/evergreen-forest.webp', thumb: '/photos/plants-habitats/thumb/evergreen-forest.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'flame-of-the-forest', name: "Flame of the Forest", src: '/photos/plants-habitats/flame-of-the-forest.webp', thumb: '/photos/plants-habitats/thumb/flame-of-the-forest.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'glory-lily', name: "Glory Lily", src: '/photos/plants-habitats/glory-lily.webp', thumb: '/photos/plants-habitats/thumb/glory-lily.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'grassland-shola-mosaic', name: "Grassland & Shola Mosaic", src: '/photos/plants-habitats/grassland-shola-mosaic.webp', thumb: '/photos/plants-habitats/thumb/grassland-shola-mosaic.webp', w: 1280, h: 960 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'mangrove-creek', name: "Mangrove Creek", src: '/photos/plants-habitats/mangrove-creek.webp', thumb: '/photos/plants-habitats/thumb/mangrove-creek.webp', w: 1280, h: 960 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'montane-shola-forest', name: "Montane Shola Forest", src: '/photos/plants-habitats/montane-shola-forest.webp', thumb: '/photos/plants-habitats/thumb/montane-shola-forest.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'palmyra-palms', name: "Palmyra Palms", src: '/photos/plants-habitats/palmyra-palms.webp', thumb: '/photos/plants-habitats/thumb/palmyra-palms.webp', w: 1600, h: 1200 },
  { category: 'plants-habitats', categoryLabel: 'Plants & Habitats', slug: 'nilgiri-rhododendron', name: "Nilgiri Rhododendron", src: '/photos/plants-habitats/nilgiri-rhododendron.webp', thumb: '/photos/plants-habitats/thumb/nilgiri-rhododendron.webp', w: 1600, h: 1071 },
  { category: 'reptiles', categoryLabel: 'Reptiles', slug: 'bronze-backed-tree-snake', name: "Bronze-backed Tree Snake", src: '/photos/reptiles/bronze-backed-tree-snake.webp', thumb: '/photos/reptiles/thumb/bronze-backed-tree-snake.webp', w: 1600, h: 1065 },
  { category: 'reptiles', categoryLabel: 'Reptiles', slug: 'indian-chameleon', name: "Indian Chameleon", src: '/photos/reptiles/indian-chameleon.webp', thumb: '/photos/reptiles/thumb/indian-chameleon.webp', w: 1067, h: 1600 },
  { category: 'reptiles', categoryLabel: 'Reptiles', slug: 'common-skink', name: "Common Skink", src: '/photos/reptiles/common-skink.webp', thumb: '/photos/reptiles/thumb/common-skink.webp', w: 1280, h: 960 },
  { category: 'reptiles', categoryLabel: 'Reptiles', slug: 'monitor-lizard', name: "Monitor Lizard", src: '/photos/reptiles/monitor-lizard.webp', thumb: '/photos/reptiles/thumb/monitor-lizard.webp', w: 1600, h: 1067 },
  { category: 'reptiles', categoryLabel: 'Reptiles', slug: 'indian-star-tortoise', name: "Indian Star Tortoise", src: '/photos/reptiles/indian-star-tortoise.webp', thumb: '/photos/reptiles/thumb/indian-star-tortoise.webp', w: 1280, h: 960 },
  { category: 'invertebrates', categoryLabel: 'Invertebrates', slug: 'giant-wood-spider', name: "Giant Wood Spider", src: '/photos/invertebrates/giant-wood-spider.webp', thumb: '/photos/invertebrates/thumb/giant-wood-spider.webp', w: 1600, h: 1200 },
  { category: 'invertebrates', categoryLabel: 'Invertebrates', slug: 'indian-red-scorpion', name: "Indian Red Scorpion", src: '/photos/invertebrates/indian-red-scorpion.webp', thumb: '/photos/invertebrates/thumb/indian-red-scorpion.webp', w: 1600, h: 1200 },
  { category: 'invertebrates', categoryLabel: 'Invertebrates', slug: 'shore-crab', name: "Shore Crab", src: '/photos/invertebrates/shore-crab.webp', thumb: '/photos/invertebrates/thumb/shore-crab.webp', w: 1600, h: 1071 },
  { category: 'invertebrates', categoryLabel: 'Invertebrates', slug: 'sea-star', name: "Sea Star", src: '/photos/invertebrates/sea-star.webp', thumb: '/photos/invertebrates/thumb/sea-star.webp', w: 1600, h: 1200 },
];


export const photoCategories = Array.from(
  new Map(photos.map((p) => [p.category, p.categoryLabel])).entries()
).map(([id, label]) => ({ id, label, count: photos.filter((p) => p.category === id).length }));

export function byCategory(category: string): Photo[] {
  return photos.filter((p) => p.category === category);
}

export function findPhoto(slug: string): Photo | undefined {
  return photos.find((p) => p.slug === slug);
}

/* GitHub Pages serves the site under /nature_trip; <img> src needs the prefix explicitly. */
export const BASE_PATH = '/nature_trip';
export const img = (path: string) => `${BASE_PATH}${path}`;

/* Representative photo for each trip card / trip page hero. */
export const tripPhotoSlugs: Record<string, string> = {
  'central-india-big-cats': 'tigress-with-cubs',
  'monsoon-rainforest-nights': 'green-frog',
  'himalaya-birds-mountain-wildlife': 'himalayan-whistling-thrush',
};
