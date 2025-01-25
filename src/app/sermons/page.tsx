"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Sermon {
  id: number
  title: string
  series: string
  speaker: string
  date: string
  duration: string
  scripture: string
  description: string
  image: string
  videoUrl: string
}

const sermons: Sermon[] = [
  {
    id: 1,
    title: "Walking in Faith",
    series: "Faith Foundations",
    speaker: "Pastor John Smith",
    date: "March 17, 2024",
    duration: "45 minutes",
    scripture: "Hebrews 11:1-6",
    description: "Exploring what it means to live by faith in our daily lives.",
    image: "/sermons/faith.jpg",
    videoUrl: "https://youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "The Power of Prayer",
    series: "Spiritual Disciplines",
    speaker: "Pastor Sarah Johnson",
    date: "March 10, 2024",
    duration: "40 minutes",
    scripture: "James 5:13-18",
    description: "Understanding the transformative power of prayer in our spiritual journey.",
    image: "/sermons/prayer.jpg",
    videoUrl: "https://youtube.com/watch?v=example2"
  },
  {
    id: 3,
    title: "Love Like Jesus",
    series: "Character of Christ",
    speaker: "Pastor John Smith",
    date: "March 3, 2024",
    duration: "42 minutes",
    scripture: "John 13:34-35",
    description: "Learning to embody Christ's love in our relationships and community.",
    image: "/sermons/love.jpg",
    videoUrl: "https://youtube.com/watch?v=example3"
  }
]

const SermonCard = ({ sermon }: { sermon: Sermon }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 rounded-t-2xl overflow-hidden">
        {!imageError ? (
          <Image
            src={sermon.image}
            alt={sermon.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-blue-500 mb-2 flex justify-center">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Sermon Thumbnail</span>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            {sermon.series}
          </span>
        </div>
        <Link 
          href={sermon.videoUrl} 
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform">
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span>{sermon.date}</span>
          <span className="mx-2">•</span>
          <span>{sermon.duration}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{sermon.title}</h3>
        <p className="text-gray-600 mb-4">{sermon.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{sermon.speaker}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>{sermon.scripture}</span>
          </div>
        </div>
        <Link 
          href={`/sermons/${sermon.id}`}
          className="inline-block w-full text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Watch Now
        </Link>
      </div>
    </div>
  )
}

export default function SermonsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Sermons</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of messages that will encourage, challenge, and inspire your faith journey.
          </p>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/80 to-white/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search sermons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sermons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons
              .filter(sermon => 
                sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sermon.series.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))
            }
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Subscribe to Our Channel</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Never miss a sermon. Subscribe to our YouTube channel for weekly messages and special events.
          </p>
          <a 
            href="https://youtube.com/@victorykingdomchurchsa" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  )
} 