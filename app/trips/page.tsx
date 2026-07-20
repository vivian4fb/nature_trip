import Link from 'next/link';
import type { Metadata } from 'next';
import { trips } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Guided Trips & Itineraries | Wildora Expeditions',
  description: 'Browse leisure-first guided India wildlife trips. Expert-led safaris, birding, rainforest, mountain, wetland, desert, photography and custom group tours.',
};

export default function TripsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#14432a] to-[#15803d] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Guided Trips & Itineraries</h1>
          <p className="text-xl text-gray-100">
            Leisure-paced wildlife holidays led by expert naturalists across India
          </p>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-56 bg-gradient-to-br from-[#15803d] to-[#14432a]"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#14432a]">{trip.title}</h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>

                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Duration:</strong> {trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span><strong>Difficulty:</strong> {trip.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span><strong>Season:</strong> {trip.season}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span><strong>Group:</strong> {trip.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {trip.focus.map((focus, idx) => (
                      <span key={idx} className="bg-[#15803d] text-white text-xs px-2 py-1 rounded">
                        {focus}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[#14432a]">{trip.price}</div>
                    {trip.priceUSD && <div className="text-xs text-gray-500">{trip.priceUSD}</div>}
                  </div>

                  <Link
                    href={`/trips/${trip.id}`}
                    className="block text-center bg-[#ea580c] text-white px-4 py-3 rounded hover:bg-[#c2410c] transition-colors font-semibold"
                  >
                    View Guided Itinerary
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trips CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#14432a]">Need a Custom Guided Tour?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We design private routes for families, international visitors, photographers, companies, schools, universities, and wildlife clubs. Tell us your dates, group size, target species, and comfort level.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#ea580c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c2410c] transition-colors"
          >
            Request Custom Programme
          </Link>
        </div>
      </section>
    </div>
  );
}
