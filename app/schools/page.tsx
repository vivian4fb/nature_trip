import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Schools & Universities | Western Ghats Nature Tours',
  description: 'Custom field courses and educational programs for schools and universities in the Western Ghats. Hands-on learning in tropical ecology and conservation.',
};

export default function SchoolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">For Schools & Universities</h1>
          <p className="text-xl text-gray-100">
            Transformative field courses in one of the world&apos;s biodiversity hotspots
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-6">
            We specialize in designing custom field courses for educational institutions. Our programs integrate seamlessly into curricula while providing students with hands-on experience that deepens their understanding of ecology, conservation, and biodiversity.
          </p>
          <p className="text-lg text-gray-700">
            Whether you&apos;re looking for a short study module, a semester program component, or an intensive field course, we work with you to create an educational experience that meets your specific learning objectives.
          </p>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#6b21a8]">Program Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#9333ea]">Short-Term Modules</h3>
              <p className="text-gray-700 mb-4">3-5 days</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Introduction to tropical ecology</li>
                <li>• Specific taxon focus (birds, herps, etc.)</li>
                <li>• Survey methodology training</li>
                <li>• Conservation case studies</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#9333ea]">Standard Field Courses</h3>
              <p className="text-gray-700 mb-4">1-2 weeks</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Comprehensive ecosystem study</li>
                <li>• Multiple habitat types</li>
                <li>• Research project component</li>
                <li>• Data collection and analysis</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#9333ea]">Extended Programs</h3>
              <p className="text-gray-700 mb-4">3-4 weeks</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• In-depth research projects</li>
                <li>• Advanced methodologies</li>
                <li>• Altitude and habitat gradients</li>
                <li>• Publication-quality data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#6b21a8]">Example Weekly Schedule</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#6b21a8] text-white">
                  <tr>
                    <th className="p-4">Time</th>
                    <th className="p-4">Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-semibold">06:00 - 09:00</td>
                    <td className="p-4">Morning field session (birds, mammals, habitat assessment)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">09:00 - 10:00</td>
                    <td className="p-4">Breakfast and data recording</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">10:00 - 13:00</td>
                    <td className="p-4">Lecture/workshop or continued field work</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">13:00 - 14:30</td>
                    <td className="p-4">Lunch and rest</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">14:30 - 17:30</td>
                    <td className="p-4">Afternoon field session or data analysis</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">17:30 - 19:00</td>
                    <td className="p-4">Dinner and free time</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">19:00 - 21:00</td>
                    <td className="p-4">Evening session (presentations, discussions, or night survey)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Schedule varies based on weather, student needs, and specific learning objectives
          </p>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#6b21a8]">Learning Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#9333ea]">Knowledge & Understanding</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Tropical forest ecology and ecosystem dynamics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Biodiversity patterns and endemism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Conservation biology principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Human-wildlife interactions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#9333ea]">Skills Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Field survey and sampling techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Species identification and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Data collection, management, and analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c084fc] font-bold">•</span>
                  <span>Scientific writing and presentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Logistics */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#6b21a8]">Safety & Risk Management</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Student safety is our highest priority. All our guides are trained in wilderness first aid, and we maintain comprehensive emergency protocols.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Safety Measures Include:</h3>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Pre-trip orientation on safety protocols</li>
                <li>• First aid kits and trained personnel</li>
                <li>• Emergency evacuation plans</li>
                <li>• Communication equipment</li>
                <li>• Partnerships with local medical facilities</li>
                <li>• Comprehensive insurance coverage</li>
                <li>• Regular safety briefings during trips</li>
              </ul>
            </div>
            <p>
              We provide detailed risk assessment documentation for institutional review and can work with your institution&apos;s safety requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Integration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-[#6b21a8]">Academic Integration</h2>
          <p className="text-gray-700 mb-6">
            Our programs can be tailored to integrate with various academic disciplines:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-[#9333ea] mb-2">Biology & Ecology</h3>
              <p className="text-sm text-gray-600">Biodiversity, evolution, ecosystem ecology</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-[#9333ea] mb-2">Environmental Science</h3>
              <p className="text-sm text-gray-600">Conservation, sustainability, climate change</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-[#9333ea] mb-2">Zoology</h3>
              <p className="text-sm text-gray-600">Animal behavior, taxonomy, ecology</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-[#9333ea] mb-2">Botany</h3>
              <p className="text-sm text-gray-600">Plant ecology, systematics, ethnobotany</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#6b21a8]">What Educators Say</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                &quot;The field course exceeded our expectations. Students gained practical skills they simply cannot learn in a classroom, and the experience sparked genuine passion for conservation in many of them.&quot;
              </p>
              <p className="text-sm font-semibold text-[#6b21a8]">
                — Dr. Michael Chen, Associate Professor of Biology
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                &quot;As an educator, I appreciated how the team adapted the program to our learning objectives while maintaining scientific rigor. The balance of structure and flexibility was perfect.&quot;
              </p>
              <p className="text-sm font-semibold text-[#6b21a8]">
                — Prof. Anita Desai, Department of Environmental Studies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#6b21a8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Field Course?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Contact us to discuss your educational objectives and receive a custom program proposal
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c084fc] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a855f7] transition-colors"
          >
            Request Academic Info Pack
          </Link>
        </div>
      </section>
    </div>
  );
}
