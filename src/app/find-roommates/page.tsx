'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

type Roommate = {
  id: number
  name: string
  age: number
  occupation: string
  location: string
  bio: string
  interests: string[]
  imageSrc: string
}

const roommates: Roommate[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    age: 28,
    occupation: 'Software Engineer',
    location: 'Brooklyn, NY',
    bio: 'Easy-going tech professional who enjoys cooking and weekend hikes. I keep common areas clean and respect quiet hours.',
    interests: ['Hiking', 'Cooking', 'Tech', 'Movies'],
    imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    name: 'Sarah Kim',
    age: 26,
    occupation: 'Marketing Manager',
    location: 'Manhattan, NY',
    bio: 'Creative professional looking for a roommate who appreciates art and good conversations. I&apos;m tidy and sociable but also respect privacy.',
    interests: ['Art', 'Reading', 'Yoga', 'Travel'],
    imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    name: 'David Garcia',
    age: 30,
    occupation: 'Financial Analyst',
    location: 'Queens, NY',
    bio: 'Finance professional with regular 9-5 hours. I enjoy a quiet home environment during the week and exploring the city on weekends.',
    interests: ['Fitness', 'Finance', 'Photography', 'Dining Out'],
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  }
]

export default function FindRoommates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<string | null>(null)
  const [liked, setLiked] = useState<number[]>([])

  const currentRoommate = roommates[currentIndex]

  const handleSwipe = (dir: string) => {
    if (currentIndex < roommates.length - 1) {
      setDirection(dir)
      setTimeout(() => {
        if (dir === 'right') {
          setLiked([...liked, currentRoommate.id])
        }
        setCurrentIndex(currentIndex + 1)
        setDirection(null)
      }, 300)
    }
  }

  const getCardClass = () => {
    if (direction === 'left') return 'translate-x-[-100%] rotate-[-15deg] transition-transform duration-300'
    if (direction === 'right') return 'translate-x-[100%] rotate-[15deg] transition-transform duration-300'
    return ''
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Find Your Perfect Roommate
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Swipe right on potential roommates you&apos;d like to connect with
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            {currentIndex < roommates.length ? (
              <div className="relative w-full max-w-md">
                <div className={`bg-white rounded-xl shadow-xl overflow-hidden ${getCardClass()}`}>
                  <Image 
                    src={currentRoommate.imageSrc} 
                    alt={currentRoommate.name} 
                    className="w-full h-96 object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-gray-900">{currentRoommate.name}, {currentRoommate.age}</h2>
                      <span className="text-purple-600 font-medium">{currentRoommate.location}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{currentRoommate.occupation}</p>
                    
                    <p className="mt-4 text-gray-700">{currentRoommate.bio}</p>
                    
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">Interests</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {currentRoommate.interests.map((interest, i) => (
                          <span key={i} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    onClick={() => handleSwipe('left')}
                    className="bg-white text-red-500 border border-gray-300 rounded-full p-4 shadow-md hover:bg-gray-50"
                  >
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleSwipe('right')}
                    className="bg-white text-green-500 border border-gray-300 rounded-full p-4 shadow-md hover:bg-gray-50"
                  >
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-xl p-8 text-center">
                <svg className="mx-auto h-16 w-16 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">You&apos;ve viewed all potential roommates!</h2>
                <p className="mt-2 text-gray-600">
                  {liked.length > 0 
                    ? `You liked ${liked.length} roommate${liked.length > 1 ? 's' : ''}. We&apos;ll notify you when there&apos;s a match!` 
                    : 'Try adjusting your preferences to see more potential roommates.'}
                </p>
                <div className="mt-6">
                  <Link href="/" className="text-purple-600 font-medium hover:text-purple-700">
                    Return to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 