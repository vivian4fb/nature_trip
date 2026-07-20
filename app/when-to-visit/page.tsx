import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'When to Visit India for Wildlife | Wildora Expeditions',
  description: 'A month-by-month guide to the best time to visit India for tiger safaris, birding, wetlands, deserts, Himalayan wildlife, rainforests, frogs, reptiles and butterflies.',
};

type Level = 3 | 2 | 1;
const rows: { month: string; safaris: Level; birds: Level; rainforests: Level; mountains: Level; note: string }[] = [
  { month: 'January', safaris: 2, birds: 3, rainforests: 1, mountains: 2, note: 'Excellent wetlands, desert birding, cool safaris, and lower Himalayan birding.' },
  { month: 'February', safaris: 2, birds: 3, rainforests: 1, mountains: 2, note: 'Still prime for birds; forests are comfortable and many routes are easy for families.' },
  { month: 'March', safaris: 3, birds: 2, rainforests: 2, mountains: 3, note: 'Tiger season strengthens; Himalayan spring begins; butterflies become active in many regions.' },
  { month: 'April', safaris: 3, birds: 2, rainforests: 2, mountains: 3, note: 'Strong big-cat viewing in dry forests and good Himalayan birding; heat rises in central India.' },
  { month: 'May', safaris: 3, birds: 1, rainforests: 2, mountains: 3, note: 'Hot but productive for many safaris; mountain and highland trips remain attractive.' },
  { month: 'June', safaris: 2, birds: 1, rainforests: 3, mountains: 2, note: 'Monsoon begins; rainforest frogs, reptiles, waterfalls, and green landscapes come alive.' },
  { month: 'July', safaris: 1, birds: 1, rainforests: 3, mountains: 1, note: 'Many major parks close or change access; specialist monsoon rainforest trips peak.' },
  { month: 'August', safaris: 1, birds: 1, rainforests: 3, mountains: 1, note: 'Best for frogs, reptiles, macro subjects, forest soundscapes, and lush monsoon routes.' },
  { month: 'September', safaris: 1, birds: 2, rainforests: 3, mountains: 2, note: 'Rains ease in many regions; herping remains strong and migration begins to build.' },
  { month: 'October', safaris: 2, birds: 3, rainforests: 2, mountains: 3, note: 'Many parks reopen; pleasant weather returns; strong month for mixed wildlife routes.' },
  { month: 'November', safaris: 2, birds: 3, rainforests: 2, mountains: 3, note: 'Excellent for birding, safaris, wetlands, deserts, and comfortable family travel.' },
  { month: 'December', safaris: 2, birds: 3, rainforests: 1, mountains: 2, note: 'Peak winter birding, cool safaris, desert landscapes, wetlands, and easy travel conditions.' },
];

function Cell({ level }: { level: Level }) {
  const map = {
    3: { c: 'bg-[#15803d] text-white', t: 'Prime' },
    2: { c: 'bg-[#bbf7d0] text-[#14432a]', t: 'Good' },
    1: { c: 'bg-gray-100 text-gray-400', t: 'Limited' },
  } as const;
  const m = map[level];
  return <span className={`inline-block w-full text-center text-xs font-semibold py-1.5 rounded ${m.c}`}>{m.t}</span>;
}

export default function WhenToVisitPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-canopy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 leaf-texture opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">When to Visit India for Wildlife</h1>
          <p className="text-xl text-green-50/90">
            India is not one season or one habitat. Tiger forests, wetlands, deserts, mountains, rainforests, and coasts each peak at different times.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { label: 'Safaris', title: 'Big Cats & Forests', window: 'October - June', body: 'Central and western forest safaris run strongest outside the heavy monsoon, with dry months often best for big-cat movement.' },
            { label: 'Birds', title: 'Birding & Wetlands', window: 'October - March', body: 'Winter brings migrants, comfortable weather, wetland spectacle, desert birds, raptors, cranes, and strong all-round birding.' },
            { label: 'Rainforest', title: 'Frogs & Monsoon Life', window: 'June - September', body: 'Rainforest routes peak during the monsoon for frogs, reptiles, insects, waterfalls, and lush forest atmosphere.' },
            { label: 'Mountains', title: 'Himalayan Wildlife', window: 'March - May / Oct - Nov', body: 'Spring and autumn are usually best for Himalayan birds, forest walks, mountain views, and comfortable travel.' },
          ].map((c) => (
            <div key={c.title} className="bg-white border border-gray-100 rounded-2xl p-6 card-lift text-center">
              <div className="text-xs font-bold uppercase tracking-wide text-[#ea580c] mb-3">{c.label}</div>
              <h2 className="text-xl font-bold text-[#14432a] mb-1">{c.title}</h2>
              <p className="text-[#ea580c] font-semibold text-sm mb-3">{c.window}</p>
              <p className="text-gray-600 text-sm">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-[#faf7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#14432a] mb-2 text-center">Month-by-Month India Wildlife Chart</h2>
          <p className="text-center text-gray-600 mb-8 text-sm">Indicative guide. Exact timing depends on park rules, rainfall, altitude, target species, and travel style.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#14432a] text-white text-sm">
                  <th className="text-left px-4 py-3 font-semibold">Month</th>
                  <th className="px-3 py-3 font-semibold">Safaris</th>
                  <th className="px-3 py-3 font-semibold">Birding</th>
                  <th className="px-3 py-3 font-semibold">Rainforests</th>
                  <th className="px-3 py-3 font-semibold">Mountains</th>
                  <th className="text-left px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.month} className={i % 2 ? 'bg-gray-50/50' : ''}>
                    <td className="px-4 py-3 font-semibold text-[#14432a] whitespace-nowrap">{r.month}</td>
                    <td className="px-3 py-3 w-24"><Cell level={r.safaris} /></td>
                    <td className="px-3 py-3 w-24"><Cell level={r.birds} /></td>
                    <td className="px-3 py-3 w-24"><Cell level={r.rainforests} /></td>
                    <td className="px-3 py-3 w-24"><Cell level={r.mountains} /></td>
                    <td className="px-4 py-3 text-sm text-gray-600">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-[#15803d] inline-block"></span> Prime</span>
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-[#bbf7d0] inline-block"></span> Good</span>
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-gray-100 border inline-block"></span> Limited</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#14432a] mb-4">Planning from abroad?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-[#ea580c] font-bold">-</span> International guests typically book 6-12 months ahead for safaris and specialist routes.</li>
              <li className="flex gap-3"><span className="text-[#ea580c] font-bold">-</span> We plan around major gateways such as Delhi, Mumbai, Bengaluru, Kochi, Chennai, Kolkata, Jaipur, Guwahati, and Nagpur.</li>
              <li className="flex gap-3"><span className="text-[#ea580c] font-bold">-</span> Tell us your target species, comfort level, and available dates. We&apos;ll recommend the right region and season.</li>
              <li className="flex gap-3"><span className="text-[#ea580c] font-bold">-</span> Weather honesty matters: tiger months can be hot, monsoon routes are wet, and high mountains need layers and patience.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#14432a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure where to go?</h2>
          <p className="text-green-50/90 mb-8">Send us your wish-list species, dates, budget range, and travel style. We&apos;ll suggest the right India wildlife route.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#ea580c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c2410c] transition-colors">
              Ask Our Experts
            </Link>
            <Link href="/trips" className="bg-white/10 border border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors">
              See All Trips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
