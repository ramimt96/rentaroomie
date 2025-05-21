import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About RentRoomie
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Our mission is to make finding roommates and rental properties easy, safe, and enjoyable
            </p>
          </div>
          
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image 
                  className="h-48 w-full object-cover md:h-full md:w-64" 
                  src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="People enjoying coffee in a shared apartment" 
                  width={1050}
                  height={700}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">Our Story</div>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">Reimagining Roommate Matching</h2>
                <p className="mt-4 text-gray-600">
                  RentRoomie was founded in 2020 by a group of friends who experienced the challenges of finding compatible roommates and affordable housing firsthand. After numerous bad roommate experiences and frustrating apartment searches, they recognized a gap in the market for a comprehensive platform that addressed both finding the right people to live with and the right place to live.
                </p>
                <p className="mt-4 text-gray-600">
                  We believe that your living situation significantly impacts your happiness and well-being. That&apos;s why we&apos;ve created a platform that goes beyond basic roommate matching to consider lifestyle preferences, habits, and personalities when creating connections.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                We envision a world where finding a compatible roommate and a great place to live is no longer a source of stress and anxiety. We&apos;re working towards making the process as enjoyable as finding a new friend or partner.
              </p>
              <p className="text-gray-600">
                By combining advanced matching algorithms with a user-friendly interface, we&apos;re helping people across the country find their perfect living situations and form lasting connections with their roommates.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image 
                className="rounded-lg shadow-lg" 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Modern apartment living room" 
                width={1050}
                height={700}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Safety & Trust</h3>
                <p className="mt-2 text-gray-600">
                  We prioritize user safety through comprehensive verification processes for both roommates and properties. Building trust is at the core of our platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Inclusivity</h3>
                <p className="mt-2 text-gray-600">
                  We welcome users from all backgrounds and lifestyles. Our platform is designed to be inclusive and accessible to everyone looking for a roommate or rental property.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
                <p className="mt-2 text-gray-600">
                  We continuously improve our platform with innovative features and technology to make the roommate and property search process more efficient, accurate, and enjoyable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-purple-100 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Image 
                  className="mx-auto h-32 w-32 rounded-full" 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Team member" 
                  width={400}
                  height={400}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Sarah Johnson</h3>
                <p className="text-purple-600">CEO & Co-Founder</p>
              </div>
              <div className="text-center">
                <Image 
                  className="mx-auto h-32 w-32 rounded-full" 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Team member" 
                  width={400}
                  height={400}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Michael Chen</h3>
                <p className="text-purple-600">CTO & Co-Founder</p>
              </div>
              <div className="text-center">
                <Image 
                  className="mx-auto h-32 w-32 rounded-full" 
                  src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Team member" 
                  width={400}
                  height={400}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Jessica Patel</h3>
                <p className="text-purple-600">Head of Product</p>
              </div>
              <div className="text-center">
                <Image 
                  className="mx-auto h-32 w-32 rounded-full" 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Team member" 
                  width={400}
                  height={400}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">David Washington</h3>
                <p className="text-purple-600">Head of Operations</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/how-it-works" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
              Learn How It Works
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 