import Image from 'next/image'

export default function LeadershipPage() {
  return (
    <div>
      {/* Leadership Header */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Our Leadership</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated team that guides our church community with wisdom, compassion, and unwavering faith.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/80 to-white/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title with Decoration */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">Meet Our Team</h2>
              <div className="h-1 w-40 bg-gradient-to-r from-yellow-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pastor John Card */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <Image
                    src="/leadership/pastor-john.jpg"
                    alt="Apostle Oscar HoffMeester"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center font-heading">Apostle Oscar HoffMeester</h3>
                <p className="text-blue-600 text-lg mb-4 text-center font-medium">Senior Pastor</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  With over 20 years of ministry experience, Apostle Oscar leads our congregation with wisdom, compassion, and a deep commitment to God&apos;s Word.
                </p>
              </div>
            </div>

            {/* Sarah Johnson Card */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <Image
                    src="/leadership/sarah.jpg"
                    alt="PastorDaphne HoffMeester"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center font-heading">Pastor Daphne HoffMeester</h3>
                <p className="text-purple-600 text-lg mb-4 text-center font-medium">Worship Director</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  Sarah brings a passion for worship and musical excellence, leading our congregation in authentic praise and worship experiences.
                </p>
              </div>
            </div>

            {/* Michael Chen Card */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <Image
                    src="/leadership/michael.jpg"
                    alt="Michael Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center font-heading">Michael Chen</h3>
                <p className="text-yellow-600 text-lg mb-4 text-center font-medium">Youth Pastor</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  Michael leads our youth ministry with energy and vision, helping young people discover their identity in Christ and develop strong foundations of faith.
                </p>
              </div>
            </div>

            {/* Rachel Thompson Card */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <Image
                    src="/leadership/rachel.jpg"
                    alt="Rachel Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center font-heading">Rachel Thompson</h3>
                <p className="text-green-600 text-lg mb-4 text-center font-medium">Children&apos;s Ministry Director</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  Rachel brings creativity and enthusiasm to our children&apos;s ministry, making Bible learning fun and engaging for our youngest members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our leadership team and become part of our growing church family.
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
} 