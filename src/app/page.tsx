import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/60 z-1"></div>
          <Image
            src="/images/city-poster.png"
            alt="City background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          
          
          
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading text-gray-900">Join Us in Worship</h2>
          <p className="text-gray-700 text-center mb-16 text-lg max-w-2xl mx-auto">
            Experience the power of community worship and grow in your faith journey with us
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-500 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative p-8 bg-white rounded-lg shadow-lg transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="text-yellow-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-center text-gray-900">Sunday Service</h3>
                <p className="text-gray-700 text-center text-lg font-medium">10:00 AM - 12:00 PM</p>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600 font-medium">Main Sanctuary</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative p-8 bg-white rounded-lg shadow-lg transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="text-blue-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-center text-gray-900">Bible Study</h3>
                <p className="text-gray-700 text-center text-lg font-medium">Wednesday 7:00 PM</p>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600 font-medium">Fellowship Hall</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative p-8 bg-white rounded-lg shadow-lg transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="text-purple-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-center text-gray-900">Youth Service</h3>
                <p className="text-gray-700 text-center text-lg font-medium">Friday 6:30 PM</p>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600 font-medium">Youth Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading text-gray-900">Upcoming Events</h2>
          <p className="text-gray-700 text-center mb-16 text-lg max-w-2xl mx-auto">
            Join us for these transformative events and be part of our vibrant community
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Outreach Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="h-48 bg-yellow-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors duration-300"></div>
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="p-6 relative z-20">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">Community</span>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">Community Outreach</h3>
                <p className="text-gray-700 mb-4 group-hover:text-white/90 transition-colors duration-300">Join us as we serve our local community through various outreach programs.</p>
                <Link href="/events" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium group-hover:text-white transition-colors duration-300">
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Prayer Night Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300"></div>
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6 relative z-20">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Worship</span>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">Prayer Night</h3>
                <p className="text-gray-700 mb-4 group-hover:text-white/90 transition-colors duration-300">A special evening of prayer and worship for spiritual renewal.</p>
                <Link href="/events" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:text-white transition-colors duration-300">
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Youth Conference Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="h-48 bg-purple-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300"></div>
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6 relative z-20">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">Youth</span>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">Youth Conference</h3>
                <p className="text-gray-700 mb-4 group-hover:text-white/90 transition-colors duration-300">Empowering the next generation through worship and fellowship.</p>
                <Link href="/events" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:text-white transition-colors duration-300">
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              View All Events
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the love, fellowship, and spiritual growth that comes with being part of our church family.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
            Get Connected
          </Link>
        </div>
      </section>
    </main>
  )
}
