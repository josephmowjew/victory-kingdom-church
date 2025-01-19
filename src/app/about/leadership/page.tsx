import Image from 'next/image'

const leadershipTeam = [
  {
    name: "Pastor John Smith",
    role: "Senior Pastor",
    image: "/leadership/pastor-john.jpg",
    bio: "Pastor John has been leading our congregation for over 15 years with wisdom, compassion, and a deep love for God&apos;s Word."
  },
  {
    name: "Sarah Johnson",
    role: "Worship Director",
    image: "/leadership/sarah.jpg",
    bio: "Sarah leads our worship ministry with passion and dedication, helping our congregation experience God&apos;s presence through music."
  },
  {
    name: "Michael Williams",
    role: "Youth Pastor",
    image: "/leadership/michael.jpg",
    bio: "Pastor Michael has a heart for young people and works tirelessly to help them grow in their faith and develop strong Christian foundations."
  },
  {
    name: "Rachel Thompson",
    role: "Children&apos;s Ministry Director",
    image: "/leadership/rachel.jpg",
    bio: "Rachel brings creativity and enthusiasm to our children&apos;s ministry, making Bible learning fun and engaging for our youngest members."
  }
]

export default function LeadershipPage() {
  return (
    <div className="py-16">
      {/* Leadership Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Leadership Team</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Meet the dedicated servants who help guide our church community with wisdom, love, and commitment to God&apos;s purpose.
        </p>
      </div>

      {/* Leadership Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {leadershipTeam.map((leader) => (
            <div key={leader.name} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-full md:w-48 h-64 md:h-48">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{leader.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Service */}
      <div className="mt-24 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Ministry</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We believe every member has unique gifts to contribute to God&apos;s kingdom. Discover how you can serve in our church community.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Explore Ministry Opportunities
          </button>
        </div>
      </div>

      {/* Scripture Reference */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-xl italic text-gray-600 max-w-3xl mx-auto">
          &ldquo;And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.&rdquo;
        </blockquote>
        <p className="mt-4 text-gray-500">Ephesians 4:11-12</p>
      </div>
    </div>
  )
} 