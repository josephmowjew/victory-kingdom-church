const beliefs = [
  {
    title: "The Bible",
    description: "We believe the Bible is God's Word, inspired by the Holy Spirit, and our ultimate authority for faith and practice.",
    scripture: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness. - 2 Timothy 3:16"
  },
  {
    title: "God",
    description: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, who created all things and by whom all things exist.",
    scripture: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. - Matthew 28:19"
  },
  {
    title: "Jesus Christ",
    description: "We believe in Jesus Christ, God's only Son, conceived by the Holy Spirit, born of the Virgin Mary, who died for our sins, rose from the dead, and ascended to heaven.",
    scripture: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16"
  },
  {
    title: "Salvation",
    description: "We believe salvation is a gift of God received through faith in Jesus Christ alone, not by works, so that no one can boast.",
    scripture: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God. - Ephesians 2:8"
  },
  {
    title: "The Holy Spirit",
    description: "We believe in the present ministry of the Holy Spirit, who lives in Christians, empowering them to live godly lives and serve the church with spiritual gifts.",
    scripture: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses. - Acts 1:8"
  },
  {
    title: "The Church",
    description: "We believe the church is the body of Christ, composed of all believers, with the mission to worship God, make disciples, and serve others.",
    scripture: "Now you are the body of Christ, and each one of you is a part of it. - 1 Corinthians 12:27"
  }
]

export default function BeliefsPage() {
  return (
    <div className="py-16">
      {/* Beliefs Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">What We Believe</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Our beliefs are rooted in Scripture and guide everything we do as a church community.
        </p>
      </div>

      {/* Beliefs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {beliefs.map((belief) => (
            <div key={belief.title} className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{belief.title}</h2>
              <p className="text-gray-600 mb-6">{belief.description}</p>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                {belief.scripture}
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Statement of Faith */}
      <div className="mt-24 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Statement of Faith</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These beliefs form the foundation of our faith and guide our worship, fellowship, and service. We welcome all who seek to learn more about God&apos;s love and truth.
          </p>
        </div>
      </div>

      {/* Call to Learn More */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-6">Want to Learn More?</h3>
        <p className="text-gray-600 mb-8">
          Join us for our Bible study sessions or speak with one of our pastors about any questions you may have.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Join Bible Study
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Contact a Pastor
          </button>
        </div>
      </div>
    </div>
  )
} 