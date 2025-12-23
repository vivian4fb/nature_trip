import Link from 'next/link';
import { notFound } from 'next/navigation';
import { trips } from '@/lib/data';

export async function generateStaticParams() {
  return trips.map((trip) => ({
    id: trip.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return {
      title: 'Trip Not Found',
    };
  }

  return {
    title: `${trip.title} | Western Ghats Nature Tours`,
    description: trip.description,
  };
}

export default async function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{trip.title}</h1>
          <p className="text-xl text-gray-100">{trip.description}</p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#6b21a8]">At a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-700">Duration</div>
                <div className="text-gray-600">{trip.duration}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Best Season</div>
                <div className="text-gray-600">{trip.season}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Group Size</div>
                <div className="text-gray-600">{trip.groupSize}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Difficulty</div>
                <div className="text-gray-600">{trip.difficulty}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-semibold text-gray-700 mb-2">Focus Areas</div>
              <div className="flex flex-wrap gap-2">
                {trip.focus.map((focus, idx) => (
                  <span key={idx} className="bg-[#9333ea] text-white text-xs px-3 py-1 rounded">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-[#6b21a8]">Trip Highlights</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trip.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#6b21a8]">Detailed Itinerary</h2>
          <div className="space-y-6">
            {trip.itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-[#9333ea]">
                  Day {day.day}: {day.title}
                </h3>
                <p className="text-gray-700">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & What to Bring */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#6b21a8]">What&apos;s Included</h2>
              <ul className="space-y-2">
                {trip.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#6b21a8]">What to Bring</h2>
              <ul className="space-y-2">
                {trip.toBring.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-[#6b21a8]">Learning Outcomes</h2>
          <p className="text-gray-700 mb-4">By the end of this trip, you will be able to:</p>
          <ul className="space-y-2">
            {trip.learningOutcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Suitable For */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-[#6b21a8]">Who Is This Trip Suitable For?</h2>
          <div className="flex flex-wrap gap-3">
            {trip.suitableFor.map((audience, idx) => (
              <span key={idx} className="bg-[#9333ea] text-white px-4 py-2 rounded-full">
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-12 bg-[#6b21a8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <div className="text-4xl font-bold mb-6 text-[#c084fc]">{trip.price}</div>
          <p className="text-lg mb-8 text-gray-200">
            Secure your spot for this unforgettable learning experience in the Western Ghats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c084fc] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a855f7] transition-colors"
            >
              Book This Trip
            </Link>
            <Link
              href="/practical"
              className="bg-white text-[#6b21a8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
