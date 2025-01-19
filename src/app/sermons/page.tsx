import Image from 'next/image'

const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    date: "March 17, 2024",
    speaker: "Pastor John Smith",
    scripture: "Hebrews 11:1-6",
    description: "Exploring what it means to live by faith in our daily lives.",
    image: "/sermons/faith.jpg",
    duration: "45 minutes",
    series: "Faith Foundations"
  },
  {
    id: 2,
    title: "The Power of Prayer",
    date: "March 10, 2024",
    speaker: "Pastor John Smith",
    scripture: "James 5:13-18",
    description: "Understanding the transformative power of prayer in our spiritual journey.",
    image: "/sermons/prayer.jpg",
    duration: "40 minutes",
    series: "Prayer Life"
  },
  {
    id: 3,
    title: "Love Your Neighbor",
    date: "March 3, 2024",
    speaker: "Pastor Michael Williams",
    scripture: "Matthew 22:36-40",
    description: "Practical ways to show God's love to those around us.",
    image: "/sermons/love.jpg",
    duration: "42 minutes",
    series: "Living Like Jesus"
  }
]

const series = [
  "All Series",
  "Faith Foundations",
  "Prayer Life",
  "Living Like Jesus",
  "Family Matters",
  "Spiritual Growth"
]

export default function SermonsPage() {
  return (
    <div className="py-16">
      {/* Sermons Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Sermons</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Explore our collection of messages that will encourage, challenge, and inspire your faith journey.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search */}
          <div className="w-full md:w-96">
            <input
              type="text"
              placeholder="Search sermons..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Series Filter */}
          <select className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            {series.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Latest Sermon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold mb-8">Latest Message</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={sermons[0].image}
                alt={sermons[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="text-blue-600 font-medium mb-2">{sermons[0].series}</div>
              <h3 className="text-2xl font-bold mb-4">{sermons[0].title}</h3>
              <p className="text-gray-600 mb-4">{sermons[0].description}</p>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>Speaker: {sermons[0].speaker}</p>
                <p>Scripture: {sermons[0].scripture}</p>
                <p>Duration: {sermons[0].duration}</p>
                <p>Date: {sermons[0].date}</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sermons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Recent Messages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.slice(1).map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={sermon.image}
                  alt={sermon.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-blue-600 font-medium mb-2">{sermon.series}</div>
                <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                <p className="text-gray-600 mb-4">{sermon.description}</p>
                <div className="text-gray-600 text-sm space-y-1 mb-6">
                  <p>{sermon.speaker}</p>
                  <p>{sermon.scripture}</p>
                  <p>{sermon.date}</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sermon Archive */}
      <div className="mt-24 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Sermon Archive</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Access our complete library of past sermons, organized by series, speaker, and topic.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Browse Archive
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Never Miss a Message</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our podcast or YouTube channel to receive new sermons directly on your device.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
            YouTube Channel
          </button>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Podcast
          </button>
        </div>
      </div>
    </div>
  )
} 