'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { species, type Species } from '@/lib/data';

const categories = ['All', 'Birds', 'Mammals', 'Reptiles', 'Amphibians', 'Butterflies', 'Flora'];

export default function SpeciesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSpecies = selectedCategory === 'All'
    ? species
    : species.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#ca8a04] to-[#eab308] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Species We Focus On</h1>
          <p className="text-xl text-gray-100">
            Discover the incredible biodiversity of the Western Ghats
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#fcd34d] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Species Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecies.map((sp) => (
              <div key={sp.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#eab308] to-[#ca8a04]"></div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#eab308] text-white text-xs px-2 py-1 rounded">
                      {sp.category}
                    </span>
                    {sp.endemic && (
                      <span className="bg-[#fcd34d] text-white text-xs px-2 py-1 rounded">
                        Endemic
                      </span>
                    )}
                    {sp.threatened && (
                      <span className="bg-[#c0392b] text-white text-xs px-2 py-1 rounded">
                        Threatened
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-[#ca8a04]">{sp.commonName}</h3>
                  <p className="text-sm text-gray-600 italic mb-3">{sp.scientificName}</p>
                  <div className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Habitat:</span> {sp.habitat}
                  </div>
                  <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                    <span className="font-semibold">Field Note:</span> {sp.fieldNote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Endemic Species */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#ca8a04]">
            Why Endemic Species Matter
          </h2>
          <p className="text-gray-700 mb-4">
            Endemic species are found nowhere else on Earth, making them irreplaceable components of global biodiversity. The Western Ghats&apos; high levels of endemism reflect millions of years of isolated evolution in a stable tropical climate.
          </p>
          <p className="text-gray-700 mb-4">
            When endemic species are lost, they are lost forever—there are no populations elsewhere to recover from. This makes conservation of the Western Ghats not just a regional concern, but a global priority.
          </p>
          <p className="text-gray-700">
            On our trips, we emphasize the ecological roles these species play and the conservation challenges they face, helping you understand why protecting their habitats is so critical.
          </p>
        </div>
      </section>

      {/* Ethical Observation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#ca8a04]">
            Ethical Wildlife Observation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h3 className="font-semibold text-green-900 mb-2">We DO:</h3>
              <ul className="space-y-1 text-sm text-green-800">
                <li>• Maintain safe distances from wildlife</li>
                <li>• Use ethical photography practices</li>
                <li>• Teach identification by sight and sound</li>
                <li>• Respect animal behavior and habitats</li>
                <li>• Support local conservation efforts</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-4">
              <h3 className="font-semibold text-red-900 mb-2">We DON&apos;T:</h3>
              <ul className="space-y-1 text-sm text-red-800">
                <li>• Use bird call playback (audio luring)</li>
                <li>• Disturb nesting or breeding animals</li>
                <li>• Handle wildlife unnecessarily</li>
                <li>• Collect specimens or eggs</li>
                <li>• Trample vegetation for photos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#ca8a04] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">See These Species in the Wild</h2>
          <p className="text-lg mb-8 text-gray-200">
            Join our expert-led trips to observe and learn about Western Ghats biodiversity
          </p>
          <a
            href="/trips"
            className="inline-block bg-[#fcd34d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#fbbf24] transition-colors"
          >
            Browse Our Trips
          </a>
        </div>
      </section>
    </div>
  );
}
