export default function MissionPage() {
  return (
    <div className="py-16">
      {/* Mission Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          To spread the love of Christ, build a strong community of believers, and make a positive impact in our world through faith, service, and fellowship.
        </p>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Faith</h3>
              <p className="text-gray-600">
                We believe in nurturing a deep, personal relationship with God through prayer, worship, and study of His Word.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We foster meaningful relationships and support one another in our spiritual journey as one family in Christ.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <p className="text-gray-600">
                We are committed to serving our community and showing God&apos;s love through practical acts of kindness and support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
          <div className="bg-blue-600 text-white p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-xl text-center">
              To be a beacon of hope and transformation in our community, where people from all walks of life can experience God's love, discover their purpose, and grow in their faith journey.
            </p>
          </div>
        </div>
      </div>

      {/* Scripture Focus */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Foundation</h2>
          <blockquote className="text-xl italic text-gray-600 max-w-3xl mx-auto">
            &ldquo;Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.&rdquo;
          </blockquote>
          <p className="mt-4 text-gray-500">Matthew 28:19-20</p>
        </div>
      </div>
    </div>
  )
} 