import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Western Ghats | Western Ghats Nature Tours',
  description: 'Learn about the Western Ghats UNESCO biodiversity hotspot, its unique ecosystems, endemic species, and why it is one of the world\'s most important conservation areas.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a4d2e] to-[#4f8a6b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About the Western Ghats</h1>
          <p className="text-xl text-gray-100">
            A UNESCO World Heritage Site and one of the world&apos;s eight hottest biodiversity hotspots
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1a4d2e]">A Global Biodiversity Treasure</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The Western Ghats, also known as the Sahyadri Mountains, stretch along the western coast of India for approximately 1,600 km. This ancient mountain range is older than the Himalayas and harbors an extraordinary concentration of biodiversity.
            </p>
            <p>
              Designated as a UNESCO World Heritage Site in 2012, the Western Ghats are recognized as one of the world&apos;s eight &quot;hottest hotspots&quot; of biological diversity. The region&apos;s remarkable biodiversity is matched by its equally remarkable levels of endemism.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Endemism */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1a4d2e]">Understanding Endemism</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-[#e67e22]">
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Endemic species</span> are those found in a particular geographic area and nowhere else in the world. The Western Ghats are home to an exceptional number of endemic species across all major taxonomic groups.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e67e22]">77%</div>
                <div className="text-sm text-gray-600">Amphibians</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e67e22]">62%</div>
                <div className="text-sm text-gray-600">Reptiles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e67e22]">50%</div>
                <div className="text-sm text-gray-600">Fish</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e67e22]">27%</div>
                <div className="text-sm text-gray-600">Birds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forest Types */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a4d2e]">Forest Types & Ecosystems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Evergreen Forests</h3>
              <p className="text-gray-700">
                Found in areas with high rainfall, these dense forests remain green year-round. They host the highest diversity of trees, epiphytes, and forest-floor species. Canopy height can exceed 40 meters.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Shola Forests</h3>
              <p className="text-gray-700">
                Unique to the high-altitude Western Ghats, shola forests are stunted evergreen patches embedded within rolling grasslands. This mosaic ecosystem supports many endemic species specially adapted to montane conditions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Riparian Forests</h3>
              <p className="text-gray-700">
                Forest corridors along streams and rivers support specialized plant and animal communities. These areas are critical for amphibians and provide water sources for all wildlife during dry seasons.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Plantation Edges</h3>
              <p className="text-gray-700">
                While modified habitats, edges between plantations and natural forests create unique microclimates. These areas demonstrate how species adapt to human-altered landscapes and highlight conservation challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Taxa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a4d2e]">Key Taxa of the Western Ghats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Birds</h3>
              <p className="text-gray-700 text-sm mb-3">
                Over 500 bird species recorded, with 16 endemic species including the Malabar Trogon, Nilgiri Flycatcher, and Sri Lanka Frogmouth.
              </p>
              <p className="text-xs text-gray-600">
                Peak birding: October to March
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Mammals</h3>
              <p className="text-gray-700 text-sm mb-3">
                140 mammal species including the Asian Elephant, Tiger, Lion-tailed Macaque, and endemic Nilgiri Marten and Nilgiri Tahr.
              </p>
              <p className="text-xs text-gray-600">
                Often encountered: Primates, deer, small mammals
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Reptiles</h3>
              <p className="text-gray-700 text-sm mb-3">
                Over 260 reptile species with exceptional endemism. Includes numerous endemic snake species, geckos, and skinks.
              </p>
              <p className="text-xs text-gray-600">
                Best season: Year-round, peak during monsoon
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Amphibians</h3>
              <p className="text-gray-700 text-sm mb-3">
                Over 180 amphibian species with 77% endemism. Many new species still being discovered. Includes dancing frogs and gliding frogs.
              </p>
              <p className="text-xs text-gray-600">
                Best season: Monsoon (June to September)
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Butterflies</h3>
              <p className="text-gray-700 text-sm mb-3">
                Over 330 butterfly species including spectacular endemics like the Malabar Banded Peacock and Southern Birdwing.
              </p>
              <p className="text-xs text-gray-600">
                Best season: October to February
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#4f8a6b]">Flora</h3>
              <p className="text-gray-700 text-sm mb-3">
                Over 5,000 flowering plant species with high endemism. Includes ancient lineages, spectacular orchids, and economically important species.
              </p>
              <p className="text-xs text-gray-600">
                Flowering peaks vary by elevation and season
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasons and Climate */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a4d2e]">Seasons & Climate</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#4f8a6b] pl-6">
              <h3 className="text-xl font-semibold mb-2 text-[#1a4d2e]">Southwest Monsoon (June - September)</h3>
              <p className="text-gray-700">
                The Western Ghats receive exceptionally high rainfall during the monsoon, sometimes exceeding 6,000 mm annually. This is the peak breeding season for amphibians. Leeches are common, but the forest is at its most lush and alive.
              </p>
            </div>
            <div className="border-l-4 border-[#e67e22] pl-6">
              <h3 className="text-xl font-semibold mb-2 text-[#1a4d2e]">Post-Monsoon (October - January)</h3>
              <p className="text-gray-700">
                The best season for most wildlife observation. Weather is pleasant, forests are green, and birds are particularly active. Many flowers bloom during this period. Ideal for birding, butterfly watching, and general naturalist trips.
              </p>
            </div>
            <div className="border-l-4 border-[#4f8a6b] pl-6">
              <h3 className="text-xl font-semibold mb-2 text-[#1a4d2e]">Dry Season (February - May)</h3>
              <p className="text-gray-700">
                Dry conditions make wildlife more concentrated around water sources. Some species begin breeding. Higher elevations remain comfortable while lowlands can be hot. Good for photography and mammal observation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation */}
      <section className="py-16 bg-[#1a4d2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Conservation Importance</h2>
          <div className="prose prose-lg max-w-none text-gray-200">
            <p className="mb-4">
              Despite legal protection, the Western Ghats face significant threats from habitat loss, fragmentation, invasive species, and climate change. Only a fraction of the original forest cover remains.
            </p>
            <p className="mb-4">
              Our trips emphasize the importance of conservation while practicing ethical, low-impact tourism. A portion of trip fees supports local conservation initiatives, and we work closely with communities to ensure tourism benefits both people and wildlife.
            </p>
            <p>
              By choosing educational nature tourism, you contribute to demonstrating the economic value of protecting these irreplaceable ecosystems while learning how you can support conservation in your own communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
