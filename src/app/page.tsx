import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl font-bold mb-6">Welcome to Victory Kingdom Church</h1>
          <p className="text-xl mb-8 max-w-2xl">A place where faith grows, community thrives, and lives are transformed through the power of God&apos;s love.</p>
          <div className="space-x-4">
            <Link href="/about" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Join Us in Worship</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Sunday Service</h3>
              <p className="text-gray-600">10:00 AM - 12:00 PM</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Bible Study</h3>
              <p className="text-gray-600">Wednesday 7:00 PM</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Youth Service</h3>
              <p className="text-gray-600">Friday 6:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Community Outreach</h3>
                <p className="text-gray-600 mb-4">Join us as we serve our local community through various outreach programs.</p>
                <Link href="/events" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Prayer Night</h3>
                <p className="text-gray-600 mb-4">A special evening of prayer and worship for spiritual renewal.</p>
                <Link href="/events" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Youth Conference</h3>
                <p className="text-gray-600 mb-4">Empowering the next generation through worship and fellowship.</p>
                <Link href="/events" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
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
