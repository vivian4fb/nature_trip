# Western Ghats Nature Tours Website

A high-converting, educational website for Western Ghats Nature Tours - specialists in PhD-level ecological education and endemic species tours in South India's biodiversity hotspot.

## 🌿 Features

- **Modern, Fast Framework**: Built with Next.js 14 and Tailwind CSS for optimal performance
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Rich Content**: 8 complete pages covering all aspects of the tours
- **Interactive Elements**: Filterable species gallery, FAQ accordion, contact forms
- **Educational Focus**: Content emphasizes conservation and scientific learning

## 📄 Pages

1. **Home** - Hero, stats, featured trips, learning outcomes, testimonials
2. **About Western Ghats** - Ecosystem info, forest types, biodiversity data
3. **Trips** - All trips overview with filtering
4. **Trip Details** - Individual trip pages with full itineraries
5. **Our Experts** - Team profiles and credentials
6. **Species Gallery** - Filterable gallery of Western Ghats species
7. **For Schools** - Academic programs and field courses
8. **Practical Info & FAQ** - Essential trip information
9. **Contact** - Booking form and contact details

## 🎨 Design

### Color Palette
- **Forest Green** (#1a4d2e) - Primary brand color
- **Fern Green** (#4f8a6b) - Secondary color
- **Earth Brown** (#8b6f47) - Accent
- **Sunrise Orange** (#e67e22) - CTA buttons
- **Bird Red** (#c0392b) - Highlights

### Typography
- Clean, readable fonts optimized for educational content
- Clear hierarchy with semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
cd western-ghats-tours
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
western-ghats-tours/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with nav/footer
│   ├── about/             # About page
│   ├── trips/             # Trips listing & detail pages
│   ├── experts/           # Experts page
│   ├── species/           # Species gallery
│   ├── schools/           # Schools & universities page
│   ├── practical/         # Practical info & FAQ
│   └── contact/           # Contact form
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer
├── lib/                   # Utilities and data
│   └── data.ts           # Trips, experts, species data
└── public/               # Static assets
```

## 🔧 Customization

### Adding New Trips

Edit `/lib/data.ts` and add to the `trips` array:

```typescript
{
  id: 'your-trip-slug',
  title: 'Trip Name',
  description: 'Brief description',
  // ... other fields
}
```

### Adding Species

Edit `/lib/data.ts` and add to the `species` array with appropriate category and endemic/threatened status.

### Modifying Colors

Edit `/app/globals.css` to change the color palette:

```css
:root {
  --forest-green: #1a4d2e;
  --fern-green: #4f8a6b;
  /* ... */
}
```

## 📝 Content Guidelines

When adding or editing content:

1. **Always emphasize education + conservation** over pure tourism
2. **Avoid hype language** - no "guaranteed sightings" or exaggerations
3. **Use inclusive, gender-neutral language**
4. **Keep paragraphs short** with clear headings for readability
5. **Use metric units** and Indian context (₹, km, °C)
6. **Make CTAs clear and specific** - "Request Itinerary" not "Click Here"

## 🌐 SEO

Each page includes:
- Descriptive title tags
- Meta descriptions
- Semantic HTML structure
- Clear heading hierarchy
- Alt text for images (when images are added)

Target keywords: western ghats nature tour, educational tour, endemic species, birding trip, herpetology, field course

## 📱 Performance

- Next.js automatic optimization
- Image optimization (Next.js Image component ready)
- Lazy loading
- Fast page transitions
- Minimal JavaScript bundle

## 🔄 Future Enhancements

Potential additions:
- [ ] Image gallery with real Western Ghats photos
- [ ] Blog for trip reports and natural history articles
- [ ] Online booking system integration
- [ ] Multi-language support
- [ ] Interactive maps
- [ ] Video content
- [ ] Species photo uploads
- [ ] Testimonial management system

## 📞 Support

For questions about the website or tours:
- Email: info@wghatstours.com
- Phone: +91 98765 43210
- WhatsApp: +91 98765 43210

## 📄 License

This website is built for Western Ghats Nature Tours. All content and design are proprietary.

---

**Built with ❤️ for nature education and conservation**
