import Link from 'next/link';
import { trips, experts } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Learn the Western Ghats from the Scientists Who Study It
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Educational nature trips in the Western Ghats led by PhD experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trips"
              className="bg-[#c084fc] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a855f7] transition-colors"
            >
              View Upcoming Trips
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#6b21a8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#c084fc] mb-2">25+</div>
              <div className="text-gray-700">Years of Field Tours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c084fc] mb-2">UNESCO</div>
              <div className="text-gray-700">Biodiversity Hotspot</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c084fc] mb-2">Endemic</div>
              <div className="text-gray-700">Species Focus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c084fc] mb-2">10-12</div>
              <div className="text-gray-700">Max Group Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6b21a8]">
            Why We&apos;re Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">PhD-Level Guides</h3>
              <p className="text-gray-600">
                Learn from researchers actively studying Western Ghats ecosystems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Endemic Species Focus</h3>
              <p className="text-gray-600">
                Discover species found nowhere else on Earth
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">
                Field-based education with real research techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethical Travel</h3>
              <p className="text-gray-600">
                Low-impact, conservation-focused tourism
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6b21a8]">
            Featured Trips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#9333ea] to-[#6b21a8]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#6b21a8]">{trip.title}</h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {trip.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {trip.difficulty}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {trip.focus.map((focus, idx) => (
                        <span key={idx} className="bg-[#9333ea] text-white text-xs px-2 py-1 rounded">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/trips/${trip.id}`}
                    className="block text-center bg-[#c084fc] text-white px-4 py-2 rounded hover:bg-[#a855f7] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/trips"
              className="inline-block text-[#6b21a8] font-semibold hover:text-[#9333ea] transition-colors"
            >
              View All Trips →
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6b21a8]">
            What You&apos;ll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#9333ea]">For Individuals</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identify key species and understand their ecological roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Develop field observation and documentation skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Understand ecosystem dynamics and biodiversity patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn about conservation challenges and solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect with like-minded nature enthusiasts</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#9333ea]">For Educational Groups</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hands-on field course aligned with academic objectives</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn research methodologies in tropical ecology</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data collection and analysis practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customizable curriculum to match learning goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#c084fc] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificate of completion for academic credit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6b21a8]">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert) => (
              <div key={expert.id} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#9333ea] to-[#6b21a8] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1 text-[#6b21a8]">{expert.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{expert.qualifications}</p>
                <p className="text-sm text-[#9333ea] font-medium mb-2">{expert.specialization}</p>
                <p className="text-xs text-gray-500">{expert.experience}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/experts"
              className="inline-block text-[#6b21a8] font-semibold hover:text-[#9333ea] transition-colors"
            >
              Learn More About Our Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6b21a8]">
            What Our Guests Say
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                &quot;This was not just a tour, but a true educational experience. The depth of knowledge our guide shared about endemic species was remarkable. I learned more in one week than I could have from months of reading.&quot;
              </p>
              <p className="text-sm font-semibold text-[#6b21a8]">— Dr. Sarah Williams, University Professor</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                &quot;The small group size made all the difference. We could ask questions, take our time observing wildlife, and really absorb the ecology of each habitat. Perfect for serious nature enthusiasts.&quot;
              </p>
              <p className="text-sm font-semibold text-[#6b21a8]">— Rajesh Menon, Birding Enthusiast</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                &quot;As a teacher, I appreciated the educational structure of the trip. My students returned with new skills, a deeper appreciation for biodiversity, and memories that will inspire their future studies.&quot;
              </p>
              <p className="text-sm font-semibold text-[#6b21a8]">— Priya Sharma, High School Teacher</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6b21a8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore the Western Ghats?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join us for an unforgettable learning experience in one of the world&apos;s most biodiverse regions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trips"
              className="bg-[#c084fc] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a855f7] transition-colors"
            >
              Browse All Trips
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#6b21a8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
