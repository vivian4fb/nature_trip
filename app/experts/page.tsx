import Link from 'next/link';
import type { Metadata } from 'next';
import { experts } from '@/lib/data';
import { img } from '@/lib/photos';

export const metadata: Metadata = {
  title: 'Our Experts | Wildora Expeditions',
  description: 'Meet the naturalists and field experts who lead our guided wildlife tours across India.',
};

export default function ExpertsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#14432a] to-[#15803d] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Experts</h1>
          <p className="text-xl text-gray-100">
            Travel with naturalists and field experts who make India&apos;s wildlife easier to find, understand, and enjoy
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700">
            Our guides are not just logistics managers. They are naturalists, field experts, photographers, and educators who have spent years observing India&apos;s birds, mammals, reptiles, amphibians, butterflies, and habitats. They bring deep field knowledge to each tour while keeping the day relaxed, practical, and enjoyable.
          </p>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experts.map((expert, index) => (
              <div
                key={expert.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 bg-white rounded-lg shadow-md overflow-hidden p-8`}
              >
                <div className="md:w-1/3">
                  {expert.imageUrl ? (
                    <img
                      src={img(expert.imageUrl)}
                      alt={expert.name}
                      loading="lazy"
                      decoding="async"
                      className="w-48 h-48 rounded-full mx-auto object-cover shadow-md"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-[#15803d] to-[#14432a] rounded-full mx-auto"></div>
                  )}
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold mb-2 text-[#14432a]">{expert.name}</h3>
                  <p className="text-lg text-[#15803d] font-semibold mb-2">{expert.qualifications}</p>
                  <p className="text-md text-gray-600 mb-4">
                    <span className="font-semibold">Specialization:</span> {expert.specialization}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Experience:</span> {expert.experience}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{expert.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Expert Guides Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#14432a]">Why Expert Guides Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Knowledge</h3>
              <p className="text-gray-600">
                Decades of research experience translate to insights you won&apos;t find in guidebooks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Identification Skills</h3>
              <p className="text-gray-600">
                Expert ability to spot, identify, and explain the ecology of even the most cryptic species
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#15803d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guest-Friendly Interpretation</h3>
              <p className="text-gray-600">
                Clear field explanations for everyone from first-time visitors to advanced naturalists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#14432a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Travel with Expert Eyes</h2>
          <p className="text-lg mb-8 text-gray-200">
            Join an expert-led trip and notice more wildlife, more behaviour, and more of the landscape around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trips"
              className="bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c2410c] transition-colors"
            >
              View Our Trips
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#14432a] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
