'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { faqs } from '@/lib/data';

export default function PracticalPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a4d2e] to-[#4f8a6b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Practical Info & FAQ</h1>
          <p className="text-xl text-gray-100">
            Everything you need to know to prepare for your trip
          </p>
        </div>
      </section>

      {/* Best Seasons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#1a4d2e]">Best Seasons to Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#4f8a6b]">Monsoon (Jun-Sep)</h3>
              <p className="text-sm text-gray-700 mb-3">
                Heavy rainfall, lush forests. Best for amphibians and experiencing the forest at its most alive. Be prepared for leeches and wet conditions.
              </p>
              <div className="text-xs text-gray-600">
                <strong>Best for:</strong> Herping, monsoon ecology
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-[#e67e22]">
              <div className="bg-[#e67e22] text-white text-xs px-2 py-1 rounded inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#4f8a6b]">Post-Monsoon (Oct-Jan)</h3>
              <p className="text-sm text-gray-700 mb-3">
                Pleasant weather, green forests, peak bird activity. Ideal conditions for most wildlife observation and photography.
              </p>
              <div className="text-xs text-gray-600">
                <strong>Best for:</strong> Birding, general naturalist trips
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#4f8a6b]">Dry Season (Feb-May)</h3>
              <p className="text-sm text-gray-700 mb-3">
                Drier conditions, wildlife concentrated near water. Higher elevations remain comfortable. Good visibility for mammals.
              </p>
              <div className="text-xs text-gray-600">
                <strong>Best for:</strong> Mammals, photography
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#1a4d2e]">Understanding Difficulty Levels</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-700">Easy</h3>
              <p className="text-gray-700">
                Gentle walks on established trails, typically 2-4 km per day. Minimal elevation gain. Suitable for all fitness levels including families with children.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-700">Moderate</h3>
              <p className="text-gray-700">
                Walks of 4-8 km per day on forest trails with some elevation changes. May involve uneven terrain. Requires basic fitness and ability to walk for several hours.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-700">Challenging</h3>
              <p className="text-gray-700">
                Longer distances (8-12 km) with significant elevation gain. Steep trails, potentially slippery conditions. Requires good physical fitness and stamina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Pack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#1a4d2e]">What to Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4f8a6b]">Essential Gear</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Sturdy walking shoes or boots</li>
                <li>✓ Rain jacket (waterproof, not just water-resistant)</li>
                <li>✓ Long pants and full-sleeve shirts</li>
                <li>✓ Warm layer for evenings/high altitudes</li>
                <li>✓ Hat and sunscreen</li>
                <li>✓ Insect repellent</li>
                <li>✓ Reusable water bottle</li>
                <li>✓ Headlamp with extra batteries</li>
                <li>✓ Personal medications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4f8a6b]">Recommended Items</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Binoculars (8x or 10x magnification)</li>
                <li>✓ Camera with telephoto lens</li>
                <li>✓ Field notebook and pen</li>
                <li>✓ Field guides (we provide, but personal copies useful)</li>
                <li>✓ Dry bags for electronics</li>
                <li>✓ Small backpack for day trips</li>
                <li>✓ Power bank for charging devices</li>
                <li>✓ Plastic bags for wet clothes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1a4d2e]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1a4d2e]">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#4f8a6b] transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1a4d2e]">Accommodation & Food</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Accommodation:</strong> We use comfortable eco-lodges and guesthouses with clean rooms, attached bathrooms (hot water available), and basic amenities. Accommodation emphasizes low environmental impact and community benefit. Rooms are typically twin-sharing; single occupancy may be available for a supplement.
            </p>
            <p>
              <strong>Meals:</strong> All meals are included and feature fresh, locally sourced vegetarian food. Meals are served family-style and provide an opportunity to discuss the day&apos;s observations. We can accommodate most dietary restrictions with advance notice (vegan, gluten-free, allergies).
            </p>
            <p>
              <strong>Water:</strong> Boiled/filtered drinking water is provided. We encourage using your own reusable bottle to minimize plastic waste.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4d2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-8 text-gray-200">
            We&apos;re here to help you prepare for your Western Ghats adventure
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#e67e22] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d35400] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
