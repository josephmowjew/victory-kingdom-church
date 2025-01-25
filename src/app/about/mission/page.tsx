import Link from 'next/link'

export default function MissionPage() {
  return (
    <div>
      {/* Mission Header */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            To spread the love of Christ, build a strong community of believers, and make a positive impact in our world through faith, service, and fellowship.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 opacity-[0.15]" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 top-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -right-16 top-40 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute left-48 bottom-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title with Decoration */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Our Core Values</h2>
              <div className="h-1 w-40 bg-gradient-to-r from-yellow-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Faith Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 opacity-90"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:translate-y-[-5px] transition-all duration-300 border border-gray-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="relative text-yellow-500 mb-6">
                    <svg className="w-16 h-16 mx-auto transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center font-heading">Faith</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We believe in nurturing a deep, personal relationship with God through prayer, worship, and study of His Word.
                </p>
              </div>
            </div>

            {/* Community Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 opacity-90"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:translate-y-[-5px] transition-all duration-300 border border-gray-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="relative text-blue-500 mb-6">
                    <svg className="w-16 h-16 mx-auto transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center font-heading">Community</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We foster meaningful relationships and support one another in our spiritual journey as one family in Christ.
                </p>
              </div>
            </div>

            {/* Service Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 opacity-90"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:translate-y-[-5px] transition-all duration-300 border border-gray-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="relative text-purple-500 mb-6">
                    <svg className="w-16 h-16 mx-auto transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center font-heading">Service</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We are committed to serving our community and showing God&apos;s love through practical acts of kindness and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center font-heading text-gray-900 mb-16">Our Vision</h2>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-2xl">
              <p className="text-2xl text-center leading-relaxed font-light">
                To be a beacon of hope and transformation in our community, where people from all walks of life can experience God&apos;s love, discover their purpose, and grow in their faith journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-12">Our Foundation</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl italic text-gray-700 mb-6">
              &ldquo;Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.&rdquo;
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">Matthew 28:19-20</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of something bigger than yourself. Join us in making a difference in our community and beyond.
          </p>
          <Link href="/contact" className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Get Involved Today
          </Link>
        </div>
      </section>
    </div>
  )
} 