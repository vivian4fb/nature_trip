import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#ca8a04] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Western Ghats Nature Tours</h3>
            <p className="text-gray-300 text-sm">
              Educational nature trips in the Western Ghats led by PhD experts. Specializing in endemic species and conservation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Western Ghats
                </Link>
              </li>
              <li>
                <Link href="/trips" className="text-gray-300 hover:text-white transition-colors">
                  Our Trips
                </Link>
              </li>
              <li>
                <Link href="/experts" className="text-gray-300 hover:text-white transition-colors">
                  Our Experts
                </Link>
              </li>
              <li>
                <Link href="/species" className="text-gray-300 hover:text-white transition-colors">
                  Species Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/schools" className="text-gray-300 hover:text-white transition-colors">
                  For Schools & Universities
                </Link>
              </li>
              <li>
                <Link href="/practical" className="text-gray-300 hover:text-white transition-colors">
                  Practical Info & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@wghatstours.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>WhatsApp: +91 98765 43210</li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#fcd34d] hover:text-[#fbbf24] font-medium">
                  Send us a message →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Western Ghats Nature Tours. All rights reserved.</p>
          <p className="mt-2">
            Committed to ethical wildlife tourism and conservation education.
          </p>
        </div>
      </div>
    </footer>
  );
}
