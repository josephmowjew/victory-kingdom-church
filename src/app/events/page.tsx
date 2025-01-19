import Image from 'next/image'

const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    description: "Join us for a time of worship, prayer, and teaching from God's Word.",
    image: "/events/worship.jpg",
    category: "Worship"
  },
  {
    id: 2,
    title: "Community Outreach",
    date: "Last Saturday of every month",
    time: "9:00 AM - 1:00 PM",
    description: "Serve our local community through various outreach programs and activities.",
    image: "/events/outreach.jpg",
    category: "Service"
  },
  {
    id: 3,
    title: "Youth Conference 2024",
    date: "July 15-17, 2024",
    time: "Various Times",
    description: "A three-day conference focused on empowering young people in their faith journey.",
    image: "/events/youth.jpg",
    category: "Youth"
  },
  {
    id: 4,
    title: "Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    description: "Deep dive into God's Word with interactive teaching and discussion.",
    image: "/events/bible-study.jpg",
    category: "Study"
  },
  {
    id: 5,
    title: "Prayer Night",
    date: "First Friday of every month",
    time: "7:00 PM - 9:00 PM",
    description: "A special evening dedicated to prayer and spiritual renewal.",
    image: "/events/prayer.jpg",
    category: "Prayer"
  },
  {
    id: 6,
    title: "Family Fun Day",
    date: "August 20, 2024",
    time: "11:00 AM - 4:00 PM",
    description: "A day of fellowship, games, and activities for the whole family.",
    image: "/events/family.jpg",
    category: "Fellowship"
  }
]

const categories = ["All", "Worship", "Service", "Youth", "Study", "Prayer", "Fellowship"]

export default function EventsPage() {
  return (
    <div className="py-16">
      {/* Events Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Church Events</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Join us for worship, fellowship, and spiritual growth through our various church events and activities.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <div className="text-gray-600 mb-4">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Section */}
      <div className="mt-24 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">View Our Calendar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Stay up to date with all our events and activities by subscribing to our church calendar.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Subscribe to Calendar
          </button>
        </div>
      </div>

      {/* Event Registration */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
        <p className="text-gray-600 mb-8">
          Contact our events team for more details about any of our events or to discuss hosting your own event.
        </p>
        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
          Contact Events Team
        </button>
      </div>
    </div>
  )
} 