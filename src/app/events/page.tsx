"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// ImageModal Component
const ImageModal = ({ isOpen, image, title, onClose }: { isOpen: boolean; image: string; title: string; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      </div>
    </div>
  );
};

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  image: string
  category: 'Worship' | 'Service' | 'Youth' | 'Study' | 'Prayer' | 'Fellowship'
}

const events: Event[] = [
  {
    id: 1,
    title: "Back to School Service",
    date: "January 12, 2024",
    time: "9:00 AM",
    description: "Join us for our special Back to School Service as we pray for and bless our students, teachers, and parents for the new academic year.",
    image: "/events/back-to-school-poster.jpg",
    category: "Service"
  },
  {
    id: 2,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    description: "Join us for a time of worship, prayer, and teaching from God's Word.",
    image: "/events/worship.jpg",
    category: "Worship"
  },
  {
    id: 3,
    title: "Community Outreach",
    date: "Last Saturday of every month",
    time: "9:00 AM - 1:00 PM",
    description: "Serve our local community through various outreach programs and activities.",
    image: "/events/outreach.jpg",
    category: "Service"
  },
  {
    id: 4,
    title: "Youth Conference 2024",
    date: "July 15-17, 2024",
    time: "Various Times",
    description: "A three-day conference focused on empowering young people in their faith journey.",
    image: "/events/youth.jpg",
    category: "Youth"
  },
  {
    id: 5,
    title: "Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    description: "Deep dive into God's Word with interactive teaching and discussion.",
    image: "/events/bible-study.jpg",
    category: "Study"
  },
  {
    id: 6,
    title: "Prayer Night",
    date: "First Friday of every month",
    time: "7:00 PM - 9:00 PM",
    description: "A special evening dedicated to prayer and spiritual renewal.",
    image: "/events/prayer.jpg",
    category: "Prayer"
  },
  {
    id: 7,
    title: "Family Fun Day",
    date: "August 20, 2024",
    time: "11:00 AM - 4:00 PM",
    description: "A day of fellowship, games, and activities for the whole family.",
    image: "/events/family.jpg",
    category: "Fellowship"
  }
]

const categories = ["All", "Worship", "Service", "Youth", "Study", "Prayer", "Fellowship"] as const

// Event type icons for placeholders
const eventIcons = {
  Worship: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Service: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Youth: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Study: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Prayer: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  ),
  Fellowship: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

// Placeholder background colors for each event type
const eventColors = {
  Worship: 'from-blue-100 to-blue-50',
  Service: 'from-yellow-100 to-yellow-50',
  Youth: 'from-purple-100 to-purple-50',
  Study: 'from-green-100 to-green-50',
  Prayer: 'from-red-100 to-red-50',
  Fellowship: 'from-orange-100 to-orange-50'
}

// Event card component with error handling for images and modal
const EventCard = ({ event }: { event: Event }) => {
  const [imageError, setImageError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
        <div 
          className="relative h-48 rounded-t-2xl overflow-hidden cursor-pointer"
          onClick={() => !imageError && setIsModalOpen(true)}
        >
          {!imageError ? (
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${eventColors[event.category]} flex items-center justify-center`}>
              <div className="text-center">
                <div className={`text-${event.category.toLowerCase()}-500 mb-2 flex justify-center`}>
                  {eventIcons[event.category]}
                </div>
                <span className="text-sm font-medium text-gray-600">Event Image</span>
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className={`px-4 py-1 bg-${event.category.toLowerCase()}-600 text-white text-sm font-medium rounded-full`}>
              {event.category}
            </span>
          </div>
          {!imageError && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform">
                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
            <svg className="w-5 h-5 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event.time}</span>
          </div>
          <p className="text-gray-600 mb-6">
            {event.description}
          </p>
          <Link 
            href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`} 
            className="inline-block w-full text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        image={event.image}
        title={event.title}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default function EventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Church Events</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join us for worship, fellowship, and spiritual growth through our various church events and activities.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/80 to-white/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
              All
            </button>
            {categories.slice(1).map((category) => (
              <button 
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Get Involved</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on these transformative events. Join our community and grow in your faith journey.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
} 